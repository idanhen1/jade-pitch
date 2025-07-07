
import React from 'react';
import { Shield, Eye, User, GitBranch, AlertTriangle, CheckCircle, Users, Smartphone, Monitor, Globe, ArrowRight, Feather, ShieldCheck } from "lucide-react";

export default function MeetJade() {

  const coreFunctions = [
    { icon: Globe, title: "Autonomous Action Discovery", color: "text-emerald-500", bg: "bg-emerald-50" },
    { icon: Eye, title: "Detect & Contextualize", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: GitBranch, title: "Assess Risk", color: "text-purple-500", bg: "bg-purple-50" },
  ];

  const responses = [
    { icon: AlertTriangle, label: "Alert", color: "text-orange-500" },
    { icon: CheckCircle, label: "Step-Up Confirm", color: "text-pink-500" },
    { icon: Monitor, label: "Risk Ack.", color: "text-purple-500" },
    { icon: Smartphone, label: "MFA", color: "text-blue-500", badge: "Roadmap" },
    { icon: Users, label: "Multi-Party", color: "text-indigo-500", badge: "Roadmap" },
  ];

  const valueProps = [
    {
      icon: Feather,
      title: "Easy Deployment",
      description: "No proxy, no agents",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: Eye,
      title: "Full Observability", 
      description: "Who, what, where, when",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: ShieldCheck,
      title: "Built-in Governance",
      description: "Real-time controls",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
  ];

  return (
    <div className="h-full w-full bg-white flex flex-col p-8 font-sans overflow-hidden">
      {/* Header */}
      <div className="w-full mb-8 flex-shrink-0">
        <h1 className="text-4xl font-bold text-slate-900">
          AI-Powered Privileged Action Management
        </h1>
      </div>

      {/* Main Flow - Takes most of the space */}
      <div className="flex items-center justify-center gap-4 flex-1 mb-6 overflow-hidden">
        
        {/* User Action */}
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-100 mb-2">
            <User className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="font-semibold text-slate-800 text-sm">User Action</h2>
          <p className="text-xs text-slate-500 mt-1">On any web app</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="w-6 h-6 text-slate-300" />
        
        {/* Jade Security Core */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col justify-center relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h2 className="font-bold text-slate-800 text-lg text-center mb-4 mt-2">Jade Security</h2>
          <div className="space-y-3 w-48">
            {coreFunctions.map(func => (
              <div key={func.title} className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${func.bg}`}>
                  <func.icon className={`w-4 h-4 ${func.color}`} />
                </div>
                <p className="font-medium text-slate-700 text-xs">{func.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Arrow */}
        <ArrowRight className="w-6 h-6 text-slate-300" />

        {/* Responses */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col justify-center">
          <h2 className="font-bold text-slate-800 text-lg text-center mb-4">Smart Response</h2>
          <div className="space-y-2 w-44">
            {responses.map((response) => (
              <div key={response.label} className="relative flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
                <response.icon className={`w-4 h-4 ${response.color}`} />
                <span className="text-xs font-medium text-slate-700">{response.label}</span>
                {response.badge && (
                  <span className="ml-auto text-[9px] bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded-full font-semibold">
                    {response.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition - Compact */}
      <div className="text-center pt-4 border-t border-slate-200/80 flex-shrink-0">
        <h3 className="text-sm font-bold text-slate-800 mb-3">Jade monitors and governs risky user actions in real time across any web application.</h3>
         <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {valueProps.map((prop) => (
            <div key={prop.title} className="bg-slate-50/70 p-2 rounded-lg text-center">
               <div className={`w-5 h-5 rounded-md flex items-center justify-center mx-auto mb-1 ${prop.bg}`}>
                  <prop.icon className={`w-3 h-3 ${prop.color}`} />
                </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-xs mb-0.5">{prop.title}</h4>
                <p className="text-[10px] text-slate-600">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
