import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, UserCheck, ShieldAlert, ChevronDown } from 'lucide-react'; // Removed LockKeyhole, Activity, X

const useCasesData = [
  {
    id: 'ai-privilege',
    icon: ShieldAlert,
    title: "AI Privilege Governance",
    painPoint: "Stop silent AI power creep & unauthorized escalations.",
    tag: "AI Governance",
    tagColor: "bg-blue-100 text-blue-700",
    scenario: "An AI Agent attempts to escalate its privileges by adding itself to a Super Admin group.",
    jadeValue: "Jade intercepts the unauthorized API call in real-time, automatically enforcing Multi-Party Approval (MPA) or Multi-Factor Authentication (MFA) before the risky privilege change can take effect.",
    quote: "\"In the AI world I can flag the agent but it's a much bigger problem when it's a human or a bot escalating rights silently.\"",
    author: "Karl Mattson, CISO, Endor Labs"
  },
  {
    id: 'human-error',
    icon: UserCheck,
    title: "Human Error Guardrails",
    painPoint: "Prevent costly mistakes & accidental outages by humans.",
    tag: "Human Oversight",
    tagColor: "bg-orange-100 text-orange-700",
    scenario: "A DevOps engineer accidentally tries to disable critical WAF logging for a production environment.",
    jadeValue: "Jade identifies the high-risk nature of the action, prompting the engineer for real-time justification or automatically initiating a peer review workflow before the change is committed.",
    quote: "\"Ninety-nine percent of insider threats aren't malicious - it's people bypassing processes.\"", // Replaced em-dash with ' - '
    author: "Andy Ellis, ex-CISO, Akamai"
  },
  {
    id: 'custom-app',
    icon: Zap,
    title: "Custom App Action Control",
    painPoint: "Secure risky actions in homegrown apps without code changes.",
    tag: "Application Security",
    tagColor: "bg-purple-100 text-purple-700",
    scenario: "An internal admin portal, built in-house, contains a 'Delete All Users' button with no built-in safeguards.",
    jadeValue: "Jade's browser extension intelligently discovers this critical action on the UI. It then dynamically overlays MPA or MFA requirements onto the button-without requiring any code changes to the legacy application.", // Removed em-dash
    quote: "\"Our most painful domain is the applications we develop in-house- our various homegrowns.\"", // Replaced em-dash
    author: "Mandy Andress, CISO, Elastic"
  }
  // Removed 'dormant-privilege' and 'compliance-assurance' use cases
];

const UseCaseTeaserCard = ({ useCase, onExpand, isExpanded }) => {
  const { icon: Icon, title, painPoint, tag, tagColor } = useCase;
  return (
    <motion.div
      layout
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/70 cursor-pointer overflow-hidden ${isExpanded ? 'ring-2 ring-emerald-500' : ''}`}
      onClick={onExpand}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="p-4 sm:p-5 md:p-6"> {/* Responsive padding */}
        <div className="flex justify-between items-start mb-3">
          <div className={`p-2 sm:p-2.5 rounded-lg inline-flex items-center justify-center ${tagColor.replace('text-', 'bg-').replace('700', '200')}`}> {/* Responsive padding */}
             <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${tagColor.replace('bg-', 'text-').replace('100', '700')}`} /> {/* Responsive icon */}
          </div>
          <span className={`text-xs font-medium px-2 sm:px-2.5 py-1 rounded-full ${tagColor} whitespace-nowrap`}>{tag}</span> {/* Responsive padding */}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1.5">{title}</h3> {/* Responsive text */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 h-8 sm:h-10">{painPoint}</p> {/* Responsive text and height */}
        <div className="flex justify-end">
            <motion.div whileTap={{ scale: 0.95 }}>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} /> {/* Responsive icon */}
            </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-slate-50/70 border-t border-slate-200"
          >
            <div className="p-4 sm:p-5 md:p-6 text-xs sm:text-sm space-y-3"> {/* Responsive padding and text */}
              <div>
                <p className="font-semibold text-slate-700 mb-0.5">Demo Scenario:</p>
                <p className="text-slate-600 leading-relaxed">{useCase.scenario}</p>
              </div>
              <div>
                <p className="font-semibold text-emerald-700 mb-0.5 flex items-center">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/apps/91585596-51ea-4e53-8190-541e59b807c5/assets/1bb68753-196f-45c4-b826-90068921085b_jade-logo-small.png" alt="Jade Value" className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5"/> {/* Responsive logo */}
                  Jade Value:
                </p>
                <p className="text-slate-600 leading-relaxed">{useCase.jadeValue}</p>
              </div>
              {useCase.quote && (
                 <div className="mt-3 border-t border-slate-200/80 pt-3">
                    <p className="text-xs text-slate-500 italic mb-0.5">"{useCase.quote}"</p>
                    <p className="text-xs text-slate-400 text-right">-- {useCase.author}</p>
                 </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function UseCases() {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"> {/* Enhanced responsive padding */}
      {/* Consistent Header Format */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 max-w-3xl px-4" // Added px-4 and responsive margin
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-3 sm:mb-4 tracking-tight"> {/* Better mobile scaling */}
          Jade in Action: <span className="text-emerald-600 font-semibold">Key Use Cases</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500"> {/* Responsive text */}
          Discover how Jade provides intelligent, action-level governance across your critical systems
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl w-full px-4"> {/* Better responsive breakpoints and added px-4 */}
        {useCasesData.map((useCase, index) => (
          <UseCaseTeaserCard 
            key={useCase.id} 
            useCase={useCase} 
            onExpand={() => handleExpand(useCase.id)}
            isExpanded={expandedId === useCase.id}
          />
        ))}
      </div>
    </div>
  );
}