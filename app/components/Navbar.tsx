"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-base-100 ${
        isScrolled
          ? "md:bg-base-100/95 md:backdrop-blur-md md:shadow-sm"
          : "md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-content font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold">Siona</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#benefits"
              className="opacity-70 hover:opacity-100 transition-colors hover:text-primary"
            >
              Benefits
            </a>
            <a
              href="#how-it-works"
              className="opacity-70 hover:opacity-100 transition-colors hover:text-primary"
            >
              How it works
            </a>
            <a
              href="#who-its-for"
              className="opacity-70 hover:opacity-100 transition-colors hover:text-primary"
            >
              Who it&apos;s for
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="btn btn-primary">
              <a href="#cta">Get Early Access</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-base-100 backdrop-blur-lg border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col px-4 py-6">
              <a
                href="#benefits"
                className="group flex items-center justify-between py-3 px-4 rounded-lg hover:bg-muted/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  Benefits
                </span>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="group flex items-center justify-between py-3 px-4 rounded-lg hover:bg-muted/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  How it works
                </span>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#who-its-for"
                className="group flex items-center justify-between py-3 px-4 rounded-lg hover:bg-muted/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  Who it&apos;s for
                </span>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="#cta"
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Early Access
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
