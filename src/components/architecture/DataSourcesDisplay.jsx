import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Server, ShieldCheck, Users, BarChartHorizontalBig, Puzzle, Laptop } from 'lucide-react'; // Using more diverse icons

const dataSourceCategories = [
  {
    name: "Cloud Providers",
    icon: Cloud,
    color: "text-sky-600",
    sources: ["AWS", "Azure", "Google Cloud", "Oracle Cloud", "IBM Cloud"]
  },
  {
    name: "SaaS Applications",
    icon: Laptop, // Replaced Globe for SaaS with Laptop
    color: "text-lime-600",
    sources: ["Salesforce", "Microsoft 365", "Workday", "ServiceNow", "Slack", "Zoom"]
  },
  {
    name: "Identity Providers",
    icon: Users,
    color: "text-violet-600",
    sources: ["Okta", "Azure AD", "Auth0", "Ping Identity", "OneLogin"]
  },
  {
    name: "Security Tools",
    icon: ShieldCheck,
    color: "text-red-600",
    sources: ["CrowdStrike", "SentinelOne", "Splunk", "Netskope", "Palo Alto NGFW"]
  },
  {
    name: "Databases",
    icon: Database,
    color: "text-amber-600",
    sources: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Snowflake"]
  },
  {
    name: "DevOps & Code Repos",
    icon: Puzzle, // Replaced Code with Puzzle for DevOps
    color: "text-indigo-600",
    sources: ["GitHub", "GitLab", "Jenkins", "Jira", "Artifactory"]
  },
  {
    name: "On-Premise Systems",
    icon: Server,
    color: "text-slate-600",
    sources: ["Active Directory", "VMware vSphere", "Network Devices", "Legacy Apps"]
  },
   {
    name: "API Endpoints",
    icon: BarChartHorizontalBig,
    color: "text-teal-600",
    sources: ["Custom Microservices", "Partner APIs", "Internal APIs", "GraphQL Endpoints"]
  }
];

export default function DataSourcesDisplay() {
  return (
    <motion.div 
      className="w-full bg-white p-6 rounded-lg shadow-lg border border-slate-200"
    >
      <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">Connected Data Sources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataSourceCategories.map((category, catIndex) => (
          <motion.div 
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 ${category.color}`}>
              <category.icon className="w-5 h-5" />
              <h3 className="font-semibold text-sm">{category.name}</h3>
            </div>
            <ul className="space-y-1.5">
              {category.sources.map((source, srcIndex) => (
                <motion.li 
                  key={source}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: catIndex * 0.1 + srcIndex * 0.05 }}
                  className="text-xs text-slate-600 flex items-center gap-1.5"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${category.color.replace('text-', 'bg-')} opacity-70`}></div>
                  {source}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}