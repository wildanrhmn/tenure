import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#1A365D] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-md bg-white p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1A365D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-xl font-bold">Tenure</span>
            </div>
            <p className="text-white/70 mb-4">
              Your trusted partner in finding the perfect property. We're
              committed to making real estate simple and accessible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  ></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties"
                  className="text-white/70 hover:text-white"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/agents"
                  className="text-white/70 hover:text-white"
                >
                  Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-white/70 hover:text-white"
                >
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-white/70 hover:text-white"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties/houses"
                  className="text-white/70 hover:text-white"
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/apartments"
                  className="text-white/70 hover:text-white"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/condos"
                  className="text-white/70 hover:text-white"
                >
                  Condos
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/commercial"
                  className="text-white/70 hover:text-white"
                >
                  Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/land"
                  className="text-white/70 hover:text-white"
                >
                  Land
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Stay updated with the latest properties and real estate news
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md text-[#333333] focus:outline-none"
              />
              <Button className="rounded-l-none bg-[#2A623D] hover:bg-[#D4AF37] hover:text-[#1A365D]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tenure Real Estate. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/terms"
              className="text-white/70 text-sm hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-white/70 text-sm hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/sitemap"
              className="text-white/70 text-sm hover:text-white"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 