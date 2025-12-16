"use client";

import { Check } from "lucide-react";
import Image from "next/image";

export default function SubHeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="relative h-100 lg:h-125 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>
              <Image
                src="/consulting.jpg"
                alt="Odoo consulting professionals"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent z-10"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-muted/50 border border-gray-200 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Complete Solution
              </span>
            </div>

            {/* Main Text */}
            <h2 className="text-2xl font-display md:text-3xl lg:text-4xl text-foreground leading-tight font-bold mb-6">
              Siona lets Odoo consultants deliver{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  &quot;Odoo-as-a-Service&quot;
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -rotate-1"></span>
              </span>{" "}
              from their own cloud account
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              Fully automated. Zero infrastructure hassle.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-5">
              <div className="group/card relative overflow-hidden bg-muted/30 hover:bg-muted/50 rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 bg-foreground/5 rounded-full blur-2xl"></div>
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-foreground/10 border border-gray-200 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
                    <Check
                      className="h-5 w-5 text-foreground font-bold"
                      strokeWidth={3}
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">
                      Your clients get SaaS
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Professional, scalable service
                    </p>
                  </div>
                </div>
              </div>

              <div className="group/card relative overflow-hidden bg-muted/30 hover:bg-muted/50 rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 bg-foreground/5 rounded-full blur-2xl"></div>
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-foreground/10 border border-gray-200 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
                    <Check
                      className="h-5 w-5 text-foreground font-bold"
                      strokeWidth={3}
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">
                      You keep everything
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Full control, ownership & margin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
