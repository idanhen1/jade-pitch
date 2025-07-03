
import React from "react";
import { Database, CreditCard, Users, User, ExternalLink } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Pain() {
  const userPositions = [
    { id: 1, x: 50, y: 15, fullName: "Sarah Jenkins", role: "Sales Lead", connections: [{ system: 'salesforce', status: 'normal' }] },
    { id: 2, x: 85, y: 20, fullName: "Mike Chen", role: "DevOps Engineer", connections: [{ system: 'slack', status: 'normal' }, { system: 'infrastructure', status: 'error', action: 'Misconfigured Firewall Rule', breach: 'Equifax' }] },
    { id: 3, x: 95, y: 35, fullName: "Lisa Ray", role: "Marketing Manager", connections: [{ system: 'm365', status: 'normal' }] },
    { id: 4, x: 90, y: 55, fullName: "John Doe", role: "IT Admin", connections: [{ system: 'infrastructure', status: 'risk', action: 'Escalated Own Privileges', breach: 'Twitter (Insider Breach)' }, { system: 'billing', status: 'normal' }] },
    { id: 5, x: 85, y: 75, fullName: "Anna Kim", role: "Product Manager", connections: [{ system: 'crm', status: 'normal' }] },
    { id: 6, x: 65, y: 90, fullName: "David Lee", role: "Developer", connections: [{ system: 'infrastructure', status: 'error', action: 'Deleted Production Database', breach: 'GitLab Outage' }, { system: 'crm', status: 'normal' }] },
    { id: 7, x: 45, y: 95, fullName: "Emma Watson", role: "UX Designer", connections: [{ system: 'slack', status: 'normal' }] },
    { id: 8, x: 25, y: 90, fullName: "Chris Pine", role: "Solution Architect", connections: [{ system: 'jira', status: 'normal' }, { system: 'infrastructure', status: 'risk', action: 'Tampered with Config Files', breach: 'Uber' }] },
    { id: 9, x: 10, y: 75, fullName: "Maya Angelou", role: "Finance Analyst", connections: [{ system: 'm365', status: 'normal' }, { system: 'billing', status: 'error', action: 'Processed incorrect invoice' }] },
    { id: 10, x: 5, y: 55, fullName: "Alex Schmidt", role: "QA Engineer", connections: [{ system: 'infrastructure', status: 'error', action: 'Created Admin Access Key', breach: 'Uber' }] },
    { id: 11, x: 8, y: 35, fullName: "Ryan Garcia", role: "Support Engineer", connections: [{ system: 'slack', status: 'normal' }, { system: 'm365', status: 'normal' }] },
    { id: 12, x: 20, y: 20, fullName: "Zoe Kravitz", role: "CEO", connections: [{ system: 'crm', status: 'normal' }, { system: 'billing', status: 'normal' }] },
    { id: 13, x: 35, y: 10, fullName: "Tom Hanks", role: "CTO", connections: [{ system: 'jira', status: 'risk', action: 'Exposed API keys' }] },
    { id: 14, x: 75, y: 8, fullName: "Kate Bishop", role: "Data Scientist", connections: [{ system: 'infrastructure', status: 'error', action: 'Opened Public Port', breach: 'Capital One' }] },
    { id: 15, x: 25, y: 45, fullName: "Sam Wilson", role: "Developer", connections: [{ system: 'salesforce', status: 'normal' }, { system: 'slack', status: 'error', action: 'Sent sensitive PII' }, { system: 'jira', status: 'normal' }] }
  ];

  const systemPositions = {
    salesforce: { x: 42, y: 42 },
    slack: { x: 58, y: 42 },
    jira: { x: 42, y: 52 },
    m365: { x: 58, y: 52 },
    infrastructure: { x: 42, y: 62 },
    billing: { x: 50, y: 67 },
    crm: { x: 50, y: 72 }
  };
  
  const connectionStyles = {
    normal: { stroke: "#94a3b8", strokeWidth: "0.1", strokeDasharray: "0.5,0.3" },
    error: { stroke: "#f59e0b", strokeWidth: "0.15", strokeDasharray: "none" },
    risk: { stroke: "#ef4444", strokeWidth: "0.15", strokeDasharray: "none" }
  };

  return (
    <div className="h-full w-full bg-white p-8 flex flex-col">
      <div className="w-full mb-8 flex-shrink-0">
        <h1 className="text-4xl font-bold text-slate-900">
          Human Errors and Insiders Cost Millions
        </h1>
      </div>

      <div className="w-full flex-grow flex flex-col justify-center relative">
        
        {/* SVG for connection lines */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {userPositions.map(user => 
            user.connections.map((conn, index) => {
              const style = connectionStyles[conn.status];
              return (
                <line
                  key={`${user.id}-${conn.system}-${index}-visible`}
                  x1={user.x}
                  y1={user.y}
                  x2={systemPositions[conn.system].x}
                  y2={systemPositions[conn.system].y}
                  stroke={style.stroke}
                  strokeWidth={style.strokeWidth}
                  strokeDasharray={style.strokeDasharray}
                  opacity="0.8"
                />
              )
            })
          )}
        </svg>

        {/* Action text positioned along lines, close to users */}
        <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
          {userPositions.map(user => {
            return user.connections.map((conn, index) => {
              if (!conn.action) return null;

              const textX = user.x + (systemPositions[conn.system].x - user.x) * 0.25;
              const textY = user.y + (systemPositions[conn.system].y - user.y) * 0.25;

              const textColor = conn.status === 'risk' ? 'text-red-700' : 'text-amber-700';
              const bgColor = conn.status === 'risk' ? 'bg-red-100/90' : 'bg-amber-100/90';

              return (
                <div 
                  key={`${user.id}-${conn.system}-action`}
                  className="absolute"
                  style={{ 
                    left: `${textX}%`, 
                    top: `${textY}%`, 
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className={`py-1 px-2 rounded-md shadow-sm text-center ${bgColor}`}>
                    <p className={`text-[9px] font-bold whitespace-nowrap leading-tight ${textColor}`}>
                      {conn.action}
                    </p>
                    {conn.breach && (
                      <div className="flex items-center justify-center mt-0.5 opacity-90">
                        <ExternalLink className={`w-2.5 h-2.5 mr-1 ${textColor}`} />
                        <p className={`text-[8px] font-semibold whitespace-nowrap leading-tight ${textColor}`}>
                          {conn.breach}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            });
          })}
        </div>

        {/* Users positioned around the diagram */}
        <div className="absolute inset-0 w-full h-full z-30">
            {userPositions.map(user => (
              <div
                key={user.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${user.x}%`, top: `${user.y}%` }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex flex-col items-center group cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-medium text-slate-700 mt-1 bg-white/80 px-2 py-0.5 rounded-full shadow-sm">
                        {user.fullName.split(' ')[0]}
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-3">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-slate-800">{user.fullName}</p>
                      <p className="text-xs text-slate-500">{user.role}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
        </div>
        
        {/* Main Application Box */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-4 mx-auto max-w-lg relative z-30">
          <div className="grid grid-cols-2 gap-6">
            
            {/* SaaS Applications Group */}
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="text-sm font-semibold text-slate-800 mb-2 tracking-tight">
                  SaaS Applications
                </h2>
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="group bg-white rounded-lg p-3 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 h-16">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0ee5bb75a_image.png" alt="Salesforce" className="h-6 object-contain" loading="lazy" />
                </div>
                <div className="group bg-white rounded-lg p-3 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 h-16">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3143cd049_Slack-logo.png" alt="Slack" className="h-8 object-contain" loading="lazy" />
                </div>
                <div className="group bg-white rounded-lg p-3 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 h-16">
                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/287abcda5_Jira_Logosvg.png" alt="Jira" className="h-5 object-contain" loading="lazy" />
                </div>
                <div className="group bg-white rounded-lg p-3 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 h-16">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/78eb8716b_Microsoft_365_2022svg.png" alt="Microsoft 365" className="h-8 object-contain" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Custom Applications Group */}
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="text-sm font-semibold text-slate-800 mb-2 tracking-tight">
                  Custom Applications
                </h2>
                <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
              </div>
              
              <div className="space-y-2">
                <div className="group bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md flex items-center justify-center shadow-md flex-shrink-0">
                      <Database className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-xs">Infrastructure</h3>
                    </div>
                  </div>
                </div>
                <div className="group bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-md flex items-center justify-center shadow-md flex-shrink-0">
                      <CreditCard className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-xs">Billing</h3>
                    </div>
                  </div>
                </div>
                <div className="group bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-md flex items-center justify-center shadow-md flex-shrink-0">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-xs">CRM</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full pt-6 flex-shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-indigo-600">80%</p>
                <p className="mt-2 text-slate-600 text-sm">of breaches involve human error or insider activity</p>
                <p className="mt-1 text-xs text-slate-400 font-medium">— Verizon DBIR 2025</p>
            </div>
            <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-indigo-600">$5M</p>
                <p className="mt-2 text-slate-600 text-sm">average cost of insider-related breaches</p>
                <p className="mt-1 text-xs text-slate-400 font-medium">— IBM</p>
            </div>
            <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-indigo-600">74%</p>
                <p className="mt-2 text-slate-600 text-sm">of CISOs say human error is their top cybersecurity risk</p>
                <p className="mt-1 text-xs text-slate-400 font-medium">— Proofpoint 2024</p>
            </div>
        </div>
      </div>
    </div>
  );
}
