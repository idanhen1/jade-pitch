import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Dean Rubinstein",
    role: "CEO & Co-founder",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7b740ab66_image.png",
    achievements: [
      "Product @ Microsoft (Security)",
      "Product Lead @ Deep Instinct",
      "Product Lead @ Verint",
      "Course Commander @ Unit 8200"
    ],
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700"
  },
  {
    name: "Idan Hen",
    role: "CTO & Co-founder",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/38efa4697_image.png",
    achievements: [
      "VP R&D @ CYNC Secure",
      "R&D Group Manager @ Mamram",
      "R&D Group Manager @ Unit 81"
    ],
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700"
  },
];

export default function Team() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
      {/* Consistent Header Format */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 max-w-3xl px-4" 
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-3 sm:mb-4 tracking-tight"> 
          Meet the <span className="text-emerald-600 font-semibold">Team</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500"> 
          Security veterans building the future of governance
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl w-full px-4"> 
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
          >
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-white rounded-xl border border-slate-200/70">
              <CardContent className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col items-center"> 
                {/* Reverted Avatar classes to previous state to fix Idan's image display */}
                <Avatar className="w-32 h-32 md:w-36 md:h-36 mb-5 border-4 border-white shadow-lg"> 
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 mb-1">{member.name}</h2> 
                <p className={`text-sm sm:text-md font-medium ${member.textColor} px-3 py-1 rounded-full ${member.bgColor} inline-block mb-4 sm:mb-6`}>{member.role}</p> 
                
                <ul className="space-y-2 sm:space-y-2.5 text-left self-start w-full pl-2 sm:pl-4"> 
                  {member.achievements.map((ach, achIndex) => (
                    <li key={achIndex} className="flex items-center text-slate-600 text-xs sm:text-sm md:text-base"> 
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 mr-2 sm:mr-2.5 shrink-0" /> 
                      {ach}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}