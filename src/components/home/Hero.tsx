import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <Image
          src="/luxury_house.webp" 
          alt="Luxury estate"
          width={1920}
          height={1080}
          className="object-cover h-full w-full"
          priority
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading with animated reveal */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white animate-fade-up">
            Find Your <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Perfect Home</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light animate-fade-up [animation-delay:200ms]">
            Discover exceptional properties that match your lifestyle. Your dream home awaits.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up [animation-delay:400ms]">
            <Link href="/properties">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                Browse Properties
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto animate-fade-up [animation-delay:600ms]">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Premium Listings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
