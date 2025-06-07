import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Jade() {
  return (
    // This root div is transparent and fills its parent <section>
    // All content centering and constraints happen within its child (motion.div)
    <div className="w-full h-full flex flex-col items-center justify-center text-center bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-3xl px-4" // Padding for content within Jade, not on the transparent full-height div
      >
        <div className="mb-6 sm:mb-8">
          <motion.div 
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-xl shadow-lg mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
          </motion.div>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-5">
          <span className="text-emerald-600">Jade</span>
          <span className="text-slate-800 ml-2 sm:ml-3">Security</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
          Govern AI & human high-risk actions everywhere.
        </p>
      </motion.div>
    </div>
  );
}