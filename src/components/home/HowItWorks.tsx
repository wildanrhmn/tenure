import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-[#1A365D] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          How Tenure Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Search Properties",
              description:
                "Browse thousands of listings with detailed filters to find your perfect match.",
            },
            {
              step: "2",
              title: "Connect with Agents",
              description:
                "Get in touch with experienced real estate professionals who can guide you.",
            },
            {
              step: "3",
              title: "Close the Deal",
              description:
                "Finalize your transaction with confidence using our secure platform.",
            },
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-[#2A623D] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
              {index < 2 && (
                <ArrowRight className="hidden md:block absolute top-6 -right-4 h-8 w-8 text-[#D4AF37]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 