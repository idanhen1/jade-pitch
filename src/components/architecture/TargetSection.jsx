import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Globe, MonitorPlay, Code2, BrainCircuit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const targets = [
  { id: 'cloud', icon: Cloud, label: 'Cloud Platforms', color: 'text-sky-500', bgColor: 'bg-sky-50 hover:bg-sky-100/70', borderColor: 'hover:border-sky-400' },
  { id: 'saas', icon: Globe, label: 'SaaS Applications', color: 'text-lime-500', bgColor: 'bg-lime-50 hover:bg-lime-100/70', borderColor: 'hover:border-lime-400' },
  { id: 'onprem', icon: MonitorPlay, label: 'On-Prem Systems', color: 'text-amber-500', bgColor: 'bg-amber-50 hover:bg-amber-100/70', borderColor: 'hover:border-amber-400' },
  { id: 'custom', icon: Code2, label: 'Custom Apps', color: 'text-violet-500', bgColor: 'bg-violet-50 hover:bg-violet-100/70', borderColor: 'hover:border-violet-400' },
  { id: 'ai', icon: BrainCircuit, label: 'AI Workloads', color: 'text-pink-500', bgColor: 'bg-pink-50 hover:bg-pink-100/70', borderColor: 'hover:border-pink-400' }
];

export default function TargetSection() { 
  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-6"> {/* Increased bottom margin */}
        <h2 className="text-xl font-semibold text-slate-800">Targets</h2> {/* Slightly larger title */}
        <p className="text-sm text-slate-500">Where the action lands</p> {/* Slightly larger subtext */}
      </div>
      
      <div className="space-y-4 flex-grow"> {/* Increased space between cards */}
        {targets.map((target, index) => (
          <motion.div
            key={target.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }} // Slightly faster animation
          >
            <Card 
              className={`cursor-default transition-all duration-200 shadow-md hover:shadow-lg border border-slate-200/80 ${target.borderColor} ${target.bgColor} group`}
            >
              <CardContent className="p-4 text-center flex flex-col items-center"> {/* Increased padding */}
                 <div
                  className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${target.color} bg-white/60 group-hover:scale-105 transition-transform duration-200 shadow-inner`}
                >
                  <target.icon className="w-5 h-5" /> {/* Slightly larger icon */}
                </div>
                <h3 className="font-medium text-slate-700 text-sm group-hover:text-slate-900">{target.label}</h3> {/* Text size sm */}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}