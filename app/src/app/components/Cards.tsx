// import { PiShoppingCartSimpleFill, PiPencilSimpleLineFill, PiStackFill, PiImageSquareFill } from "react-icons/pi";

// const useCases = [
//   {
//     title: "E-commerce",
//     subtitle: "Mockey for",
//     description: "Generate high-quality professional looking product mockups for your e-commerce store or D2C brand.",
//     icon: <PiShoppingCartSimpleFill className="text-3xl text-white" />,
//     bgFrom: "from-[#FFD1D1]",
//     bgTo: "to-[#FF8D8D]",
//     textColor: "text-[#FF4C61]",
//   },
//   {
//     title: "Social Media",
//     subtitle: "Mockey for",
//     description:
//       "Improve your content game with premium and free mockups. Get original biggest source of photo-realistic free PSD Mockups online.",
//     icon: <PiStackFill className="text-3xl text-white" />,
//     bgFrom: "from-[#E8D1FF]",
//     bgTo: "to-[#B18DFF]",
//     textColor: "text-[#9A4CFF]",
//   },
//   {
//     title: "Designers & Creators",
//     subtitle: "Mockey for",
//     description:
//       "Mock-up templates are ideal to showcase your design directly on the appropriate products. Drag & adjust your designs to generate stunning results.",
//     icon: <PiPencilSimpleLineFill className="text-3xl text-white" />,
//     bgFrom: "from-[#FFF5D1]",
//     bgTo: "to-[#FFD94C]",
//     textColor: "text-[#FFC400]",
//   },
//   {
//     title: "Print-on-Demand",
//     subtitle: "Mockey for",
//     description:
//       "With free AI mockup generator, Create stunning product photos easily and online for your print-on-demand business.",
//     icon: <PiImageSquareFill className="text-3xl text-white" />,
//     bgFrom: "from-[#D1FFF3]",
//     bgTo: "to-[#4CFFCB]",
//     textColor: "text-[#00C9A7]",
//   },
// ];

// export default function Cards() {
//     return (
//       <main className="px-6 py-20 bg-white flex flex-col items-center">
//         <div className="max-w-6xl w-full">
//           {/* Section Heading */}
//           <h2 className="text-xl md:text-2xl font-bold mb-1">Mockups for every use case</h2>
//           <p className="text-gray-600 mb-8">
//             Mockey is the best online mockup generator with huge library of templates and customisation options.
//           </p>
  
//           {/* Grid of Cards */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {useCases.map((item, index) => (
//               <div
//                 key={index}
//                 className={`rounded-2xl p-6 text-black bg-gradient-to-br ${item.bgFrom} ${item.bgTo} relative overflow-hidden`}
//               >
//                 {/* Colored vertical corner accents */}
//                 <div className="absolute inset-y-0 right-0 w-4 bg-white/10 rounded-l-full"></div>
//                 <div className="absolute bottom-0 right-0 w-6 h-6 bg-white/20 rounded-tl-full"></div>
  
//                 <h4 className={`text-sm font-semibold uppercase ${item.textColor} mb-1`}>{item.subtitle}</h4>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-sm text-black/80 mb-6">{item.description}</p>
  
//                 {/* Icon Box */}
//                 <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
//                   {item.icon}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     );
//   }
  

// import { PiShoppingCartSimpleFill, PiPenNibFill, PiImagesFill, PiMegaphoneFill } from "react-icons/pi";

