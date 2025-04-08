import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const Hero = () => {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      {/* Background video/image with parallax effect */}
      <div className="absolute inset-0 transform scale-105">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Luxury real estate showcase"
          width={1920}
          height={1080}
          className="object-cover h-full w-full transform scale-105 animate-subtle-zoom"
          priority
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Discover Your <span className="text-[#D4AF37]">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Your journey to the perfect property begins here. Explore our
            curated selection of premium real estate.
          </p>

          {/* Enhanced Search Interface */}
          <div className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform">
            <Tabs defaultValue="buy" className="w-full">
              <TabsContent value="buy" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <MapPin className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-[#2A623D]" />
                    <input
                      type="text"
                      placeholder="Where would you like to live?"
                      className="w-full rounded-xl border-2 border-[#E8E8E0] bg-white/50 h-[60px] pl-12 pr-4 text-lg text-[#333333] placeholder:text-[#9F8170] focus:border-[#2A623D] focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <Button className="md:w-auto h-[60px] bg-gradient-to-r from-[#2A623D] to-[#1A365D] hover:from-[#1A365D] hover:to-[#2A623D] text-white px-8 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                    Search Properties
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    Price Range
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    Bedrooms
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    Bathrooms
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    Property Type
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    More Filters
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="rent" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <MapPin className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-[#2A623D]" />
                    <input
                      type="text"
                      placeholder="Find your perfect rental"
                      className="w-full rounded-xl border-2 border-[#E8E8E0] bg-white/50 py-4 pl-12 pr-4 text-lg text-[#333333] placeholder:text-[#9F8170] focus:border-[#2A623D] focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <Button className="md:w-auto bg-gradient-to-r from-[#2A623D] to-[#1A365D] hover:from-[#1A365D] hover:to-[#2A623D] text-white py-4 px-8 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                    Find Rentals
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    Rent Range
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    Bedrooms
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    Lease Length
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-[#E8E8E0] text-[#333333] hover:bg-[#2A623D] hover:text-white transition-all duration-300"
                  >
                    More Filters
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="sell" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <MapPin className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-[#2A623D]" />
                    <input
                      type="text"
                      placeholder="Enter your property address"
                      className="w-full rounded-xl border-2 border-[#E8E8E0] bg-white/50 py-4 pl-12 pr-4 text-lg text-[#333333] placeholder:text-[#9F8170] focus:border-[#2A623D] focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <Button className="md:w-auto bg-gradient-to-r from-[#2A623D] to-[#1A365D] hover:from-[#1A365D] hover:to-[#2A623D] text-white py-4 px-8 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                    Get Estimate
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
