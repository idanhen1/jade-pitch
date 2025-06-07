import React from 'react';
import { motion } from 'framer-motion';
import { Target, AlertOctagon, EyeOff } from 'lucide-react';

const challengePoints = [
  {
    icon: Target,
    title: "Problem: Uncontrolled Power",
    description: "AI agents and human users silently gain excessive privileges, triggering high-risk actions across your entire enterprise - cloud, SaaS, custom apps, and AI workloads.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    icon: AlertOctagon,
    title: "Impact: Breaches, Outages, Compliance",
    description: "Unchecked power leads to **security breaches**, disruptive **operational outages**, and costly **audit failures**, eroding trust and business continuity.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200"
  },
  {
    icon: EyeOff,
    title: "Gap: Fragmented Control",
    description: "Siloed, access-focused tools offer piecemeal oversight, not unified governance. This leads to manual correlation and gaps in controlling cross-system actions.", // Updated description
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

export default function Challenges() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-3 sm:mb-4 tracking-tight">
          The <span className="text-emerald-600 font-semibold">Challenge</span> We Solve
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500">
          Unchecked power creep exposes your enterprise to critical risks.
        </p>
      </motion.div>

      <div className="w-full max-w-4xl lg:max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {challengePoints.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.15 }}
              className={`p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left ${item.bgColor} border ${item.borderColor} flex flex-col h-full`}
            >
              <div className="flex items-start mb-3 sm:mb-4">
                <div className={`p-2 sm:p-2.5 rounded-lg ${item.bgColor.replace('bg-', 'bg-').replace('-50', '-100')} mr-3 shrink-0`}>
                    <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold ${item.color.replace('text-', 'text-').replace('-600', '-700')} leading-tight`}>{item.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed flex-grow">
                {item.description.split('**').map((text, i) => 
                  i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-800">{text}</strong> : text
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}