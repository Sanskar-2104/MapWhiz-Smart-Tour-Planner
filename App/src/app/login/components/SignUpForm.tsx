"use client";
import { motion } from "framer-motion";

interface Props {
  onBack: () => void;
}

export default function SignUpForm({ onBack }: Props) {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#0a192f]/90 backdrop-blur-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md p-8 bg-[#112240]/80 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Create an Account
        </h1>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none"
          />
          <button className="w-full py-2 bg-[#f5e6cc] text-black font-semibold rounded-md">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={onBack}
            className="text-gray-300 underline hover:text-white"
          >
            Back to Login
          </button>
        </div>
      </div>
    </motion.div>
  );
}
