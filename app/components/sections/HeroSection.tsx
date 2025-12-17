"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/40 via-bg-base-200 to-bg-base-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-linear-to-br from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl font-display! sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance leading-tight">
            Turn Your Odoo Consulting Business Into a{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              SaaS Product
            </span>
          </h1>

          <p className="mt-6 md:mt-8 text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto text-balance leading-relaxed">
            Deploy, manage, and bill your client environments automatically
            without DevOps.
          </p>

          <motion.div
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <Link
              href="/early-access"
              className="btn btn-primary btn-lg flex items-center"
            >
              Join the early-access program
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
