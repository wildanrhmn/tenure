import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import PropertyCategories from "@/components/home/PropertyCategories";
import ValueProposition from "@/components/home/ValueProposition";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import NeighborhoodSpotlight from "@/components/home/NeighborhoodSpotlight";
import FeaturedAgents from "@/components/home/FeaturedAgents";
import CTASection from "@/components/home/CTASection";
import BlogResources from "@/components/home/BlogResources";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <PropertyCategories />
      <ValueProposition />
      <HowItWorks />
      <Testimonials />
      <NeighborhoodSpotlight />
      <FeaturedAgents />
      <CTASection />
      <BlogResources />
    </div>
  );
}
