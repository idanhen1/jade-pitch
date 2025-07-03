import React from "react";
import { motion } from "framer-motion";
import { Shield, Heart } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Shield className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-light leading-tight text-gray-900 mb-8"
        >
          Thank You
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="w-32 h-1 bg-emerald-500 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mb-6">
            Questions & Discussion
          </p>

          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <Heart className="w-5 h-5" />
            <span className="text-lg font-medium">Jade Security</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}