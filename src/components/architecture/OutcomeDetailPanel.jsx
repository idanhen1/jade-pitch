import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function OutcomeDetailPanel({ outcomeData, eventData, onClose }) {
  if (!outcomeData || !eventData) return null;

  const { icon: Icon, label, color, modalTitle, modalDescription } = outcomeData;
  const { actor, action, riskScore } = eventData;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-4 w-full max-w-sm p-6 bg-white rounded-xl shadow-2xl border border-slate-200 z-20" // Positioned to the right
      // Ensure this panel is visually distinct and well-styled
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="flex items-center mb-4">
        {Icon && <Icon className="w-7 h-7 mr-3" style={{ color }} />}
        <h3 className="text-lg font-semibold text-slate-800" style={{color}}>{modalTitle || label}</h3>
      </div>

      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
        {modalDescription}
      </p>

      <div className="mb-4 text-xs bg-slate-50 p-3.5 rounded-md border border-slate-100 space-y-1.5">
        <p><strong className="font-medium text-slate-700">Actor:</strong> {actor?.name}</p>
        <p><strong className="font-medium text-slate-700">Action:</strong> {action}</p>
        <p><strong className="font-medium text-slate-700">Risk Score:</strong> <span style={{ color, fontWeight: '600' }}>{riskScore}</span></p>
      </div>

      {outcomeData.id === 'high' && (
        <div className="p-4 bg-slate-800 rounded-lg shadow-inner text-white">
          <div className="flex items-center mb-2.5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="Slack" className="w-5 h-5 mr-2 rounded" />
            <span className="font-semibold text-sm">Jade Security Bot</span> <span className="text-xs text-slate-400 ml-1">via Slack</span>
          </div>
          <div className="bg-slate-700/80 p-3 rounded">
            <p className="text-sm font-medium mb-1.5">Approval Request</p>
            <p className="text-xs text-slate-300 mb-2.5 leading-snug">
              {actor?.name} ({actor?.id}) initiated: "{action}" (Risk: {riskScore})
            </p>
            <div className="flex gap-2.5 mt-3">
              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs h-8 flex-1">Approve</Button>
              <Button variant="destructive" size="sm" className="bg-red-500 hover:bg-red-600 text-white text-xs h-8 flex-1">Deny</Button>
            </div>
          </div>
        </div>
      )}
       <Button variant="outline" onClick={onClose} className="w-full mt-5">Close Panel</Button>
    </motion.div>
  );
}