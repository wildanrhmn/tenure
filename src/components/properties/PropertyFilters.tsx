"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FilterProps {
  initialFilters: {
    type: string
    listingStatus: string
    minPrice: string
    maxPrice: string
    minBedrooms: string
    minBathrooms: string
    city: string
    state: string
    sort?: string
    order?: string
  }
  onFilterChange: (filters: any) => void
}

export default function PropertyFilters({ initialFilters, onFilterChange }: FilterProps) {
  // Convert empty strings to "all" for the initial state
  const initialFiltersWithDefaults = {
    ...initialFilters,
    type: initialFilters.type || "all",
    listingStatus: initialFilters.listingStatus || "all",
  };
  
  const [filters, setFilters] = useState(initialFiltersWithDefaults)

  const handleInputChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    onFilterChange(filters)
  }

  const resetFilters = () => {
    const resetValues = {
      type: "all",
      listingStatus: "all",
      minPrice: "",
      maxPrice: "",
      minBedrooms: "",
      minBathrooms: "",
      city: "",
      state: "",
    }
    setFilters(resetValues)
    onFilterChange(resetValues)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        {/* Property Type & Status Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="type" className="text-sm font-medium text-gray-700">Property Type</Label>
            <Select value={filters.type} onValueChange={(value) => handleInputChange("type", value)}>
              <SelectTrigger id="type" className="w-full border border-gray-200 hover:border-gray-300 transition-colors">
                <SelectValue placeholder="Any Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="listingStatus" className="text-sm font-medium text-gray-700">Listing Status</Label>
            <Select
              value={filters.listingStatus}
              onValueChange={(value) => handleInputChange("listingStatus", value)}
            >
              <SelectTrigger id="listingStatus" className="w-full border border-gray-200 hover:border-gray-300 transition-colors">
                <SelectValue placeholder="Select listing status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All (For Sale & For Rent)</SelectItem>
                <SelectItem value="for-sale">For Sale</SelectItem>
                <SelectItem value="for-rent">For Rent</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="rented">Rented</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price Range Section */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Price Range</Label>
          <div className="flex items-center space-x-3">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => handleInputChange("minPrice", e.target.value)}
                className="pl-7 border border-gray-200 hover:border-gray-300 transition-colors"
              />
            </div>
            <span className="text-gray-400">—</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => handleInputChange("maxPrice", e.target.value)}
                className="pl-7 border border-gray-200 hover:border-gray-300 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Bedrooms & Bathrooms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="minBedrooms" className="text-sm font-medium text-gray-700">Bedrooms</Label>
            <Select value={filters.minBedrooms} onValueChange={(value) => handleInputChange("minBedrooms", value)}>
              <SelectTrigger id="minBedrooms" className="w-full border border-gray-200 hover:border-gray-300 transition-colors">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+ Bed</SelectItem>
                <SelectItem value="2">2+ Beds</SelectItem>
                <SelectItem value="3">3+ Beds</SelectItem>
                <SelectItem value="4">4+ Beds</SelectItem>
                <SelectItem value="5">5+ Beds</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="minBathrooms" className="text-sm font-medium text-gray-700">Bathrooms</Label>
            <Select value={filters.minBathrooms} onValueChange={(value) => handleInputChange("minBathrooms", value)}>
              <SelectTrigger id="minBathrooms" className="w-full border border-gray-200 hover:border-gray-300 transition-colors">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+ Bath</SelectItem>
                <SelectItem value="2">2+ Baths</SelectItem>
                <SelectItem value="3">3+ Baths</SelectItem>
                <SelectItem value="4">4+ Baths</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Location Section */}
        <Accordion type="single" collapsible className="w-full border rounded-lg">
          <AccordionItem value="location" className="border-none">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">Location</AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
                  <Input
                    id="city"
                    placeholder="Enter city"
                    value={filters.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="border border-gray-200 hover:border-gray-300 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-medium text-gray-700">State</Label>
                  <Input
                    id="state"
                    placeholder="Enter state"
                    value={filters.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="border border-gray-200 hover:border-gray-300 transition-colors"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="my-6" />

        {/* Action Buttons */}
        <div className="flex justify-between gap-4">
          <Button 
            variant="outline" 
            onClick={resetFilters} 
            className="flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <X size={16} />
            Reset Filters
          </Button>
          <Button 
            onClick={applyFilters} 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 transition-colors"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
