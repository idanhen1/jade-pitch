
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Settings, Cloud, Globe, Monitor, Code, Brain, Shield, CheckCircle, Lock, Bell, Ban, FileText, MessageSquare, BarChart3, Ticket, Zap, Eye, EyeOff, Server, Database, GitBranch, Network, Plug, Info, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import ActorSection from '../components/architecture/ActorSection';
import JadeCore from '../components/architecture/JadeCore';
import TargetSection from '../components/architecture/TargetSection';
import EnforcementStrip from '../components/architecture/EnforcementStrip';
import IntegrationsPanel from '../components/architecture/IntegrationsPanel';
import CoreComponentDetailModal from '../components/architecture/CoreComponentDetailModal';
import DataSourcesDisplay from '../components/architecture/DataSourcesDisplay';

const coreComponentsData = {
  connectors: {
    icon: Plug,
    label: 'Connectors & Data Abstraction',
    description: 'Ingests events from diverse sources, initiating the governance workflow.',
    detailedExplanation: 'Jade seamlessly integrates with your entire tech stack – cloud platforms, SaaS applications, on-premise systems, and custom applications. Connectors pull raw event data, logs, and API calls. This initial abstraction step gathers crucial information about actions being performed, preparing it for deeper analysis.',
    keyFunctions: ['Broad source compatibility (API, logs, webhooks)', 'Real-time and batch data ingestion', 'Initial data parsing and filtering', 'Secure and authenticated connections']
  },
  normalization: {
    icon: Network,
    label: 'Unified Schema Normalization',
    description: 'Transforms varied event data into a standardized, understandable format.',
    detailedExplanation: 'Raw data from different sources arrives in myriad formats. The Unified Schema Normalization layer acts as a universal translator. It converts diverse event structures into a consistent, internal schema. This ensures that all subsequent components (Action Graph, Risk Engine, Policy Engine) can process information uniformly, regardless of its origin.',
    keyFunctions: ['Data mapping and transformation', 'Standardized event object creation', 'Enrichment with basic metadata', 'Schema validation and error handling']
  },
  graph: {
    icon: GitBranch,
    label: 'Action Graph',
    description: 'Contextualizes actions by linking identities, assets, and activities.',
    detailedExplanation: 'The Action Graph is a dynamic, real-time model of your organization\'s digital interactions. It builds relationships between identities (users, AI agents, service accounts), the actions they perform, and the assets they target. This contextual web allows Jade to understand not just *what* is happening, but *who* is doing it, *to what*, and *its potential blast radius*. This is crucial for accurate risk assessment.',
    keyFunctions: ['Identity resolution and mapping', 'Asset discovery and classification', 'Relationship modeling (user-action-asset)', 'Historical activity tracking for behavioral analysis']
  },
  risk: {
    icon: Shield,
    label: 'Risk Engine',
    description: 'Dynamically scores the risk of each action based on multiple factors.',
    detailedExplanation: 'The Risk Engine is the intelligent core of Jade\'s decision-making. It calculates a dynamic risk score for every action using a sophisticated formula: Risk = Impact × Likelihood × Context. It considers factors like asset sensitivity, user privileges, typical behavior, threat intelligence, and environmental variables. Scores are continuously updated, providing a real-time view of potential threats.',
    keyFunctions: ['Configurable risk modeling', 'Behavioral anomaly detection', 'Threat intelligence integration', 'Real-time risk score calculation (e.g., 0-100)']
  },
  policy: {
    icon: Settings,
    label: 'Policy Engine',
    description: 'Evaluates actions against predefined policies to determine outcomes.',
    detailedExplanation: 'The Policy Engine is where your organization\'s governance rules come to life. It takes the action, its context from the Action Graph, and its score from the Risk Engine, then evaluates it against a set of configurable policies. Based on policy matches, it decides the appropriate enforcement action: allow, require multi-party approval (MPA), demand multi-factor authentication (MFA), send notifications, block the action, or require justification.',
    keyFunctions: ['Visual policy builder (if-then-else logic)', 'Policy versioning and auditing', 'Granular rule definition (conditions, actions)', 'Integration with enforcement points']
  }
};

