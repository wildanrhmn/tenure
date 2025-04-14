"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Heart, User, Search, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { user, isAuthenticated, signOut } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    }
  };

    return (
      <header className="sticky top-0 z-50 w-full shadow-sm backdrop-blur-sm bg-white/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform"
          >
            <div className="rounded-xl bg-gradient-to-br from-[#1A365D] to-[#2A623D] p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F8F8F4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#1A365D] to-[#2A623D] bg-clip-text text-transparent">
              Tenure
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/agents"
              className="text-[#333333] hover:text-[#2A623D] font-medium transition-all"
            >
              Agents
            </Link>
            <Link
              href="/properties"
              className="text-[#333333] hover:text-[#2A623D] font-medium transition-all"
            >
              Properties
            </Link>
            <Link
              href="/about"
              className="text-[#333333] hover:text-[#2A623D] font-medium transition-all"
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#333333] hover:text-[#1A365D] hover:bg-[#E8E8E0] rounded-xl transition-all duration-300"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search properties</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#333333] hover:text-[#1A365D] hover:bg-[#E8E8E0] rounded-xl transition-all duration-300"
              onClick={() => !isAuthenticated && router.push('/login')}
            >
              <Link href={isAuthenticated ? "/saved" : "#"}>
                <Heart className="h-5 w-5" />
                <span className="sr-only">Saved properties</span>
              </Link>
            </Button>
            {
              (isAuthenticated && user) ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative h-8 w-8 rounded-full overflow-hidden transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-offset-2 hover:ring-teal-500 active:scale-95"
                  >
                    <Avatar className="h-8 w-8 bg-gradient-to-br from-teal-400 to-emerald-600">
                      <AvatarImage 
                        src={user.image || ''} 
                        alt={user.name || ''} 
                        className="object-cover hover:opacity-90 transition-opacity"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-teal-400 to-emerald-600 text-white font-medium animate-gradient">
                        {user.name?.charAt(0) || user.email?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login">
                  <Button className="bg-gradient-to-r from-[#2A623D] to-[#1A365D] text-white hover:opacity-90 rounded-xl transition-all duration-300 px-6 shadow-md">Sign in</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Search Overlay */}
        <div 
          ref={searchRef}
          className={`absolute top-20 left-0 w-full bg-white/95 backdrop-blur-sm border-b shadow-lg p-6 transition-all duration-300 ease-in-out transform ${
            isSearchOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9F8170]" />
              <input
                type="text"
                placeholder="Search properties, locations..."
                className="w-full rounded-xl border-2 border-[#E8E8E0] bg-white/50 py-3 pl-12 pr-32 text-[#333333] focus:ring-2 focus:ring-[#2A623D] focus:outline-none transition-all duration-300 text-lg"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A365D] to-[#2A623D] text-white hover:opacity-90 rounded-lg transition-all duration-300 h-10 px-6 shadow-md">
                Search
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Navbar;