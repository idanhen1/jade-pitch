
import React from 'react';
import { User, UserX, Settings, Eye, Server, ExternalLink } from 'lucide-react';

const breaches = [
  {
    id: 1,
    company: "Zenlayer",
    cause: "Cloud Misconfiguration",
    description: "Misconfigured cloud storage exposed sensitive customer data",
    impact: "Customer data breach",
    date: "2024",
    icon: Settings,
    color: { bg: 'bg-red-100', text: 'text-red-800', icon: 'text-red-600' }
  },
  {
    id: 2,
    company: "Change Healthcare",
    cause: "Credential Misuse",
    description: "Compromised credentials led to unauthorized access",
    impact: "Healthcare data exposed",
    date: "2024",
    icon: User,
    color: { bg: 'bg-purple-100', text: 'text-purple-800', icon: 'text-purple-600' }
  },
  {
    id: 3,
    company: "OPEXUS",
    cause: "Malicious Insider",
    description: "Employee deliberately accessed and leaked confidential data",
    impact: "Internal data theft",
    date: "2024",
    icon: UserX,
    color: { bg: 'bg-indigo-100', text: 'text-indigo-800', icon: 'text-indigo-600' }
  },
  {
    id: 4,
    company: "National Public Data",
    cause: "Data Classification Error",
    description: "Sensitive data incorrectly classified as public",
    impact: "2.9 billion records exposed",
    date: "2024",
    icon: Eye,
    color: { bg: 'bg-orange-100', text: 'text-orange-800', icon: 'text-orange-600' }
  },
  {
    id: 5,
    company: "AT&T",
    cause: "Server Data Leak",
    description: "Unprotected server exposed customer communication records",
    impact: "73 million customers affected",
    date: "2024",
    icon: Server,
    color: { bg: 'bg-blue-100', text: 'text-blue-800', icon: 'text-blue-600' }
  },
];

export default function RecentExamples() {
  return (
    <div className="h-full w-full bg-white flex flex-col p-8">
      <div className="w-full mb-12 flex-shrink-0">
        <h1 className="text-4xl font-bold text-slate-900">
          Human Error is the Common Thread
        </h1>
      </div>

      <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto px-4">
          {breaches.map(breach => {
            const IconComponent = breach.icon;
            return (
              <div key={breach.id} className="flex flex-col items-center">
                <div className={`px-3 py-1 rounded-full flex items-center gap-2 mb-3 ${breach.color.bg}`}>
                  <IconComponent className={`w-4 h-4 ${breach.color.icon}`} />
                  <span className={`text-xs font-semibold ${breach.color.text}`}>{breach.cause}</span>
                </div>
                
                <div className="bg-white rounded-lg shadow-md border border-slate-200 p-4 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h2 className="text-lg font-bold text-slate-900">{breach.company}</h2>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{breach.date}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">{breach.description}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-red-600">
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-semibold text-xs">{breach.impact}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
