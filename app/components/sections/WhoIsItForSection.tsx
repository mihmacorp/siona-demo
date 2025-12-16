"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    title: "Odoo Consultants",
    description: "Independent consultants delivering tailored Odoo solutions to multiple clients",
  },
  {
    title: "ERP Implementation Firms",
    description: "Agencies managing large-scale enterprise deployments and migrations",
  },
  {
    title: "Multi-Client Agencies",
    description: "Teams handling diverse client environments with varying requirements",
  },
  {
    title: "Freelance Operators",
    description: "Independent professionals managing Odoo instances for their client base",
  },
];

export default function WhoItsForSection() {
  return (
    <section id="who-its-for" className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-linear-to-b from-base-100 via-muted/20 to-base-100"></div>
      
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
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Who It&apos;s For</span>
          </div>
          <h2 className="text-3xl font-display md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Odoo professionals
            </span>{" "}
            who want to scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you&apos;re managing one client or hundreds
          </p>
        </motion.div>

        {/* Audiences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="group relative bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/10 border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-sm font-bold text-primary">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
