import Link from "next/link";
import { Building, Home } from "lucide-react";

export default function PropertyCategories() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A365D] mb-4">
            Explore Properties by Category
          </h2>
          <div className="w-24 h-1 bg-[#2A623D] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className="group"
            >
              <div 
                className="relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative p-8 h-[300px] flex flex-col justify-end items-center text-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <category.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#2A623D] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-lg text-white/80">
                    {category.count.toLocaleString()} Properties
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 