"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Building, Heart, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
          <Image
            src="https://picsum.photos/1920/1080?random=1"
            alt="About Tenure"
            width={1920}
            height={1080}
            className="object-cover h-full w-full"
            priority
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              About <span className="text-amber-400 font-serif italic">Tenure</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in real estate, connecting you with your dream property since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6 font-medium">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-8 leading-tight">
                A Decade of Excellence in Real Estate
              </h2>
              <div className="w-32 h-1 bg-emerald-600 mb-8 rounded-full"></div>
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                Tenure was founded with a simple mission: to make real estate accessible, transparent, and enjoyable for
                everyone. We recognized that the traditional real estate process was often complex, time-consuming, and
                lacked the modern tools that today's buyers and sellers expect.
              </p>
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                What started as a small team of real estate enthusiasts has grown into a trusted platform that connects
                thousands of property seekers with their perfect homes. Our journey has been driven by innovation,
                customer feedback, and a commitment to excellence in every aspect of the real estate experience.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Today, Tenure stands as a testament to what's possible when technology meets real estate expertise. We
                continue to evolve and expand our services, always keeping our users' needs at the heart of everything
                we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <Image src="https://picsum.photos/800/1000?random=2" alt="Our Story" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6 font-medium">
              Our Principles
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Mission & Values</h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-700 max-w-3xl mx-auto text-xl leading-relaxed">
              At Tenure, we're guided by a clear mission and a set of core values that shape everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "We believe in complete honesty and clarity throughout the real estate process.",
                icon: Shield,
                color: "from-emerald-500 to-teal-600",
                delay: 0.1,
              },
              {
                title: "Customer Focus",
                description: "Our users' needs and satisfaction are at the heart of every decision we make.",
                icon: Heart,
                color: "from-rose-500 to-pink-600",
                delay: 0.2,
              },
              {
                title: "Innovation",
                description: "We continuously evolve our platform with cutting-edge technology and features.",
                icon: Award,
                color: "from-amber-500 to-orange-600",
                delay: 0.3,
              },
              {
                title: "Community",
                description: "We foster connections between buyers, sellers, and real estate professionals.",
                icon: Users,
                color: "from-sky-500 to-blue-600",
                delay: 0.4,
              },
              {
                title: "Quality",
                description: "We maintain high standards for all properties and services on our platform.",
                icon: CheckCircle,
                color: "from-violet-500 to-purple-600",
                delay: 0.5,
              },
              {
                title: "Growth",
                description: "We're committed to expanding our reach and improving our services.",
                icon: Building,
                color: "from-slate-600 to-slate-800",
                delay: 0.6,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: value.delay }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-8`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-sky-100 text-sky-800 rounded-full mb-6 font-medium">
              Our Leadership
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Meet Our Team</h2>
            <div className="w-32 h-1 bg-emerald-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-700 max-w-3xl mx-auto text-xl leading-relaxed">
              Our diverse team of real estate experts, technologists, and customer service professionals work together
              to deliver an exceptional experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Wildan Nur Rahman",
                role: "CEO & Founder",
                image: "https://picsum.photos/400/500?random=3",
                delay: 0.1,
              },
              {
                name: "Wildan Nur Rahman",
                role: "CTO",
                image: "https://picsum.photos/400/500?random=4",
                delay: 0.2,
              },
              {
                name: "Wildan Nur Rahman",
                role: "Head of Operations",
                image: "https://picsum.photos/400/500?random=5",
                delay: 0.3,
              },
              {
                name: "Wildan Nur Rahman",
                role: "Head of Marketing",
                image: "https://picsum.photos/400/500?random=6",
                delay: 0.4,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: member.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: "10K+", label: "Properties Listed", delay: 0.1 },
              { number: "5K+", label: "Happy Clients", delay: 0.2 },
              { number: "500+", label: "Expert Agents", delay: 0.3 },
              { number: "50+", label: "Cities Covered", delay: 0.4 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-300">
                  {stat.number}
                </div>
                <p className="text-xl text-slate-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-16 text-center text-white overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
            <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to Find Your Dream Property?</h2>
            <p className="text-2xl mb-10 max-w-2xl mx-auto opacity-90 relative z-10">
              Join thousands of satisfied customers who have found their perfect home through Tenure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link href="/properties">
                <Button className="bg-white text-emerald-700 hover:bg-neutral-100 px-8 py-7 text-lg font-medium rounded-xl">
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  className="border-white text-white hover:bg-dark/10 px-8 py-7 text-lg font-medium rounded-xl"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
