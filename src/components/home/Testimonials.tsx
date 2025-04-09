import Image from "next/image"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      quote:
        "Tenure made finding our dream home so easy. The search tools were intuitive and our agent was incredibly helpful throughout the entire process.",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      quote:
        "As an investor, I appreciate the detailed market data and the quality of listings on Tenure. It's become my go-to platform for finding investment properties.",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Seller",
      quote:
        "Selling my first home was daunting, but Tenure connected me with an amazing agent who guided me through every step. Sold above asking price!",
      image: "https://picsum.photos/200/300",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">
            Discover why thousands of clients trust Tenure for their real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-500/10 to-emerald-500/20 rounded-bl-full"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-teal-500/10 to-emerald-500/20 rounded-tr-full"></div>

              <div className="p-8 relative z-10">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-emerald-100 rotate-180" />

                <div className="flex flex-col h-full">
                  <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>

                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <div className="flex items-center">
                      <div className="relative w-14 h-14 mr-4 rounded-full overflow-hidden ring-2 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 fill-amber-400 text-amber-400 group-hover:fill-amber-500 group-hover:text-amber-500 transition-colors duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white border border-emerald-200 text-emerald-600 rounded-full font-medium hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 shadow-sm">
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  )
}
