"use client";

import { motion } from "framer-motion";
import { Cloud, Rocket, UserPlus } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "1",
    icon: Cloud,
    title: "Connect your cloud account",
    description:
      "Link your Hetzner account in seconds. Support for AWS, Azure, and GCP coming soon.",
  },
  {
    number: "2",
    icon: UserPlus,
    title: "Add a new client",
    description:
      "Configure Odoo version and subscription plan through our intuitive dashboard.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Deploy automatically",
    description:
      "Siona provisions the environment and delivers access credentials to your client instantly.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle Background */}
      
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-muted/50 border border-gray-200 mb-6">
            <span className="text-xs font-medium uppercase tracking-wide opacity-80">How It Works</span>
          </div>
          <h2 className="text-3xl font-display md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Launch client environments{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              in minutes
            </span>
          </h2>
          <p className="text-lg opacity-80">
            Three simple steps from setup to deployment
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Steps */}
          <div className="relative lg:pl-16">
            {/* Vertical Line - Desktop Only */}
            <div className="hidden lg:block absolute left-6 top-8 bottom-8 w-px bg-gray-200"></div>
            
            {/* Steps */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-base-100/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
                >
                  {/* Step Number - Desktop */}
                  <div className="hidden lg:flex absolute -left-16 top-6 w-12 h-12 rounded-full bg-base-100 border-2 border-gray-200 items-center justify-center z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Number - Mobile */}
                  <div className="lg:hidden absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary border-2 border-base-100 flex items-center justify-center shadow-lg z-10">
                    <span className="text-sm font-bold text-primary-content">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-muted/50 border border-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:border-gray-300 transition-all duration-300">
                      <step.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-display md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="opacity-80 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative group order-first lg:order-last"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative h-80 md:h-100 lg:h-125 rounded-3xl overflow-hidden shadow-2xl">
            
              <Image
                src="/consulting-2.jpg"
                alt="Streamlined deployment process"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
             
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
