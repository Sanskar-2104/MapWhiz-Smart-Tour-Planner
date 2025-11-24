import { useState } from "react";
// import { Navbar } from "@/components/Navbar";
import { TripHeader } from "@/components/TripHeader";
import { DaySelector } from "@/components/DaySelector";
import { DayDetails } from "@/components/DayDetails";
// import travelBg from "@/assets/travel-bg.jpg";
// import "./ItineraryGenerator.module.css";



export const SAMPLE_TRIP = {
  publicId: "sample-trip",
  trip: {
    title: "Sample Trip",
    destination: "Sample City",
    budget: 1500,
    startDate: "2025-01-10",
    endDate: "2025-01-12",
    days: [],
  },
};



// Sample data from the provided JSON
const tripData = {
  publicId: "e28e4b85-f655-465c-9507-c25aa5f5cab7",
  trip: {
    id: "cmhtnomn9000dij84rck9kc2s",
    destination: "Jaipur",
    startDate: "2025-12-10T00:00:00.000Z",
    endDate: "2025-12-13T00:00:00.000Z",
    interests: ["history", "architecture"],
    budget: 10000,
    title: "Jaipur Getaway",
    days: [
      {
        id: "cmhtnpcz5000gij84g431fryl",
        dayIndex: 1,
        date: "2024-10-10T00:00:00.000Z",
        notes:
          "Day 1: Heart of the Pink City. This day focuses on the iconic, closely-located monuments within the walled city. Wear comfortable walking shoes as you'll be exploring a lot on foot.",
        places: [
          {
            id: "460703b8-2555-47fb-81c7-eef8f3bb1229",
            name: "Hawa Mahal",
            description:
              "Start your day with the iconic 'Palace of Winds'. Best for a photo stop from the outside in the morning light, though you can also explore its narrow corridors.",
            latitude: 26.9239,
            longitude: 75.8267,
            startTime: "09:00",
            endTime: "10:00",
            order: 0,
          },
          {
            id: "1fcef640-9319-487b-9779-7ed1f82c4049",
            name: "Jantar Mantar",
            description:
              "A UNESCO World Heritage site, this astronomical observatory features a collection of 19 architectural astronomical instruments built by the Rajput king Sawai Jai Singh II.",
            latitude: 26.9248,
            longitude: 75.8245,
            startTime: "10:15",
            endTime: "11:30",
            order: 1,
          },
          {
            id: "529e0ba7-9acb-45ad-99cf-68d4d693ec5b",
            name: "City Palace",
            description:
              "A vast complex of courtyards, gardens, and buildings that blends Rajasthani and Mughal architecture. It houses a museum with a fine collection of royal costumes and weaponry.",
            latitude: 26.9255,
            longitude: 75.8237,
            startTime: "11:45",
            endTime: "14:00",
            order: 2,
          },
          {
            id: "ca29e0e7-4306-4b85-9ad8-437f59252862",
            name: "Johari Bazaar / Bapu Bazaar",
            description:
              "Lunch and exploration of Jaipur's famous markets. Johari Bazaar is known for jewelry, while Bapu Bazaar is famous for textiles, leather goods, and traditional footwear.",
            latitude: 26.9205,
            longitude: 75.8262,
            startTime: "14:30",
            endTime: "17:00",
            order: 3,
          },
        ],
      },
      {
        id: "cmhtnpeyi000iij84rgpv4fze",
        dayIndex: 2,
        date: "2024-10-11T00:00:00.000Z",
        notes:
          "Day 2: Majestic Forts and Palaces. Today we venture just outside the main city to explore the grand hilltop forts that guarded the ancient capital of Amer.",
        places: [
          {
            id: "04956c74-e19d-4aad-9641-0a260a05691e",
            name: "Amber Fort (Amer Fort)",
            description:
              "A magnificent fort-palace situated on a hilltop. Known for its artistic Hindu style elements, including the Sheesh Mahal (Mirror Palace). Arrive early to avoid crowds.",
            latitude: 26.9855,
            longitude: 75.8513,
            startTime: "08:30",
            endTime: "12:30",
            order: 0,
          },
          {
            id: "2f8aad51-8208-42c8-a7fc-6fd1b4699ca2",
            name: "Panna Meena ka Kund",
            description:
              "A beautiful and symmetrical 16th-century stepwell located near Amber Fort. A quick but worthwhile stop for its unique architecture and photography.",
            latitude: 26.989,
            longitude: 75.8524,
            startTime: "12:45",
            endTime: "13:15",
            order: 1,
          },
          {
            id: "c3b449e4-a7f7-431e-af20-2a816c1fa72a",
            name: "Jal Mahal",
            description:
              "The 'Water Palace' appears to float in the center of Man Sagar Lake. While entry is restricted, it's a perfect spot for photography from the lakeside promenade.",
            latitude: 26.9535,
            longitude: 75.8407,
            startTime: "13:45",
            endTime: "14:15",
            order: 2,
          },
        ],
      },
      {
        id: "cmhtnphnu000kij84praaou8u",
        dayIndex: 3,
        date: "2024-10-12T00:00:00.000Z",
        notes:
          "Day 3: Hilltop Views and Spiritual Sites. Today combines a visit to an ancient pilgrimage site with a spectacular sunset view over the entire city.",
        places: [
          {
            id: "68526171-a652-435e-8522-8d06699e1444",
            name: "Galtaji (Monkey Temple)",
            description:
              "An ancient Hindu pilgrimage site consisting of a series of temples built into a narrow crevice. It's famous for its natural water springs and the large tribe of rhesus macaques that live here.",
            latitude: 26.919,
            longitude: 75.8596,
            startTime: "10:00",
            endTime: "12:00",
            order: 0,
          },
          {
            id: "9892b16a-22f5-456a-a397-541e30f80e41",
            name: "Nahargarh Fort",
            description:
              "Perched on the edge of the Aravalli Hills, this fort offers breathtaking panoramic views of Jaipur. The perfect spot to watch the sunset. You can also explore the Madhavendra Bhawan palace within the fort.",
            latitude: 26.9389,
            longitude: 75.8164,
            startTime: "16:00",
            endTime: "18:30",
            order: 1,
          },
        ],
      },
      {
        id: "cmhtnpjbl000mij843ybwjsw0",
        dayIndex: 4,
        date: "2024-10-13T00:00:00.000Z",
        notes:
          "Day 4: Art, Culture, and Serenity. A more relaxed day exploring one of Rajasthan's oldest museums and a modern marble temple before you depart.",
        places: [
          {
            id: "8e4b41e7-f3ea-421d-89af-4740821126fa",
            name: "Albert Hall Museum",
            description:
              "The state museum of Rajasthan, housed in a stunning example of Indo-Saracenic architecture. It has a rich collection of artifacts including paintings, carpets, ivory, and stone.",
            latitude: 26.9118,
            longitude: 75.8193,
            startTime: "10:00",
            endTime: "12:30",
            order: 0,
          },
          {
            id: "1fbc82bc-f9cd-48ea-b30c-a3bb313701a7",
            name: "Birla Mandir (Laxmi Narayan Temple)",
            description:
              "A modern Hindu temple built entirely of white marble. It is dedicated to Vishnu and his consort Lakshmi and is known for its serene atmosphere and intricate carvings.",
            latitude: 26.8942,
            longitude: 75.8173,
            startTime: "13:30",
            endTime: "14:30",
            order: 1,
          },
        ],
      },
    ],
  },
};

