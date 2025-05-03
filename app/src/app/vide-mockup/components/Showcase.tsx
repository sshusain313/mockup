import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Faqs from './Faqs';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MockupsShowcase = () => {
  // Categories for the sidebar
  const categories = [
    "ALL MOCKUPS",
    "APPAREL",
    "HOME AND LIVING",
    "PACKAGING",
    "PRINT",
    "TECH",
  ];

  // Example mockup products
  const mockupProducts = [
    { id: 1, image: "/showcase/thumbnail-tshirt-0001.png", name: "Red T-Shirt Mockup" },
    { id: 2, image: "/showcase/thumbnail-polo-tshirt-0001.png", name: "Blue Polo Mockup" },
    { id: 3, image: "/showcase/thumbnail-hoodie-0001.png", name: "Black Hoodie Mockup" },
    { id: 4, image: "/showcase/mug-preview-thumbnail-002.png", name: "Red T-Shirt Mockup" },
    { id: 5, image: "/showcase/mug-preview-thumbnail-001.webp", name: "Blue Polo Mockup" },
    { id: 6, image: "/showcase/dropper_bottle-preview-thumb-001.jpg", name: "Black Hoodie Mockup" },
    { id: 7, image: "/showcase/can-preview-thumb-001.jpg", name: "Red T-Shirt Mockup" },
    { id: 8, image: "/showcase/can-preview-thumb-002.jpeg", name: "Blue Polo Mockup" },
    { id: 9, image: "/showcase/can-preview-thumb-003jpeg", name: "Black Hoodie Mockup" },
  ];

  return (
    <div className="flex w-full">
      {/* Left Sidebar */}
      <aside className="w-64 min-h-screen border-r border-gray-200 bg-white p-4">
        {categories.map((category, index) => (
          <div key={category} className={`mb-4 ${index === 0 ? "font-bold" : ""}`}>
            <button className="flex items-center justify-between w-full p-3 text-left border border-gray-200 rounded-md hover:bg-gray-50">
              {category}
              {index !== 0 && <ChevronDown size={18} />}
            </button>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header Section */}
        <div className="mb-4 flex justify-between items-center">
          <span className="text-gray-500">Video-Mockups</span>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>New</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-48">
                    <ul className="space-y-2">
                      <li>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Latest Additions
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Featured
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Popular
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold mb-4">
        Video Mockups Download Online | Make AI Video Mockup
        </h1>

        {/* Description */}
        <p className="text-gray-700 mb-8 max-w-4xl">
        Create AI Video Mockups Online with Mockey's AI Video Mockup Generator for apparel, TikTok ads, iPhone, and book video mockups. Add your design & hit generate!
        </p>
        

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockupProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-lg overflow-hidden p-4 flex items-center justify-center"
            >
              <img
                src={product.image}
                // alt={product.name}
                className="w-full h-64 object-contain"
              />
            </div>
          ))}
        </div>

        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm max-w-7xl mx-auto my-10 flex flex-col md:flex-row gap-6 items-center">
  <div className="md:w-2/3">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      How to Create a 3D Mockup on Mockey?
    </h2>
    <p className="text-gray-700 mb-2">To design a 3D mockup with Mockey.ai:</p>
    <p className="text-sm text-gray-800 mb-1">
      <strong>Step 1:</strong> Go to 3D Mockups, choose a product category, and select a 3D template.
    </p>
    <p className="text-sm text-gray-800 mb-1">
      <strong>Step 2:</strong> Click Upload Your Images to add multiple designs by dragging and dropping. 
      You can also change colors, add textures, or set a background.
    </p>
    <p className="text-sm text-gray-800">
      <strong>Step 3:</strong> Click Download to save your 3D mockup as a PNG or JPEG in different sizes, 
      or click Video to save it as a 5-second webm file.
    </p>
  </div>
  <div className="md:w-1/3 w-full">
    <Image
      src="/edit.webp" // 🔁 Replace with actual image path
      alt="Edit Mockups Fast"
      width={400}
      height={300}
      className="rounded-md"
    />
  </div>
</section>
  <section className='max-w-7xl mx-auto mb-10'>
    <Image src='/bag-black.webp' alt='bag-black' width={500} height={500} className='w-full h-auto rounded-md mb-10' />
  </section>

    <Faqs />
      </main>
    </div>
  );
};

export default MockupsShowcase;
