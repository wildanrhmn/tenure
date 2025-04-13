import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface FilterProps {
  initialFilters: {
    type: string;
    status: string;
    minPrice: string;
    maxPrice: string;
    minBedrooms: string;
    minBathrooms: string;
    city: string;
    state: string;
    sort?: string;
    order?: string;
  };
  onFilterChange: (filters: any) => void;
}

export default function PropertyFilters({ initialFilters, onFilterChange }: FilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(initialFilters);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const resetFilters = () => {
    const resetValues = {
      type: '',
      status: '',
      minPrice: '',
      maxPrice: '',
      minBedrooms: '',
      minBathrooms: '',
      city: '',
      state: ''
    };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };

  const hasActiveFilters = () => {
    return Object.entries(filters).some(([key, value]) => {
      if (key === 'sort' || key === 'order') return false;
      return !!value;
    });
  };

  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleFilters}
          className="flex items-center text-gray-700 font-medium"
        >
          <span>Filters</span>
          {showFilters ? (
            <ChevronUp className="ml-1" size={16} />
          ) : (
            <ChevronDown className="ml-1" size={16} />
          )}
        </button>
        
        {hasActiveFilters() && (
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <X size={14} className="mr-1" />
            Clear filters
          </button>
        )}
      </div>
      
      {showFilters && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select
              name="type"
              value={filters.type}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 bg-white text-sm"
            >
              <option value="">Any Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="land">Land</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={filters.status}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 bg-white text-sm"
            >
              <option value="">Any Status</option>
              <option value="for-sale">For Sale</option>
              <option value="for-rent">For Rent</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleInputChange}
                placeholder="Min"
                className="w-1/2 border rounded-md p-2 text-sm"
              />
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleInputChange}
                placeholder="Max"
                className="w-1/2 border rounded-md p-2 text-sm"
              />
            </div>
          </div>
          
          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bedrooms
            </label>
            <select
              name="minBedrooms"
              value={filters.minBedrooms}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 bg-white text-sm"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
          
          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bathrooms
            </label>
            <select
              name="minBathrooms"
              value={filters.minBathrooms}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 bg-white text-sm"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          
          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={filters.city}
              onChange={handleInputChange}
              placeholder="Enter city"
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>
          
          {/* State/Province */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              value={filters.state}
              onChange={handleInputChange}
              placeholder="Enter state"
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>
          
          {/* Apply Button */}
          <div className="flex items-end">
            <button
              onClick={applyFilters}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}