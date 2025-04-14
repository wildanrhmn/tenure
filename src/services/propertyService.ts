import { Property, PropertyFilters } from "@/types/property";

// Dummy data for properties
const dummyProperties: Property[] = [
  {
    _id: '1',
    title: 'Modern Beachfront Villa',
    description: 'Beautiful beachfront villa with stunning ocean views',
    type: 'house',
    status: 'for-sale',
    price: 1200000,
    area: 3200,
    areaUnit: 'sqft',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '123 Ocean Drive',
      city: 'Malibu',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    features: ['Pool', 'Garden', 'Garage', 'Beachfront'],
    views: 120,
    owner: {
      _id: 'agent1',
      firstName: 'John',
      lastName: 'Realtor',
      email: 'john@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    createdAt: '2023-11-15T08:00:00Z'
  },
  {
    _id: '2',
    title: 'Downtown Luxury Apartment',
    description: 'High-end apartment in the heart of downtown',
    type: 'apartment',
    status: 'for-rent',
    price: 3500,
    area: 1500,
    areaUnit: 'sqft',
    bedrooms: 2,
    bathrooms: 2,
    images: [
      { url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '456 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    features: ['Doorman', 'Gym', 'Rooftop', 'Parking'],
    views: 95,
    owner: {
      _id: 'agent2',
      firstName: 'Sarah',
      lastName: 'Agent',
      email: 'sarah@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    createdAt: '2023-11-20T10:30:00Z'
  },
  {
    _id: '3',
    title: 'Suburban Family Home',
    description: 'Spacious family home in a quiet neighborhood',
    type: 'house',
    status: 'for-sale',
    price: 750000,
    area: 2800,
    areaUnit: 'sqft',
    bedrooms: 4,
    bathrooms: 3.5,
    images: [
      { url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '789 Maple Avenue',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      country: 'USA'
    },
    features: ['Backyard', 'Garage', 'Fireplace', 'School District'],
    views: 85,
    owner: {
      _id: 'agent1',
      firstName: 'John',
      lastName: 'Realtor',
      email: 'john@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    createdAt: '2023-12-01T09:15:00Z'
  },
  {
    _id: '4',
    title: 'Mountain View Cabin',
    description: 'Cozy cabin with breathtaking mountain views',
    type: 'house',
    status: 'for-sale',
    price: 450000,
    area: 1200,
    areaUnit: 'sqft',
    bedrooms: 2,
    bathrooms: 1,
    images: [
      { url: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '101 Pine Road',
      city: 'Aspen',
      state: 'CO',
      zipCode: '81611',
      country: 'USA'
    },
    features: ['Fireplace', 'Deck', 'Mountain View', 'Hiking Trails'],
    views: 70,
    owner: {
      _id: 'agent3',
      firstName: 'Mike',
      lastName: 'Mountain',
      email: 'mike@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    createdAt: '2023-12-05T11:45:00Z'
  },
  {
    _id: '5',
    title: 'Waterfront Condo',
    description: 'Modern condo with beautiful water views',
    type: 'condo',
    status: 'for-sale',
    price: 550000,
    area: 1100,
    areaUnit: 'sqft',
    bedrooms: 2,
    bathrooms: 2,
    images: [
      { url: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '222 Harbor Drive',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    },
    features: ['Balcony', 'Pool', 'Security', 'Waterfront'],
    views: 60,
    owner: {
      _id: 'agent2',
      firstName: 'Sarah',
      lastName: 'Agent',
      email: 'sarah@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    createdAt: '2023-12-10T14:20:00Z'
  },
  {
    _id: '6',
    title: 'Historic Brownstone',
    description: 'Beautifully renovated historic brownstone in premium location',
    type: 'townhouse',
    status: 'for-sale',
    price: 1800000,
    area: 3500,
    areaUnit: 'sqft',
    bedrooms: 3,
    bathrooms: 2.5,
    images: [
      { url: 'https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '333 Commonwealth Ave',
      city: 'Boston',
      state: 'MA',
      zipCode: '02115',
      country: 'USA'
    },
    features: ['Historic', 'Renovated', 'High Ceilings', 'Garden'],
    views: 110,
    owner: {
      _id: 'agent4',
      firstName: 'Emma',
      lastName: 'Historic',
      email: 'emma@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    createdAt: '2023-12-15T16:30:00Z'
  },
  {
    _id: '7',
    title: 'Desert Oasis',
    description: 'Modern home with pool in exclusive desert community',
    type: 'house',
    status: 'for-sale',
    price: 875000,
    area: 2600,
    areaUnit: 'sqft',
    bedrooms: 3,
    bathrooms: 3,
    images: [
      { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '444 Saguaro Drive',
      city: 'Scottsdale',
      state: 'AZ',
      zipCode: '85250',
      country: 'USA'
    },
    features: ['Pool', 'Desert Landscaping', 'Mountain Views', 'Smart Home'],
    views: 75,
    owner: {
      _id: 'agent3',
      firstName: 'Mike',
      lastName: 'Mountain',
      email: 'mike@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    createdAt: '2023-12-20T08:45:00Z'
  },
  {
    _id: '8',
    title: 'Lakefront Property',
    description: 'Stunning property with private lake access',
    type: 'house',
    status: 'for-sale',
    price: 925000,
    area: 3000,
    areaUnit: 'sqft',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '555 Lakeview Road',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    },
    features: ['Lake Access', 'Dock', 'Fireplace', 'Patio'],
    views: 90,
    owner: {
      _id: 'agent1',
      firstName: 'John',
      lastName: 'Realtor',
      email: 'john@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    createdAt: '2023-12-25T12:10:00Z'
  },
  {
    _id: '9',
    title: 'Urban Loft',
    description: 'Industrial-style loft in trendy downtown district',
    type: 'apartment',
    status: 'for-rent',
    price: 2800,
    area: 1800,
    areaUnit: 'sqft',
    bedrooms: 1,
    bathrooms: 1.5,
    images: [
      { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '666 Warehouse District',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'USA'
    },
    features: ['High Ceilings', 'Exposed Brick', 'Stainless Appliances', 'City Views'],
    views: 85,
    owner: {
      _id: 'agent4',
      firstName: 'Emma',
      lastName: 'Historic',
      email: 'emma@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    createdAt: '2024-01-02T15:20:00Z'
  },
  {
    _id: '10',
    title: 'Countryside Farmhouse',
    description: 'Renovated farmhouse on 5 acres of beautiful countryside',
    type: 'house',
    status: 'for-sale',
    price: 695000,
    area: 2400,
    areaUnit: 'sqft',
    bedrooms: 4,
    bathrooms: 2,
    images: [
      { url: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '777 Rural Route',
      city: 'Nashville',
      state: 'TN',
      zipCode: '37201',
      country: 'USA'
    },
    features: ['Acreage', 'Barn', 'Renovated Kitchen', 'Wraparound Porch'],
    views: 65,
    owner: {
      _id: 'agent2',
      firstName: 'Sarah',
      lastName: 'Agent',
      email: 'sarah@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    _id: '11',
    title: 'Luxury Penthouse',
    description: 'Exclusive penthouse with panoramic city views',
    type: 'apartment',
    status: 'for-sale',
    price: 3500000,
    area: 4200,
    areaUnit: 'sqft',
    bedrooms: 3,
    bathrooms: 3.5,
    images: [
      { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '888 Tower Place',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'USA'
    },
    features: ['Penthouse', 'Private Elevator', 'Rooftop Terrace', 'Smart Home'],
    views: 150,
    owner: {
      _id: 'agent1',
      firstName: 'John',
      lastName: 'Realtor',
      email: 'john@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    createdAt: '2024-01-15T14:30:00Z'
  },
  {
    _id: '12',
    title: 'Cozy Cottage',
    description: 'Charming cottage with lots of character in quiet neighborhood',
    type: 'house',
    status: 'for-sale',
    price: 375000,
    area: 1100,
    areaUnit: 'sqft',
    bedrooms: 2,
    bathrooms: 1,
    images: [
      { url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop' },
    ],
    address: {
      street: '999 Cottage Lane',
      city: 'Santa Barbara',
      state: 'CA',
      zipCode: '93101',
      country: 'USA'
    },
    features: ['Garden', 'Fireplace', 'Original Details', 'Patio'],
    views: 55,
    owner: {
      _id: 'agent3',
      firstName: 'Mike',
      lastName: 'Mountain',
      email: 'mike@tenure.com',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    createdAt: '2024-01-20T09:45:00Z'
  }
];

// Saved properties for demo purposes
let savedProperties = ['1', '5'];

// Fetch all properties with filters and pagination
export const fetchProperties = async (params: PropertyFilters) => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      let results = [...dummyProperties];
      
      // Apply filters
      if (params.search) {
        const searchTerm = params.search.toLowerCase();
        results = results.filter(property => 
          property.title.toLowerCase().includes(searchTerm) ||
          property.description.toLowerCase().includes(searchTerm) ||
          property.address.city.toLowerCase().includes(searchTerm) ||
          property.address.state.toLowerCase().includes(searchTerm) ||
          property.address.street.toLowerCase().includes(searchTerm)
        );
      }
      
      if (params.type) {
        results = results.filter(property => property.type === params.type);
      }
      
      if (params.status) {
        results = results.filter(property => property.status === params.status);
      }
      
      if (params.minPrice && typeof params.minPrice === 'string') {
        const minPrice = parseInt(params.minPrice);
        results = results.filter(property => property.price >= minPrice);
      }
      
      if (params.maxPrice && typeof params.maxPrice === 'string') {
        const maxPrice = parseInt(params.maxPrice);
        results = results.filter(property => property.price <= maxPrice);
      }
      
      if (params.minBedrooms && typeof params.minBedrooms === 'string') {
        const minBedrooms = parseInt(params.minBedrooms);
        results = results.filter(property => property.bedrooms >= minBedrooms);
      }
      
      if (params.minBathrooms && typeof params.minBathrooms === 'string') {
        const minBathrooms = parseInt(params.minBathrooms);
        results = results.filter(property => property.bathrooms >= minBathrooms);
      }
      
      if (params.city) {
        const cityTerm = params.city.toLowerCase();
        results = results.filter(property => 
          property.address.city.toLowerCase().includes(cityTerm)
        );
      }
      
      if (params.state) {
        const stateTerm = params.state.toLowerCase();
        results = results.filter(property => 
          property.address.state.toLowerCase().includes(stateTerm)
        );
      }
      
      // Apply sorting
      const sortField = params.sort || 'createdAt';
      const sortOrder = params.order || 'desc';
      
      results.sort((a, b) => {
        if (sortOrder === 'asc') {
          return (a as any)[sortField] > (b as any)[sortField] ? 1 : -1;
        } else {
          return (a as any)[sortField] < (b as any)[sortField] ? 1 : -1;
        }
      });
      
      // Apply pagination
      const page = parseInt(params.page as string) || 1;
      const limit = parseInt(params.limit as string) || 10;
      const total = results.length;
      const totalPages = Math.ceil(total / limit);
      
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedResults = results.slice(startIndex, endIndex);
      
      resolve({
        properties: paginatedResults,
        total,
        totalPages,
        currentPage: page
      });
    }, 500); // 500ms delay to simulate network
  });
};

// Fetch a single property by ID
export const fetchPropertyById = async (id: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const property = dummyProperties.find(prop => prop._id === id);
      
      if (property) {
        resolve(property);
      } else {
        reject(new Error(`Property with ID ${id} not found`));
      }
    }, 300);
  });
};

// Save a property to user's favorites
export const saveProperty = async (propertyId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      savedProperties.push(propertyId);
      resolve({ success: true, message: 'Property saved successfully' });
    }, 300);
  });
};

// Remove a property from user's favorites
export const unsaveProperty = async (propertyId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      savedProperties = savedProperties.filter(id => id !== propertyId);
      resolve({ success: true, message: 'Property removed from saved list' });
    }, 300);
  });
};

// Fetch similar properties 
export const fetchSimilarProperties = async (propertyId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const property = dummyProperties.find(prop => prop._id === propertyId);
      
      if (property) {
        // Find properties with same type and similar price range
        const similar = dummyProperties
          .filter(prop => 
            prop._id !== propertyId && 
            prop.type === property.type &&
            prop.price >= property.price * 0.8 &&
            prop.price <= property.price * 1.2
          )
          .slice(0, 3);
        
        resolve(similar);
      } else {
        resolve([]);
      }
    }, 300);
  });
};