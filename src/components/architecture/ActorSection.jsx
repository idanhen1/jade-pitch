import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Settings2 as ServiceAcctIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const actors = [
  { id: 'ai', icon: Bot, label: 'AI Agent', color: 'text-blue-500', bgColor: 'bg-blue-50 hover:bg-blue-100/70', borderColor: 'hover:border-blue-400' },
  { id: 'human', icon: User, label: 'Human User', color: 'text-emerald-500', bgColor: 'bg-emerald-50 hover:bg-emerald-100/70', borderColor: 'hover:border-emerald-400' },
  { id: 'service', icon: ServiceAcctIcon, label: 'Service Account', color: 'text-purple-500', bgColor: 'bg-purple-50 hover:bg-purple-100/70', borderColor: 'hover:border-purple-400' }
];

export default function ActorSection({ onActorClick }) {
  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-6"> {/* Increased bottom margin */}
        <h2 className="text-xl font-semibold text-slate-800">Actors</h2> {/* Slightly larger title */}
        <p className="text-sm text-slate-500">Who initiates the action</p> {/* Slightly larger subtext */}
      </div>
      
      <div className="space-y-4 flex-grow"> {/* Increased space between cards */}
        {actors.map((actor, index) => (
          <motion.div
            key={actor.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }} // Slightly faster animation
          >
            <Card 
              className={`cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg border border-slate-200/80 ${actor.borderColor} ${actor.bgColor} group`}
              onClick={() => onActorClick(actor.id)}
            >
              <CardContent className="p-4 text-center flex flex-col items-center"> {/* Increased padding */}
                <div
                  className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${actor.color} bg-white/60 group-hover:scale-105 transition-transform duration-200 shadow-inner`}
                >
                  <actor.icon className="w-5 h-5" /> {/* Slightly larger icon */}
                </div>
                <h3 className="font-medium text-slate-700 text-sm group-hover:text-slate-900">{actor.label}</h3> {/* Text size sm */}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}