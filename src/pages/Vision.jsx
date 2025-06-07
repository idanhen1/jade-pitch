import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Globe, Cog, Database, BrainCircuit, Sparkles } from 'lucide-react';

export default function Vision() {
  const targetEnv = [
    { icon: Cloud, label: "Cloud" },
    { icon: Globe, label: "SaaS" },
    { icon: Cog, label: "On-Prem" },
    { icon: Database, label: "Custom Apps" },
    { icon: BrainCircuit, label: "AI Workloads" }
  ];

  return (
    // Removed bg-gradient-to-b from-white via-slate-50 to-slate-100/60 to inherit from parent section
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 text-center"> 
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full px-4"
      >
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-8 sm:mb-10 md:mb-12 leading-tight px-2"
          initial={{ opacity:0, y:20}}
          animate={{ opacity:1, y:0}}
          transition={{delay: 0.2, duration: 0.6}}
        >
          "Govern <span className="text-emerald-600 font-semibold">AI</span> & <span className="text-emerald-600 font-semibold">human</span> high-risk actions everywhere."
        </motion.h1>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {targetEnv.map((item, index) => (
            <motion.div 
              key={item.label} 
              className="flex items-center text-slate-600"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-500 mr-1.5 sm:mr-2" />
              <span className="text-xs sm:text-sm md:text-base">{item.label}</span>
              {index < targetEnv.length - 1 && <span className="mx-2 sm:mx-3 md:mx-4 text-slate-400">•</span>}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}