const actorsData = {
  ai: {
    icon: Bot,
    label: 'AI Agent',
    challenge: 'The AI Governance Gap',
    description: 'Organizations today face a critical dilemma with AI agents. Without proper governance, they either avoid deploying AI altogether—missing out on massive productivity gains and competitive advantages—or they deploy AI agents without oversight, creating security blind spots and compliance risks.',
    details: 'Modern enterprises are stuck between two extremes: being too cautious and falling behind, or being too permissive and creating vulnerabilities. Jade solves this by providing intelligent governance that allows organizations to deploy AI agents confidently while maintaining full control and visibility over their actions.',
    benefits: ['Deploy AI safely at scale', 'Maintain audit trails for AI actions', 'Enable innovation without security trade-offs', 'Competitive advantage through AI adoption']
  },
  human: {
    icon: User,
    label: 'Human User',
    challenge: 'Human Error & Insider Risk',
    description: 'Human users, whether intentionally or accidentally, represent one of the biggest security risks in any organization. Traditional security solutions focus on external threats, but the majority of breaches involve human actions—from privilege abuse to simple mistakes.',
    details: 'Jade provides intelligent governance over human actions by understanding context, intent, and risk. Instead of blanket restrictions that hurt productivity, Jade enables smart controls that protect against both malicious insider threats and innocent mistakes while keeping legitimate work flowing smoothly.',
    benefits: ['Reduce human error incidents', 'Detect insider threat patterns', 'Balance security with productivity', 'Provide just-in-time guidance']
  },
  service: {
    icon: Settings,
    label: 'Service Account',
    challenge: 'The Service Account Blind Spot',
    description: 'Service accounts often have broad privileges and operate autonomously, making them attractive targets for attackers. They\'re frequently over-privileged, poorly monitored, and can cause massive damage if compromised—yet most organizations have limited visibility into their activities.',
    details: 'Jade brings service accounts under intelligent governance by monitoring their actions, validating their behavior against expected patterns, and applying risk-based controls. This ensures service accounts operate within their intended scope while providing the automation benefits organizations need.',
    benefits: ['Monitor autonomous system behavior', 'Detect compromised service accounts', 'Right-size service account privileges', 'Maintain operational efficiency']
  }
};

const integrationsData = {
  chatops: {
    icon: MessageSquare,
    label: 'ChatOps Integration',
    description: 'Approval Flows in Your Daily Workflow',
    explanation: 'Instead of forcing users to leave their collaboration tools, Jade brings approval workflows directly into Slack and Microsoft Teams. When a high-risk action requires approval, stakeholders receive notifications in their chat channels with context and can approve or deny with a simple click—maintaining the flow of work while ensuring proper governance.',
    benefits: ['Seamless approvals in familiar tools', 'Faster response times', 'Rich context in notifications', 'Audit trail of decisions']
  },
  siem: {
    icon: BarChart3,
    label: 'SIEM / SOAR Integration',
    description: 'Automated Security Operations',
    explanation: 'Jade feeds rich, contextual events into your SIEM and SOAR platforms, enabling automated response playbooks. When suspicious activity is detected, your security operations center gets detailed information about the user, action, and risk score—allowing for immediate automated or manual response.',
    benefits: ['Enhanced threat detection', 'Automated incident response', 'Rich contextual data', 'Reduced false positives']
  },
  ticketing: {
    icon: Ticket,
    label: 'Ticketing Integration',
    description: 'Structured Follow-up and Documentation',
    explanation: 'For actions that require follow-up or investigation, Jade automatically creates tickets in ServiceNow, Jira, or other ticketing systems. These tickets include full context, evidence links, and suggested remediation steps—ensuring nothing falls through the cracks and maintaining comprehensive audit trails.',
    benefits: ['Automated ticket creation', 'Complete audit documentation', 'Structured remediation workflows', 'Compliance reporting']
  }
};


