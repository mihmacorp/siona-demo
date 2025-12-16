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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-content font-bold text-lg">
                S
              </span>
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
            <button
              className="btn btn-primary"
            
            >
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
          <div className="md:hidden py-4 border-t border-base-300 bg-background">
            <nav className="flex flex-col gap-4">
              <a
                href="#benefits"
                className="opacity-70 hover:opacity-100 transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                className="opacity-70 hover:opacity-100 transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#who-its-for"
                className="opacity-70 hover:opacity-100 transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who it&apos;s for
              </a>
              <button
                className="mt-2 btn btn-primary"
              
              >
                <a href="#cta" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Early Access
                </a>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
