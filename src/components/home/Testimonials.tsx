import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#1A365D] mb-12 text-center">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Johnson",
            role: "Home Buyer",
            quote:
              "Tenure made finding our dream home so easy. The search tools were intuitive and our agent was incredibly helpful throughout the entire process.",
            image: "https://picsum.photos/100/100?random=8",
          },
          {
            name: "Michael Chen",
            role: "Property Investor",
            quote:
              "As an investor, I appreciate the detailed market data and the quality of listings on Tenure. It's become my go-to platform for finding investment properties.",
            image: "https://picsum.photos/100/100?random=9",
          },
          {
            name: "Emily Rodriguez",
            role: "First-time Seller",
            quote:
              "Selling my first home was daunting, but Tenure connected me with an amazing agent who guided me through every step. Sold above asking price!",
            image: "https://picsum.photos/100/100?random=10",
          },
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image || "https://placehold.co/60x60"}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-[#1A365D]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#9F8170]">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-[#333333] italic">"{testimonial.quote}"</p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 