import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Category = "Buying" | "Selling" | "Market Analysis" | "Investment" | "Financing"

export default function BlogResources() {
  const articles: {
    title: string
    excerpt: string
    date: string
    readTime: string
    category: Category
    image: string
    featured?: boolean
  }[] = [
    {
      title: "First-Time Homebuyer's Guide",
      excerpt: "Everything you need to know about purchasing your first property, from financing to closing.",
      date: "April 2, 2025",
      readTime: "8 min read",
      category: "Buying",
      image: "https://picsum.photos/500/800?random=1",
      featured: true,
    },
    {
      title: "5 Tips to Increase Your Property Value",
      excerpt: "Simple renovations and improvements that can significantly boost your home's market value.",
      date: "March 28, 2025",
      readTime: "6 min read",
      category: "Selling",
      image: "https://picsum.photos/500/800?random=2",
    },
    {
      title: "Understanding Real Estate Market Trends",
      excerpt: "An analysis of current market conditions and predictions for the coming year.",
      date: "March 15, 2025",
      readTime: "10 min read",
      category: "Market Analysis",
      image: "https://picsum.photos/500/800?random=3",
    },
  ]

  // Map categories to colors
  const categoryColors: Record<Category, { bg: string; text: string }> = {
    Buying: { bg: "bg-blue-50", text: "text-blue-600" },
    Selling: { bg: "bg-rose-50", text: "text-rose-600" },
    "Market Analysis": { bg: "bg-amber-50", text: "text-amber-600" },
    Investment: { bg: "bg-purple-50", text: "text-purple-600" },
    Financing: { bg: "bg-emerald-50", text: "text-emerald-600" },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-4">
              Knowledge Center
            </div>
            <h2 className="text-4xl font-bold text-slate-800">Real Estate Resources</h2>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 text-teal-600 hover:text-teal-700 font-medium flex items-center group"
          >
            View all articles{" "}
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              href={`/blog/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
              className="group flex flex-col h-full"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col h-full">
                <div className="relative">
                  {article.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="h-52 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-medium ${categoryColors[article.category]?.bg || "bg-slate-100"} ${
                        categoryColors[article.category]?.text || "text-slate-600"
                      } px-3 py-1.5 rounded-full`}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 flex-1">{article.excerpt}</p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center text-slate-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                    <span className="text-teal-600 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Read more <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-slate-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200"
          >
            Subscribe to Our Newsletter
          </Button>
        </div>
      </div>
    </section>
  )
}
