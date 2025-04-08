import Image from "next/image";
import Link from "next/link";

export default function NeighborhoodSpotlight() {
  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-4 text-center">
          Neighborhood Spotlight
        </h2>
        <p className="text-[#333333] max-w-3xl mx-auto text-center mb-12">
          Explore trending neighborhoods and discover what makes each area
          unique
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Downtown Heights",
              description:
                "Urban living with easy access to restaurants, shopping, and entertainment.",
              properties: 42,
              image: "https://picsum.photos/400/250?random=11",
            },
            {
              name: "Riverside Gardens",
              description:
                "Peaceful waterfront community with parks and outdoor recreation.",
              properties: 28,
              image: "https://picsum.photos/400/250?random=12",
            },
            {
              name: "Oakwood Estates",
              description:
                "Family-friendly suburb with top-rated schools and spacious homes.",
              properties: 35,
              image: "https://picsum.photos/400/250?random=13",
            },
          ].map((neighborhood, index) => (
            <Link
              href={`/neighborhood/${neighborhood.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={index}
            >
              <div className="group relative overflow-hidden rounded-lg h-64">
                <Image
                  src={neighborhood.image || "https://placehold.co/400x250"}
                  alt={neighborhood.name}
                  width={400}
                  height={250}
                  className="object-cover h-full w-full transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {neighborhood.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-2">
                    {neighborhood.description}
                  </p>
                  <p className="text-[#D4AF37]">
                    {neighborhood.properties} Properties
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