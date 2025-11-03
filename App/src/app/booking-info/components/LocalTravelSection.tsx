// "use client";

// import { useState } from "react";

// export default function LocalTravelSection() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [gender, setGender] = useState("male");

//   const handleSearch = () => {
//     console.log("Local travel:", { from, to, gender });
//     // Future: Call API here
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Local Travel Within City</h2>

//       <div className="grid md:grid-cols-3 gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Current Location"
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//           className="bg-slate-700 p-3 rounded-lg w-full focus:outline-none"
//         />
//         <input
//           type="text"
//           placeholder="Destination"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           className="bg-slate-700 p-3 rounded-lg w-full focus:outline-none"
//         />
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           className="bg-slate-700 p-3 rounded-lg w-full"
//         >
//           <option value="male">Male</option>
//           <option value="female">Female (Half Fare)</option>
//         </select>
//       </div>

//       <button
//         onClick={handleSearch}
//         className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
//       >
//         Find Route
//       </button>
//     </div>
//   );
// }



"use client";

import SharedSectionLayout from "./SharedSectionLayout";
import { useState } from "react";

export default function LocalTravelSection() {
  const [formFields] = useState(
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Pickup Location"
          className="w-full p-3 rounded-lg bg-[#1c2a44] text-white placeholder-gray-400 outline-none"
        />
        <input
          type="text"
          placeholder="Drop Location"
          className="w-full p-3 rounded-lg bg-[#1c2a44] text-white placeholder-gray-400 outline-none"
        />
      </div>
      <div className="mt-4">
        <input
          type="time"
          className="w-full p-3 rounded-lg bg-[#1c2a44] text-white outline-none"
        />
      </div>
    </>
  );

  const [results] = useState([
    {
      title: "Ola Mini",
      subtitle: "4-seater Hatchback",
      details: "ETA: 5 mins",
      price: "₹180",
    },
    {
      title: "Uber Go",
      subtitle: "4-seater Sedan",
      details: "ETA: 7 mins",
      price: "₹210",
    },
  ]);

  return (
    <SharedSectionLayout
      sectionKey="local" // ✅ added this line
      title="Local Travel"
      formFields={formFields}
      results={results}
    />
  );
}