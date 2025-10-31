// "use client";


// import { motion } from "framer-motion";
// import { useState } from "react";
// import { login } from "@/lib/authApi";

// export default function LoginForm() {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     setTimeout(() => setLoading(false), 1500);

//     try { 
//       const response = await login({
//         email,
//         password
//       });

//       if (response.token) {
//         console.log("Login successful, token:", response.token);
//       }
//     }catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <motion.form
//       onSubmit={handleLogin}
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 0.8, duration: 0.6 }}
//       className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-10 w-[90%] max-w-md border border-[#d8cfc4]/30 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
//     >
//       <div className="flex flex-col space-y-5">
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           className="bg-transparent border-b-2 border-[#d8cfc4]/40 focus:border-[#f4e9d8] text-white placeholder-gray-400 outline-none py-3 transition-all duration-300"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}  
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           className="bg-transparent border-b-2 border-[#d8cfc4]/40 focus:border-[#f4e9d8] text-white placeholder-gray-400 outline-none py-3 transition-all duration-300"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <motion.button
//           type="submit"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className="mt-4 bg-[#f4e9d8] text-[#0d2535] font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
//         >
//           {loading ? "Calculating Route..." : "Login"}
//         </motion.button>
//       </div>

//       <div className="mt-6 flex justify-between text-sm text-gray-300">
//         <a href="#" className="hover:text-[#f4e9d8] transition-colors">
//           Forgot Password?
//         </a>
//         <a href="#" className="hover:text-[#f4e9d8] transition-colors">
//           Sign Up
//         </a>
//       </div>
//     </motion.form>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { login } from "@/lib/authApi";

interface LoginFormProps {
  onSignup: () => void; // ✅ receive callback from parent
}

export default function LoginForm({ onSignup }: LoginFormProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);

    try {
      const response = await login({
        email,
        password,
      });

      if (response.token) {
        console.log("✅ Login successful, token:", response.token);
      }
    } catch (error) {
      console.error("❌ Login failed:", error);
    }
  };

  return (
    <motion.form
      onSubmit={handleLogin}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }} // ✅ smoother transition when switching
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-10 w-[90%] max-w-md border border-[#d8cfc4]/30 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
    >

      <h2 className="text-2xl font-semibold text-[#f4e9d8] text-center mb-6 tracking-wide">
        Login to Your Account
      </h2>
      
      <div className="flex flex-col space-y-5">
        <input
          type="email"
          placeholder="Email"
          required
          className="bg-transparent border-b-2 border-[#d8cfc4]/40 focus:border-[#f4e9d8] text-white placeholder-gray-400 outline-none py-3 transition-all duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="bg-transparent border-b-2 border-[#d8cfc4]/40 focus:border-[#f4e9d8] text-white placeholder-gray-400 outline-none py-3 transition-all duration-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          className="mt-4 bg-[#f4e9d8] text-[#0d2535] font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70"
        >
          {loading ? "Calculating Route..." : "Login"}
        </motion.button>
      </div>

      <div className="mt-6 flex justify-between text-sm text-gray-300">
        <a href="#" className="hover:text-[#f4e9d8] transition-colors">
          Forgot Password?
        </a>
        {/* ✅ Use button instead of <a> and trigger onSignup */}
        <button
          type="button"
          onClick={onSignup}
          className="hover:text-[#f4e9d8] transition-colors"
        >
          Sign Up
        </button>
      </div>
    </motion.form>
  );
}
