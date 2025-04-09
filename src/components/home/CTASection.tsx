import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-[#1A365D] to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <Home className="w-4 h-4 mr-2 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-300">Find Your Dream Home</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
          Ready to Find Your Perfect Property?
        </h2>
        
        <p className="max-w-2xl mx-auto mb-12 text-lg text-slate-300 leading-relaxed">
          Join thousands of satisfied customers who have found their dream
          homes with Tenure. Your journey to the perfect home starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 group">
            <Link href="/properties" className="flex items-center">
              Browse Properties
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          
          <Button
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}