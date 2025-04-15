"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  initialValue: string
  onSearch: (query: string) => void
}

export default function SearchBar({ initialValue, onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue || "")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="relative">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by address, city, or property name..."
          className="w-full pl-12 pr-24 py-6 bg-white/95 border-0 text-gray-800 placeholder:text-gray-500 rounded-xl shadow-lg focus-visible:ring-emerald-500"
        />
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <Button
          type="submit"
          className="absolute inset-y-0 right-0 my-1.5 mr-1.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
        >
          Search
        </Button>
      </div>
    </form>
  )
}
