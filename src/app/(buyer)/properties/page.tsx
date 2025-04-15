"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import Image from "next/image"
import { Building, Home, MapPin, SlidersHorizontal } from "lucide-react"
import { fetchProperties } from "@/services/propertyService"
import type { Property, PropertyFilters as PropertyFiltersType } from "@/types/property"
import PropertyCard from "@/components/properties/PropertyCard"
import PropertyFilters from "@/components/properties/PropertyFilters"
import SearchBar from "@/components/properties/SearchBar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PropertiesResponse {
  success: boolean
  total: number
  totalPages: number
  currentPage: number
  properties: Property[]
}

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Get query params
  const page = searchParams.get("page") || "1"
  const search = searchParams.get("search") || ""
  const type = searchParams.get("type") || ""
  const status = searchParams.get("status") || ""
  const minPrice = searchParams.get("minPrice") || ""
  const maxPrice = searchParams.get("maxPrice") || ""
  const minBedrooms = searchParams.get("minBedrooms") || ""
  const minBathrooms = searchParams.get("minBathrooms") || ""
  const city = searchParams.get("city") || ""
  const state = searchParams.get("state") || ""
  const sort = searchParams.get("sort") || "createdAt"
  const order = searchParams.get("order") || "desc"
  const view = searchParams.get("view") || "grid"

  // Query params for the API
  const queryParams: PropertyFiltersType = {
    page,
    limit: "9",
    search,
    type,
    status,
    minPrice,
    maxPrice,
    minBedrooms,
    minBathrooms,
    city,
    state,
    sort,
    order,
  }

  // Use TanStack Query to fetch properties
  const { data, isLoading, error } = useQuery<PropertiesResponse>({
    queryKey: ["properties", queryParams],
    queryFn: () => fetchProperties(queryParams),
    placeholderData: (previousData) => previousData,
  })

  // Update URL when filters change
  const handleFilterChange = (filters: Record<string, string>) => {
    const params = new URLSearchParams(searchParams)

    // Reset to page 1 when filters change
    params.set("page", "1")

    // Update or remove filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    router.push(`/properties?${params.toString()}`)
  }

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", newPage.toString())
    router.push(`/properties?${params.toString()}`)
  }

  // Handle view change (grid/list)
  const handleViewChange = (newView: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("view", newView)
    router.push(`/properties?${params.toString()}`)
  }

  // Handle sort change
  const handleSortChange = (value: string) => {
    const [newSort, newOrder] = value.split("-")
    handleFilterChange({ sort: newSort, order: newOrder })
  }

  const properties = data?.properties ?? []
  const totalPages = data?.totalPages ?? 0
  const currentPage = data?.currentPage ?? 1
  const totalProperties = data?.total ?? 0

  // Count active filters
  const activeFiltersCount = [type, status, minPrice, maxPrice, minBedrooms, minBathrooms, city, state].filter(
    Boolean,
  ).length

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Find Your Perfect Property</h1>
          <p className="text-gray-200 text-lg max-w-2xl mb-8">
            Discover your dream home from our extensive collection of properties across the country.
          </p>

          {/* Search bar */}
          <div className="max-w-3xl">
            <SearchBar initialValue={search} onSearch={(value) => handleFilterChange({ search: value })} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and sorting */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2.5 px-4 py-2 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 transition-colors duration-200"
                  >
                    <SlidersHorizontal size={18} className="text-emerald-600" />
                    <span className="font-medium">Filters</span>
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-1 bg-emerald-100 text-emerald-700 rounded-full px-2.5">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="left" 
                  className="w-full sm:max-w-md overflow-y-auto border-r border-gray-100 shadow-xl"
                >
                  <SheetHeader className="px-6 py-8 border-b border-gray-100">
                    <SheetTitle className="text-2xl font-bold text-gray-900">Property Filters</SheetTitle>
                    <SheetDescription className="text-gray-600 mt-2">
                      Refine your search to find the perfect property
                    </SheetDescription>
                  </SheetHeader>
                  <div className="p-6">
                    <PropertyFilters
                      initialFilters={{
                        type,
                        status,
                        minPrice,
                        maxPrice,
                        minBedrooms,
                        minBathrooms,
                        city,
                        state,
                        sort,
                        order,
                      }}
                      onFilterChange={(filters) => {
                        handleFilterChange(filters)
                        setFiltersOpen(false)
                      }}
                    />
                  </div>
                </SheetContent>
              </Sheet>

              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    handleFilterChange({
                      type: "",
                      status: "",
                      minPrice: "",
                      maxPrice: "",
                      minBedrooms: "",
                      minBathrooms: "",
                      city: "",
                      state: "",
                    })
                  }
                  className="text-muted-foreground"
                >
                  Clear filters
                </Button>
              )}

              {city && (
                <Badge variant="outline" className="gap-1 px-3 py-1">
                  <MapPin size={14} />
                  {city}
                  {state ? `, ${state}` : ""}
                </Badge>
              )}

              {type && (
                <Badge variant="outline" className="gap-1 px-3 py-1">
                  <Building size={14} />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <Tabs value={view} onValueChange={handleViewChange} className="w-[200px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <Select value={`${sort}-${order}`} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="createdAt-desc">Newest</SelectItem>
                  <SelectItem value="createdAt-asc">Oldest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="views-desc">Most Viewed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-muted-foreground">
            {isLoading ? <Skeleton className="h-6 w-32" /> : <p>{totalProperties} properties found</p>}
          </div>
        </div>

        {/* Properties grid/list */}
        {isLoading ? (
          <div
            className={`grid ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-medium text-gray-700">Error loading properties</h3>
            <p className="text-muted-foreground mt-2">Please try again later</p>
            <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        ) : properties.length > 0 ? (
          <div
            className={`grid ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}
          >
            {properties.map((property: Property) => (
              <PropertyCard key={property._id} property={property} view={view} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <Home className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium text-gray-700">No properties found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search criteria</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() =>
                handleFilterChange({
                  type: "",
                  status: "",
                  minPrice: "",
                  maxPrice: "",
                  minBedrooms: "",
                  minBathrooms: "",
                  city: "",
                  state: "",
                  search: "",
                })
              }
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) handlePageChange(currentPage - 1)
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNumber = i + 1

                  // Show first page, last page, and pages around current page
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            handlePageChange(pageNumber)
                          }}
                          isActive={pageNumber === currentPage}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  }

                  // Show ellipsis for gaps
                  if (
                    (pageNumber === 2 && currentPage > 3) ||
                    (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                  ) {
                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )
                  }

                  return null
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) handlePageChange(currentPage + 1)
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  )
}
