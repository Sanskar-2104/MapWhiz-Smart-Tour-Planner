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





'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, MapPin, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    // check initially
    const check = () => setIsAuthenticated(!!sessionStorage.getItem('authToken'));
    check();

    // custom same-tab event
    const onAuthChanged = () => check();

    // storage event for other tabs
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'authToken') check();
    };

    window.addEventListener('authChanged', onAuthChanged as EventListener);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('authChanged', onAuthChanged as EventListener);
      window.removeEventListener('storage', onStorage);
    };
}, []);

  // optional: update auth state when page becomes visible (useful after login redirect)
  useEffect(() => {
    const handleVisibility = () => {
      const token = sessionStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };
    window.addEventListener('visibilitychange', handleVisibility);
    return () => window.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    setIsAuthenticated(false);
    // close dropdowns / mobile menu
    setProfileOpen(false);
    setIsOpen(false);
    // redirect to login
    window.location.href = '/login';
  };

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

            {/* Auth area (keeps CSS classes unchanged) */}
            {!isAuthenticated ? (
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
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(prev => !prev)}
                  className="flex items-center text-slate-200 hover:text-white transition-colors rounded-full p-1"
                  aria-expanded={profileOpen}
                >
                  <User className="h-7 w-7" />
                </button>

                {/* simple dropdown (visible when profileOpen true) */}
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-44 py-2 bg-slate-800 rounded-xl border border-slate-700 shadow-xl">
                    <Link href="/profile" className="block px-4 py-2 text-slate-300 hover:bg-slate-700/50">
                      My Profile
                    </Link>
                    <Link href="/my-bookings" className="block px-4 py-2 text-slate-300 hover:bg-slate-700/50">
                      My Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-slate-700/50 flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors"
              aria-expanded={isOpen}
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

            {/* Mobile auth entries */}
            {!isAuthenticated ? (
              <Link href="/login" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
                Login
              </Link>
            ) : (
              <>
                <Link href="/profile" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
                  My Profile
                </Link>
                <Link href="/my-bookings" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
                  My Bookings
                </Link>
                <button
                  onClick={() => { handleLogout(); }}
                  className="block w-full text-left px-3 py-2 text-red-400 hover:bg-slate-700/50 transition-colors"
                >
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
