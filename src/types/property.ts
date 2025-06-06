export interface Property {
    _id: string;
    title: string;
    description: string;
    type: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land' | 'commercial' | 'other';
    listingStatus: 'for-sale' | 'for-rent' | 'sold' | 'rented';
    adminStatus: 'pending' | 'approved' | 'rejected' | 'revision_requested';
    price: number;
    area: number;
    areaUnit: 'sqft' | 'sqm';
    bedrooms: number;
    bathrooms: number;
    images: {
      url: string;
      public_id?: string;
      caption?: string;
    }[];
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    features: string[];
    views: number;
    owner: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      profileImage?: string;
    };
    location?: {
      type: string;
      coordinates: number[];
    };
    yearBuilt?: number;
    parkingSpaces?: number;
    createdAt: string;
    updatedAt?: string;
    isSaved: boolean;
    isPublished: boolean;
    isApproved: boolean;
    approvalDate?: string;
    rejectionReason?: string;
    rejectedAt?: string;
    revisionHistory?: {
      reason: string;
      requestedAt: string;
      resolvedAt?: string;
      resolvedBy?: string;
    }[];
    lastRevisionRequest?: string;
    revisionCount?: number;
  }
  
  export interface PropertyFilters {
    page?: string | number;
    limit?: string | number;
    search?: string;
    type?: string;
    listingStatus?: string;
    adminStatus?: string;
    minPrice?: string | number;
    maxPrice?: string | number;
    minBedrooms?: string | number;
    minBathrooms?: string | number;
    city?: string;
    state?: string;
    sort?: string;
    order?: string;
  }