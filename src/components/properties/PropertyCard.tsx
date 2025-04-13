import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { Property } from '@/types/property';
import { useState } from 'react';
import { saveProperty, unsaveProperty } from '@/services/propertyService';
import { useAuth } from '@/contexts/AuthContext';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { user, isAuthenticated } = useAuth();
  const [isSaved, setIsSaved] = useState(
    user?.savedProperties?.includes(property._id) || false
  );
  const [saving, setSaving] = useState(false);

  const handleSaveProperty = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      // Redirect to login or show login modal
      return;
    }
    
    setSaving(true);
    try {
      if (isSaved) {
        await unsaveProperty(property._id);
        setIsSaved(false);
      } else {
        await saveProperty(property._id);
        setIsSaved(true);
      }
    } catch (error) {
      console.error('Error saving property:', error);
    } finally {
      setSaving(false);
    }
  };

  // Get primary image or use placeholder
  const primaryImage = property.images?.length
    ? property.images[0].url
    : '/images/property-placeholder.jpg';

  // Format property status for display
  const statusDisplay = {
    'for-sale': 'For Sale',
    'for-rent': 'For Rent',
    'sold': 'Sold',
    'rented': 'Rented',
    'pending': 'Pending'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-[1.02] hover:shadow-lg">
      <Link href={`/properties/${property._id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={primaryImage}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-0 left-0 m-2 px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">
            {statusDisplay[property.status] || property.status}
          </div>
          
          <button
            onClick={handleSaveProperty}
            disabled={saving}
            className={`absolute top-0 right-0 m-2 p-2 rounded-full ${
              isSaved ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
            }`}
            aria-label={isSaved ? 'Unsave property' : 'Save property'}
          >
            <Heart size={18} className={isSaved ? 'fill-current' : ''} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
              {property.title}
            </h3>
            <p className="text-xl font-bold text-blue-600">
              {formatCurrency(property.price)}
            </p>
          </div>
          
          <p className="text-gray-600 text-sm mt-1 line-clamp-1">
            {property.address.street}, {property.address.city}, {property.address.state}
          </p>
          
          <div className="flex justify-between mt-4">
            <div className="flex items-center text-gray-700">
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-sm">{property.area} {property.areaUnit}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}