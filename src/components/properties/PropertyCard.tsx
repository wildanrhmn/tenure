"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Heart, Bed, Bath, SquareIcon as SquareFeet, MapPin } from "lucide-react"
import { formatCurrency } from "@/utils/formatters"
import type { Property } from "@/types/property"
import { usePropertyActions } from "@/hooks/usePropertyActions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PropertyCardProps {
  property: Property
  view?: string
}

export default function PropertyCard({ property, view = "grid" }: PropertyCardProps) {
  const { saveProperty, unsaveProperty, isSaving, isUnsaving } = usePropertyActions()

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (property.isSaved) {
      unsaveProperty(property._id)
    } else {
      saveProperty(property._id)
    }
  }

  // Get primary image or use placeholder
  const primaryImage = property.images?.length ? property.images[0].url : "/images/property-placeholder.jpg"

  // Format property status for display
  const statusDisplay = {
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
  const statusColor = {
    "for-sale": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "for-rent": "bg-blue-100 text-blue-800 border-blue-200",
    approved: "bg-green-100 text-green-800 border-green-200",
    sold: "bg-purple-100 text-purple-800 border-purple-200",
    rented: "bg-indigo-100 text-indigo-800 border-indigo-200",
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    rejected: "bg-red-100 text-red-800 border-red-200",
    revision_requested: "bg-orange-100 text-orange-800 border-orange-200",
  }

  if (view === "list") {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-md py-0">
        <Link href={`/properties/${property._id}`} className="flex flex-col md:flex-row">
          <div className="relative h-48 md:h-[240px] md:w-1/3 md:min-w-[240px]">
            <Image
              src={primaryImage || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 240px"
              style={{aspectRatio: "4/3", objectFit: "cover"}}
            />
            <Badge
              variant="outline"
              className={cn(
                "absolute top-2 left-2 font-medium",
                statusColor[property.listingStatus] || "bg-gray-100 text-gray-800",
              )}
            >
              {statusDisplay[property.listingStatus] || property.listingStatus}
            </Badge>

            <Button
              onClick={handleSaveClick}
              className={`absolute top-2 right-2 h-8 w-8 rounded-full p-0 ${
                property.isSaved ? "bg-red-500 text-white hover:bg-red-600" : "bg-white/90 text-gray-600 hover:bg-white"
              }`}
              disabled={isSaving || isUnsaving}
              aria-label={property.isSaved ? "Unsave property" : "Save property"}
              size="icon"
              variant="ghost"
            >
              <Heart
                className={`h-4 w-4 ${property.isSaved ? "text-white" : "text-gray-500"}`}
                fill={property.isSaved ? "currentColor" : "none"}
              />
            </Button>
          </div>

          <CardContent className="p-4 md:p-6 flex-1">
            <div className="flex flex-col h-full">
              <div className="mb-auto">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                      {property.address.street}, {property.address.city}, {property.address.state}
                    </p>
                  </div>
                  <p className="text-xl font-bold text-emerald-600 whitespace-nowrap">
                    {formatCurrency(property.price)}
                    {property.listingStatus === "for-rent" && (
                      <span className="text-sm font-normal text-muted-foreground">/mo</span>
                    )}
                  </p>
                </div>

                <p className="text-muted-foreground mt-3 line-clamp-2">
                  {property.description ||
                    "Beautiful property in a prime location with amazing amenities and features."}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Bed className="h-4 w-4 mr-1.5" />
                  <span>
                    {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Bath className="h-4 w-4 mr-1.5" />
                  <span>
                    {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <SquareFeet className="h-4 w-4 mr-1.5" />
                  <span>
                    {property.area} {property.areaUnit}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden transition-all py-0">
      <Link href={`/properties/${property._id}`}>
        <div className="relative h-56 w-full">
          <Image
            src={primaryImage || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover w-full h-full brightness-[0.98]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: "cover", aspectRatio: "16/9"}}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <Badge
            variant="outline"
            className={cn(
              "absolute top-3 left-3 font-medium shadow-sm backdrop-blur-[2px]",
              statusColor[property.listingStatus] || "bg-gray-100 text-gray-800",
            )}
          >
            {statusDisplay[property.listingStatus] || property.listingStatus}
          </Badge>

          <Button
            onClick={handleSaveClick}
            className={`absolute top-3 right-3 h-9 w-9 rounded-full p-0 shadow-sm backdrop-blur-[2px] transition-all duration-200 ${
              property.isSaved ? "bg-red-500 text-white hover:bg-red-600" : "bg-white/90 text-gray-600 hover:bg-white hover:scale-110"
            }`}
            disabled={isSaving || isUnsaving}
            aria-label={property.isSaved ? "Unsave property" : "Save property"}
            size="icon"
            variant="ghost"
          >
            <Heart
              className={`h-4.5 w-4.5 ${property.isSaved ? "text-white" : "text-gray-500"}`}
              fill={property.isSaved ? "currentColor" : "none"}
            />
          </Button>
        </div>

        <CardContent className="p-5">
          <div className="flex justify-between items-start gap-3">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 hover:text-emerald-600 transition-colors">
              {property.title}
            </h3>
            <p className="text-lg font-bold text-emerald-600 whitespace-nowrap">
              {formatCurrency(property.price)}
              {property.listingStatus === "for-rent" && (
                <span className="text-xs font-normal text-muted-foreground">/mo</span>
              )}
            </p>
          </div>

          <p className="text-muted-foreground text-sm mt-2 flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1.5 text-emerald-500" />
            <span className="line-clamp-1 hover:text-emerald-600 transition-colors">
              {property.address.street}, {property.address.city}, {property.address.state}
            </span>
          </p>

          <div className="flex justify-between mt-5 text-sm bg-gray-50 rounded-xl p-3">
            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
              <Bed className="h-4 w-4 mr-1.5" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
              <Bath className="h-4 w-4 mr-1.5" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
              <SquareFeet className="h-4 w-4 mr-1.5" />
              <span>
                {property.area} {property.areaUnit}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
