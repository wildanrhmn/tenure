import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-[#1A365D] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Perfect Property?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Join thousands of satisfied customers who have found their dream
          homes with Tenure
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#2A623D] hover:bg-[#D4AF37] hover:text-[#1A365D] text-white px-8 py-3 text-lg">
            <Link href="/properties">Browse Properties</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#1A365D] px-8 py-3 text-lg"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 