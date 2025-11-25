// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X, MapPin } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="glassEffect bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="flex items-center space-x-2">
//             <MapPin className="h-8 w-8 text-violet-500" />
//             <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
//               Smart Tour Planner
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-slate-300 hover:text-white transition-colors">
//               Home
//             </Link>
//             <Link href="/plan-trip" className="text-slate-300 hover:text-white transition-colors">
//               Plan Trip
//             </Link>
//             <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
//               Dashboard
//             </Link>
//             <Link href="/saved-trips" className="text-slate-300 hover:text-white transition-colors">
//               Saved Trips
//             </Link>
//             <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
//               About Us
//             </Link>
//             <Link href="/booking-info" className="gradient-primary text-white px-4 py-2 rounded-2xl hover:shadow-lg transition-all duration-300">
//               Booking Info
//             </Link>
//             <div className="light_skew_hover">
//               <div className="effect-parent">
//                 <span></span><span></span><span></span>
//               </div>
//               <Link href="/login" className="light_skew">
//                 <span className="cta_text">
//                   Login/Sign up
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-slate-300 hover:text-white transition-colors"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-slate-700/50">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link href="/" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
//               Home
//             </Link>
//             <Link href="/plan-trip" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
//               Plan Trip
//             </Link>
//             <Link href="/dashboard" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
//               Dashboard
//             </Link>
//             <Link href="/saved-trips" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
//               Saved Trips
//             </Link>
//             <Link href="/about" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
//               About Us
//             </Link>
//             <Link href="/login" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
//               Login
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User, MapPin, LogOut } from "lucide-react";

interface Props {
  isAuthenticated: boolean;
}

export default function Navbar({ isAuthenticated }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" }); // removes cookie server-side
    window.location.href = "/login";
  };

  return (
    <nav className="glassEffect bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-violet-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Smart Tour Planner
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/plan-trip" className="nav-link">Plan Trip</Link>
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            <Link href="/saved-trips" className="nav-link">Saved Trips</Link>
            <Link href="/about" className="nav-link">About Us</Link>

            {/* SHOW LOGIN OR PROFILE */}
            {!isAuthenticated ? (
              <Link
                href="/login"
                className="text-slate-300 hover:text-white border px-4 py-2 rounded-xl border-slate-600"
              >
                Login / Sign Up
              </Link>
            ) : (
              <div className="relative group">
                <button className="flex items-center text-slate-200 hover:text-white">
                  <User className="h-7 w-7" />
                </button>

                <div className="absolute right-0 mt-3 w-40 bg-slate-800 rounded-xl border border-slate-700 shadow-xl py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Link href="/profile" className="dropdown-item">My Profile</Link>
                  <Link href="/my-bookings" className="dropdown-item">My Bookings</Link>

                  <button
                    onClick={handleLogout}
                    className="dropdown-item text-red-400 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-slate-700/50">
          <div className="px-3 py-2 space-y-1">
            <Link href="/" className="mobile-nav">Home</Link>
            <Link href="/plan-trip" className="mobile-nav">Plan Trip</Link>
            <Link href="/dashboard" className="mobile-nav">Dashboard</Link>
            <Link href="/saved-trips" className="mobile-nav">Saved Trips</Link>
            <Link href="/about" className="mobile-nav">About Us</Link>

            {!isAuthenticated ? (
              <Link href="/login" className="mobile-nav">Login</Link>
            ) : (
              <>
                <Link href="/profile" className="mobile-nav">My Profile</Link>
                <Link href="/my-bookings" className="mobile-nav">My Bookings</Link>
                <button onClick={handleLogout} className="mobile-nav text-red-400">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
