import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Database, Server, Code } from 'lucide-react';

const dataSources = [
  { id: 'aws', label: 'AWS', icon: Cloud, position: { top: '20%', left: '10%' } },
  { id: 'azure', label: 'Azure', icon: Cloud, position: { top: '30%', left: '15%' } },
  { id: 'gcp', label: 'GCP', icon: Cloud, position: { top: '40%', left: '8%' } },
  { id: 'salesforce', label: 'Salesforce', icon: Database, position: { top: '25%', left: '25%' } },
  { id: 'okta', label: 'Okta', icon: Server, position: { top: '35%', left: '30%' } },
  { id: 'github', label: 'GitHub', icon: Code, position: { top: '45%', left: '20%' } }
];

export default function DataSourcesOverlay({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-10"
        >
          {dataSources.map((source, index) => (
            <motion.div
              key={source.id}
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: [0, -10, 0]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                delay: index * 0.1,
                y: { duration: 2, repeat: Infinity, delay: index * 0.3 }
              }}
              className="absolute"
              style={source.position}
            >
              <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-3 flex items-center gap-2">
                <source.icon className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-medium text-slate-700">{source.label}</span>
              </div>
              
              {/* Animated connection line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                className="absolute top-1/2 left-full h-0.5 bg-emerald-600 opacity-50"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}