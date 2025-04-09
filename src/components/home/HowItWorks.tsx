import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Search Properties",
      description: "Browse thousands of listings with detailed filters to find your perfect match.",
    },
    {
      step: "2",
      title: "Connect with Agents",
      description: "Get in touch with experienced real estate professionals who can guide you.",
    },
    {
      step: "3",
      title: "Close the Deal",
      description: "Finalize your transaction with confidence using our secure platform.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300">
            How Tenure Works
          </h2>
          <p className="text-slate-300 text-lg mb-6">Your journey to finding the perfect property starts here</p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/10 to-teal-600/5 rounded-xl -m-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-all duration-300">
                  {step.step}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
            Get Started
            <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
