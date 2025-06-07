import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap } from 'lucide-react';

export default function EnforcementModal({ enforcement, onClose }) {
  if (!enforcement) return null;

  return (
    <Dialog open={!!enforcement} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-600" />
            Seize Opportunity
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-slate-50 flex items-center justify-center ${enforcement.color}`}>
              <enforcement.icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{enforcement.label}</h3>
            <p className="text-slate-600">{enforcement.description}</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="text-emerald-800 text-center mb-4">
              Create policy <Badge variant="secondary" className="ml-1">disabled by default</Badge>?
            </p>
            <div className="text-center">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={onClose}
              >
                Enable Policy
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}