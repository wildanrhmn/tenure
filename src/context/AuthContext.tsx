'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define types
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'user' | 'agent' | 'admin';
  profileImage?: string;
  savedProperties?: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (userData: any) => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for development
const mockUser: User = {
  _id: 'user123',
  firstName: 'Demo',
  lastName: 'User',
  email: 'demo@example.com',
  role: 'user',
  profileImage: 'https://randomuser.me/api/portraits/men/42.jpg',
  savedProperties: ['1', '5'] // IDs of saved properties
};

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for saved auth on mount
  useEffect(() => {
    // In a real app, you would verify token validity with your API
    // For this demo, we'll just set the mock user after a short delay
    const timer = setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setUser(mockUser);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // In a real app, you'd clear tokens, etc.
  };

  // Signup function
  const signup = async (userData: any) => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(mockUser);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
        signup
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}