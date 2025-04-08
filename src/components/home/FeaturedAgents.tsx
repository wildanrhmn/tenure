import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FeaturedAgents() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#1A365D]">
          Meet Our Top Agents
        </h2>
        <Link
          href="/agents"
          className="text-[#2A623D] hover:text-[#1A365D] font-medium flex items-center"
        >
          View all agents <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "Jessica Williams",
            specialty: "Luxury Properties",
            sales: 42,
            image: "https://picsum.photos/300/300?random=14",
          },
          {
            name: "David Thompson",
            specialty: "Commercial Real Estate",
            sales: 38,
            image: "https://picsum.photos/300/300?random=15",
          },
          {
            name: "Maria Garcia",
            specialty: "First-time Buyers",
            sales: 51,
            image: "https://picsum.photos/300/300?random=16",
          },
          {
            name: "Robert Chen",
            specialty: "Investment Properties",
            sales: 45,
            image: "https://picsum.photos/300/300?random=17",
          },
        ].map((agent, index) => (
          <Link
            href={`/agent/${agent.name.toLowerCase().replace(/\s+/g, "-")}`}
            key={index}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden">
                <Image
                  src={agent.image || "https://placehold.co/300x300"}
                  alt={agent.name}
                  width={300}
                  height={300}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#1A365D]">
                  {agent.name}
                </h3>
                <p className="text-[#9F8170] mb-2">{agent.specialty}</p>
                <p className="text-sm text-[#333333]">
                  {agent.sales} Properties Sold
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 