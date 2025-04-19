"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { fetchPropertyById, fetchSimilarProperties } from "@/services/propertyService"
import { formatCurrency, formatDate, formatAddress } from "@/utils/formatters"
import type { Property } from "@/types/property"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import PropertyCard from "@/components/properties/PropertyCard"
import {
  Heart,
  Share2,
  MapPin,
  Calendar,
  Home,
  Bed,
  Bath,
  Grid,
  Check,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface PropertyImage {
  url: string
}

export default function PropertyDetailPage() {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)
  const [magnifyPosition, setMagnifyPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Fetch property details
  const { data: propertyData, isLoading: isLoadingProperty } = useQuery({
    queryKey: ["property", id],
    queryFn: () => fetchPropertyById(id as string),
    enabled: !!id,
  })

  // Fetch similar properties
  const { data: similarData, isLoading: isLoadingSimilar } = useQuery({
    queryKey: ["similar-properties", id],
    queryFn: () => fetchSimilarProperties(id as string),
    enabled: !!id,
  })

  // Handle mouse move for magnifier
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setMagnifyPosition({ x, y })
  }

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setLightboxImageIndex(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  // Navigate lightbox images
  const navigateLightbox = (direction: "next" | "prev") => {
    if (!propertyData?.property?.images) return

    const imageCount = propertyData.property.images.length
    if (direction === "next") {
      setLightboxImageIndex((prev) => (prev + 1) % imageCount)
    } else {
      setLightboxImageIndex((prev) => (prev - 1 + imageCount) % imageCount)
    }
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return

      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next")
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen])

  // Format property status for display
  const statusDisplay: Record<string, string> = {
    "for-sale": "For Sale",
    "for-rent": "For Rent",
    approved: "Approved",
    sold: "Sold",
    rented: "Rented",
    pending: "Pending",
    rejected: "Rejected",
    revision_requested: "Revision Requested",
  }

  // Status badge color
  const statusColor: Record<string, string> = {
    "for-sale": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "for-rent": "bg-blue-100 text-blue-800 border-blue-200",
    approved: "bg-green-100 text-green-800 border-green-200",
    sold: "bg-purple-100 text-purple-800 border-purple-200",
    rented: "bg-indigo-100 text-indigo-800 border-indigo-200",
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    rejected: "bg-red-100 text-red-800 border-red-200",
    revision_requested: "bg-orange-100 text-orange-800 border-orange-200",
  }

  if (isLoadingProperty) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    )
  }

  if (!propertyData?.property) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link href="/properties" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Browse Properties
          </Link>
        </div>
      </div>
    )
  }

  const property = propertyData.property
  const similarProperties = similarData?.properties || []
  const hasImages = property.images && property.images.length > 0

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Property title and status */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-gray-600 flex items-center mt-2">
            <MapPin size={16} className="mr-1" />
            {formatAddress(property.address)}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mr-2 ${statusColor[property.listingStatus] || "bg-gray-100 text-gray-800"}`}
          >
            {statusDisplay[property.listingStatus] || property.listingStatus}
          </span>
          <div className="text-3xl font-bold text-[#2A623D] mt-2">
            {formatCurrency(property.price)}
            {property.listingStatus === "for-rent" && (
              <span className="text-sm font-normal text-muted-foreground">/mo</span>
            )}
          </div>
        </div>
      </div>

      {/* Main content area with images and sticky sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Images (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          {/* Main image with magnifier */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-4">
            <div
              ref={imageRef}
              className="relative aspect-[4/3] w-full cursor-zoom-in"
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={handleMouseMove}
              onClick={() => hasImages && openLightbox(activeImage)}
            >
              {hasImages ? (
                <>
                  <Image
                    src={property.images[activeImage]?.url || "/images/property-placeholder.jpg"}
                    alt={property.title}
                    fill
                    className="object-contain bg-gray-50"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  {showMagnifier && (
                    <div className="absolute top-2 right-2 bg-white/80 p-2 rounded-full z-10">
                      <ZoomIn size={20} className="text-gray-700" />
                    </div>
                  )}
                  {showMagnifier && (
                    <div
                      className="absolute pointer-events-none border-2 border-white shadow-lg rounded-lg overflow-hidden z-20"
                      style={{
                        width: "150px",
                        height: "150px",
                        top: `calc(${magnifyPosition.y}% - 75px)`,
                        left: `calc(${magnifyPosition.x}% - 75px)`,
                        backgroundImage: `url(${property.images[activeImage]?.url})`,
                        backgroundPosition: `${magnifyPosition.x}% ${magnifyPosition.y}%`,
                        backgroundSize: "300%",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <Home size={48} className="text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Thumbnails below main image */}
          {hasImages && property.images.length > 1 && (
            <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                {property.images.map((image: PropertyImage, index: number) => (
                  <div
                    key={index}
                    className={`cursor-pointer relative aspect-square rounded-lg overflow-hidden transition-all
                      ${activeImage === index ? "ring-2 ring-[#2A623D] scale-105" : "hover:opacity-90"}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={`${property.title} - image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Property details section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Bed size={24} className="text-[#2A623D] mb-2" />
                <span className="text-lg font-semibold">{property.bedrooms}</span>
                <span className="text-sm text-gray-500">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Bath size={24} className="text-[#2A623D] mb-2" />
                <span className="text-lg font-semibold">{property.bathrooms}</span>
                <span className="text-sm text-gray-500">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Grid size={24} className="text-[#2A623D] mb-2" />
                <span className="text-lg font-semibold">{property.area}</span>
                <span className="text-sm text-gray-500">{property.areaUnit}</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Calendar size={24} className="text-[#2A623D] mb-2" />
                <span className="text-lg font-semibold">{property.yearBuilt || "N/A"}</span>
                <span className="text-sm text-gray-500">Year Built</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>

            {/* Property features */}
            {property.features && property.features.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {property.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location</h2>
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
              <p className="text-gray-500">Map would be displayed here</p>
            </div>
          </div>
        </div>

        {/* Right column - Sticky sidebar (1/3 width on large screens) */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* Agent information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Listed By</h3>
              <div className="flex items-center mb-4">
                {property.owner.profileImage ? (
                  <Image
                    src={property.owner.profileImage || "/placeholder.svg"}
                    alt={`${property.owner.firstName} ${property.owner.lastName}`}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-[60px] h-[60px] bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">
                      {property.owner.firstName.charAt(0)}
                      {property.owner.lastName.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">
                    {property.owner.firstName} {property.owner.lastName}
                  </h4>
                  <p className="text-gray-600 text-sm">Agent</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-[#2A623D] to-[#1A365D] text-white py-2 px-6 rounded-xl hover:opacity-90 transition-all duration-300 shadow-md">
                  Contact Agent
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 flex items-center justify-center">
                  <Share2 size={16} className="mr-2" />
                  Share Property
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 flex items-center justify-center">
                  <Heart size={16} className="mr-2" />
                  Save Property
                </button>
              </div>
            </div>

            {/* Property details */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property ID</span>
                  <span className="font-medium text-gray-800">{property._id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium text-gray-800 capitalize">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Listing Status</span>
                  <span className="font-medium text-gray-800 capitalize">
                    {property.listingStatus.replace("-", " ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Admin Status</span>
                  <span className="font-medium text-gray-800 capitalize">
                    {property.listingStatus.replace("-", " ")}
                  </span>
                </div>
                {property.yearBuilt && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year Built</span>
                    <span className="font-medium text-gray-800">{property.yearBuilt}</span>
                  </div>
                )}
                {property.parkingSpaces !== undefined && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Parking Spaces</span>
                    <span className="font-medium text-gray-800">{property.parkingSpaces}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Listed On</span>
                  <span className="font-medium text-gray-800">{formatDate(property.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar properties */}
      {!isLoadingSimilar && similarProperties.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((property: Property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {isLightboxOpen && hasImages && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={() => navigateLightbox("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateLightbox("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image */}
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                <Image
                  src={property.images[lightboxImageIndex]?.url || "/placeholder.svg"}
                  alt={`${property.title} - full view`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Thumbnails */}
            {property.images.length > 1 && (
              <div className="flex justify-center items-center p-4 bg-black/50">
                <div className="flex space-x-2 overflow-x-auto max-w-full">
                  {property.images.map((image: PropertyImage, index: number) => (
                    <div
                      key={index}
                      className={`cursor-pointer h-16 w-24 relative rounded overflow-hidden transition-all
                        ${lightboxImageIndex === index ? "ring-2 ring-white scale-105" : "opacity-70 hover:opacity-100"}`}
                      onClick={() => setLightboxImageIndex(index)}
                    >
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
