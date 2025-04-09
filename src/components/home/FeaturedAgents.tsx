import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Award, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedAgents() {
  const agents = [
    {
      name: "Jessica Williams",
      specialty: "Luxury Properties",
      sales: 42,
      image: "https://picsum.photos/400/400?random=1",
      rating: 4.9,
      reviews: 38,
    },
    {
      name: "David Thompson",
      specialty: "Commercial Real Estate",
      sales: 38,
      image: "https://picsum.photos/400/400?random=2",
      rating: 4.8,
      reviews: 42,
    },
    {
      name: "Maria Garcia",
      specialty: "First-time Buyers",
      sales: 51,
      image: "https://picsum.photos/400/400?random=3",
      rating: 5.0,
      reviews: 56,
    },
    {
      name: "Robert Chen",
      specialty: "Investment Properties",
      sales: 45,
      image: "https://picsum.photos/400/400?random=4",
      rating: 4.7,
      reviews: 31,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-4">
              Expert Team
            </div>
            <h2 className="text-4xl font-bold text-slate-800">Meet Our Top Agents</h2>
          </div>
          <Link
            href="/agents"
            className="mt-4 md:mt-0 text-teal-600 hover:text-teal-700 font-medium flex items-center group"
          >
            View all agents{" "}
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-slate-700 flex items-center z-20">
                  <Award className="h-3 w-3 text-amber-500 mr-1" />
                  Top Agent
                </div>
                <div className="h-72 overflow-hidden">
                  <Image
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    width={400}
                    height={400}
                    className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                  {agent.name}
                </h3>
                <p className="text-teal-600 font-medium mb-2">{agent.specialty}</p>

                <div className="flex items-center text-sm text-slate-600 mb-4">
                  <span className="font-semibold text-amber-500 mr-1">{agent.rating}</span>
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.floor(agent.rating) ? "text-amber-400" : "text-slate-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-slate-500">({agent.reviews} reviews)</span>
                </div>

                <div className="flex items-center text-slate-700 mb-1">
                  <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mr-3">
                    <Award className="h-4 w-4 text-teal-600" />
                  </div>
                  <span>{agent.sales} Properties Sold</span>
                </div>

                <div className="mt-6 flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200"
                  >
                    <Phone className="h-3.5 w-3.5 mr-1" /> Call
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200"
                  >
                    <Mail className="h-3.5 w-3.5 mr-1" /> Email
                  </Button>
                </div>

                <Link
                  href={`/agent/${agent.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-4 block text-center text-sm font-medium text-teal-600 hover:text-teal-700 py-2 border-t border-slate-100"
                >
                  View Full Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
