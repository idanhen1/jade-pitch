import React from "react";
import { AlertTriangle, Shield, Eye, DollarSign, TrendingUp, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyNow() {
  return (
    <div className="h-full w-full bg-white flex flex-col p-8 font-sans">
      <div className="w-full mb-12 flex-shrink-0">
        <h1 className="text-4xl font-bold text-slate-900">Why Now</h1>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="grid grid-cols-3 gap-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
            className="border-red-200 bg-red-50/50 border rounded-lg p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="w-6 h-6 text-gray-700" />
            </div>
            <div className="text-center space-y-3">
              <div className="text-sm text-gray-600 font-medium border-b border-gray-200 pb-2">
                Human Error
              </div>
              <div className="flex justify-between items-center">
                <div className="text-center flex-1">
                  <div className="text-xl font-bold text-gray-900">80%</div>
                  <div className="text-xs text-gray-600">Breaches involve human error</div>
                  <div className="text-xs text-gray-500 mt-1">Verizon 2025</div>
                </div>
                <div className="w-px h-10 bg-gray-300 mx-2"></div>
                <div className="text-center flex-1">
                  <div className="text-xl font-bold text-gray-900">74%</div>
                  <div className="text-xs text-gray-600">CISOs top concern</div>
                  <div className="text-xs text-gray-500 mt-1">Proofpoint</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <StatCard
            icon={Shield}
            title="Insider Risk Focus"
            number="2025"
            subtitle="Gartner priority with allocated budgets"
            color="blue"
          />
          
          <StatCard
            icon={Shield}
            title="Regulatory Evolution"
            number="ISO + PCI"
            subtitle="standards emphasize action monitoring"
            color="purple"
          />
          
          <StatCard
            icon={Code}
            title="Custom App Sprawl"
            number="Vibe Coding"
            subtitle="creates explosion of custom applications"
            color="orange"
          />
          
          <StatCard
            icon={Eye}
            title="Technology Ready"
            number="Edge AI"
            subtitle="enables real-time agentless observability"
            color="emerald"
          />
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5 }
              }
            }}
            className="bg-gray-900 text-white rounded-lg p-5 flex flex-col justify-center items-center text-center"
          >
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-xl font-semibold mb-2">The Moment</div>
            <div className="text-sm text-gray-300">
              Perfect convergence for market leadership
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const StatCard = ({ icon: Icon, title, number, subtitle, color }) => {
  const colors = {
    red: "border-red-200 bg-red-50/50",
    blue: "border-blue-200 bg-blue-50/50", 
    purple: "border-purple-200 bg-purple-50/50",
    green: "border-green-200 bg-green-50/50",
    emerald: "border-emerald-200 bg-emerald-50/50",
    orange: "border-orange-200 bg-orange-50/50"
  };
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
      }}
      className={`${colors[color]} border rounded-lg p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}
    >
      <div className="flex items-center justify-center mb-2">
        <Icon className="w-6 h-6 text-gray-700" />
      </div>
      <div className="text-center space-y-3 flex-grow flex flex-col">
        <div className="text-sm text-gray-600 font-medium border-b border-gray-200 pb-2">
          {title}
        </div>
        <div className="flex-grow flex flex-col justify-center">
            <div className="text-xl font-bold text-gray-900">{number}</div>
            <div className="text-sm text-gray-600 mt-1">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
};