export default function Architecture() {
  const [hoveredActor, setHoveredActor] = useState(null);
  const [selectedCoreComponent, setSelectedCoreComponent] = useState(null);
  const [selectedEnforcement, setSelectedEnforcement] = useState(null);
  const [selectedActor, setSelectedActor] = useState(null);
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [showDataSources, setShowDataSources] = useState(false);
  const [pulsingEnforcement, setPulsingEnforcement] = useState(null);

  const handleEnforcementClick = (enforcement) => {
    setSelectedEnforcement(enforcement);
    setPulsingEnforcement(enforcement.id);
    setTimeout(() => setPulsingEnforcement(null), 2000);
  };

  const handleCoreComponentClick = (componentKey) => {
    setSelectedCoreComponent(coreComponentsData[componentKey]);
  };

  const handleActorClick = (actorKey) => {
    setSelectedActor(actorsData[actorKey]);
  };

  const handleIntegrationClick = (integrationKey) => {
    setSelectedIntegration(integrationsData[integrationKey]);
  };

  return (
    <TooltipProvider>
      {/* Removed min-h-screen to allow content to scroll naturally */}
      <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50/20 p-4 sm:p-6 md:p-8 overflow-x-hidden"> {/* Enhanced responsive padding */}
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10"> {/* Responsive margin */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-slate-800 mb-3 px-4" // Better mobile scaling and added px-4
            >
              <span className="text-emerald-600 font-semibold">Jade Platform</span> – Governing Every High-Risk Action
            </motion.h1>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4"> {/* Responsive text and added px-4 */}
              An interactive overview of Jade's intelligent governance architecture.
            </p>
          </div>

          {/* Data Sources Toggle Area */}
          <div className="mb-6 sm:mb-8 px-4"> {/* Added px-4 and responsive margin */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-200 mb-4"
              >
                <Switch
                  id="data-sources-switch"
                  checked={showDataSources}
                  onCheckedChange={setShowDataSources}
                  className="data-[state=checked]:bg-emerald-600"
                />
                <label htmlFor="data-sources-switch" className="text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2 cursor-pointer"> {/* Responsive text */}
                  {showDataSources ? <Eye className="w-4 h-4 text-emerald-600" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
                  {showDataSources ? 'Hide Data Sources' : 'Show Data Sources'}
                </label>
              </motion.div>
            </div>
            <AnimatePresence>
              {showDataSources && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full overflow-hidden"
                >
                  <DataSourcesDisplay />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Architecture Layout */}
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-slate-50/50 border-slate-200/70 shadow-md mb-8 sm:mb-10 mx-4"> {/* Responsive padding and added mx-4 */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)] gap-x-4 sm:gap-x-6 items-start relative"> {/* Responsive gaps */}
              {/* Actors */}
              <div className="w-full mb-6 lg:mb-0"> {/* Added margin for mobile stacking */}
                <ActorSection
                  onActorClick={handleActorClick}
                />
              </div>

              {/* Jade Core */}
              <div className="w-full mb-6 lg:mb-0"> {/* Added margin for mobile stacking */}
                <JadeCore
                  onCoreComponentClick={handleCoreComponentClick}
                  coreComponentsData={coreComponentsData}
                />
              </div>

              {/* Targets */}
              <div className="w-full">
                <TargetSection />
              </div>
            </div>
          </Card>

          {/* Enforcement Strip */}
          <div className="mb-8 sm:mb-10 px-4"> {/* Added px-4 and responsive margin */}
            <EnforcementStrip
              onEnforcementClick={handleEnforcementClick}
              pulsingEnforcement={pulsingEnforcement}
            />
          </div>

          {/* Integrations Panel */}
          <div className="mb-8 sm:mb-10 px-4"> {/* Added px-4 and responsive margin */}
            <IntegrationsPanel
              pulsingEnforcement={pulsingEnforcement}
              onIntegrationClick={handleIntegrationClick}
            />
          </div>

          {/* Footer Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 sm:mt-16 py-6 sm:py-8 border-t border-slate-200 flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 px-4" // Enhanced responsive spacing and added px-4
          >
            {[
              { icon: Shield, text: "Fewer Breaches" },
              { icon: CheckCircle, text: "Audit-Ready" },
              { icon: Zap, text: "Lower Ops Cost" }
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2 sm:gap-2.5 text-slate-600"> {/* Responsive gap */}
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" /> {/* Responsive icon */}
                <span className="text-xs sm:text-sm font-medium">{item.text}</span> {/* Responsive text */}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Modals */}
        <CoreComponentDetailModal
          component={selectedCoreComponent}
          isOpen={!!selectedCoreComponent}
          onClose={() => setSelectedCoreComponent(null)}
        />

        {selectedEnforcement && (
          <CoreComponentDetailModal
            isOpen={!!selectedEnforcement}
            onClose={() => setSelectedEnforcement(null)}
            component={{
              icon: selectedEnforcement.icon,
              label: selectedEnforcement.label,
              description: selectedEnforcement.description,
              detailedExplanation: selectedEnforcement.detailedExplanation || `${selectedEnforcement.label} is an enforcement mechanism that ${selectedEnforcement.description.toLowerCase()}. This control helps organizations balance security requirements with operational efficiency.`,
              keyFunctions: selectedEnforcement.keyFunctions || ["Risk-based activation", "Configurable policies", "Audit trail maintenance"]
            }}
            isEnforcementModal={true}
          />
        )}

        {selectedActor && (
          <CoreComponentDetailModal
            isOpen={!!selectedActor}
            onClose={() => setSelectedActor(null)}
            component={{
              icon: selectedActor.icon,
              label: selectedActor.challenge,
              description: selectedActor.description,
              detailedExplanation: selectedActor.details,
              keyFunctions: selectedActor.benefits
            }}
            isActorModal={true}
          />
        )}

        {selectedIntegration && (
          <CoreComponentDetailModal
            isOpen={!!selectedIntegration}
            onClose={() => setSelectedIntegration(null)}
            component={{
              icon: selectedIntegration.icon,
              label: selectedIntegration.description,
              description: selectedIntegration.explanation,
              detailedExplanation: selectedIntegration.explanation,
              keyFunctions: selectedIntegration.benefits
            }}
            isIntegrationModal={true}
          />
        )}
      </div>
    </TooltipProvider>
  );
}
