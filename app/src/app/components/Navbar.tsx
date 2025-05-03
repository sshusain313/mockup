// 'use client';

// import Head from 'next/head';
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function NavbarPage() {
//   const [isMockupsOpen, setIsMockupsOpen] = useState(false);
//   const [isLockupsOpen, setIsLockupsOpen] = useState(false);const [openSection, setOpenSection] = useState<string | null>(null);
//   const [mockupsTimeout, setMockupsTimeout] = useState<NodeJS.Timeout | null>(null);

//   const handleMockupsEnter = () => {
//     if (mockupsTimeout) {
//       clearTimeout(mockupsTimeout);
//       setMockupsTimeout(null);
//     }
//     setIsMockupsOpen(true);
//   };

//   const handleMockupsLeave = () => {
//     const timeout = setTimeout(() => {
//       setIsMockupsOpen(false);
//     }, 2500);
//     setMockupsTimeout(timeout);
//   };

//   return (
//     <>
//       <Head>
//         <title>Navbar Clone</title>
//       </Head>
//       <nav className="relative flex items-center justify-between px-6 py-4 bg-white shadow-sm">
//         {/* Left side: Logo + Nav */}
//         <div className="flex items-center gap-8">
//           {/* Logo */}
//           <div className="text-pink-500 text-3xl italic font-extrabold tracking-tight font-[cursive]">
//             <Image src="/mockey-logo.svg" alt="Mockey" width={100} height={40} />
//           </div>

//           {/* Navigation Links */}
//           <ul className="flex items-center gap-6 text-sm font-medium text-black">
//             <li
//               className="relative cursor-pointer hover:text-pink-500"
//               onMouseEnter={handleMockupsEnter}
//               onMouseLeave={handleMockupsLeave}
//               onClick={() => {
//                 setIsMockupsOpen((prev) => !prev);
//                 if (mockupsTimeout) {
//                   clearTimeout(mockupsTimeout);
//                   setMockupsTimeout(null);
//                 }
//               }}
//             >
//               Mockups <span className="ml-1">›</span>

//               {isMockupsOpen && (
//                 <div
//                   className="absolute top-full left-0 mt-2 w-[850px] bg-white border border-gray-200 shadow-xl rounded-md z-50 flex p-4"
//                   onMouseEnter={handleMockupsEnter}
//                   onMouseLeave={handleMockupsLeave}
//                   onClick={(e) => e.stopPropagation()} // Prevent propagation on click
//                 >
//                   {/* Left Visual Section */}
//                   <div className="w-[260px] pr-4 border-r border-gray-200">
//                     <Image
//                       src="/mocknav.webp"
//                       alt="Mockup Promo"
//                       width={240}
//                       height={240}
//                       className="rounded-md object-cover"
//                     />
//                   </div>

//                   {/* Right Dropdown Menu Columns */}
//                   <div className="flex-1 grid grid-cols-3 gap-6 pl-4 text-sm">
//                     {/* Column 1 */}
//                     <div>
//                     <h4 onClick={() => setOpenSection(openSection === 'apparel' ? null : 'apparel')}>Apparel</h4>
// <h4 onClick={() => setOpenSection(openSection === 'accessories' ? null : 'accessories')}>Accessories</h4>
// <h4 onClick={() => setOpenSection(openSection === 'home' ? null : 'home')}>Home & Living</h4>
// <h4 onClick={() => setOpenSection(openSection === 'print' ? null : 'print')}>Print</h4>
// <h4 onClick={() => setOpenSection(openSection === 'packaging' ? null : 'packaging')}>Packaging</h4>
// <h4 onClick={() => setOpenSection(openSection === 'tech' ? null : 'tech')}>Tech</h4>
// <h4 onClick={() => setOpenSection(openSection === 'jewelry' ? null : 'jewelry')}>Jewelry</h4>

//                     </div>

//                     {/* Column 2 */}
//                     <div>
//                       {openSection === 'apparel' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">T-Shirt</Link></li>
//                           <li><Link href="#">Tank Top</Link></li>
//                           <li><Link href="#">Hoodie</Link></li>
//                           <li><Link href="#">Sweatshirt</Link></li>
//                           <li><Link href="#">Jacket</Link></li>
//                           <li><Link href="#">Crop Top</Link></li>
//                           <li><Link href="#">Apron</Link></li>
//                           <li><Link href="#">Scarf</Link></li>
//                           <li><Link href="#">Jersey</Link></li>
//                         </ul>
//                       )}
//                      {openSection === 'accessories' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Tote Bag</Link></li>
//                           <li><Link href="#">Cap</Link></li>
//                           <li><Link href="#">Phone Cover</Link></li>
//                           <li><Link href="#">Gaming Pad</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'home' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Can</Link></li>
//                           <li><Link href="#">Mug</Link></li>
//                           <li><Link href="#">Cushion</Link></li>
//                           <li><Link href="#">Frame</Link></li>
//                           <li><Link href="#">Coaster</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'print' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Business Card</Link></li>
//                           <li><Link href="#">Book</Link></li>
//                           <li><Link href="#">ID Card</Link></li>
//                           <li><Link href="#">Sticker</Link></li>
//                           <li><Link href="#">Poster</Link></li>
//                           <li><Link href="#">Flyer</Link></li>
//                           <li><Link href="#">Greeting Card</Link></li>
//                           <li><Link href="#">Billboard</Link></li>
//                           <li><Link href="#">Magazine</Link></li>
//                           <li><Link href="#">Brochure</Link></li>
//                           <li><Link href="#">Lanyard</Link></li>
//                           <li><Link href="#">Banner</Link></li>
//                           <li><Link href="#">Canvas</Link></li>
//                           <li><Link href="#">Notebook</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'packaging' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Box</Link></li>
//                           <li><Link href="#">Tube</Link></li>
//                           <li><Link href="#">Dropper Bottle</Link></li>
//                           <li><Link href="#">Pouch</Link></li>
//                           <li><Link href="#">Cosmetic</Link></li>
//                           <li><Link href="#">Bottle</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'tech' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">IPhone</Link></li>
//                           <li><Link href="#">Laptop</Link></li>
//                           <li><Link href="#">IPad</Link></li>
//                           <li><Link href="#">Macbook</Link></li>
//                           <li><Link href="#">Phone</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'jewelry' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Ring</Link></li>
//                           <li><Link href="#">Necklace</Link></li>
//                           <li><Link href="#">Earring</Link></li>
//                         </ul>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>
//             <li
//               className="relative cursor-pointer hover:text-pink-500"
//               onMouseEnter={() => setIsLockupsOpen(true)}
//               onMouseLeave={() => setIsLockupsOpen(false)}
//             >
//               Tools <span className="ml-1">›</span>

//               {/* Dropdown */}
//               {isLockupsOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-[850px] bg-white border border-gray-200 shadow-xl rounded-md z-50 flex p-4">
//                   {/* Left Visual Section */}
//                   <div className="w-[260px] pr-4 border-r border-gray-200">
//                     <Image
//                       src="/tools.png"
//                       alt="Mockup Promo"
//                       width={240}
//                       height={240}
//                       className="rounded-md object-cover"
//                     />
//                   </div>

//                   {/* Right Dropdown Menu Columns */}
//                   <div className="flex-1 grid grid-cols-3 gap-6 pl-4 text-sm">
//                     {/* Column 1 */}
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">Apparel</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">T-Shirt</Link></li>
//                         <li><Link href="#">Tank Top</Link></li>
//                         <li><Link href="#">Hoodie</Link></li>
//                         <li><Link href="#">Sweatshirt</Link></li>
//                         <li><Link href="#">Jacket</Link></li>
//                         <li><Link href="#">Crop Top</Link></li>
//                         <li><Link href="#">Apron</Link></li>
//                         <li><Link href="#">Scarf</Link></li>
//                         <li><Link href="#">Jersey</Link></li>
//                       </ul>
//                     </div>

//                     {/* Column 2 */}
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">Accessories</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">Bags</Link></li>
//                         <li><Link href="#">Hats</Link></li>
//                       </ul>
//                     </div>

//                     {/* Column 3 */}
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">More</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">Home & Living</Link></li>
//                         <li><Link href="#">Print</Link></li>
//                         <li><Link href="#">Packaging</Link></li>
//                         <li><Link href="#">Tech</Link></li>
//                         <li><Link href="#">Jewelry</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>
//             <li className="cursor-pointer hover:text-pink-500"><Link href='/3d'>3D Mockup</Link></li>

//             <li className="cursor-pointer flex items-center gap-1 hover:text-pink-500">
//               Custom Mockup
//               <span className="text-white text-xs font-semibold bg-pink-500 px-2 py-0.5 rounded-full">NEW</span>
//             </li>

//             <li className="cursor-pointer flex items-center gap-1 hover:text-pink-500">
//               <Link href='/vide-mockup'>Video Mockup</Link>
//               <span className="text-white text-xs font-semibold bg-pink-500 px-2 py-0.5 rounded-full">NEW</span>
//             </li>

//             <li className="cursor-pointer hover:text-pink-500"><Link href='/pricing'>Pricing</Link></li>
//           </ul>
//         </div>

//         {/* Right side: Button */}
//         <button className="bg-black text-white font-semibold text-sm px-5 py-2 rounded-md hover:opacity-90">
//           Login / Sign Up
//         </button>
//       </nav>
//     </>
//   );
// }


// 'use client';

// import Head from 'next/head';
// import { useState, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function NavbarPage() {
//   const [openSection, setOpenSection] = useState<string | null>(null);
//   const [activeDropdown, setActiveDropdown] = useState<'mockups' | 'tools' | null>(null);
//   const closeTimer = useRef<NodeJS.Timeout | null>(null);

//   const handleDropdownClick = (menu: 'mockups' | 'tools') => {
//     if (closeTimer.current) clearTimeout(closeTimer.current);

//     setActiveDropdown(menu);

//     closeTimer.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 4000);
//   };

//   const handleMouseEnter = (menu: 'mockups' | 'tools') => {
//     if (closeTimer.current) clearTimeout(closeTimer.current);
//     setActiveDropdown(menu);
//   };

//   const handleMouseLeave = () => {
//     if (closeTimer.current) clearTimeout(closeTimer.current);
//     setActiveDropdown(null);
//   };

//   return (
//     <>
//       <Head>
//         <title>Navbar Clone</title>
//       </Head>
//       <nav className="relative flex items-center justify-between px-6 py-4 bg-white shadow-sm">
//         {/* Left: Logo + Nav */}
//         <div className="flex items-center gap-8">
//           <div className="text-pink-500 text-3xl italic font-extrabold tracking-tight font-[cursive]">
//             <Image src="/mockey-logo.svg" alt="Mockey" width={100} height={40} />
//           </div>

//           {/* Navigation */}
//           <ul className="flex items-center gap-6 text-sm font-medium text-black">
//             {/* Mockups Dropdown */}
//             <li
//               className="relative cursor-pointer hover:text-pink-500"
//               onClick={() => handleDropdownClick('mockups')}
//               onMouseEnter={() => handleMouseEnter('mockups')}
//               onMouseLeave={handleMouseLeave}
//             >
//               Mockups <span className="ml-1">›</span>

//               {activeDropdown === 'mockups' && (
//                 <div
//                   className="absolute top-full left-0 mt-2 w-[550px] bg-white border border-gray-200 shadow-xl rounded-md z-50 flex p-4"
//                   onMouseEnter={() => handleMouseEnter('mockups')}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="w-[260px] pr-4 border-r border-gray-200">
//                     <Image src="/mocknav.webp" alt="Mockup Promo" width={240} height={240} className="rounded-md object-cover" />
//                   </div>
//                   <div className="flex flex-row gap-3 text-md ">
//                     <div className='flex flex-col gap-2 text-md  w-[200px] p-2'>
//                       <h4 onClick={() => setOpenSection(openSection === 'apparel' ? null : 'apparel')}>Apparel</h4>
//                       <h4 onClick={() => setOpenSection(openSection === 'accessories' ? null : 'accessories')}>Accessories</h4>
//                       <h4 onClick={() => setOpenSection(openSection === 'home' ? null : 'home')}>Home & Living</h4>
//                       <h4 onClick={() => setOpenSection(openSection === 'print' ? null : 'print')}>Print</h4>
//                       <h4 onClick={() => setOpenSection(openSection === 'packaging' ? null : 'packaging')}>Packaging</h4>
//                       <h4 onClick={() => setOpenSection(openSection === 'tech' ? null : 'tech')}>Tech</h4>
//                       <h4 onClick={() => setOpenSection(openSection === 'jewelry' ? null : 'jewelry')}>Jewelry</h4>
//                     </div>
//                     <div className=''>
//                       {openSection === 'apparel' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">T-Shirt</Link></li>
//                           <li><Link href="#">Tank Top</Link></li>
//                           <li><Link href="#">Hoodie</Link></li>
//                           <li><Link href="#">Sweatshirt</Link></li>
//                           <li><Link href="#">Jacket</Link></li>
//                           <li><Link href="#">Crop Top</Link></li>
//                           <li><Link href="#">Apron</Link></li>
//                           <li><Link href="#">Scarf</Link></li>
//                           <li><Link href="#">Jersey</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'accessories' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Tote Bag</Link></li>
//                           <li><Link href="#">Cap</Link></li>
//                           <li><Link href="#">Phone Cover</Link></li>
//                           <li><Link href="#">Gaming Pad</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'home' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Can</Link></li>
//                           <li><Link href="#">Mug</Link></li>
//                           <li><Link href="#">Cushion</Link></li>
//                           <li><Link href="#">Frame</Link></li>
//                           <li><Link href="#">Coaster</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'print' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Business Card</Link></li>
//                           <li><Link href="#">Book</Link></li>
//                           <li><Link href="#">ID Card</Link></li>
//                           <li><Link href="#">Sticker</Link></li>
//                           <li><Link href="#">Poster</Link></li>
//                           <li><Link href="#">Flyer</Link></li>
//                           <li><Link href="#">Greeting Card</Link></li>
//                           <li><Link href="#">Billboard</Link></li>
//                           <li><Link href="#">Magazine</Link></li>
//                           <li><Link href="#">Brochure</Link></li>
//                           <li><Link href="#">Lanyard</Link></li>
//                           <li><Link href="#">Banner</Link></li>
//                           <li><Link href="#">Canvas</Link></li>
//                           <li><Link href="#">Notebook</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'packaging' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Box</Link></li>
//                           <li><Link href="#">Tube</Link></li>
//                           <li><Link href="#">Dropper Bottle</Link></li>
//                           <li><Link href="#">Pouch</Link></li>
//                           <li><Link href="#">Cosmetic</Link></li>
//                           <li><Link href="#">Bottle</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'tech' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">IPhone</Link></li>
//                           <li><Link href="#">Laptop</Link></li>
//                           <li><Link href="#">IPad</Link></li>
//                           <li><Link href="#">Macbook</Link></li>
//                           <li><Link href="#">Phone</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'jewelry' && (
//                         <ul className="space-y-1 text-gray-700">
//                           <li><Link href="#">Ring</Link></li>
//                           <li><Link href="#">Necklace</Link></li>
//                           <li><Link href="#">Earring</Link></li>
//                         </ul>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>

//             {/* Tools Dropdown */}
//             <li
//               className="relative cursor-pointer hover:text-pink-500"
//               onClick={() => handleDropdownClick('tools')}
//               onMouseEnter={() => handleMouseEnter('tools')}
//               onMouseLeave={handleMouseLeave}
//             >
//               Tools <span className="ml-1">›</span>

//               {activeDropdown === 'tools' && (
//                 <div
//                   className="absolute top-full left-0 mt-2 w-[850px] bg-white border border-gray-200 shadow-xl rounded-md z-50 flex p-4"
//                   onMouseEnter={() => handleMouseEnter('tools')}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="w-[260px] pr-4 border-r border-gray-200">
//                     <Image src="/tools.png" alt="Tools Promo" width={240} height={240} className="rounded-md object-cover" />
//                   </div>
//                   <div className="flex-1 grid grid-cols-3 gap-6 pl-4 text-sm">
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">Apparel</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">T-Shirt</Link></li>
//                         <li><Link href="#">Tank Top</Link></li>
//                         <li><Link href="#">Hoodie</Link></li>
//                         <li><Link href="#">Sweatshirt</Link></li>
//                         <li><Link href="#">Jacket</Link></li>
//                         <li><Link href="#">Crop Top</Link></li>
//                         <li><Link href="#">Apron</Link></li>
//                         <li><Link href="#">Scarf</Link></li>
//                         <li><Link href="#">Jersey</Link></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">Accessories</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">Bags</Link></li>
//                         <li><Link href="#">Hats</Link></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">More</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">Home & Living</Link></li>
//                         <li><Link href="#">Print</Link></li>
//                         <li><Link href="#">Packaging</Link></li>
//                         <li><Link href="#">Tech</Link></li>
//                         <li><Link href="#">Jewelry</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>

//             {/* Static Links */}
//             <li className="cursor-pointer hover:text-pink-500"><Link href="/3d">3D Mockup</Link></li>
//             <li className="cursor-pointer flex items-center gap-1 hover:text-pink-500">
//               Custom Mockup
//               <span className="text-white text-xs font-semibold bg-pink-500 px-2 py-0.5 rounded-full">NEW</span>
//             </li>
//             <li className="cursor-pointer flex items-center gap-1 hover:text-pink-500">
//               <Link href="/vide-mockup">Video Mockup</Link>
//               <span className="text-white text-xs font-semibold bg-pink-500 px-2 py-0.5 rounded-full">NEW</span>
//             </li>
//             <li className="cursor-pointer hover:text-pink-500"><Link href="/pricing">Pricing</Link></li>
//           </ul>
//         </div>

//         {/* Right: Login/Signup */}
//         <button className="bg-black text-white font-semibold text-sm px-5 py-2 rounded-md hover:opacity-90">
//           Login / Sign Up
//         </button>
//       </nav>
//     </>
//   );
// }


// 'use client';

// import Head from 'next/head';
// import { useState, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function NavbarPage() {
//   const [openSection, setOpenSection] = useState<string | null>(null);
//   const [activeDropdown, setActiveDropdown] = useState<'mockups' | 'tools' | null>(null);
//   const closeTimer = useRef<NodeJS.Timeout | null>(null);

//   const handleMouseEnter = (menu: 'mockups' | 'tools') => {
//     if (closeTimer.current) {
//       clearTimeout(closeTimer.current);
//       closeTimer.current = null;
//     }
//     setActiveDropdown(menu);
//   };

//   const handleMouseLeave = () => {
//     closeTimer.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 2500);
//   };

//   const handleClick = (menu: 'mockups' | 'tools') => {
//     if (closeTimer.current) {
//       clearTimeout(closeTimer.current);
//       closeTimer.current = null;
//     }
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <>
//       <Head>
//         <title>Navbar Clone</title>
//       </Head>
//       <nav className="relative flex items-center justify-between px-6 py-4 bg-white shadow-sm">
//         {/* Left side: Logo + Nav */}
//         <div className="flex items-center gap-8">
//           {/* Logo */}
//           <div className="text-pink-500 text-3xl italic font-extrabold tracking-tight font-[cursive]">
//             <Image src="/mockey-logo.svg" alt="Mockey" width={100} height={40} />
//           </div>

//           {/* Navigation Links */}
//           <ul className="flex items-center gap-6 text-sm font-medium text-black">
//             {/* Mockups */}
//             <li
//               className="relative cursor-pointer hover:text-pink-500"
//               onMouseEnter={() => handleMouseEnter('mockups')}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => handleClick('mockups')}
//             >
//               Mockups <span className="ml-1">›</span>

//               {activeDropdown === 'mockups' && (
//                 <div className="absolute w-[500px] top-full left-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-md z-50 flex p-4"

//                   onMouseEnter={() => handleMouseEnter('mockups')}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   {/* Left Visual */}
//                   <div className="w-[180px] pr-4 border-r border-gray-200">
//                     <Image
//                       src="/mocknav.webp"
//                       alt="Mockup Promo"
//                       width={175}
//                       height={200}
//                       className="rounded-md object-cover"
//                     />
//                   </div>

//                   {/* Dropdown Content */}
//                   <div className="flex-1 grid grid-cols-3 gap-6 pl-4 text-sm">
//                     {/* Column 1 */}
//                     <div className="space-y-3">
//                       {['apparel', 'accessories', 'home', 'print', 'packaging', 'tech', 'jewelry'].map((item) => (
//                         <h4
//                           key={item}
//                           className="cursor-pointer hover:text-pink-500"
//                           onClick={() => setOpenSection(openSection === item ? null : item)}
//                         >
//                           {item.charAt(0).toUpperCase() + item.slice(1).replace('&', '& ')}
//                         </h4>
//                       ))}
//                     </div>

//                     {/* Column 2 */}
//                     <div>
//                       {openSection === 'apparel' && (
//                         <ul className="space-y-3 text-gray-700">
//                           <li><Link href="#">T-Shirt</Link></li>
//                           <li><Link href="#">Tank Top</Link></li>
//                           <li><Link href="#">Hoodie</Link></li>
//                           <li><Link href="#">Sweatshirt</Link></li>
//                           <li><Link href="#">Jacket</Link></li>
//                           <li><Link href="#">Crop Top</Link></li>
//                           <li><Link href="#">Apron</Link></li>
//                           <li><Link href="#">Scarf</Link></li>
//                           <li><Link href="#">Jersey</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'accessories' && (
//                         <ul className="space-y-3 text-gray-700">
//                           <li><Link href="#">Tote Bag</Link></li>
//                           <li><Link href="#">Cap</Link></li>
//                           <li><Link href="#">Phone Cover</Link></li>
//                           <li><Link href="#">Gaming Pad</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'home' && (
//                         <ul className="space-y-3 text-gray-700">
//                           <li><Link href="#">Can</Link></li>
//                           <li><Link href="#">Mug</Link></li>
//                           <li><Link href="#">Cushion</Link></li>
//                           <li><Link href="#">Frame</Link></li>
//                           <li><Link href="#">Coaster</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'print' && (
//                         <ul className="space-y-3 text-md text-gray-700 grid grid-cols-3 gap-3 ">
//                           <li><Link href="#">Business Card</Link></li>
//                           <li><Link href="#">Book</Link></li>
//                           <li><Link href="#">ID Card</Link></li>
//                           <li><Link href="#">Sticker</Link></li>
//                           <li><Link href="#">Poster</Link></li>
//                           <li><Link href="#">Flyer</Link></li>
//                           <li><Link href="#">Greeting Card</Link></li>
//                           <li><Link href="#">Billboard</Link></li>
//                           <li><Link href="#">Magazine</Link></li>
//                           <li><Link href="#">Brochure</Link></li>
//                           <li><Link href="#">Lanyard</Link></li>
//                           <li><Link href="#">Banner</Link></li>
//                           <li><Link href="#">Canvas</Link></li>
//                           <li><Link href="#">Notebook</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'packaging' && (
//                         <ul className="space-y-3 text-gray-700">
//                           <li><Link href="#">Box</Link></li>
//                           <li><Link href="#">Tube</Link></li>
//                           <li><Link href="#">Dropper Bottle</Link></li>
//                           <li><Link href="#">Pouch</Link></li>
//                           <li><Link href="#">Cosmetic</Link></li>
//                           <li><Link href="#">Bottle</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'tech' && (
//                         <ul className="space-y-3 text-gray-700">
//                           <li><Link href="#">IPhone</Link></li>
//                           <li><Link href="#">Laptop</Link></li>
//                           <li><Link href="#">IPad</Link></li>
//                           <li><Link href="#">Macbook</Link></li>
//                           <li><Link href="#">Phone</Link></li>
//                         </ul>
//                       )}
//                       {openSection === 'jewelry' && (
//                         <ul className="space-y-3 text-gray-700">
//                           <li><Link href="#">Ring</Link></li>
//                           <li><Link href="#">Necklace</Link></li>
//                           <li><Link href="#">Earring</Link></li>
//                         </ul>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>

//             {/* Tools */}
//             <li
//               className="relative cursor-pointer hover:text-pink-500"
//               onMouseEnter={() => handleMouseEnter('tools')}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => handleClick('tools')}
//             >
//               Tools <span className="ml-1">›</span>
//               {activeDropdown === 'tools' && (
//                 <div
//                   className="absolute top-full left-0 mt-2 w-auto bg-white border border-gray-200 shadow-xl rounded-md z-50 flex p-4"

//                   onMouseEnter={() => handleMouseEnter('tools')}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="w-[260px] pr-4 border-r border-gray-200">
//                     <Image src="/tools.png" alt="Tools Promo" width={240} height={240} className="rounded-md object-cover" />
//                   </div>
//                   <div className="flex-1 grid grid-cols-3 gap-6 pl-4 text-sm">
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">Apparel</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">T-Shirt</Link></li>
//                         <li><Link href="#">Tank Top</Link></li>
//                         <li><Link href="#">Hoodie</Link></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">Accessories</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">Bags</Link></li>
//                         <li><Link href="#">Hats</Link></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="text-black font-semibold mb-2">More</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li><Link href="#">Home & Living</Link></li>
//                         <li><Link href="#">Print</Link></li>
//                         <li><Link href="#">Packaging</Link></li>
//                         <li><Link href="#">Tech</Link></li>
//                         <li><Link href="#">Jewelry</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>

//             {/* Static Links */}
//             <li className="cursor-pointer hover:text-pink-500"><Link href='/3d'>3D Mockup</Link></li>
//             <li className="cursor-pointer flex items-center gap-1 hover:text-pink-500">
//               Custom Mockup
//               <span className="text-white text-xs font-semibold bg-pink-500 px-2 py-0.5 rounded-full">NEW</span>
//             </li>
//             <li className="cursor-pointer flex items-center gap-1 hover:text-pink-500">
//               <Link href='/vide-mockup'>Video Mockup</Link>
//               <span className="text-white text-xs font-semibold bg-pink-500 px-2 py-0.5 rounded-full">NEW</span>
//             </li>
//             <li className="cursor-pointer hover:text-pink-500"><Link href='/pricing'>Pricing</Link></li>
//           </ul>
//         </div>

//         {/* Right side: Auth Button */}
//         <button className="bg-black text-white font-semibold text-sm px-5 py-2 rounded-md hover:opacity-90">
//           Login / Sign Up
//         </button>
//       </nav>
//     </>
//   );
// }


'use client';

import Head from 'next/head';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<'mockups' | 'tools' | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: 'mockups' | 'tools') => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 2500);
  };

  const handleClick = (menu: 'mockups' | 'tools') => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      <Head>
        <title>Navbar Clone</title>
      </Head>
      <nav className="relative flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        {/* Left side: Logo + Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="text-pink-500 text-3xl italic font-extrabold tracking-tight font-[cursive]">
            <Image src="/mockey-logo.svg" alt="Mockey" width={100} height={40} />
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-6 text-sm font-medium text-black">
            {/* Mockups */}
            <li
              className="relative cursor-pointer hover:text-pink-500"
              onMouseEnter={() => handleMouseEnter('mockups')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('mockups')}
            >
              Mockups <span className="ml-1">›</span>

              {activeDropdown === 'mockups' && (
                <div
                  className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-md z-50 flex p-4 transition-all duration-300
                    ${openSection === 'print' ? 'w-[850px]' :
                      openSection === 'apparel' ? 'w-[700px]' :
                      'w-[600px]'}`}
                  onMouseEnter={() => handleMouseEnter('mockups')}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Left Visual */}
                  <div className="w-[180px] pr-4 border-r border-gray-200">
                    <Image
                      src="/mocknav.webp"
                      alt="Mockup Promo"
                      width={175}
                      height={200}
                      className="rounded-md object-cover"
                    />
                  </div>

                  {/* Dropdown Content */}
                  <div className="flex-1 grid grid-cols-3 gap-6 pl-4 text-sm">
                    {/* Column 1 */}
                    <div className="space-y-3">
                      {['apparel', 'accessories', 'home', 'print', 'packaging', 'tech', 'jewelry'].map((item) => (
                        <h4
                          key={item}
                          className="cursor-pointer hover:text-pink-500"
                          onClick={() => setOpenSection(openSection === item ? null : item)}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1).replace('&', '& ')}
                        </h4>
                      ))}
                    </div>

                    {/* Column 2 */}
                    <div>
                      {openSection === 'apparel' && (
                        <ul className="space-y-3 text-gray-700">
                          <li><Link href="#">T-Shirt</Link></li>
                          <li><Link href="#">Tank Top</Link></li>
                          <li><Link href="#">Hoodie</Link></li>
                          <li><Link href="#">Sweatshirt</Link></li>
                          <li><Link href="#">Jacket</Link></li>
                          <li><Link href="#">Crop Top</Link></li>
                          <li><Link href="#">Apron</Link></li>
                          <li><Link href="#">Scarf</Link></li>
                          <li><Link href="#">Jersey</Link></li>
                        </ul>
                      )}
                      {openSection === 'accessories' && (
                        <ul className="space-y-3 text-gray-700">
                          <li><Link href="#">Tote Bag</Link></li>
                          <li><Link href="#">Cap</Link></li>
                          <li><Link href="#">Phone Cover</Link></li>
                          <li><Link href="#">Gaming Pad</Link></li>
                        </ul>
                      )}
                      {openSection === 'home' && (
                        <ul className="space-y-3 text-gray-700">
                          <li><Link href="#">Can</Link></li>
                          <li><Link href="#">Mug</Link></li>
                          <li><Link href="#">Cushion</Link></li>
                          <li><Link href="#">Frame</Link></li>
                          <li><Link href="#">Coaster</Link></li>
                        </ul>
                      )}
                      {openSection === 'print' && (
                        <ul className="space-y-3 text-md text-gray-700 grid grid-cols-3 gap-3">
                          <li><Link href="#">Business Card</Link></li>
                          <li><Link href="#">Book</Link></li>
                          <li><Link href="#">ID Card</Link></li>
                          <li><Link href="#">Sticker</Link></li>
                          <li><Link href="#">Poster</Link></li>
                          <li><Link href="#">Flyer</Link></li>
                          <li><Link href="#">Greeting Card</Link></li>
                          <li><Link href="#">Billboard</Link></li>
                          <li><Link href="#">Magazine</Link></li>
                          <li><Link href="#">Brochure</Link></li>
                          <li><Link href="#">Lanyard</Link></li>
                          <li><Link href="#">Banner</Link></li>
                          <li><Link href="#">Canvas</Link></li>
                          <li><Link href="#">Notebook</Link></li>
                        </ul>
                      )}
                      {openSection === 'packaging' && (
                        <ul className="space-y-3 text-gray-700">
                          <li><Link href="#">Box</Link></li>
                          <li><Link href="#">Tube</Link></li>
                          <li><Link href="#">Dropper Bottle</Link></li>
                          <li><Link href="#">Pouch</Link></li>
                          <li><Link href="#">Cosmetic</Link></li>
                          <li><Link href="#">Bottle</Link></li>
                        </ul>
                      )}
                      {openSection === 'tech' && (
                        <ul className="space-y-3 text-gray-700">
                          <li><Link href="#">IPhone</Link></li>
                          <li><Link href="#">Laptop</Link></li>
                          <li><Link href="#">IPad</Link></li>
                          <li><Link href="#">Macbook</Link></li>
                          <li><Link href="#">Phone</Link></li>
                        </ul>
                      )}
                      {openSection === 'jewelry' && (
                        <ul className="space-y-3 text-gray-700">
                          <li><Link href="#">Ring</Link></li>
                          <li><Link href="#">Necklace</Link></li>
                          <li><Link href="#">Earring</Link></li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Tools */}
            <li
              className="relative cursor-pointer hover:text-pink-500"
              onMouseEnter={() => handleMouseEnter('tools')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('tools')}
            >
              Tools <span className="ml-1">›</span>
              {activeDropdown === 'tools' && (
                <div
                  className="absolute top-full left-0 mt-2 w-[500px] bg-white border border-gray-200 shadow-xl rounded-md z-50 flex p-4"
                  onMouseEnter={() => handleMouseEnter('tools')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[260px] pr-4 border-r border-gray-200">
                    <Image src="/tools.png" alt="Tools Promo" width={240} height={240} className="rounded-md object-cover" />
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-6 pl-4 text-sm">
                    <div>
                      <h4 className="text-black font-semibold mb-2">Apparel</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li><Link href="#">T-Shirt</Link></li>
                        <li><Link href="#">Tank Top</Link></li>
                        <li><Link href="#">Hoodie</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-black font-semibold mb-2">Accessories</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li><Link href="#">Bags</Link></li>
                        <li><Link href="#">Hats</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-black font-semibold mb-2">More</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li><Link href="#">Home & Living</Link></li>
                        <li><Link href="#">Print</Link></li>
                        <li><Link href="#">Packaging</Link></li>
                        <li><Link href="#">Tech</Link></li>
                        <li><Link href="#">Jewelry</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Static Links */}
            <li className="cursor-pointer hover:text-pink-500"><Link href='/3d'>3D Mockup</Link></li>
            <li className="cursor-pointer flex items-center gap-1 hover:text-pink-500">
              Custom Mockup
              <span className="text-white text-xs font-semibold bg-pink-500 px-2 py-0.5 rounded-full">NEW</span>
            </li>
            <li className="cursor-pointer flex items-center gap-1 hover:text-pink-500">
              <Link href='/vide-mockup'>Video Mockup</Link>
              <span className="text-white text-xs font-semibold bg-pink-500 px-2 py-0.5 rounded-full">NEW</span>
            </li>
            <li className="cursor-pointer hover:text-pink-500"><Link href='/pricing'>Pricing</Link></li>
          </ul>
        </div>

        {/* Right side: Auth Button */}
        <button className="bg-black text-white font-semibold text-sm px-5 py-2 rounded-md hover:opacity-90">
          Login / Sign Up
        </button>
      </nav>
    </>
  );
}
