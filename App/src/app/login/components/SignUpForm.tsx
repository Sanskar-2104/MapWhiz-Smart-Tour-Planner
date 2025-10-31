// "use client";
// import { signup } from "@/lib/authApi";
// import { motion } from "framer-motion";
// import { useState } from "react";

// interface Props {
//   onBack: () => void;
// }

// export default function SignUpForm({ onBack }: Props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     setTimeout(() => setLoading(false), 1500);
//     try {
//       const response = await signup({
//         name,
//         email,
//         password
//       });

//       if (response.token) {
//         console.log("Signup successful, token:", response.token);
//       }
//     }catch (error) {
//       console.error("Signup failed:", error);
//     }

//   }
//   return (
//     <motion.form
//       className="absolute top-0 backdrop-blur-md left-0 w-full h-full flex items-center justify-center bg-[#0a192f]/90 "
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.5 }}
//       onSubmit={handleSignUp}
//     >
//       <div className="w-full max-w-md p-8 bg-[#112240]/80 rounded-2xl shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-6 text-white">
//           Create an Account
//         </h1>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             className="w-full py-2 bg-[#f5e6cc] text-black font-semibold rounded-md"
//             onClick={handleSignUp}
//           >
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
//         <div className="text-center mt-4">
//           <button
//             type="submit"
//             onClick={onBack}
//             className="text-gray-300 underline hover:text-white"
//           >
//             Back to Login
//           </button>
//         </div>
//       </div>
//     </motion.form>
//   );
// }



"use client";
import { signup } from "@/lib/authApi";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onBack: () => void;
}

export default function SignUpForm({ onBack }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);
    try {
      const response = await signup({
        name,
        email,
        password,
      });

      if (response.token) {
        console.log("Signup successful, token:", response.token);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <motion.form
      onSubmit={handleSignUp}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-10 w-[90%] max-w-md border border-[#d8cfc4]/30 shadow-[0_0_25px_rgba(255,255,255,0.05)] z-10"
    >
      {/* Heading inside the box */}
      <h2 className="text-2xl font-semibold text-[#f4e9d8] text-center mb-6 tracking-wide">
        Create an Account
      </h2>

      <div className="flex flex-col space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="bg-transparent border-b-2 border-[#d8cfc4]/40 focus:border-[#f4e9d8] text-white placeholder-gray-400 outline-none py-3 transition-all duration-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          className="mt-4 bg-[#f4e9d8] text-[#0d2535] font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </motion.button>
      </div>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-300 hover:text-[#f4e9d8] transition-colors text-sm"
        >
          Back to Login
        </button>
      </div>
    </motion.form>
  );
}
