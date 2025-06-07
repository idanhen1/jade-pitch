import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, TrendingUp, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function RiskEngineModal({ isOpen, onClose }) {
  const riskScore = 85;
  const factors = [
    { label: 'Impact', value: 90, description: 'Critical system access' },
    { label: 'Likelihood', value: 75, description: 'High privilege escalation' },
    { label: 'Context', value: 60, description: 'Off-hours activity' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            Risk Engine Analysis
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Live Risk Score */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shadow-lg"
            >
              <span className="text-2xl font-bold">{riskScore}</span>
            </motion.div>
            <Badge variant="destructive" className="text-sm">High Risk</Badge>
            <p className="text-xs text-slate-500 mt-2">Real-time risk assessment</p>
          </div>

          {/* Risk Formula */}
          <div className="bg-slate-50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Risk Calculation
            </h4>
            <div className="text-center mb-4 font-mono text-sm text-slate-700">
              Risk = Impact × Likelihood × Context
            </div>
            
            <div className="space-y-3">
              {factors.map((factor, index) => (
                <motion.div
                  key={factor.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{factor.label}</span>
                    <span>{factor.value}%</span>
                  </div>
                  <Progress value={factor.value} className="h-2" />
                  <p className="text-xs text-slate-500">{factor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Recommended Actions
            </h4>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>• Require MPA for high-risk operations</li>
              <li>• Enable additional MFA verification</li>
              <li>• Notify security team immediately</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}