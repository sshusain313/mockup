import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">Upcoming AI and other tools</h1>
      <p className="text-gray-600 mb-8 text-center">
        Our upcoming AI suite and 3D editor will change the way you design
      </p>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* AI Product Photography */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center">
          <h2 className="text-pink-600 font-semibold text-lg mb-3">
            AI Product Photography
          </h2>
          <button className="bg-pink-500 text-white font-medium px-4 py-2 rounded-md mb-5">
            Generate Photos
          </button>
          <Image
            src="/product-photography.png"
            alt="AI Product Photography"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>

        {/* 3D Mockup Generator */}
        <div className="bg-black shadow-md rounded-2xl p-6 flex flex-col items-center">
          <div className="flex items-center mb-3">
            <h2 className="text-white font-semibold text-lg mr-2">
              3D Mockup Generator
            </h2>
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
              Beta
            </span>
          </div>
          <button className="bg-white text-black font-medium px-4 py-2 rounded-md mb-5">
            Create Mockups
          </button>
          <Image
            src="/3d-mockup.png"
            alt="3D Mockup"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
