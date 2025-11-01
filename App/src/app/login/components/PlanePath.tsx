// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function PlanePath() {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="absolute inset-0 flex items-center justify-center overflow-hidden -z-10">
//       {/* Background map */}
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
//         alt="World Map"
//         className="absolute opacity-10 scale-125"
//       />

//       <svg
//         viewBox="0 0 800 300"
//         className="w-[90%] h-auto"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Dotted Path */}
//         <motion.path
//           d="M100 200 Q400 50 700 180"
//           stroke="white"
//           strokeWidth="2"
//           strokeDasharray="6 8"
//           fill="transparent"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 4, ease: "easeInOut" }}
//         />

//         {/* Start Pin */}
//         <motion.circle
//           cx="100"
//           cy="200"
//           r="8"
//           fill="#ff4757"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.3, type: "spring" }}
//         />

//         {/* End Pin */}
//         <motion.circle
//           cx="700"
//           cy="180"
//           r="8"
//           fill="#2ed573"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 4.3, type: "spring" }}
//         />

//         {/* ✈️ Animated Plane using CSS motion path */}
//         <motion.text
//           x="0"
//           y="0"
//           fontSize="20"
//           fill="white"
//           textAnchor="middle"
//           className="plane"
//           animate={animate ? "fly" : "stop"}
//           variants={{
//             fly: { opacity: 1 },
//             stop: { opacity: 0 },
//           }}
//         >
//           ✈️
//         </motion.text>
//       </svg>

//       <style jsx>{`
//         @keyframes planeFly {
//           0% {
//             offset-distance: 0%;
//           }
//           100% {
//             offset-distance: 100%;
//           }
//         }

//         .plane {
//           offset-path: path("M100 200 Q400 50 700 180");
//           offset-rotate: auto;
//           animation: planeFly 4s ease-in-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }



// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function PlanePath() {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-20 pointer-events-none">
//       {/* Background Map */}
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
//         alt="World Map"
//         className="absolute opacity-30 brightness-125 contrast-125 scale-125"
//       />

//       <svg
//         viewBox="0 0 800 300"
//         className="w-[90%] h-auto"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Dotted Flight Path */}
//         <motion.path
//           // shifted to start at North America → end near Asia
//           d="M80 200 Q400 40 720 160"
//           stroke="white"
//           strokeWidth="2"
//           strokeDasharray="6 8"
//           fill="transparent"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 4, ease: "easeInOut" }}
//         />

//         {/* Start Pin (North America) */}
//         <motion.circle
//           cx="80"
//           cy="200"
//           r="8"
//           fill="#ff4757"
//           filter="drop-shadow(0 0 6px #ff4757)"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.3, type: "spring" }}
//         />

//         {/* End Pin (Asia-Pacific) */}
//         <motion.circle
//           cx="720"
//           cy="160"
//           r="8"
//           fill="#2ed573"
//           filter="drop-shadow(0 0 6px #2ed573)"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 4.3, type: "spring" }}
//         />

//         {/* ✈️ Plane Animation */}
//         <motion.text
//           x="0"
//           y="0"
//           fontSize="28"
//           fill="#fdf5d9"
//           textAnchor="middle"
//           className="plane"
//           animate={animate ? "fly" : "stop"}
//           variants={{
//             fly: { opacity: 1 },
//             stop: { opacity: 0 },
//           }}
//         >
//           ✈️
//         </motion.text>
//       </svg>

//       <style jsx>{`
//         @keyframes planeFly {
//           0% {
//             offset-distance: 0%;
//           }
//           100% {
//             offset-distance: 100%;
//           }
//         }

//         .plane {
//           offset-path: path("M80 200 Q400 40 720 160");
//           offset-rotate: auto;
//           animation: planeFly 4s ease-in-out forwards;
//           filter: drop-shadow(0 0 6px #f5e6cc);
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const PlanePath: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const planeRef = useRef<SVGImageElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const svg = svgRef.current;
    const plane = planeRef.current;
    if (!svg || !plane) return;

    const path = svg.querySelector("path");
    if (!path) return;

    const totalLength = path.getTotalLength();
    let lastX = 0;
    let lastY = 0;

    // Start with full dash offset
    path.style.strokeDasharray = totalLength.toString();
    path.style.strokeDashoffset = totalLength.toString();

    controls.start({ opacity: [0, 1], transition: { duration: 0.8 } });

    const duration = 6; // seconds
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / (duration * 1000), 1);
      const point = path.getPointAtLength(progress * totalLength);

      // Convert numbers to strings for TS safety
      plane.setAttribute("x", (point.x - 20).toString());
      plane.setAttribute("y", (point.y - 20).toString());

      const dx = point.x - lastX;
      const dy = point.y - lastY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      plane.setAttribute("transform", `rotate(${angle + 45}, ${point.x}, ${point.y})`);

      lastX = point.x;
      lastY = point.y;

      // Reveal dotted path behind plane
      path.style.strokeDashoffset = ((1 - progress) * totalLength).toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        controls.start({ opacity: [1, 0], transition: { duration: 1 } });
      }
    };

    requestAnimationFrame(animate);
  }, [controls]);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
      {/* 🌍 Background Map */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="World Map"
        className="absolute opacity-25 brightness-125 scale-125"
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 300"
        className="w-[90%] h-auto relative"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ✈️ Dotted Path */}
        <path
          d="M80 200 Q400 40 720 160"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="8 8"
          fill="transparent"
          opacity="0.7"
        />

        {/* Start Pin */}
        <circle cx="80" cy="200" r="8" fill="#ff4757" />
        {/* End Pin */}
        <circle cx="720" cy="160" r="8" fill="#2ed573" />

        {/* Plane */}
        <motion.image
          ref={planeRef}
          href="/plane1.png" // your plane icon
          width="40"
          height="40"
          animate={controls}
          initial={{ opacity: 0 }}
        />
      </svg>
    </div>
  );
};

export default PlanePath;
