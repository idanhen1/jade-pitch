
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart3, Ticket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const integrations = [
  { 
    id: 'chatops', 
    icon: MessageSquare, 
    label: 'ChatOps', 
    sublabel: 'Slack, Teams',
    tooltip: 'Approve / deny in Slack or Teams',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100/80' // Softer background
  },
  { 
    id: 'siem', 
    icon: BarChart3, 
    label: 'SIEM / SOAR', 
    sublabel: 'Splunk, Sentinel',
    tooltip: 'Log + orchestrate automated playbooks',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100/80' // Softer background
  },
  { 
    id: 'ticketing', 
    icon: Ticket, 
    label: 'Ticketing', 
    sublabel: 'ServiceNow, Jira',
    tooltip: 'Create follow-up ticket with evidence link',
    color: 'text-green-600',
    bgColor: 'bg-green-100/80' // Softer background
  }
];

export default function IntegrationsPanel({ pulsingEnforcement, onIntegrationClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mb-10" // Ensure consistent margin
    >
      <h3 className="text-xl font-semibold text-slate-800 text-center mb-6">Workflow Integrations</h3> {/* Title consistent with others */}
      
      <Card className="bg-slate-100/70 border-slate-200/80 shadow-lg rounded-xl overflow-hidden"> {/* Slightly different bg for distinction */}
        <CardContent className="p-5 sm:p-6"> {/* Slightly adjusted padding */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"> {/* Slightly adjusted gap */}
            {integrations.map((integration, index) => (
              <Tooltip key={integration.id} delayDuration={100}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                    }}
                    transition={{ 
                      delay: 0.7 + index * 0.05,
                    }}
                    className="group relative"
                  >
                    <div 
                      className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200 hover:border-emerald-400/70 ${pulsingEnforcement ? 'animate-border-pulse-integration' : ''}`}
                      onClick={() => onIntegrationClick(integration.id)}
                      // Removed inline style for animation, relying on Tailwind JIT or global style
                    >
                      <div className="flex items-center gap-3 sm:gap-4"> {/* Adjusted gap */}
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${integration.bgColor} flex items-center justify-center ${integration.color} shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-sm`}>
                          <integration.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors">{integration.label}</h4>
                          <p className="text-xs text-slate-500">{integration.sublabel}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                 <TooltipContent className="bg-slate-800 text-white border-slate-700 text-xs p-2 rounded-md shadow-lg">
                  <p>{integration.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Keyframes for border pulse - ensure Tailwind JIT is configured for animations or define in global styles */}
      <style jsx global>{`
        @keyframes borderPulseIntegration { /* Renamed to avoid conflict if any */
          0% { border-color: var(--tw-border-opacity, 1) hsl(var(--border) / 0.5); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2); }
          50% { border-color: var(--tw-border-opacity, 1) theme('colors.emerald.400'); box-shadow: 0 0 0 3px rgba(16, 185, 129, 0); }
          100% { border-color: var(--tw-border-opacity, 1) hsl(var(--border) / 0.5); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2); }
        }
        .animate-border-pulse-integration {
          animation-name: borderPulseIntegration;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </motion.div>
  );
}
