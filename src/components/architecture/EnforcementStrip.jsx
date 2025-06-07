
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, Bell, Ban, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const enforcementActions = [
  { 
    id: 'mpa', 
    icon: CheckCircle, 
    label: 'MPA', 
    description: 'Multi-Party Approval', 
    color: 'text-green-600', 
    bgColor: 'bg-green-100/80', // Softer background
    detailedExplanation: 'Multi-Party Approval requires multiple authorized individuals to approve high-risk actions before they can proceed. This creates a human checkpoint for critical operations, ensuring no single person can make dangerous changes alone.',
    keyFunctions: ['Prevents unauthorized changes', 'Creates accountability', 'Reduces insider threat risk', 'Maintains separation of duties']
  },
  { 
    id: 'mfa', 
    icon: Lock, 
    label: 'MFA', 
    description: 'Multi-Factor Authentication', 
    color: 'text-blue-600', 
    bgColor: 'bg-blue-100/80', // Softer background
    detailedExplanation: 'Multi-Factor Authentication requires users to provide additional verification beyond their password. This could be a phone-based authenticator, hardware token, or biometric verification, significantly reducing the risk of compromised credentials.',
    keyFunctions: ['Verifies user identity', 'Prevents credential theft', 'Adds security layer', 'Complies with regulations']
  },
  { 
    id: 'notify', 
    icon: Bell, 
    label: 'Notify', 
    description: 'Alert Stakeholders', 
    color: 'text-yellow-700', // Darker yellow for text
    bgColor: 'bg-yellow-100/80', // Softer background
    detailedExplanation: 'Notification enforcement sends real-time alerts to relevant stakeholders when specific actions occur. This provides visibility into important activities without blocking operations, enabling rapid response if needed.',
    keyFunctions: ['Real-time visibility', 'Rapid incident response', 'Stakeholder awareness', 'Audit trail creation']
  },
  { 
    id: 'alert_siem', 
    icon: AlertTriangle, 
    label: 'Alert SIEM', 
    description: 'Security Event Alert', 
    color: 'text-orange-600', 
    bgColor: 'bg-orange-100/80', // Softer background
    detailedExplanation: 'Alert SIEM enforcement sends structured security events to your Security Information and Event Management system. This enables correlation with other security data and can trigger automated response playbooks.',
    keyFunctions: ['SIEM integration', 'Automated correlation', 'Incident escalation', 'Threat hunting support']
  },
  { 
    id: 'block', 
    icon: Ban, 
    label: 'Block', 
    description: 'Prevent Execution', 
    color: 'text-red-600', 
    bgColor: 'bg-red-100/80', // Softer background
    detailedExplanation: 'Block enforcement completely prevents high-risk actions from executing. This is the strongest control, used when the potential damage from an action outweighs any business benefit.',
    keyFunctions: ['Prevents dangerous actions', 'Ultimate protection', 'Compliance enforcement', 'Zero-tolerance policies']
  },
  { 
    id: 'justify', 
    icon: FileText, 
    label: 'Justify', 
    description: 'Require Justification', 
    color: 'text-purple-600', 
    bgColor: 'bg-purple-100/80', // Softer background
    detailedExplanation: 'Justification enforcement requires users to provide a business reason before proceeding with an action. This creates accountability and helps with audit trails while allowing legitimate work to continue.',
    keyFunctions: ['Business justification', 'Audit documentation', 'User accountability', 'Compliance records']
  }
];

export default function EnforcementStrip({ onEnforcementClick, pulsingEnforcement }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-10" // Ensure consistent margin
    >
      <h3 className="text-xl font-semibold text-slate-800 text-center mb-6">Enforcement Actions</h3> {/* Title consistent with others */}
      
      <Card className="bg-white border-slate-200 shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-5 sm:p-6"> {/* Slightly adjusted padding */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4"> {/* Slightly adjusted gap */}
            {enforcementActions.map((action, index) => (
               <Tooltip key={action.id} delayDuration={100}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: pulsingEnforcement === action.id ? [1, 1.06, 1] : 1 // Slightly reduced pulse
                    }}
                    transition={{ 
                      delay: 0.5 + index * 0.05,
                      scale: { duration: 0.5, times: [0, 0.5, 1] }
                    }}
                  >
                    <Button
                      variant="outline" 
                      className={`h-auto p-3.5 sm:p-4 flex flex-col items-center gap-2 hover:shadow-md transition-all duration-300 w-full group border-slate-200 hover:border-emerald-400/70 rounded-lg bg-white hover:bg-slate-50/70`}
                      onClick={() => onEnforcementClick(action)}
                    >
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${action.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-200 ${action.color} shadow-sm`}>
                        <action.icon className="w-5 h-5" />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-slate-800 text-xs group-hover:text-emerald-600 transition-colors">{action.label}</div>
                      </div>
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-800 text-white border-slate-700 text-xs p-2 rounded-md shadow-lg">
                  <p>{action.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
