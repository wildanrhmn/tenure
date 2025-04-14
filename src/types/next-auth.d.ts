import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: string;
    accessToken: string;
    profileImage?: string | null;
    savedProperties?: string[];
    isVerified: boolean;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      profileImage?: string | null;
      savedProperties?: string[];
      isVerified: boolean;
    };
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    accessToken: string;
    profileImage?: string | null;
    savedProperties?: string[];
    isVerified: boolean;
  }
} 