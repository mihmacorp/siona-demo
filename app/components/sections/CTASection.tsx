"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section
      id="cta"
      className="py-20 md:py-32 bg-linear-to-br from-primary via-primary to-secondary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-content/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary-content" />
            <span className="text-primary-content/90 text-sm font-medium">
              Early Access Available
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-content font-display text-balance leading-tight">
            Become a SaaS provider without building infrastructure.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-primary-content/80 max-w-xl mx-auto text-balance">
            Get early access and deploy your first Odoo client in minutes.
          </p>

          <div className="mt-10">
            <button
            
              className="btn bg-primary-content text-primary btn-lg"
          
            >
              <a className="flex items-center" href="https://siona.mihma.com">
                Join the Early Access List
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
