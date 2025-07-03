
import React from "react";
import { motion } from "framer-motion";

import TestimonialCard from "../components/validation/TestimonialCard";
import MetricsDisplay from "../components/validation/MetricsDisplay";

export default function Validation() {
  const testimonials = [
    {
      quote: "I like that there's an AI-based approval layer... this is something I'd want to show to people at PayPal.",
      initials: "DS",
      name: "Daryl Swanson",
      title: "Heads Cloud Security at PayPal",
    },
    {
      quote: "I tried solving these issues with access and it simply didn't work. You're doing something very unique.",
      initials: "MA",
      name: "Mandy Andress",
      title: "CISO, Elastic",
    },
    {
      quote: "You have something amazing enforcing controls over dangerous actions and it's unique and enough on its own.",
      initials: "CO",
      name: "Chris Owen",
      title: "IAM Veteran (ex-Saviynt/BT/CyberArk)",
    }
  ];

  const metrics = [
    {
      number: "40+",
      label: "CISOS & EXPERT INTERVIEWS"
    },
    {
      number: "90%",
      label: "PROBLEM RECOGNITION"
    }
  ];

  const companies = [
    { name: "PayPal", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/395d485db_PayPal_Logo2014.png" },
    { name: "Elastic", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/521984105_elastic-search2066.jpg" },
    { name: "monday.com" },
    { name: "Standard Chartered" },
    { name: "GAP" },
    { name: "Covestro" },
    { name: "SolarWinds", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8eb5fea29_images.png" },
    { name: "VAST Data" },
    { name: "JFrog" },
    { name: "Endor Labs" },
    { name: "Mio" },
    { name: "Cantor Fitzgerald" },
  ];

  return (
    <div className="bg-white h-full w-full flex flex-col py-6 px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full flex flex-col h-full">
        
        {/* Header */}
        <div className="w-full mb-8 flex-shrink-0">
          <h1 className="text-4xl font-bold text-slate-900">
            Shaped with CISOs & Partners
          </h1>
        </div>
        
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <MetricsDisplay metrics={metrics} />
        </motion.div>

        {/* Company Logos */}
        <div className="flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-6 gap-3 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-2 h-16 flex items-center justify-center border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300">
                {company.logoUrl ? (
                  <img src={company.logoUrl} alt={`${company.name} logo`} className="max-h-8 max-w-full object-contain" loading="lazy" />
                ) : (
                  <span className="font-semibold text-slate-700 text-center text-xs">{company.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
