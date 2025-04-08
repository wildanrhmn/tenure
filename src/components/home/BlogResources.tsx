import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BlogResources() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#1A365D]">
          Real Estate Resources
        </h2>
        <Link
          href="/blog"
          className="text-[#2A623D] hover:text-[#1A365D] font-medium flex items-center"
        >
          View all articles <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "First-Time Homebuyer's Guide",
            excerpt:
              "Everything you need to know about purchasing your first property, from financing to closing.",
            date: "April 2, 2025",
            category: "Buying",
            image: "https://picsum.photos/400/200?random=18",
          },
          {
            title: "5 Tips to Increase Your Property Value",
            excerpt:
              "Simple renovations and improvements that can significantly boost your home's market value.",
            date: "March 28, 2025",
            category: "Selling",
            image: "https://picsum.photos/400/200?random=19",
          },
          {
            title: "Understanding Real Estate Market Trends",
            excerpt:
              "An analysis of current market conditions and predictions for the coming year.",
            date: "March 15, 2025",
            category: "Market Analysis",
            image: "https://picsum.photos/400/200?random=20",
          },
        ].map((article, index) => (
          <Link
            href={`/blog/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
            key={index}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 overflow-hidden">
                <Image
                  src={article.image || "https://placehold.co/400x200"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium bg-[#E8E8E0] text-[#1A365D] px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#9F8170] ml-2">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1A365D] mb-2">
                  {article.title}
                </h3>
                <p className="text-[#333333] text-sm mb-3">
                  {article.excerpt}
                </p>
                <p className="text-[#2A623D] font-medium flex items-center">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 