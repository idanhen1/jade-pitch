import React from "react";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <div className="h-full w-full bg-white flex items-center justify-center p-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="text-5xl md:text-6xl font-bold leading-tight text-slate-900"
        >
          Secure Every Action
        </motion.h1>
      </motion.div>
    </div>
  );
}