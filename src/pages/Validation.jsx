
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
    { name: "monday.com", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a0a7d1484_Monday_logosvg.png" },
    { name: "Standard Chartered", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/da89c593d_standard-chartered-logo.png" },
    { name: "GAP", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8d77a2d22_1696342202-8115-2560px-New-Gap-logosvg.png" },
    { name: "Covestro", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/49499e1d4_tumblr_inline_nygrpkr8hi1tfbwvh_500.png" },
    { name: "SolarWinds", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8eb5fea29_images.png" },
    { name: "VAST Data", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8d6e5a643_vast-logo.png" },
    { name: "JFrog", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/778be546e_blob.png" },
    { name: "Endor Labs", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f03d50a96_endor-labs-logo-png_seeklogo-618215.png" },
    { name: "Mio", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a52a9c187_MIO-Logo0425.png" },
    { name: "Cantor Fitzgerald", logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/99c2735e9_Cantor_Fitzgerald_logo.png" },
  ];

  const bigLogoNames = ["JFrog", "Elastic", "PayPal", "Covestro"]; // Endor Labs moved to extraBigLogoNames
  const extraBigLogoNames = ["Standard Chartered", "Endor Labs"]; // Endor Labs added here

  return (
    <div className="bg-white h-full w-full flex flex-col py-8 px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full flex flex-col h-full">
        
        {/* Header */}
        <div className="w-full mb-6 flex-shrink-0">
          <h1 className="text-4xl font-bold text-slate-900">
            Shaped with CISOs & Partners
          </h1>
        </div>
        
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-3 mb-5"
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
          <div className="grid grid-cols-6 gap-y-8 gap-x-4 items-center max-w-5xl mx-auto">
            {companies.map((company, index) => {
               const isBig = bigLogoNames.includes(company.name);
               const isExtraBig = extraBigLogoNames.includes(company.name);
               const sizeClass = isExtraBig ? 'max-h-16' : isBig ? 'max-h-8' : 'max-h-5'; // max-h-16 for extra big logos

              return (
                <div key={index} className="h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {company.logoUrl ? (
                    <img src={company.logoUrl} alt={`${company.name} logo`} className={`${sizeClass} max-w-full object-contain`} loading="lazy" />
                  ) : (
                    <span className="font-semibold text-slate-700 text-center text-sm">{company.name}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
