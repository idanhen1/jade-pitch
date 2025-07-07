import React, { useState } from 'react';
import { Shield, Eye, Clock, Zap, CheckCircle, AlertTriangle, ArrowRight, ChevronDown } from 'lucide-react';

export default function PAMEvolution() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const waves = [
    {
      wave: "Wave 1: Vault-Based PAM",
      period: "2000s",
      focus: "Centralized storage and rotation of privileged credentials.",
      examples: "CyberArk",
      limitation: "Built for on-prem IT. Once access is granted, visibility ends. No awareness of actions or SaaS.",
      icon: Shield,
      accentColor: "border-slate-400",
      dotColor: "bg-slate-400",
    },
    {
      wave: "Wave 2: Session Recording & Approval", 
      period: "2010s",
      focus: "Add approvals, record sessions for audit.",
      examples: "BeyondTrust, Delinea",
      limitation: "Passive. Captures actions but offers no real understanding or prevention. Reviewing hours of logs is impractical.",
      icon: Eye,
      accentColor: "border-blue-400",
      dotColor: "bg-blue-400",
    },
    {
      wave: "Wave 3: Just-in-Time, Identity-Centric Access",
      period: "2020s", 
      focus: "Temporary access, least privilege, federated identity.",
      examples: "Apono, Teleport, Opal",
      limitation: "Solves access sprawl, but not action risk. Once access is granted, it's a blind spot. No observability into what's done.",
      icon: Clock,
      accentColor: "border-amber-400",
      dotColor: "bg-amber-400",
    },
    {
      wave: "Wave 4: Action-Aware PAM",
      period: "2025+",
      company: "Jade Security",
      focus: "Understand and govern high-impact actions across apps.",
      value: "Adds real-time observability and control post-access. Not just who gets in, but what they actually do, in what context, and at what risk.",
      differentiator: "First to focus on privileged actions, not just identities. The shift from access control to action governance.",
      icon: Zap,
      accentColor: "border-emerald-500",
      dotColor: "bg-emerald-500",
      isJade: true,
    }
  ];

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white h-full w-full flex flex-col p-8 font-sans">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="w-full mb-12 flex-shrink-0">
          <h1 className="text-4xl font-bold text-slate-900">
            Redefining PAM: Risk and Action Governance
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>

          <div className="grid grid-cols-4 gap-x-6 items-start">
            {waves.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div key={index} className="relative pt-16">
                  {/* Dot on Timeline */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <div className={`w-4 h-4 rounded-full ${item.dotColor} border-4 border-white`}></div>
                  </div>

                  {/* Arrow to next */}
                  {index < waves.length - 1 &&
                      <div className="absolute top-8 right-0 translate-x-3 -translate-y-1/2">
                          <ArrowRight className="w-4 h-4 text-gray-300" />
                      </div>
                  }

                  {/* Card with uniform closed height */}
                  <div 
                    onClick={() => handleCardClick(index)}
                    className={`p-4 bg-white rounded-lg shadow-md border-l-4 flex flex-col cursor-pointer transition-colors duration-300 ease-in-out 
                                ${item.accentColor} 
                                ${!isExpanded ? 'h-20' : ''}
                                ${item.isJade && isExpanded ? 'bg-emerald-50 shadow-xl' : ''}`}
                  >
                    <div className="flex justify-between items-center flex-shrink-0">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-semibold text-gray-500">{item.period}</p>
                          {item.company && (
                            <p className="text-xs font-bold text-emerald-600">— {item.company}</p>
                          )}
                        </div>
                        <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight">{item.wave}</h2>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                    
                    <div className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <div className={`mt-3 pt-3 border-t border-gray-200 space-y-3 text-xs transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Focus */}
                        <div className="flex items-start">
                            <CheckCircle className={`w-3 h-3 mr-2 mt-0.5 flex-shrink-0 ${item.isJade ? 'text-emerald-600' : 'text-gray-500'}`} />
                            <div>
                              <p className="font-semibold text-gray-700">Focus:</p>
                              <p className="text-gray-600 leading-tight">{item.focus}</p>
                            </div>
                        </div>

                        {/* Examples */}
                        {item.examples && (
                          <div className="flex items-start">
                              <div className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0"></div>
                              <div>
                                <p className="font-semibold text-gray-700">Examples:</p>
                                <p className="text-gray-600">{item.examples}</p>
                              </div>
                          </div>
                        )}

                        {/* Limitation */}
                        {item.limitation && (
                            <div className="flex items-start">
                                <AlertTriangle className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-orange-500" />
                                <div>
                                  <p className="font-semibold text-gray-700">Limitation:</p>
                                  <p className="text-gray-600 leading-tight">{item.limitation}</p>
                                </div>
                            </div>
                        )}

                        {/* Value */}
                        {item.value && (
                            <div className="flex items-start">
                                <CheckCircle className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-emerald-600" />
                                <div>
                                  <p className="font-semibold text-emerald-800">Value:</p>
                                  <p className="text-emerald-700 leading-tight">{item.value}</p>
                                </div>
                            </div>
                        )}

                        {/* Differentiator */}
                        {item.differentiator && (
                            <div className="flex items-start">
                                <Zap className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-emerald-600" />
                                <div>
                                  <p className="font-semibold text-emerald-800">Differentiator:</p>
                                  <p className="text-emerald-700 leading-tight">{item.differentiator}</p>
                                </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}