const Index = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const currentDay = tripData.trip.days.find((day) => day.dayIndex === selectedDay);

  return (
    <div className="min-h-screen bg-gradient-bg relative">
      {/* Background image with overlay */}
      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
        //   backgroundImage: `url(${travelBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-bg opacity-90" />

      {/* Content */}
      <div className="relative z-10">
        {/* <Navbar /> */}

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {/* Header */}
          <div className="mb-8">
            <TripHeader
              title={tripData.trip.title}
              destination={tripData.trip.destination}
              startDate={tripData.trip.startDate}
              endDate={tripData.trip.endDate}
              budget={tripData.trip.budget}
              tripData={tripData}
            />
          </div>

          {/* Main content - Day selector and details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left sidebar - Day selector */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <DaySelector
                  days={tripData.trip.days}
                  selectedDay={selectedDay}
                  onSelectDay={setSelectedDay}
                />
              </div>
            </div>

            {/* Right content - Day details */}
            <div className="lg:col-span-8 xl:col-span-9">
              {currentDay && <DayDetails day={currentDay} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;


// import { useState } from "react";
// import { TripHeader } from "@/components/TripHeader";
// import { DaySelector } from "@/components/DaySelector";
// import { DayDetails } from "@/components/DayDetails";
// import styles from "./ItineraryGenerator.module.css"; // Link to the CSS module




// export const SAMPLE_TRIP = {
//   publicId: "sample-trip",
//   trip: {
//     title: "Sample Trip",
//     destination: "Sample City",
//     budget: 1500,
//     startDate: "2025-01-10",
//     endDate: "2025-01-12",
//     days: [],
//   },
// };


// // --- DATA DEFINITIONS (Derived from sources [3] through [12]) ---

// const tripData = {
//   publicId: "e28e4b85-f655-465c-9507-c25aa5f5cab7",
//   trip: {
//     id: "cmhtnomn9000dij84rck9kc2s",
//     destination: "Jaipur",
//     startDate: "2025-12-10T00:00:00.000Z",
//     endDate: "2025-12-13T00:00:00.000Z",
//     interests: ["history", "architecture"],
//     budget: 10000,
//     title: "Jaipur Getaway",
//     days: [
//       {
//         id: "cmhtnpcz5000gij84g431fryl",
//         dayIndex: 1,
//         date: "2024-10-10T00:00:00.000Z",
//         notes:
//           "Day 1: Heart of the Pink City. This day focuses on the iconic, closely-located monuments within the walled city. Wear comfortable walking shoes as you'll be exploring a lot on foot.", // [3]
//         places: [
//           {
//             id: "460703b8-2555-47fb-81c7-eef8f3bb1229",
//             name: "Hawa Mahal",
//             description:
//               "Start your day with the iconic 'Palace of Winds'. Best for a photo stop from the outside in the morning light, though you can also explore its narrow corridors.", // [4]
//             latitude: 26.9239,
//             longitude: 75.8267,
//             startTime: "09:00",
//             endTime: "10:00",
//             order: 0,
//           },
//           {
//             id: "1fcef640-9319-487b-9779-7ed1f82c4049",
//             name: "Jantar Mantar",
//             description:
//               "A UNESCO World Heritage site, this astronomical observatory features a collection of 19 architectural astronomical instruments built by the Rajput king Sawai Jai Singh II.", // [4]
//             latitude: 26.9248,
//             longitude: 75.8245,
//             startTime: "10:15",
//             endTime: "11:30",
//             order: 1,
//           },
//           {
//             id: "529e0ba7-9acb-45ad-99cf-68d4d693ec5b",
//             name: "City Palace",
//             description:
//               "A vast complex of courtyards, gardens, and buildings that blends Rajasthani and Mughal architecture. It houses a museum with a fine collection of royal costumes and weaponry.", // [5]
//             latitude: 26.9255,
//             longitude: 75.8237,
//             startTime: "11:45",
//             endTime: "14:00",
//             order: 2,
//           },
//           {
//             id: "ca29e0e7-4306-4b85-9ad8-437f59252862",
//             name: "Johari Bazaar / Bapu Bazaar",
//             description:
//               "Lunch and exploration of Jaipur's famous markets. Johari Bazaar is known for jewelry, while Bapu Bazaar is famous for textiles, leather goods, and traditional footwear.", // [6]
//             latitude: 26.9205,
//             longitude: 75.8262,
//             startTime: "14:30",
//             endTime: "17:00",
//             order: 3,
//           },
//         ],
//       },
//       {
//         id: "cmhtnpeyi000iij84rgpv4fze",
//         dayIndex: 2,
//         date: "2024-10-11T00:00:00.000Z",
//         notes:
//           "Day 2: Majestic Forts and Palaces. Today we venture just outside the main city to explore the grand hilltop forts that guarded the ancient capital of Amer.", // [6]
//         places: [
//           {
//             id: "04956c74-e19d-4aad-9641-0a260a05691e",
//             name: "Amber Fort (Amer Fort)",
//             description:
//               "A magnificent fort-palace situated on a hilltop. Known for its artistic Hindu style elements, including the Sheesh Mahal (Mirror Palace). Arrive early to avoid crowds.", // [7]
//             latitude: 26.9855,
//             longitude: 75.8513,
//             startTime: "08:30",
//             endTime: "12:30",
//             order: 0,
//           },
//           {
//             id: "2f8aad51-8208-42c8-a7fc-6fd1b4699ca2",
//             name: "Panna Meena ka Kund",
//             description:
//               "A beautiful and symmetrical 16th-century stepwell located near Amber Fort. A quick but worthwhile stop for its unique architecture and photography.", // [7]
//             latitude: 26.989,
//             longitude: 75.8524,
//             startTime: "12:45",
//             endTime: "13:15",
//             order: 1,
//           },
//           {
//             id: "c3b449e4-a7f7-431e-af20-2a816c1fa72a",
//             name: "Jal Mahal",
//             description:
//               "The 'Water Palace' appears to float in the center of Man Sagar Lake. While entry is restricted, it's a perfect spot for photography from the lakeside promenade.", // [8]
//             latitude: 26.9535,
//             longitude: 75.8407,
//             startTime: "13:45",
//             endTime: "14:15",
//             order: 2,
//           },
//         ],
//       },
//       {
//         id: "cmhtnphnu000kij84praaou8u",
//         dayIndex: 3,
//         date: "2024-10-12T00:00:00.000Z", // [8]
//         notes:
//           "Day 3: Hilltop Views and Spiritual Sites. Today combines a visit to an ancient pilgrimage site with a spectacular sunset view over the entire city.", // [9]
//         places: [
//           {
//             id: "68526171-a652-435e-8522-8d06699e1444",
//             name: "Galtaji (Monkey Temple)",
//             description:
//               "An ancient Hindu pilgrimage site consisting of a series of temples built into a narrow crevice. It's famous for its natural water springs and the large tribe of rhesus macaques that live here.",
//             latitude: 26.919,
//             longitude: 75.8596,
//             startTime: "10:00", // [10]
//             endTime: "12:00",
//             order: 0,
//           },
//           {
//             id: "9892b16a-22f5-456a-a397-541e30f80e41",
//             name: "Nahargarh Fort",
//             description:
//               "Perched on the edge of the Aravalli Hills, this fort offers breathtaking panoramic views of Jaipur. The perfect spot to watch the sunset. You can also explore the Madhavendra Bhawan palace within the fort.", // [10]
//             latitude: 26.9389,
//             longitude: 75.8164,
//             startTime: "16:00",
//             endTime: "18:30",
//             order: 1,
//           },
//         ],
//       },
//       {
//         id: "cmhtnpjbl000mij843ybwjsw0",
//         dayIndex: 4,
//         date: "2024-10-13T00:00:00.000Z", // [10]
//         notes:
//           "Day 4: Art, Culture, and Serenity. A more relaxed day exploring one of Rajasthan's oldest museums and a modern marble temple before you depart.", // [11]
//         places: [
//           {
//             id: "8e4b41e7-f3ea-421d-89af-4740821126fa",
//             name: "Albert Hall Museum",
//             description:
//               "The state museum of Rajasthan, housed in a stunning example of Indo-Saracenic architecture. It has a rich collection of artifacts including paintings, carpets, ivory, and stone.", // [11]
//             latitude: 26.9118,
//             longitude: 75.8193,
//             startTime: "10:00",
//             endTime: "12:30",
//             order: 0,
//           },
//           {
//             id: "1fbc82bc-f9cd-48ea-b30c-a3bb313701a7",
//             name: "Birla Mandir (Laxmi Narayan Temple)",
//             description:
//               "A modern Hindu temple built entirely of white marble. It is dedicated to Vishnu and his consort Lakshmi and is known for its serene atmosphere and intricate carvings.", // [12]
//             latitude: 26.8942,
//             longitude: 75.8173,
//             startTime: "13:30",
//             endTime: "14:30",
//             order: 1,
//           },
//         ],
//       },
//     ],
//   },
// };

// export const ItineraryGenerator = () => {
//   // Initialize state, defaulting to Day 1 [12]
//   const [selectedDay, setSelectedDay] = useState(1);
  
//   // Find the currently selected day's data [12]
//   const currentDay = tripData.trip.days.find((day) => day.dayIndex === selectedDay);

//   return (
//     <div className={styles.container}>
//       {/* Background image/overlay div matching source structure [14] */}
//       <div
//         className={`${styles.backgroundEffect} fixed inset-0 z-0 opacity-20`}
//         style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       />

//       <div className={styles.contentWrapper}>
//         {/* Header section (Jaipur Getaway, Dates, Budget, Share/Export buttons) [1, 14] */}
//         <TripHeader
//           title={tripData.trip.title}
//           destination={tripData.trip.destination}
//           startDate={tripData.trip.startDate}
//           endDate={tripData.trip.endDate}
//           budget={tripData.trip.budget}
//           tripData={tripData}
//         />

//         {/* Main Content Area: Sidebar (Day Selector) and Details [15] */}
//         <div className={styles.mainContent}>
//           {/* Left sidebar - Trip Overview / Day Selector [1, 15] */}
//           <div className={styles.sidebar}>
//             <DaySelector
//               days={tripData.trip.days}
//               selectedDay={selectedDay}
//               onSelectDay={setSelectedDay}
//             />
//           </div>

//           {/* Right content - Day details (The content of Day 1 in the image) [1, 15] */}
//           <div className={styles.detailsArea}>
//             {currentDay && <DayDetails currentDay={currentDay} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItineraryGenerator;




















// // import { useState } from "react";
// // import styles from "./ItineraryGenerator.module.css";

// // import { TripHeader } from "@/components/TripHeader";
// // import { DaySelector } from "@/components/DaySelector";
// // import { DayDetails } from "@/components/DayDetails";

// // const Index = () => {
// //   const [selectedDay, setSelectedDay] = useState(1);

// //   const currentDay = tripData.trip.days.find(
// //     (day) => day.dayIndex === selectedDay
// //   );

// //   return (
// //     <div className={styles.pageWrapper}>
// //       {/* Background Layer */}
// //       <div className={styles.bgOverlay}></div>

// //       <div className={styles.contentWrapper}>
        
// //         {/* Header Section */}
// //         <div className={styles.headerCard}>
// //           <h1 className={styles.heading}>{tripData.trip.title}</h1>

// //           <TripHeader
// //             title={tripData.trip.title}
// //             destination={tripData.trip.destination}
// //             startDate={tripData.trip.startDate}
// //             endDate={tripData.trip.endDate}
// //             budget={tripData.trip.budget}
// //             tripData={tripData}
// //           />
// //         </div>

// //         {/* Layout */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
// //           {/* Day Sidebar */}
// //           <div className="lg:col-span-4 xl:col-span-3">
// //             <div className={styles.sidebar}>
// //               <DaySelector
// //                 days={tripData.trip.days}
// //                 selectedDay={selectedDay}
// //                 onSelectDay={setSelectedDay}
// //                 className={styles}
// //               />
// //             </div>
// //           </div>

// //           {/* Day Details */}
// //           <div className="lg:col-span-8 xl:col-span-9">
// //             {currentDay && (
// //               <DayDetails
// //                 day={currentDay}
// //                 className={styles}
// //               />
// //             )}
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Index;


// Updated ItineraryGenerator.tsx using CSS Modules
// This file assumes you have created the following module CSS files:
// ItineraryGenerator.module.css
// TripHeader.module.css
// DaySelector.module.css
// DayDetails.module.css

// import { useState } from "react";
// import styles from "./ItineraryGenerator.module.css";
// import { TripHeader } from "@/components/TripHeader";
// import { DaySelector } from "@/components/DaySelector";
// import { DayDetails } from "@/components/DayDetails";

// const tripData = {
//   publicId: "e28e4b85-f655-465c-9507-c25aa5f5cab7",
//   trip: {
//     id: "cmhtnomn9000dij84rck9kc2s",
//     destination: "Jaipur",
//     startDate: "2025-12-10T00:00:00.000Z",
//     endDate: "2025-12-13T00:00:00.000Z",
//     interests: ["history", "architecture"],
//     budget: 10000,
//     title: "Jaipur Getaway",
//     days: [
//       {
//         id: "cmhtnpcz5000gij84g431fryl",
//         dayIndex: 1,
//         date: "2024-10-10T00:00:00.000Z",
//         notes:
//           "Day 1: Heart of the Pink City. This day focuses on the iconic, closely-located monuments within the walled city.",
//         places: [
//           {
//             id: "460703b8-2555-47fb-81c7-eef8f3bb1229",
//             name: "Hawa Mahal",
//             description:
//               "Start your day with the iconic 'Palace of Winds'. Best for a photo stop.",
//             latitude: 26.9239,
//             longitude: 75.8267,
//             startTime: "09:00",
//             endTime: "10:00",
//             order: 0,
//           },
//           {
//             id: "1fcef640-9319-487b-9779-7ed1f82c4049",
//             name: "Jantar Mantar",
//             description:
//               "A UNESCO World Heritage site featuring architectural astronomical instruments.",
//             latitude: 26.9248,
//             longitude: 75.8245,
//             startTime: "10:15",
//             endTime: "11:30",
//             order: 1,
//           },
//         ],
//       },
//       {
//         id: "cmhtnpeyi000iij84rgpv4fze",
//         dayIndex: 2,
//         date: "2024-10-11T00:00:00.000Z",
//         notes:
//           "Day 2: Majestic Forts and Palaces. Explore hilltop forts outside the main city.",
//         places: [
//           {
//             id: "04956c74-e19d-4aad-9641-0a260a05691e",
//             name: "Amber Fort (Amer Fort)",
//             description:
//               "A magnificent fort-palace on a hilltop known for its artistic Hindu design.",
//             latitude: 26.9855,
//             longitude: 75.8513,
//             startTime: "08:30",
//             endTime: "12:30",
//             order: 0,
//           },
//         ],
//       },
//     ],
//   },
// };

// const ItineraryGenerator = () => {
//   const [selectedDay, setSelectedDay] = useState(1);

//   const currentDay = tripData.trip.days.find(
//     (day) => day.dayIndex === selectedDay
//   );

//   return (
//     <div className={styles.pageWrapper}>
//       <div className={styles.overlay} />

//       <main className={styles.mainContent}>
//         <div className={styles.headerWrapper}>
//           <TripHeader
//             title={tripData.trip.title}
//             destination={tripData.trip.destination}
//             startDate={tripData.trip.startDate}
//             endDate={tripData.trip.endDate}
//             budget={tripData.trip.budget}
//             tripData={tripData}
//           />
//         </div>

//         <div className={styles.gridLayout}>
//           <div className={styles.sidebar}>
//             <DaySelector
//               days={tripData.trip.days}
//               selectedDay={selectedDay}
//               onSelectDay={setSelectedDay}
//             />
//           </div>

//           <div className={styles.detailsSection}>
//             {currentDay && <DayDetails day={currentDay} />}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ItineraryGenerator;






























