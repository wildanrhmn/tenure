import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedProperties() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#1A365D]">
          Featured Properties
        </h2>
        <Link
          href="/properties"
          className="text-[#2A623D] hover:text-[#1A365D] font-medium flex items-center"
        >
          View all properties <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="overflow-hidden transition-all hover:shadow-lg"
          >
            <div className="relative h-64 w-full">
              <div className="absolute top-3 left-3 z-10 bg-[#1A365D] text-white px-3 py-1 rounded-full text-sm font-medium">
                {property.type}
              </div>
              <Image
                src={property.image}
                alt={property.title}
                width={500}
                height={300}
                className="object-cover h-full w-full"
              />
            </div>
            <CardContent className="p-5">
              <h3 className="text-xl font-bold text-[#1A365D] mb-1">
                {property.title}
              </h3>
              <div className="flex items-center text-[#9F8170] mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <p className="text-sm">{property.address}</p>
              </div>
              <p className="text-xl font-bold text-[#2A623D] mb-4">
                {property.price}
              </p>
              <div className="flex justify-between text-[#333333] border-t border-[#E8E8E0] pt-4">
                <div className="text-center">
                  <p className="font-medium">{property.beds}</p>
                  <p className="text-sm text-[#9F8170]">Beds</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">{property.baths}</p>
                  <p className="text-sm text-[#9F8170]">Baths</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">{property.sqft}</p>
                  <p className="text-sm text-[#9F8170]">Sq Ft</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 