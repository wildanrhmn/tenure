import { CheckCircle, Star, Users } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A365D] mb-6">
            Why Choose Tenure for Your Real Estate Journey
          </h2>
          <div className="w-24 h-1 bg-[#2A623D] mx-auto mb-6"></div>
          <p className="text-[#333333] max-w-3xl mx-auto text-lg">
            We're committed to providing an exceptional experience for buyers,
            sellers, and renters with our trusted platform and expert services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Trusted by Thousands",
              description:
                "Join the thousands of satisfied customers who have found their perfect property through our platform.",
              icon: Users,
            },
            {
              title: "Verified Listings",
              description:
                "Every property on Tenure is verified by our team to ensure accuracy and quality.",
              icon: CheckCircle,
            },
            {
              title: "Expert Guidance",
              description:
                "Our network of professional agents provides personalized support throughout your journey.",
              icon: Star,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A365D] to-[#2A623D] flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A365D] mb-4 group-hover:text-[#2A623D] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#333333] text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 