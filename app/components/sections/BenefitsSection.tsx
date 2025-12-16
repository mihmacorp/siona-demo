"use client";

import { Receipt, Server, Shield, Wallet, Zap } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Deploy in minutes",
    description: "Spin up new client environments instantly.",
  },
  {
    icon: Shield,
    title: "No DevOps needed",
    description:
      "Siona handles servers, Docker, security, backups, and updates.",
  },
  {
    icon: Receipt,
    title: "Automated billing",
    description: "Subscriptions, renewals, invoices — all handled for you.",
  },
  {
    icon: Wallet,
    title: "Payments go to you",
    description: "0% transaction fees. No intermediaries.",
  },
  {
    icon: Server,
    title: "Full control",
    description: "Everything runs in your cloud account.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-muted/50 border border-gray-200 mb-6">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Key Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Everything you need to run{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Odoo-as-a-Service
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete platform built for consulting businesses
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-muted/50 border border-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:border-gray-300 transition-all duration-300">
                  <benefit.icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
          
          {/* Empty slots for visual balance in 3-column layout */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
