import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedProperties() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-[#1A365D] relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-24 after:h-1 after:bg-[#2A623D]">
          Featured Properties
        </h2>
        <Link
          href="/properties"
          className="text-[#2A623D] hover:text-[#1A365D] font-medium flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:translate-x-2 group"
        >
          View all properties <ChevronRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            id: 1,
            title: "Modern Luxury Villa",
            address: "123 Maple Avenue, Beverly Hills",
            price: "$2,450,000",
            beds: 5,
            baths: 4,
            sqft: "3,850",
            type: "For Sale",
            image: "https://picsum.photos/500/300?random=1",
          },
          {
            id: 2,
            title: "Downtown Penthouse",
            address: "456 Urban Street, New York",
            price: "$5,750/month",
            beds: 3,
            baths: 2,
            sqft: "1,950",
            type: "For Rent",
            image: "https://picsum.photos/500/300?random=2",
          },
          {
            id: 3,
            title: "Suburban Family Home",
            address: "789 Oak Drive, Austin",
            price: "$875,000",
            beds: 4,
            baths: 3,
            sqft: "2,750",
            type: "For Sale",
            image: "https://picsum.photos/500/300?random=3",
          },
        ].map((property) => (
          <Card
            key={property.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer py-0"
          >
            <div className="relative h-72 w-full">
              <div className="absolute top-4 left-4 z-10 bg-[#1A365D]/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                {property.type}
              </div>
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <CardContent className="p-4 bg-white space-y-4">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#1A365D] group-hover:text-[#2A623D] transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center text-[#9F8170]">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p className="text-sm font-medium">{property.address}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-[#2A623D]">
                  {property.price}
                </p>
                <span className="px-4 py-2 bg-[#F8F8F4] rounded-full text-sm font-medium text-[#1A365D]">
                  {property.type}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E8E0]">
                <div className="flex flex-col items-center p-3 bg-[#F8F8F4] rounded-lg">
                  <p className="text-lg font-semibold text-[#1A365D]">{property.beds}</p>
                  <p className="text-sm font-medium text-[#9F8170]">Beds</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-[#F8F8F4] rounded-lg">
                  <p className="text-lg font-semibold text-[#1A365D]">{property.baths}</p>
                  <p className="text-sm font-medium text-[#9F8170]">Baths</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-[#F8F8F4] rounded-lg">
                  <p className="text-lg font-semibold text-[#1A365D]">{property.sqft}</p>
                  <p className="text-sm font-medium text-[#9F8170]">Sq Ft</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 