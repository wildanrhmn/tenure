"use client"

import { type ReactNode, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface AuthLayoutProps {
  children: ReactNode
}

// Testimonial data
const testimonials = [
  {
    quote:
      "Tenure has completely transformed how we manage our properties. The intuitive interface makes everything so much easier.",
    name: "Jane Doe",
    role: "Property Manager",
    initials: "JD",
  },
  {
    quote:
      "As a landlord with multiple properties, Tenure has saved me countless hours. The automated payment system is a game-changer.",
    name: "Robert Smith",
    role: "Real Estate Investor",
    initials: "RS",
  },
  {
    quote:
      "The tenant screening process through Tenure is seamless. I've found reliable tenants faster than ever before.",
    name: "Maria Garcia",
    role: "Property Owner",
    initials: "MG",
  },
]

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - decorative with testimonial carousel */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-teal-400 to-emerald-600 p-12 relative">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 flex flex-col h-full justify-between w-full">
          <div>
            <h1 className="text-4xl font-bold text-white">Tenure</h1>
            <p className="text-white/80 mt-2">Property management simplified</p>
          </div>

          <div className="space-y-8 w-full">
            <div className="relative">
              {/* Testimonial carousel */}
              <div className="overflow-hidden">
                <div
                  className="transition-all duration-500 ease-in-out flex"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 min-w-full"
                    >
                      <p className="text-white text-lg font-medium">"{testimonial.quote}"</p>
                      <div className="mt-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-medium">
                          {testimonial.initials}
                        </div>
                        <div className="ml-3">
                          <p className="text-white font-medium">{testimonial.name}</p>
                          <p className="text-white/70 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentTestimonial === index ? "bg-white/80 scale-125" : "bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-white/60 text-sm">© {new Date().getFullYear()} Tenure. All rights reserved.</div>
        </div>
      </div>

      {/* Right side - auth forms */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 md:hidden">
            <h1 className="text-3xl font-bold text-gray-900">Tenure</h1>
            <p className="text-gray-500 mt-2">Property management simplified</p>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">{children}</div>

          <div className="mt-8 text-center text-sm text-gray-500 md:hidden">
            © {new Date().getFullYear()} Tenure. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
