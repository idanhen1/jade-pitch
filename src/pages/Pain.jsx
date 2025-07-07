
import React from "react";
import { Database, CreditCard, Users, User, Cloud, AlertTriangle, ShieldAlert } from "lucide-react";

const actions = [
  // Human Errors
  { id: 1, connectedUserId: 12, text: "Publish public app", category: 'error' },
  { id: 2, connectedUserId: 11, text: "Add user to group", category: 'error' },
  { id: 3, connectedUserId: 4, text: "Misconfigure firewall rule", category: 'error' },
  // Insider Threats
  { id: 4, connectedUserId: 2, text: "Create privileged user", category: 'threat' },
  { id: 5, connectedUserId: 5, text: "Exfiltrate CRM data", category: 'threat' },
  { id: 6, connectedUserId: 6, text: "Tamper CI/CD pipeline", category: 'threat' },
];

const EnhancedUserIcon = ({ action }) => {
  const isError = action.category === 'error';
  const bgColor = isError ? 'from-red-500 to-red-600' : 'from-amber-500 to-amber-600';
  const textColor = isError ? 'text-red-700' : 'text-amber-700';
  const Icon = isError ? AlertTriangle : ShieldAlert;

  return (
    <div className="flex flex-col items-center">
      <div className={`w-14 h-14 bg-gradient-to-br ${bgColor} rounded-full flex items-center justify-center shadow-lg border-2 border-white relative`}>
        <User className="w-7 h-7 text-white" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
          <Icon className="w-3 h-3 text-red-600" />
        </div>
      </div>
      <div className={`mt-2 px-2 py-1 bg-white/90 rounded-md shadow-sm border border-gray-200 ${textColor} text-xs font-medium text-center max-w-32`}>
        {action.text}
      </div>
    </div>
  );
};

const SimpleUserIcon = () => (
    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
      <User className="w-6 h-6 text-white" />
    </div>
);

export default function Pain() {
  const userPositions = [
    { id: 1, x: 50, y: 12 },
    { id: 2, x: 88, y: 25 },
    { id: 3, x: 98, y: 45 },
    { id: 4, x: 92, y: 65 },
    { id: 5, x: 80, y: 85 },
    { id: 6, x: 60, y: 95 },
    { id: 7, x: 38, y: 95 },
    { id: 8, x: 20, y: 88 },
    { id: 9, x: 8, y: 72 },
    // Removed id 10
    { id: 11, x: 8, y: 45 },
    { id: 12, x: 18, y: 18 },
    { id: 13, x: 35, y: 8 },
    { id: 14, x: 75, y: 8 },
  ];

  return (
    <div className="h-full w-full bg-white p-8 flex flex-col">
      <div className="w-full mb-8 flex-shrink-0">
        <h1 className="text-4xl font-bold text-slate-900">
          Human Errors and Insiders Cost Millions
        </h1>
      </div>

      <div className="w-full flex-grow relative">
        {/* Users */}
        <div className="absolute inset-0 w-full h-full">
          {userPositions.map(user => {
            const action = actions.find(a => a.connectedUserId === user.id);
            
            return (
              <div key={user.id} className="absolute" style={{ left: `${user.x}%`, top: `${user.y}%`, transform: 'translate(-50%, -50%)' }}>
                {action ? (
                  <EnhancedUserIcon action={action} />
                ) : (
                  <SimpleUserIcon />
                )}
              </div>
            );
          })}
        </div>
        
        {/* Main Application Box - Centered */}
        <div 
          className="w-[420px] absolute z-10"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="space-y-4">
            {/* SaaS Row */}
            <div className="flex items-center gap-x-4">
              <h2 className="w-16 text-xs font-semibold text-slate-500 text-right uppercase tracking-wider">SaaS</h2>
              <div className="flex-1 grid grid-cols-4 gap-4 items-center">
                <div className="flex justify-center items-center h-8"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0ee5bb75a_image.png" alt="Salesforce" className="max-h-4" loading="lazy" /></div>
                <div className="flex justify-center items-center h-8"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3143cd049_Slack-logo.png" alt="Slack" className="max-h-5" loading="lazy" /></div>
                <div className="flex justify-center items-center h-8"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/287abcda5_Jira_Logosvg.png" alt="Jira" className="max-h-4" loading="lazy" /></div>
                <div className="flex justify-center items-center h-8"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/78eb8716b_Microsoft_365_2022svg.png" alt="M365" className="max-h-5" loading="lazy" /></div>
              </div>
            </div>
            {/* Custom Row */}
            <div className="flex items-center gap-x-4">
              <h2 className="w-16 text-xs font-semibold text-slate-500 text-right uppercase tracking-wider">Custom</h2>
              <div className="flex-1 grid grid-cols-3 gap-3 items-center">
                 <div className="bg-white/80 border border-slate-200/80 rounded-lg p-2 h-10 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow"><div className="w-5 h-5 bg-emerald-500 rounded-md flex items-center justify-center"><Database className="w-3 h-3 text-white"/></div><span className="font-semibold text-slate-700 text-xs">Infra</span></div>
                 <div className="bg-white/80 border border-slate-200/80 rounded-lg p-2 h-10 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow"><div className="w-5 h-5 bg-violet-500 rounded-md flex items-center justify-center"><CreditCard className="w-3 h-3 text-white"/></div><span className="font-semibold text-slate-700 text-xs">Billing</span></div>
                 <div className="bg-white/80 border border-slate-200/80 rounded-lg p-2 h-10 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow"><div className="w-5 h-5 bg-amber-500 rounded-md flex items-center justify-center"><Users className="w-3 h-3 text-white"/></div><span className="font-semibold text-slate-700 text-xs">CRM</span></div>
              </div>
            </div>
            {/* Cloud Row */}
            <div className="flex items-center gap-x-4">
              <h2 className="w-16 text-xs font-semibold text-slate-500 text-right uppercase tracking-wider">Cloud</h2>
              <div className="flex-1 grid grid-cols-3 gap-4 items-center">
                 <div className="flex justify-center items-center h-8"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ecb40a706_image.png" alt="AWS" className="max-h-5" loading="lazy" /></div>
                 <div className="flex justify-center items-center h-8"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ce8e16bff_image.png" alt="GCP" className="max-h-6" loading="lazy" /></div>
                 <div className="flex justify-center items-center h-8"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3079535b7_azure.png" alt="Azure" className="max-h-6" loading="lazy" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-shrink-0 pt-6 mt-4 border-t border-slate-200">
        <div className="flex justify-between items-start max-w-4xl mx-auto">
            <div className="text-center px-4">
                <p className="text-4xl font-bold text-indigo-600">80%</p>
                <p className="text-sm text-slate-600 leading-tight">of breaches involve human error or insider activity</p>
                <p className="text-xs text-slate-400 mt-1">— Verizon DBIR 2025</p>
            </div>
            <div className="text-center px-4">
                <p className="text-4xl font-bold text-indigo-600">$5M</p>
                <p className="text-sm text-slate-600 leading-tight">average cost of insider-related breaches</p>
                <p className="text-xs text-slate-400 mt-1">— IBM Cost of a Data Breach '24</p>
            </div>
            <div className="text-center px-4">
                <p className="text-4xl font-bold text-indigo-600">74%</p>
                <p className="text-sm text-slate-600 leading-tight">of CISOs say human error is their top cybersecurity risk</p>
                <p className="text-xs text-slate-400 mt-1">— Proofpoint 2024</p>
            </div>
        </div>
    </div>
    </div>
  );
}
