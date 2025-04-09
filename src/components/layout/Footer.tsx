import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin, Home } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-gradient-to-r from-amber-400 to-orange-300 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 p-2 shadow-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Tenure</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property. We're committed to making real estate simple and
              accessible.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {["Properties", "Agents", "Neighborhoods", "Resources", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-px bg-emerald-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Property Types
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {["Houses", "Apartments", "Condos", "Commercial", "Land"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/properties/${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-px bg-emerald-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Subscribe
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></span>
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Stay updated with the latest properties and real estate news
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus-visible:ring-emerald-500"
              />
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white font-medium transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tenure Real Estate. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {["Terms of Service", "Privacy Policy", "Sitemap"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-slate-400 text-sm hover:text-emerald-400 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
