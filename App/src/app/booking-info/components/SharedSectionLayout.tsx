// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import SearchResultCard from "./SearchResultCard";

// interface SharedSectionLayoutProps {
//   formFields: React.ReactNode;
//   results: {
//     title: string;
//     subtitle: string;
//     details: string;
//     price: string;
//   }[];
//   title: string;
//   bgClass?: string;
// }

// export default function SharedSectionLayout({
//   formFields,
//   results,
//   title,
//   bgClass = "bg-gradient-to-b from-[#0b1020] to-[#071022] text-white",
// }: SharedSectionLayoutProps) {
//   const [showResults, setShowResults] = useState(false);

//   return (
//     <div
//       className={`relative w-full min-h-[calc(100vh-13rem)] overflow-y-auto ${bgClass} rounded-b-xl`}
//     >
//       <div className="max-w-5xl mx-auto px-6 py-12">
//         <AnimatePresence mode="wait">
//           {!showResults ? (
//             <motion.section
//               key="form"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.25 }}
//             >
//               {/* Title */}
//               <div className="max-w-3xl mx-auto text-center mb-8">
//                 <h2 className="text-3xl font-semibold">{title}</h2>
//                 <div className="w-16 h-[4px] bg-blue-400 mx-auto mt-3 rounded-full" />
//               </div>

//               {/* Form fields (no white card) */}
//               <div className="max-w-3xl mx-auto">{formFields}</div>

//               {/* Search button */}
//               <div className="flex justify-center mt-8">
//                 <button
//                   onClick={() => setShowResults(true)}
//                   className="px-10 py-3 rounded-full bg-gradient-to-r from-[#2E528A] to-[#813FA7] text-white font-semibold shadow-lg"
//                 >
//                   Search Ticket
//                 </button>
//               </div>
//             </motion.section>
//           ) : (
//             <motion.section
//               key="results"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.25 }}
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <ArrowLeft
//                   onClick={() => setShowResults(false)}
//                   className="cursor-pointer"
//                   size={22}
//                 />
//                 <h3 className="text-xl font-semibold">{title}s Available</h3>
//               </div>

//               <div className="space-y-4">
//                 {results.map((r, i) => (
//                   <SearchResultCard
//                     key={i}
//                     title={r.title}
//                     subtitle={r.subtitle}
//                     details={r.details}
//                     price={r.price}
//                   />
//                 ))}
//               </div>
//             </motion.section>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import SearchResultCard from "./SearchResultCard";

// interface SharedSectionLayoutProps {
//   sectionKey: string; // ✅ added this line only
//   formFields: React.ReactNode;
//   results: {
//     title: string;
//     subtitle: string;
//     details: string;
//     price: string;
//   }[];
//   title: string;
//   bgClass?: string;
// }

// export default function SharedSectionLayout({
//   sectionKey, // ✅ included in props
//   formFields,
//   results,
//   title,
//   bgClass = "bg-gradient-to-b from-[#0b1020] to-[#071022] text-white",
// }: SharedSectionLayoutProps) {
//   const [showResults, setShowResults] = useState(false);

//   return (
//     <div
//       className={`relative w-full min-h-[calc(100vh-13rem)] overflow-y-auto ${bgClass} rounded-b-xl`}
//     >
//       <div className="max-w-5xl mx-auto px-6 py-12">
//         <AnimatePresence mode="wait">
//           {!showResults ? (
//             <motion.section
//               key="form"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.25 }}
//             >
//               {/* Title */}
//               <div className="max-w-3xl mx-auto text-center mb-8">
//                 <h2 className="text-3xl font-semibold">{title}</h2>
//                 <div className="w-16 h-[4px] bg-blue-400 mx-auto mt-3 rounded-full" />
//               </div>

//               {/* Form fields */}
//               <div className="max-w-3xl mx-auto">{formFields}</div>

//               {/* Search button */}
//               <div className="flex justify-center mt-8">
//                 <button
//                   onClick={() => setShowResults(true)}
//                   className="px-10 py-3 rounded-full bg-gradient-to-r from-[#2E528A] to-[#813FA7] text-white font-semibold shadow-lg"
//                 >
//                   Search Ticket
//                 </button>
//               </div>
//             </motion.section>
//           ) : (
//             <motion.section
//               key="results"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.25 }}
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <ArrowLeft
//                   onClick={() => setShowResults(false)}
//                   className="cursor-pointer"
//                   size={22}
//                 />
//                 <h3 className="text-xl font-semibold">{title}s Available</h3>
//               </div>

//               <div className="space-y-4">
//                 {results.map((r, i) => (
//                   <SearchResultCard
//                     key={`${sectionKey}-${i}`} // ✅ now unique per section
//                     title={r.title}
//                     subtitle={r.subtitle}
//                     details={r.details}
//                     price={r.price}
//                   />
//                 ))}
//               </div>
//             </motion.section>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SearchResultCard from "./SearchResultCard";

interface SharedSectionLayoutProps {
  sectionKey: string; // <- required so Train/Bus/Flight can pass sectionKey
  formFields: React.ReactNode;
  results: {
    title: string;
    subtitle: string;
    details: string;
    price: string;
  }[];
  title: string;
  bgClass?: string;
}

export default function SharedSectionLayout({
  sectionKey,
  formFields,
  results,
  title,
  bgClass = "bg-gradient-to-b from-[#0b1020] to-[#071022] text-white",
}: SharedSectionLayoutProps) {
  const [showResults, setShowResults] = useState(false);

  const getButtonText = (title: string) => {
    switch (title.toLowerCase()) {
      case "train":
      case "bus":
      case "flight":
        return "Search Ticket";
      case "hotel":
        return "Search Hotels";
      case "local travel":
        return "Search Rides";
      default:
        return "Search";
    }
  };

  return (
    <div
      className={`relative w-full min-h-[calc(100vh-13rem)] overflow-y-auto ${bgClass} rounded-b-xl`}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.section
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Title */}
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <div className="w-16 h-[4px] bg-blue-400 mx-auto mt-3 rounded-full" />
              </div>

              {/* Form fields */}
              <div className="max-w-3xl mx-auto">{formFields}</div>

              {/* Dynamic Button */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowResults(true)}
                  className="px-10 py-3 rounded-full bg-gradient-to-r from-[#2E528A] to-[#813FA7] text-white font-semibold shadow-lg"
                >
                  {getButtonText(title)}
                </button>
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ArrowLeft
                  onClick={() => setShowResults(false)}
                  className="cursor-pointer"
                  size={22}
                />
                <h3 className="text-xl font-semibold">{title}s Available</h3>
              </div>

              <div className="space-y-4">
                {results.map((r, i) => (
                  <SearchResultCard
                    key={`${sectionKey}-${i}`} // unique key per section
                    title={r.title}
                    subtitle={r.subtitle}
                    details={r.details}
                    price={r.price}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


