
// import { useState } from "react";

// const helplines = [
//   {
//     id: 1,
//     country: "USA",
//     name: "National Suicide Prevention Lifeline",
//     phone: "988",
//     availability: "24/7",
//     chat: "https://suicidepreventionlifeline.org/chat/",
//     email: "support@lifeline.org",
//   },
//   {
//     id: 2,
//     country: "UK",
//     name: "Samaritans",
//     phone: "116 123",
//     availability: "24/7",
//     chat: "https://www.samaritans.org/how-we-can-help/contact-samaritan/chat/",
//   },
//   {
//     id: 3,
//     country: "India",
//     name: "iCall",
//     phone: "+91 9152987821",
//     availability: "Mon-Sat 10am-8pm",
//     email: "support@icall.org",
//   },
//   {
//     id: 4,
//     country: "Canada",
//     name: "Crisis Services Canada",
//     phone: "1-833-456-4566",
//     availability: "24/7",
//   },
//   {
//     id: 5,
//     country: "Australia",
//     name: "Lifeline Australia",
//     phone: "13 11 14",
//     availability: "24/7",
//     chat: "https://www.lifeline.org.au/crisis-chat/",
//     email: "help@lifeline.org.au",
//   },
// ];

// const CrisisHelplines = () => {
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const countries = [...new Set(helplines.map((h) => h.country))];

//   const filteredHelplines = selectedCountry
//     ? helplines.filter((h) => h.country === selectedCountry)
//     : helplines;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
//       <h2 className="text-3xl font-semibold mb-6 text-center">📞 Crisis Helplines</h2>

//       <div className="mb-6">
//         <label htmlFor="country" className="block mb-2 font-medium">
//           Select Country:
//         </label>
//         <select
//           id="country"
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           value={selectedCountry}
//           onChange={(e) => setSelectedCountry(e.target.value)}
//         >
//           <option value="">All Countries</option>
//           {countries.map((country) => (
//             <option key={country} value={country}>
//               {country}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//         {filteredHelplines.length === 0 ? (
//           <p className="text-center text-gray-500">No helplines available.</p>
//         ) : (
//           filteredHelplines.map(({ id, name, phone, availability, chat, email }) => (
//             <div
//               key={id}
//               className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between h-full"
//             >
//               <div>
//                 <h3 className="text-xl font-semibold mb-1">{name}</h3>
//                 <p className="mb-1">
//                   Phone:{" "}
//                   <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
//                     {phone}
//                   </a>
//                 </p>
//                 <p className="mb-3 text-gray-600">Availability: {availability}</p>
//               </div>

//               <div className="flex gap-4 flex-wrap justify-start items-center mt-4">
//                 <a
//                   href={`tel:${phone}`}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//                 >
//                   Call Now
//                 </a>

//                 {chat && (
//                   <a
//                     href={chat}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//                   >
//                     Live Chat
//                   </a>
//                 )}

//                 {email && (
//                   <a
//                     href={`mailto:${email}`}
//                     className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
//                   >
//                     Email
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CrisisHelplines;

import { useState } from "react";

const helplines = [
  // Add more entries here or load from API/Firebase
  {
    id: 1,
    country: "USA",
    region: "North America",
    name: "National Suicide Prevention Lifeline",
    phone: "988",
    availability: "24/7",
    chat: "https://suicidepreventionlifeline.org/chat/",
    email: "support@lifeline.org",
  },
  {
    id: 2,
    country: "India",
    region: "Asia",
    name: "iCall",
    phone: "+91 9152987821",
    availability: "Mon–Sat 10am–8pm",
    email: "support@icall.org",
  },
  // Add more...
];

const CrisisHelplines = () => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [...new Set(helplines.map((h) => h.region))];

  const filteredHelplines = helplines.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.country.toLowerCase().includes(search.toLowerCase()) ||
      h.phone.includes(search);
    const matchesRegion = selectedRegion ? h.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        🌍 Global Crisis Helplines
      </h2>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, country, or phone..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter */}
      <div className="mb-6">
        <label htmlFor="region" className="block mb-2 font-medium text-gray-700">
          Filter by Region:
        </label>
        <select
          id="region"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="">All Regions</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {filteredHelplines.length === 0 ? (
          <p className="text-gray-500 text-center">No results found.</p>
        ) : (
          filteredHelplines.map(({ id, country, name, phone, availability, chat, email }) => (
            <article
              key={id}
              className="border border-gray-200 rounded-lg p-5 shadow bg-gray-50 hover:shadow-xl transition"
            >
              <header>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <span className="text-sm text-gray-600">{country}</span>
                </div>
                <p className="text-gray-600 mb-1">
                  Availability: {availability}
                </p>
                <p className="mb-2">
                  Phone:{" "}
                  <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
                    {phone}
                  </a>
                </p>
              </header>

              <footer className="flex flex-wrap gap-2 mt-3">
                <a
                  href={`tel:${phone}`}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Call
                </a>
                {chat && (
                  <a
                    href={chat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Chat
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800"
                  >
                    Email
                  </a>
                )}
              </footer>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default CrisisHelplines;

