'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import PropertyCard from '@/components/properties/PropertyCard';
import PropertyFilters from '@/components/properties/PropertyFilters';
import SearchBar from '@/components/properties/SearchBar';
import Pagination from '@/components/common/Pagination';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { fetchProperties } from '@/services/propertyService';

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Get query params
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('search') || '';
  const type = searchParams.get('type') || '';
  const status = searchParams.get('status') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const minBedrooms = searchParams.get('minBedrooms') || '';
  const minBathrooms = searchParams.get('minBathrooms') || '';
  const city = searchParams.get('city') || '';
  const state = searchParams.get('state') || '';
  const sort = searchParams.get('sort') || 'createdAt';
  const order = searchParams.get('order') || 'desc';

  // Fetch properties based on filters
  useEffect(() => {
    const getProperties = async () => {
      setLoading(true);
      try {
        const queryParams = {
          page,
          limit: '9', // 9 properties per page for 3x3 grid
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
          order
        };

        const response = await fetchProperties(queryParams);
        setProperties(response.properties);
        setTotalProperties(response.total);
        setCurrentPage(response.currentPage);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, [page, search, type, status, minPrice, maxPrice, minBedrooms, minBathrooms, city, state, sort, order]);

  // Update URL when filters change
  const handleFilterChange = (filters) => {
    const params = new URLSearchParams(searchParams);
    
    // Reset to page 1 when filters change
    params.set('page', '1');
    
    // Update or remove filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    
    router.push(`/properties?${params.toString()}`);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Find Your Perfect Property</h1>
      
      {/* Search and filters */}
      <div className="mb-8">
        <SearchBar initialValue={search} onSearch={(value) => handleFilterChange({ search: value })} />
        
        <div className="mt-4">
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
              order
            }}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
      
      {/* Results count and sorting */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600">
          {loading ? 'Loading properties...' : `${totalProperties} properties found`}
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Sort by:</span>
          <select
            className="border rounded-md p-2 bg-white"
            value={`${sort}-${order}`}
            onChange={(e) => {
              const [newSort, newOrder] = e.target.value.split('-');
              handleFilterChange({ sort: newSort, order: newOrder });
            }}
          >
            <option value="createdAt-desc">Newest</option>
            <option value="createdAt-asc">Oldest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="views-desc">Most Viewed</option>
          </select>
        </div>
      </div>
      
      {/* Properties grid */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <LoadingSpinner />
        </div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700">No properties found</h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your filters or search criteria
          </p>
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}