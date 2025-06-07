import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronLeft } from 'lucide-react';

export default function Welcome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    // CRITICAL: No h-full, min-h-screen, h-screen or overflow-hidden here.
    <div className="w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.04),transparent_40%)]" />
      
      <motion.div
        className="relative z-10 w-full max-w-4xl px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl shadow-xl mx-auto"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 10px 25px -3px rgba(16, 185, 129, 0.1)",
                "0 15px 35px -3px rgba(16, 185, 129, 0.2)",
                "0 10px 25px -3px rgba(16, 185, 129, 0.1)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* Hero Line */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Jade
            </span>
            <span className="text-gray-900 ml-3">Security</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Govern AI & human high-risk actions everywhere.
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Explore this interactive pitch and see how we tame power-creep in minutes.
          </p>
        </motion.div>

        {/* CTA Hint */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-emerald-300 group"
        >
          <motion.div
            animate={{ x: [-2, 0, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronLeft className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700" />
          </motion.div>
          <span className="text-emerald-700 font-medium text-lg">Use the top menu to dive in</span>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full opacity-60"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-24 w-1 h-1 bg-blue-400 rounded-full opacity-50"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/3 right-16 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-40"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}