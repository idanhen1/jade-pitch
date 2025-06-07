import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function JadeCore({ onCoreComponentClick, coreComponentsData }) {
  const componentKeys = Object.keys(coreComponentsData);

  return (
    <div className="text-center h-full flex flex-col">
      <div className="text-center mb-6"> {/* Consistent with Actor/Target sections */}
        <h2 className="text-xl font-semibold text-slate-800">Jade Core</h2> {/* Slightly larger title */}
        <p className="text-sm text-slate-500">Intelligent Governance Engine</p> {/* Slightly larger subtext */}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative flex-grow h-full" // Ensure it tries to take full height
      >
        <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-xl border-0 overflow-hidden h-full flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-emerald-800/10 opacity-50" />
          
          <CardContent className="p-5 relative flex-grow flex flex-col justify-between"> {/* Increased padding */}
            <div className="space-y-3.5"> {/* Increased space for compactness */}
              {componentKeys.map((key, index) => {
                const component = coreComponentsData[key];
                return (
                  <Tooltip key={component.label} delayDuration={150}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.08 }} // Slightly faster animation
                        className="group cursor-pointer"
                        onClick={() => onCoreComponentClick(key)}
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3.5 transition-all duration-200 hover:bg-white/30 hover:scale-[1.02] shadow-sm"> {/* Rounded-lg, more padding */}
                          <div className="flex items-center justify-between gap-3"> {/* Increased gap */}
                            <div className="flex items-center gap-3"> {/* Increased gap */}
                              <div className="w-8 h-8 bg-white/30 rounded-md flex items-center justify-center shrink-0"> {/* Larger icon container */}
                                <component.icon className="w-4 h-4" /> {/* Icon size maintained or slightly up */}
                              </div>
                              <div className="text-left">
                                <h3 className="font-semibold text-sm leading-tight">{component.label}</h3> {/* Text sm */}
                              </div>
                            </div>
                            <Info className="w-4 h-4 text-emerald-200 group-hover:text-white transition-colors shrink-0" />
                          </div>
                        </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="start" className="bg-slate-800 text-white border-slate-700 max-w-[220px] text-xs p-2.5 rounded-md shadow-lg">
                      <p>{component.description}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          
            {/* Arrow pointing down to enforcement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }} // Delayed further
              className="flex justify-center pt-4 pb-2" // Adjusted padding for arrow
            >
              <div className="w-px h-6 bg-gradient-to-b from-emerald-400 to-transparent relative"> {/* Taller line */}
                <motion.div
                  animate={{ y: [0, 5, 0] }} // Increased animation distance
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                >
                  <ArrowDown className="w-4 h-4 text-emerald-300" /> {/* Larger arrow */}
                </motion.div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}