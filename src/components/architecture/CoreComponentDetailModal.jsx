import React from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Info, ListChecks, AlertTriangle, Target, Zap } from 'lucide-react';

export default function CoreComponentDetailModal({ isOpen, onClose, component, isEnforcementModal, isActorModal, isIntegrationModal }) {
  if (!isOpen || !component) return null;

  const getModalIcon = () => {
    if (isActorModal) return AlertTriangle;
    if (isEnforcementModal) return Target;
    if (isIntegrationModal) return Zap;
    return Info;
  };

  const ModalIcon = getModalIcon();

  const getModalColor = () => {
    if (isActorModal) return 'text-amber-600';
    if (isEnforcementModal) return 'text-blue-600';
    if (isIntegrationModal) return 'text-purple-600';
    return 'text-emerald-600';
  };

  const getBgColor = () => {
    if (isActorModal) return 'bg-amber-50';
    if (isEnforcementModal) return 'bg-blue-50';
    if (isIntegrationModal) return 'bg-purple-50';
    return 'bg-emerald-50';
  };

  const getBorderColor = () => {
    if (isActorModal) return 'border-amber-200';
    if (isEnforcementModal) return 'border-blue-200';
    if (isIntegrationModal) return 'border-purple-200';
    return 'border-emerald-200';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white rounded-xl shadow-2xl">
        <DialogHeader className="p-6 border-b border-slate-200">
          <DialogTitle className="flex items-center gap-3 text-xl text-slate-800">
            {component.icon && <component.icon className={`w-7 h-7 ${getModalColor()}`} />}
            <span>{component.label}</span>
          </DialogTitle>
        </DialogHeader>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="p-6 space-y-6"
        >
          <div className={`${getBgColor()} p-4 rounded-lg border ${getBorderColor()}`}>
            <h3 className={`font-semibold ${getModalColor().replace('text-', 'text-').replace('-600', '-800')} mb-2 flex items-center gap-2`}>
              <ModalIcon className="w-5 h-5" />
              {isActorModal ? 'Challenge' : isEnforcementModal ? 'Enforcement Method' : isIntegrationModal ? 'Integration Benefits' : 'Overview'}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {component.detailedExplanation || component.description}
            </p>
          </div>

          {component.keyFunctions && component.keyFunctions.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <ListChecks className="w-5 h-5" />
                {isActorModal ? 'Benefits of Jade Governance' : isEnforcementModal ? 'Key Capabilities' : isIntegrationModal ? 'Key Benefits' : 'Key Functions'}
              </h3>
              <ul className="space-y-2">
                {component.keyFunctions.map((func, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className={`w-4 h-4 ${getModalColor()} mt-0.5 shrink-0`} />
                    <span>{func}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isEnforcementModal && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <p className="text-sm text-blue-700 mb-3">
                Configure this enforcement action in your policies?
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={onClose}>
                Configure Policy
              </Button>
            </div>
          )}

          {isActorModal && (
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 text-center">
              <p className="text-sm text-emerald-700 mb-3">
                Ready to govern this actor type with Jade?
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={onClose}>
                Learn More
              </Button>
            </div>
          )}

          {isIntegrationModal && (
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <p className="text-sm text-purple-700 mb-3">
                Enable this integration for your workflow?
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={onClose}>
                Setup Integration
              </Button>
            </div>
          )}
        </motion.div>

        <DialogFooter className="p-6 border-t border-slate-200">
          <DialogClose asChild>
            <Button variant="outline" className="w-full sm:w-auto">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}