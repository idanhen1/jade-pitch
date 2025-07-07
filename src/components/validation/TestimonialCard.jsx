import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="h-full"
    >
      <Card className="h-full p-3 border-gray-200/80 shadow-md bg-white rounded-xl text-center flex flex-col justify-between">
        <div>
          {/* Jade Security Logo */}
          <div className="flex justify-center mb-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
          </div>

          {/* Quote text */}
          <div className="mb-3 min-h-[60px] flex items-center justify-center">
            <p className="text-gray-600 text-xs leading-relaxed">
              "{testimonial.quote}"
            </p>
          </div>
        </div>

        {/* Author info */}
        <div className="flex flex-col items-center space-y-1">
          <div className="relative">
            <div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
              <span className="text-green-600 font-semibold text-[10px]">
                {testimonial.initials}
              </span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 bg-white p-0.5 rounded-full shadow-sm">
                <Star className="w-2 h-2 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-xs">
              {testimonial.name}
            </h4>
            <p className="text-gray-500 text-[10px]">
              {testimonial.title}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}