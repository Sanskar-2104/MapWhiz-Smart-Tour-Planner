'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glassEffect bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-violet-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Smart Tour Planner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/plan-trip" className="text-slate-300 hover:text-white transition-colors">
              Plan Trip
            </Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/saved-trips" className="text-slate-300 hover:text-white transition-colors">
              Saved Trips
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/booking-info" className="gradient-primary text-white px-4 py-2 rounded-2xl hover:shadow-lg transition-all duration-300">
              Booking Info
            </Link>
            <div className="light_skew_hover">
              <div className="effect-parent">
                <span></span><span></span><span></span>
              </div>
              <Link href="/login" className="light_skew">
                <span className="cta_text">
                  Login/Sign up
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/plan-trip" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
              Plan Trip
            </Link>
            <Link href="/dashboard" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/saved-trips" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
              Saved Trips
            </Link>
            <Link href="/about" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/login" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}