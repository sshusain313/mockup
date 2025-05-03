// export default function Pricing() {
//     return (
//       <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen py-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-3xl md:text-4xl font-semibold mb-2">
//             Unlock Magic With Mockey AI Premium Plans
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-6">
//             Get the most out of Mockey AI mockup generator and our suite of AI tools for E-commerce and editing.
//             Elevate your brand visual, marketing collaterals, and get more done with Mockey premium subscriptions.
//           </p>
  
//           <p className="text-sm text-gray-500 mb-8">Annual pricing | Up to 40% Off</p>
  
//           {/* Pricing Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {/* FREE */}
//             <div className="border rounded-2xl p-6 bg-white shadow-sm text-left">
//               <h3 className="font-semibold text-lg mb-1">FREE</h3>
//               <p className="text-xl font-bold mb-4">$0/mo</p>
//               <ul className="text-sm space-y-2 mb-6">
//                 <li>✅ 1000+ Free Mockups</li>
//                 <li>✅ New Mockups Every Week</li>
//                 <li>✅ JPG File Format</li>
//               </ul>
//               <button className="w-full py-2 bg-gray-100 rounded-md font-medium">Done</button>
//             </div>
  
//             {/* PRO */}
//             <div className="border-2 border-pink-500 rounded-2xl p-6 bg-white shadow-sm text-left relative">
//               <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-medium px-2 py-0.5 rounded-bl-lg">★ Most Popular</span>
//               <h3 className="font-semibold text-lg mb-1">PRO</h3>
//               <p className="text-xl font-bold mb-4">$4.1/mo</p>
//               <ul className="text-sm space-y-2 mb-6">
//                 <li>✅ PNG File Format</li>
//                 <li>✅ PRO Mockups</li>
//                 <li>✅ High Quality Download</li>
//                 <li>✅ Mockup Bundles</li>
//                 <li>✅ Multiple Design Upload</li>
//                 <li>✅ Exclusive Backgrounds</li>
//                 <li>✅ No Ads</li>
//                 <li>✅ Unlimited Downloads</li>
//               </ul>
//               <button className="w-full py-2 bg-pink-500 text-white rounded-md font-medium">Upgrade to PRO</button>
//             </div>
  
//             {/* MAX */}
//             <div className="border rounded-2xl p-6 bg-white shadow-sm text-left">
//               <h3 className="font-semibold text-lg mb-1">MAX</h3>
//               <p className="text-xl font-bold mb-4">$15.2/mo</p>
//               <ul className="text-sm space-y-2 mb-6">
//                 <li>✅ Everything in PRO +</li>
//                 <li>✅ 200 AI Credits</li>
//                 <li>✅ AI Animate</li>
//                 <li>✅ AI Photoshoot</li>
//                 <li>✅ AI Background Remover</li>
//                 <li>✅ AI Background Blur</li>
//               </ul>
//               <button className="w-full py-2 bg-black text-white rounded-md font-medium">Upgrade to MAX</button>
//             </div>
  
//             {/* LIFETIME */}
//             <div className="border-2 border-blue-600 rounded-2xl p-6 bg-gradient-to-br from-blue-100 to-blue-200 text-left">
//               <h3 className="font-semibold text-lg mb-1">LIFE TIME PRO</h3>
//               <p className="text-xl font-bold mb-4">$199 One Time</p>
//               <ul className="text-sm space-y-2 mb-6">
//                 <li>✅ Everything in PRO +</li>
//                 <li>✅ Use Forever</li>
//                 <li>✅ Lifetime Updates</li>
//                 <li>✅ Priority Support</li>
//               </ul>
//               <button className="w-full py-2 bg-blue-600 text-white rounded-md font-medium">Upgrade to Lifetime PRO</button>
//             </div>
//           </div>
  
//           {/* Enterprise Box */}
//           <div className="bg-gradient-to-br from-pink-600 to-pink-500 text-white p-8 rounded-2xl mt-16 max-w-4xl mx-auto">
//             <h2 className="text-xl font-semibold mb-2">Mockey for Enterprise</h2>
//             <p className="mb-6 text-sm">
//               Enterprise offering is ideal for E-commerce brands, marketing agencies, and corporates with a minimum
//               budget of $500/month. Contact us with your requirements.
//             </p>
  
//             <div className="grid md:grid-cols-2 gap-6 mb-6 text-sm">
//               <ul className="space-y-2">
//                 <li>✅ On-demand reusable mockup templates</li>
//                 <li>✅ On-demand 3D mockup creation</li>
//                 <li>✅ AI Photoshoot from your brand photos</li>
//                 <li>✅ Express delivery of custom mockups</li>
//               </ul>
//               <ul className="space-y-2">
//                 <li>✅ 24/7 Priority Support</li>
//                 <li>✅ Dedicated relationship manager</li>
//               </ul>
//             </div>
  
