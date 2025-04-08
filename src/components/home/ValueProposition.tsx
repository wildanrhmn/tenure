import { CheckCircle, Star, Users } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-4">
          Why Choose Tenure for Your Real Estate Journey
        </h2>
        <p className="text-[#333333] max-w-3xl mx-auto">
          We're committed to providing an exceptional experience for buyers,
          sellers, and renters with our trusted platform and expert services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
          >
            <div className="w-14 h-14 rounded-full bg-[#1A365D] flex items-center justify-center mb-4">
              <feature.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">
              {feature.title}
            </h3>
            <p className="text-[#333333]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 