import Image from "next/image"
import Link from "next/link"
import { MapPin, Home, ArrowRight } from "lucide-react"

export default function NeighborhoodSpotlight() {
  const neighborhoods = [
    {
      name: "Downtown Heights",
      description: "Urban living with easy access to restaurants, shopping, and entertainment.",
      properties: 42,
      image: "https://picsum.photos/500/800?random=1",
      featured: true,
    },
    {
      name: "Riverside Gardens",
      description: "Peaceful waterfront community with parks and outdoor recreation.",
      properties: 28,
      image: "https://picsum.photos/500/800?random=2",
    },
    {
      name: "Oakwood Estates",
      description: "Family-friendly suburb with top-rated schools and spacious homes.",
      properties: 35,
      image: "https://picsum.photos/500/800?random=3",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Discover
          </div>
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Neighborhood Spotlight</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg">
            Explore trending neighborhoods and discover what makes each area unique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <Link
              href={`/neighborhood/${neighborhood.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
              className="group flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-xl h-64 mb-4">
                {neighborhood.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent z-10"></div>
                <Image
                  src={neighborhood.image || "/placeholder.svg"}
                  alt={neighborhood.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center text-emerald-300 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{neighborhood.name}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex-1 border border-slate-100 group-hover:border-emerald-100 group-hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {neighborhood.name}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-2">{neighborhood.description}</p>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex items-center text-slate-700">
                    <Home className="h-4 w-4 mr-2 text-emerald-500" />
                    <span className="font-medium">{neighborhood.properties} Properties</span>
                  </div>
                  <span className="text-emerald-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Explore <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/neighborhoods"
            className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 text-slate-800 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm group"
          >
            View All Neighborhoods
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