//             <form className="grid md:grid-cols-3 gap-4">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="px-4 py-2 rounded-md text-black col-span-1"
//               />
//               <input
//                 type="text"
//                 placeholder="Message / Requirements"
//                 className="px-4 py-2 rounded-md text-black col-span-1"
//               />
//               <button className="bg-white text-pink-600 font-semibold rounded-md px-4 py-2 col-span-1">
//                 Request Callback →
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
import { CheckCircle, CircleCheckBig } from 'lucide-react';
import PricingTable from './components/PricingTable';
import Enterprise from './components/Enterprise';
import Plans from './components/Plans';
import Tweets from './components/Tweets';
import Credits from './components/Credits';
import Faqs from './components/Faqs';
import GetStarted from './components/GetStarted';

const plans = [
  {
    name: 'FREE',
    icon: '🆓',
    price: '$0/mo',
    oldPrice: null,
    subtext: 'No Billing',
    features: [
      '1000+ Free Mockups',
      'New Mockups Every Week',
      'JPG File Format',
    ],
    button: 'Done',
    highlight: false,
    bg: 'bg-white',
  },
  {
    name: 'PRO',
    icon: '🟠',
    price: '$4.1/mo',
    oldPrice: '$7/mo',
    subtext: 'Billed yearly',
    features: [
      'Everything in FREE +',
      'PNG File Format',
      'PRO Mockups',
      'High Quality Download',
      'Mockup Bundles',
      'Multiple Design Upload',
      'Exclusive Backgrounds',
      'No Ads',
      'Unlimited Downloads',
    ],
    button: 'Upgrade to PRO',
    highlight: 'Most Popular',
    bg: 'bg-white',
  },
  {
    name: 'MAX',
    icon: '🟣',
    price: '$15.2/mo',
    oldPrice: '$19/mo',
    subtext: 'Billed yearly',
    features: [
      'Everything in PRO +',
      '200 AI Credits',
      'AI Animate',
      'AI Photoshoot',
      'AI Background Remover',
      'AI Background Blur',
    ],
    button: 'Upgrade to MAX',
    highlight: false,
    bg: 'bg-white',
  },
  {
    name: 'LIFE TIME PRO',
    icon: '💎',
    price: '$199',
    oldPrice: null,
    subtext: 'One Time\nBuy once, use forever',
    features: [
      'Everything in PRO +',
      'Use Forever',
      'Lifetime Updates',
      'Priority Support',
    ],
    button: 'Upgrade to Lifetime PRO',
    highlight: false,
    bg: 'bg-gradient-to-b from-[#3b82f6] to-[#0f172a] text-white',
    isLifetime: true,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-pricing-gradient py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col rounded-xl border border-gray-200 shadow-sm p-6 ${plan.bg}`}
          >
            {/* Most Popular Badge */}
            {plan.highlight && (
              <div className="absolute top-2 right-2 bg-black text-white text-xs font-medium px-2 py-0.5 rounded z-10">
                ↑ {plan.highlight}
              </div>
            )}

            {/* Header */}
            <div
              className={`flex items-center gap-2 text-sm font-medium mb-4 ${
                plan.isLifetime ? 'text-white' : 'text-gray-900'
              }`}
            >
              <div className="text-xl">{plan.icon}</div>
              <div>{plan.name}</div>
            </div>

            {/* Price Section */}
            <div
              className={`text-2xl font-semibold mb-1 ${
                plan.isLifetime ? 'text-white' : 'text-gray-900'
              }`}
            >
              {plan.price}
            </div>
            {plan.oldPrice && (
              <div className="text-sm text-gray-400 line-through">{plan.oldPrice}</div>
            )}
            <div
              className={`text-sm mb-4 whitespace-pre-wrap ${
                plan.isLifetime ? 'text-white/70' : 'text-gray-500'
              }`}
            >
              {plan.subtext}
            </div>

            {/* Features */}
            <ul
              className={`flex-1 space-y-2 text-sm mb-6 ${
                plan.isLifetime ? 'text-white' : 'text-gray-700'
              }`}
            >
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-0.5" size={16} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-2 text-sm rounded-md font-medium transition ${
                plan.isLifetime
                  ? 'bg-white text-gray-900 hover:bg-gray-200'
                  : plan.highlight
                  ? 'bg-pink-500 text-white hover:bg-pink-600'
                  : idx === 2
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
      <Enterprise />
      <PricingTable />
      <Plans />
      <Tweets />
      <Credits />
      <Faqs />
      <GetStarted />
    </div>
  );
}
