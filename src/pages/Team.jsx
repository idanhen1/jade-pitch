
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Dean Rubinstein",
    role: "CEO & Co-founder",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/54d6b9404_Dean.jpg",
    experience: [
      "Product @ Microsoft (Security)",
      "Product Lead @ Deep Instinct",
      "Product Lead @ Verint", // Switched order
      "Founding Member @ SenseCy (Acquired by Verint)", // Switched order
      "Course Commander @ Unit 8200",
    ],
  },
  {
    name: "Idan Hen",
    role: "CTO & Co-founder",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/84891c4d3_Idan.jpg",
    experience: [
      "VP R&D @ CYNC Secure (Acquired by Cymulate)",
      "R&D Group Manager @ Mamram",
      "R&D Group Manager @ Unit 81",
    ],
  },
];

const TeamMemberCard = ({ member, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center text-center"
  >
    <div className="relative mb-4">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
        loading="lazy"
        decoding="async" // Optimize image loading: Allows the browser to decode the image asynchronously.
        width="128"      // Optimize image loading: Explicitly define width for layout stability (w-32 is 128px).
        height="128"     // Optimize image loading: Explicitly define height for layout stability (h-32 is 128px).
      />
    </div>
    <h2 className="text-2xl font-bold text-slate-900">{member.name}</h2>
    <p className="text-emerald-600 font-semibold mb-6">{member.role}</p>
    <ul className="space-y-3 text-left">
      {member.experience.map((item, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Team() {
  return (
    <div className="h-full w-full bg-white flex flex-col p-8">
      <div className="w-full mb-8 flex-shrink-0">
        <h1 className="text-4xl font-bold text-slate-900">The Team</h1>
      </div>

      <div className="flex-grow flex items-center justify-center w-full">
        <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
}
