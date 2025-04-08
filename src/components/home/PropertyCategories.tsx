import Image from "next/image";
import Link from "next/link";
import { Building, Home } from "lucide-react";

export default function PropertyCategories() {
  return (
    <section className="py-16 bg-[#E8E8E0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-8 text-center">
          Explore Properties by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Houses",
              icon: Home,
              count: 1245,
              image: "https://picsum.photos/400/300?random=4",
            },
            {
              name: "Apartments",
              icon: Building,
              count: 873,
              image: "https://picsum.photos/400/300?random=5",
            },
            {
              name: "Condos",
              icon: Building,
              count: 642,
              image: "https://picsum.photos/400/300?random=6",
            },
            {
              name: "Commercial",
              icon: Building,
              count: 391,
              image: "https://picsum.photos/400/300?random=7",
            },
          ].map((category, index) => (
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              key={index}
            >
              <div className="bg-white rounded-lg p-6 text-center transition-all hover:shadow-md hover:translate-y-[-5px]">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5F5DC] text-[#2A623D] mb-4">
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1A365D] mb-2">
                  {category.name}
                </h3>
                <p className="text-[#9F8170]">{category.count} Properties</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 