// const cards = [
//   {
//     title: "E-commerce",
//     description: "Generate high-quality professional looking product mockups for your e-commerce store or D2C brand.",
//     icon: <PiShoppingCartSimpleFill className="text-3xl text-[#FF4C61]" />,
//     gradient: "from-[#FFD1D1] to-[#FF8D8D]",
//     accent: "#FF4C61",
//   },
//   {
//     title: "Social Media",
//     description: "Improve your content game with premium and free mockups. Get original biggest source of photo-realistic free PSD Mockups online.",
//     icon: <PiMegaphoneFill className="text-3xl text-[#A855F7]" />,
//     gradient: "from-[#E4D4FF] to-[#BFA4FF]",
//     accent: "#A855F7",
//   },
//   {
//     title: "Designers & Creators",
//     description: "Mock-up templates are ideal to showcase your design directly on the appropriate products. Drag & adjust your designs to generate stunning results.",
//     icon: <PiPenNibFill className="text-3xl text-[#FACC15]" />,
//     gradient: "from-[#FFF6D1] to-[#FFE699]",
//     accent: "#FACC15",
//   },
//   {
//     title: "Print-on-Demand",
//     description: "With free AI mockup generator, create stunning product photos easily and online for your print-on-demand business.",
//     icon: <PiImagesFill className="text-3xl text-[#34D399]" />,
//     gradient: "from-[#D1FFF6] to-[#99FFE6]",
//     accent: "#34D399",
//   },
// ];

// export default function MockeyCards() {
//   return (
//     <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto p-6">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`relative p-6 rounded-[16px] bg-gradient-to-br ${card.gradient} text-black overflow-hidden`}
//         >
//           {/* Decorative side segments */}
//           {[0, 1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="absolute right-0 w-5 h-1/4"
//               style={{
//                 top: `${i * 25}%`,
//                 backgroundColor: card.accent,
//                 borderBottomLeftRadius: "9999px",
//               }}
//             />
//           ))}

//           <div className="relative z-10">
//             <p className="text-sm font-semibold mb-1 flex items-center gap-2">
//               Mockey for
//               <span
//                 className="w-6 h-1 inline-block rounded-full"
//                 style={{ backgroundColor: card.accent }}
//               />
//             </p>
//             <h3 className="text-xl font-bold mb-3">{card.title}</h3>
//             <p className="text-sm text-black/80 mb-6">{card.description}</p>
//             <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
//               {card.icon}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// components/MockeyCards.tsx
import {
    PiShoppingCartSimpleFill,
    PiPenNibFill,
    PiImagesFill,
    PiMegaphoneFill,
  } from "react-icons/pi";
  
  const cards = [
    {
      title: "E-commerce",
      description:
        "Generate high-quality professional looking product mockups for your e-commerce store or D2C brand.",
      icon: <PiShoppingCartSimpleFill className="text-3xl text-[#FF4C61]" />,
      gradient: "from-[#FFD1D1] to-[#FF8D8D]",
      accent: "#FF4C61",
    },
    {
      title: "Social Media",
      description:
        "Improve your content game with premium and free mockups. Get original biggest source of photo-realistic free PSD Mockups online.",
      icon: <PiMegaphoneFill className="text-3xl text-[#A855F7]" />,
      gradient: "from-[#E4D4FF] to-[#BFA4FF]",
      accent: "#A855F7",
    },
    {
      title: "Designers & Creators",
      description:
        "Mock-up templates are ideal to showcase your design directly on the appropriate products. Drag & adjust your designs to generate stunning results.",
      icon: <PiPenNibFill className="text-3xl text-[#FACC15]" />,
      gradient: "from-[#FFF6D1] to-[#FFE699]",
      accent: "#FACC15",
    },
    {
      title: "Print-on-Demand",
      description:
        "With free AI mockup generator, create stunning product photos easily and online for your print-on-demand business.",
      icon: <PiImagesFill className="text-3xl text-[#34D399]" />,
      gradient: "from-[#D1FFF6] to-[#99FFE6]",
      accent: "#34D399",
    },
  ];
  
  export default function MockeyCards() {
    return (
      <section className="py-16 bg-white flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-1/2 px-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-[16px] bg-gradient-to-br ${card.gradient} text-black min-h-[270px] flex flex-col justify-between overflow-hidden`}
            >
              {/* Side decorative elements */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute right-0 w-5 h-1/4"
                  style={{
                    top: `${i * 25}%`,
                    backgroundColor: card.accent,
                    borderBottomLeftRadius: "9999px",
                  }}
                />
              ))}
  
              <div className="relative z-10">
                <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                  Mockey for
                  <span
                    className="w-6 h-1 inline-block rounded-full"
                    style={{ backgroundColor: card.accent }}
                  />
                </p>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-black/80">{card.description}</p>
              </div>
  
              <div className="relative z-10 mt-6">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  