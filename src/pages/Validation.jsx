import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Custom Jade-like Quote Icon
const JadeQuoteIcon = (props) => (
  <svg width="22" height="16" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}> {/* Slightly smaller icon */}
    <path d="M11.8511 27.0002C9.31549 27.0002 7.06965 26.276 5.11358 24.8276C3.15751 23.3791 1.60332 21.3281 0.450996 18.6745C-0.701328 16.021 -0.991084 13.2069 -0.420616 10.3929C0.150014 7.57888 1.33599 4.96592 3.13731 2.55403L7.20764 5.04347C5.78169 6.90699 4.86987 8.97009 4.47219 11.2328C4.07451 13.4955 4.21622 15.7746 4.89731 18.0699C5.5784 20.3653 6.77174 22.4016 8.47744 24.1789C10.1831 25.9562 12.2831 27.0002 14.7726 27.0002V20.0016H7.76049L11.8511 0.818359H20.0215L11.8511 27.0002Z" fill="#A7F3D0"/>
    <path d="M33.0562 27.0002C30.5206 27.0002 28.2747 26.276 26.3187 24.8276C24.3626 23.3791 22.8084 21.3281 21.6561 18.6745C20.5038 16.021 20.214 13.2069 20.7845 10.3929C21.3551 7.57888 22.5411 4.96592 24.3424 2.55403L28.4128 5.04347C26.9868 6.90699 26.075 8.97009 25.6773 11.2328C25.2796 13.4955 25.4213 15.7746 26.1024 18.0699C26.7835 20.3653 27.9769 22.4016 29.6826 24.1789C31.3883 25.9562 33.4882 27.0002 35.9777 27.0002V20.0016H28.9656L33.0562 0.818359H41.2266L33.0562 27.0002Z" fill="#A7F3D0"/>
  </svg>
);

const quotesData = [
  {
    quote: "I like that there’s an AI-based approval layer… this is something I’d want to show to people at PayPal.", // Removed "It looks cool."
    name: "Daryl Swanson", // Updated name
    title: "Heads Cloud Security at PayPal",
    avatarPlaceholder: "DS" // Updated placeholder
  },
  {
    quote: "I tried solving these issues with access and it simply didn’t work. You’re doing something very unique.",
    name: "Mandy Andress",
    title: "CISO, Elastic",
    avatarPlaceholder: "MA"
  },
  {
    quote: "You have something amazing enforcing controls over dangerous actions and it’s unique and enough on its own.",
    name: "Chris Owen", // Updated name
    title: "IAM Veteran (ex-Saviynt/BT/CyberArk)",
    avatarPlaceholder: "CO" // Updated placeholder
  }
];

const metricsData = [
  { value: "40+", label: "CISOs & Expert Interviews" },
  { value: "90%", label: "Problem Recognition" },
];

const compositeLogosUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/84ae14f87_image.png";

const QuoteCard = ({ quote, name, title, avatarPlaceholder, index }) => (
  <motion.div
    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/70 flex flex-col items-center text-center h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
  >
    <JadeQuoteIcon className="w-6 h-4.5 text-emerald-300 mb-2" />
    <p className="text-slate-600 text-sm italic mb-3 flex-grow leading-relaxed">"{quote}"</p>
    <div className="w-9 h-9 rounded-full bg-emerald-100/70 flex items-center justify-center mb-1.5 relative ring-1 ring-emerald-200">
      <span className="text-emerald-600 font-semibold text-sm">{avatarPlaceholder}</span>
      <Star className="w-3.5 h-3.5 text-yellow-400 absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow" fill="currentColor"/>
    </div>
    <h4 className="text-slate-700 font-semibold text-xs tracking-wide">{name}</h4>
    <p className="text-slate-500 text-[10px] leading-tight">{title}</p>
  </motion.div>
);

const MetricItem = ({ value, label, index }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
  >
    <p className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-0.5">{value}</p>
    <p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>
  </motion.div>
);

const CompanyLogosDisplay = ({ imageUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="max-w-3xl mx-auto px-2 py-3"
  >
    <img 
      src={imageUrl} 
      alt="Company Logos"
      className="max-w-full h-auto object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
    />
  </motion.div>
);

export default function Validation() {
  return (
    <div className="w-full flex flex-col items-center justify-start py-8 sm:py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8 max-w-3xl" 
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 mb-2 tracking-tight">
          Problem Strongly <span className="text-emerald-600 font-semibold">Resonates</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500">
          Industry experts validate our approach and vision.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl space-y-6 sm:space-y-8"> 
        {/* Quotes Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quotesData.map((item, index) => (
            <QuoteCard key={item.name} {...item} index={index} />
          ))}
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 gap-4 max-w-xs sm:max-w-sm mx-auto pt-2">
          {metricsData.map((item, index) => (
            <MetricItem key={item.label} {...item} index={index} />
          ))}
        </div>
        
        {/* Company Logos Section */}
        <div className="text-center mt-4 sm:mt-6">
          <CompanyLogosDisplay imageUrl={compositeLogosUrl} />
        </div>
      </div>
    </div>
  );
}