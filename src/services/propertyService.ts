import { PropertyFilters } from "@/types/property";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Fetch all properties with filters and pagination
export const fetchProperties = async (params: PropertyFilters) => {
  const queryParams = new URLSearchParams();
  
  // Add all non-empty params to the query string
  Object.entries(params).forEach(([key, value]) => {
    if (value && value !== "all") {
      queryParams.append(key, value.toString());
    }
  });

  const response = await fetch(`${API_BASE_URL}/properties?${queryParams.toString()}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }

  return response.json();
};

// Fetch a single property by ID
export const fetchPropertyById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/properties/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch property');
  }

  return response.json();
};

// Fetch similar properties
export const fetchSimilarProperties = async (propertyId: string) => {
  const response = await fetch(`${API_BASE_URL}/properties/${propertyId}/similar`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch similar properties');
  }

  return response.json();
};

// Save a property to user's favorites
export const saveProperty = async (propertyId: string) => {
  const response = await fetch(`${API_BASE_URL}/users/me/saved-properties/${propertyId}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    if (response.status === 404) {
      throw new Error(error.message || 'Property or user not found');
    } else if (response.status === 400) {
      throw new Error(error.message || 'Property already saved');
    } else {
      throw new Error(error.message || 'Failed to save property');
    }
  }

  return response.json();
};

// Remove a property from user's favorites
export const unsaveProperty = async (propertyId: string) => {
  const response = await fetch(`${API_BASE_URL}/users/me/saved-properties/${propertyId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.json();
    if (response.status === 404) {
      throw new Error(error.message || 'User not found');
    } else {
      throw new Error(error.message || 'Failed to remove saved property');
    }
  }

  return response.json();
};