import React from "react";
import { Shield, Eye, Settings } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: Settings,
      title: "Discover Actions in Custom IT Apps",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200/60",
      champion: {
        name: "Mandy Andress",
        title: "CISO",
        company: "Elastic",
        logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/91c48c5c3_image.png"
      }
    },
    {
      icon: Eye,
      title: "Control Cloud Privileged Ops",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200/60",
      champion: {
        name: "Daryl Swensson",
        title: "Head of Cloud Security",
        company: "PayPal",
        logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/395d485db_PayPal_Logo2014.png"
      }
    },
    {
      icon: Shield,
      title: "Govern Security Config Changes",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200/60",
      champion: {
        name: "Tim Brown",
        title: "CISO",
        company: "SolarWinds",
        logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f4e3f386f_image.png"
      }
    }
  ];

  return (
    <div className="bg-white h-full w-full flex flex-col p-8 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="w-full mb-12 flex-shrink-0">
          <h1 className="text-4xl font-bold text-slate-900">
            Use Cases
          </h1>
        </div>

        {/* Use Cases Horizontal Layout */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <div key={index} className={`bg-white rounded-2xl border ${useCase.borderColor} shadow-sm p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
              <div className={`mx-auto flex items-center justify-center w-14 h-14 ${useCase.bgColor} rounded-2xl mb-4`}>
                <useCase.icon className={`w-7 h-7 ${useCase.color}`} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 leading-tight">
                {useCase.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Early Champions Section */}
        <div className="text-center">
            <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-8">
                Early Champions
            </h3>
            <div className="grid grid-cols-3 gap-6 items-start">
                {useCases.map((useCase) => (
                    <div key={useCase.champion.name} className="p-5">
                        <div className="flex justify-center items-center h-12 mb-4">
                           <img src={useCase.champion.logoUrl} alt={`${useCase.champion.company} logo`} className="max-h-8 object-contain" loading="lazy" />
                        </div>
                        <p className="font-semibold text-slate-800 text-sm">{useCase.champion.name}</p>
                        <p className="text-xs text-slate-600">{useCase.champion.title}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}