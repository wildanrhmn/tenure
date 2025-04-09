"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Heart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

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
            href="/buy"
            className="text-[#333333] hover:text-[#2A623D] font-medium transition-all"
          >
            Buy
          </Link>
          <Link
            href="/rent"
            className="text-[#333333] hover:text-[#2A623D] font-medium transition-all"
          >
            Rent
          </Link>
          <Link
            href="/sell"
            className="text-[#333333] hover:text-[#2A623D] font-medium transition-all"
          >
            Sell
          </Link>
          <Link
            href="/agents"
            className="text-[#333333] hover:text-[#2A623D] font-medium transition-all"
          >
            Agents
          </Link>
          <Link
            href="/resources"
            className="text-[#333333] hover:text-[#2A623D] font-medium transition-all"
          >
            Resources
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
          >
            <Link href="/favorites">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Saved properties</span>
            </Link>
          </Button>
          <Button
            className="bg-transparent text-[#1A365D] hover:bg-[#1A365D] hover:text-white rounded-xl transition-all duration-300 px-6"
          >
            <Link href="/login">Sign In</Link>
          </Button>
          <Button className="bg-gradient-to-r from-[#2A623D] to-[#1A365D] text-white hover:opacity-90 rounded-xl transition-all duration-300 px-6 shadow-md">
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-[#333333]" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-gradient-to-br from-[#F8F8F4] to-[#F5F5DC]"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center gap-2">
                  <div className="rounded-xl bg-gradient-to-br from-[#1A365D] to-[#2A623D] p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F8F8F4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-[#1A365D] to-[#2A623D] bg-clip-text text-transparent">
                    Tenure
                  </span>
                </Link>
                <SheetClose className="rounded-xl opacity-70 transition-all hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#1A365D] focus:ring-offset-2">
                  <X className="h-5 w-5 text-[#333333]" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-4 py-6">
                <Link
                  href="/buy"
                  className="text-[#333333] hover:text-[#2A623D] font-medium transition-all hover:translate-x-2"
                >
                  Buy
                </Link>
                <Link
                  href="/rent"
                  className="text-[#333333] hover:text-[#2A623D] font-medium transition-all hover:translate-x-2"
                >
                  Rent
                </Link>
                <Link
                  href="/sell"
                  className="text-[#333333] hover:text-[#2A623D] font-medium transition-all hover:translate-x-2"
                >
                  Sell
                </Link>
                <Link
                  href="/agents"
                  className="text-[#333333] hover:text-[#2A623D] font-medium transition-all hover:translate-x-2"
                >
                  Agents
                </Link>
                <Link
                  href="/resources"
                  className="text-[#333333] hover:text-[#2A623D] font-medium transition-all hover:translate-x-2"
                >
                  Resources
                </Link>
                <Link
                  href="/favorites"
                  className="text-[#333333] hover:text-[#2A623D] font-medium transition-all hover:translate-x-2 flex items-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Saved Properties
                </Link>
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t pt-4">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#1A365D] text-[#1A365D] hover:bg-[#1A365D] hover:text-white rounded-xl transition-all duration-300"
                >
                  <Link
                    href="/login"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Sign In
                  </Link>
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#2A623D] to-[#1A365D] text-white hover:opacity-90 rounded-xl transition-all duration-300 shadow-md">
                  <Link href="/register" className="w-full">
                    Register
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Search Overlay - can be expanded later */}
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
