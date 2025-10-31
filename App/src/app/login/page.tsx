// "use client";
// import { useState } from "react";
// import PlanePath from "./components/PlanePath";
// import SignUpForm from "./components/SignUpForm";
// import GlobeBackground from "./GlobeBackground";
// import { AnimatePresence, motion } from "framer-motion";

// export default function LoginPage() {
//   const [showSignup, setShowSignup] = useState(false);

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#081a2b] via-[#0b2743] to-[#081a2b] overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         {/* <GlobeBackground /> */}
//         <PlanePath />
//         <AnimatePresence>
//           {showSignup && <SignUpForm onBack={() => setShowSignup(false)} />}
//         </AnimatePresence>
//       </div>
//       {!showSignup && (
//         <motion.div
//           className="z-10 w-full max-w-md p-8 bg-[#112240]/50 backdrop-blur-md rounded-2xl shadow-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl font-bold text-center mb-4 text-white">
//             Welcome to MapWhiz
//           </h1>
//           <p className="text-center text-gray-300 mb-6">
//             Your journey begins here ✈️
//           </p>
//           <form>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none"
//             />
//             <button className="w-full py-2 bg-[#f5e6cc] text-black font-semibold rounded-md">
//               Login
//             </button>
//           </form>
//           <div className="flex justify-between mt-4 text-gray-400 text-sm">
//             <a href="#">Forgot Password?</a>
//             <button onClick={() => setShowSignup(true)}>Sign Up</button>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// }




"use client";
import { useState } from "react";
import PlanePath from "./components/PlanePath";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import GlobeBackground from "./GlobeBackground";
import { AnimatePresence } from "framer-motion";

export default function LoginPage() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#081a2b] via-[#0b2743] to-[#081a2b] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Optional: Uncomment Globe if you want both */}
        {/* <GlobeBackground /> */}
        <PlanePath />
      </div>

      <AnimatePresence>
        {showSignup ? (
          <SignUpForm onBack={() => setShowSignup(false)} />
        ) : (
          <LoginForm onSignup={() => setShowSignup(true)} />
        )}
      </AnimatePresence>
    </div>
  );
}
