
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, User as UserIcon, Settings2, Cloud, Server, Globe, BrainCircuit, Shield, Search, Zap, ClipboardCheck, ArrowRight, CheckCircle, Lock, Users as MpaUsersIcon, Bell, XCircle, KeyRound, UserPlus, ServerCog, Layers, Target, Filter, SlidersHorizontal, Play, Code2, ChevronRight, MonitorPlay, BarChart3 } from 'lucide-react'; // Added BarChart3 for new data

// --- Page Title and Tagline Component ---
const PageTitle = ({ title, tagline }) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto px-4"
    >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-3 sm:mb-4 tracking-tight">
            {title.split(/(\bJade\b)/).map((part, index) =>
                part === "Jade" ? <span key={index} className="text-emerald-600 font-semibold">Jade</span> : part
            )}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500">
            {tagline}
        </p>
    </motion.div>
);

// --- Premium Section Header (For all three columns) ---
const PremiumSectionHeader = ({ text, icon: Icon, iconColor = "text-slate-500", className = "", isCentral = false }) => (
  <div
    className={`flex items-center space-x-2 h-8 mb-3 ${isCentral ? 'justify-center text-center' : 'justify-start'} ${className}`}
    style={{ lineHeight: '2rem' }}
  >
    <div className={`p-1.5 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50`}>
      <Icon className={`w-4 h-4 ${iconColor}`} strokeWidth={1.5} />
    </div>
    <h2 className={`text-xs font-semibold text-slate-700 uppercase tracking-wider ${isCentral ? 'text-center leading-tight' : 'whitespace-nowrap'}`}>{text}</h2>
  </div>
);

// --- Premium Content Box (Fixed sizing) ---
const PremiumContentBox = ({ id, children, className = "" }) => (
  <div
    id={id}
    className={`rounded-2xl shadow-xl border w-full flex flex-col transition-all duration-300 hover:shadow-2xl
                bg-white/95 backdrop-blur-sm border-slate-200/60 shadow-slate-200/50
                ${className}`}
    style={{ height: '380px', padding: '24px' }}
  >
    {children}
  </div>
);

// --- New GovernanceActionPill based on the outline (used for Contextualize & Assess) ---
// This component now has 'text', 'subtitle', 'isActive', 'isUpperFlow' props
const GovernanceActionPill = ({ icon: Icon, text, subtitle, color = "text-emerald-600", bgColor = "bg-emerald-100", isActive = false, isUpperFlow = false }) => (
  <motion.div
    className={`
      flex flex-col items-center px-3 py-3 rounded-lg shadow-sm border transition-all duration-200 flex-1
      ${isActive
        ? `${bgColor} border-emerald-300 shadow-md scale-105`
        : 'bg-white border-slate-200 hover:border-emerald-200 hover:shadow-md'
      }
    `}
    whileHover={{ scale: isActive ? 1.05 : 1.02 }}
  >
    <div className={`p-1.5 rounded-md ${isActive ? 'bg-white/70' : bgColor} mb-2`}>
      <Icon className={`w-4 h-4 ${isActive ? color : 'text-slate-500'}`} strokeWidth={1.5} />
    </div>
    <h4 className={`text-xs font-semibold text-center leading-tight mb-1 ${isActive ? 'text-slate-800' : 'text-slate-600'}`}>
      {text}
    </h4>
    {subtitle && (
      <p className={`text-[9px] text-center leading-tight ${isActive ? 'text-slate-600' : 'text-slate-500'}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

// --- Original Governance Action Pill (Renamed to prevent conflict with the new one, used for workflow actions) ---
const WorkflowGovernanceActionPill = ({ id, label, icon: Icon, color, bgColor }) => (
  <div className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full ${bgColor} border ${color.replace('text-', 'border-').replace('-600', '-300')} shadow-sm`}>
    <Icon className={`w-3 h-3 ${color}`} strokeWidth={1.5} />
    <span className={`text-[10px] font-medium ${color.replace('-600', '-700')}`}>{label}</span>
  </div>
);


// --- Jade Platform Hub (Internal Content, to be placed in a PremiumContentBox) ---
const PremiumJadePlatformHubInternal = ({ workflowActivationActions }) => ( // Prop renamed to clarify its use
  <>
    {/* Top: Jade Branding with shield icon only */}
    <div className="flex flex-col items-center mb-4">
      <Shield className="w-8 h-8 mb-2 text-emerald-600" strokeWidth={1.5} />
      <p className="text-[10px] text-emerald-600 font-medium uppercase tracking-wider mt-1 text-center">
        CONTEXTUALIZE, ASSESS & ENFORCE
      </p>
    </div>

    {/* Middle: Core Functions - Side by side design - Now using the new GovernanceActionPill and its data */}
    <div className="bg-slate-50/90 rounded-xl p-4 mb-4 border border-slate-200/80 flex-grow flex flex-row justify-center items-stretch gap-4">
      {coreProcessActions.map((action, index) => (
        <GovernanceActionPill key={index} {...action} />
      ))}
    </div>

    {/* Bottom: Governance Actions - Uses the original workflow actions and their corresponding pill component */}
    <div className="bg-slate-100/50 rounded-xl p-4 border border-slate-200/60">
      <div className="flex items-center justify-center space-x-2 mb-3">
        <Play className="w-4 h-4 text-emerald-600" />
        <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Activate Workflow</h4>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {workflowActivationActions.map(action => (
          <WorkflowGovernanceActionPill key={action.id} {...action} />
        ))}
      </div>
    </div>
  </>
);

// --- Premium Actor Item (New simplified structure) ---
const PremiumActorItem = ({ icon: Icon, title, color, bgColor, actions }) => (
  <div className={`rounded-xl p-3 ${bgColor} border ${color.replace('text-', 'border-').replace('-500', '-200')} flex items-center shadow-sm hover:shadow-md transition-shadow min-h-[98px]`}>
    {/* Left side: Icon and title */}
    <div className="flex flex-col items-center mr-3 min-w-[70px]">
      <div className={`p-2 rounded-lg bg-white/70 mb-2`}>
        <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.5} />
      </div>
      <h4 className="text-xs font-semibold text-slate-700 text-center leading-tight">{title}</h4>
    </div>

    {/* Right side: Actions */}
    <div className="flex-1 space-y-1.5">
      {actions.map((action, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-1 h-1 rounded-full ${color.replace('text-', 'bg-')} mr-2 flex-shrink-0`}></div>
          <p className="text-[10px] text-slate-600 leading-tight">{action}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Premium Target System Item (New simplified structure) ---
const PremiumTargetItem = ({ icon: Icon, title, color, bgColor }) => (
  <div className={`rounded-lg p-3 ${bgColor} border ${color.replace('text-', 'border-').replace('-500', '-200')} flex items-center space-x-3 shadow-sm hover:shadow-md transition-shadow`}>
    <div className={`p-2 rounded-md bg-white/70`}>
      <Icon className={`w-4 h-4 ${color}`} strokeWidth={1.5} />
    </div>
    <h4 className="text-xs font-medium text-slate-700 leading-tight flex-1">{title}</h4>
  </div>
);

// --- Modern Arrow Style (Rewritten to use markerEnd and dynamic positioning) ---
const ModernCircularArrow = ({ fromId, toId, color = "rgba(100, 116, 139, 0.3)", reverse = false, isVertical = false, startOffset = { x: 0, y: 0 }, endOffset = { x: 0, y: 0 }, curvature = 0.5 }) => {
  const [path, setPath] = useState('');
  const [arrowHead, setArrowHead] = useState('');

  useEffect(() => {
    const calculateArrow = () => {
      const fromElement = document.getElementById(fromId);
      const toElement = document.getElementById(toId);
      const svgElement = document.querySelector('.solution-svg-container'); // Find the main SVG container

      if (!fromElement || !toElement || !svgElement) {
        setPath(''); // Clear path if elements not found
        setArrowHead('');
        return;
      }

      const svgRect = svgElement.getBoundingClientRect();
      const fromRect = fromElement.getBoundingClientRect();
      const toRect = toElement.getBoundingClientRect();

      let startX, startY, endX, endY;

      // Determine start and end points based on reverse flag and offsets
      if (reverse) {
        startX = toRect.left - svgRect.left + (toRect.width / 2) + startOffset.x;
        startY = toRect.top - svgRect.top + (toRect.height / 2) + startOffset.y;
        endX = fromRect.right - svgRect.left + endOffset.x;
        endY = fromRect.top - svgRect.top + (fromRect.height / 2) + endOffset.y;
      } else {
        startX = fromRect.right - svgRect.left + startOffset.x;
        startY = fromRect.top - svgRect.top + (fromRect.height / 2) + startOffset.y;
        endX = toRect.left - svgRect.left + endOffset.x;
        endY = toRect.top - svgRect.top + (toRect.height / 2) + endOffset.y;
      }

      const dx = endX - startX;
      const dy = endY - startY;

      // Control points for a cubic Bezier curve
      // If curvature is 0, control points align with start/end to form a straight line
      const controlX1 = startX + dx * curvature;
      const controlY1 = startY + dy * curvature; // Adjusted to follow slope for straight line
      const controlX2 = endX - dx * curvature;
      const controlY2 = endY - dy * curvature; // Adjusted to follow slope for straight line

      setPath(`M ${startX},${startY} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`);

      // Calculate arrowhead points
      // We calculate the angle of the last segment of the Bezier curve
      // For a cubic Bezier B(t) = (1-t)^3 P0 + 3(1-t)^2 t P1 + 3(1-t)t^2 P2 + t^3 P3
      // The derivative B'(t) gives the tangent vector. For t=1 (at P3/end point):
      // B'(1) = 3(P3 - P2)
      // So the tangent direction at the end point is from P2 to P3 (from controlX2, controlY2 to endX, endY)
      const angle = Math.atan2(endY - controlY2, endX - controlX2);
      const arrowLength = 8; // Length of the arrowhead wings
      const arrowAngle = Math.PI / 6; // Angle of the wings relative to the main line

      const headX1 = endX - arrowLength * Math.cos(angle - arrowAngle);
      const headY1 = endY - arrowLength * Math.sin(angle - arrowAngle);
      const headX2 = endX - arrowLength * Math.cos(angle + arrowAngle);
      const headY2 = endY - arrowLength * Math.sin(angle + arrowAngle);

      setArrowHead(`M ${headX1},${headY1} L ${endX},${endY} L ${headX2},${headY2}`);
    };

    // Use a short delay to allow DOM to render and get accurate positions
    const timer = setTimeout(calculateArrow, 100);
    // Add event listeners for dynamic updates (resize, scroll)
    window.addEventListener('resize', calculateArrow);
    window.addEventListener('scroll', calculateArrow);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateArrow);
      window.removeEventListener('scroll', calculateArrow);
    };
  }, [fromId, toId, reverse, startOffset, endOffset, curvature]); // Re-run if these props change

  return (
    <path
      d={`${path} ${arrowHead}`}
      stroke={color}
      strokeWidth="2"
      fill="none"
      // Removed markerEnd here as arrowhead is drawn directly as part of the path
    />
  );
};


// --- Data Definitions ---
const actorsData = [
  {
    id: 'ai-agent',
    icon: Bot,
    title: 'AI Agent',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    count: '12 Active', // Still in data, but not rendered
    actions: [
      'Elevate its own privileges',
      'Delete production databases',
      'Execute system commands'
    ]
  },
  {
    id: 'human-user',
    icon: UserIcon,
    title: 'Human User',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    count: '847 Users', // Still in data, but not rendered
    actions: [
      'Disable security monitoring',
      'Export sensitive customer data',
      'Terminate critical services'
    ]
  },
  {
    id: 'service-account',
    icon: Settings2,
    title: 'Service Account',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    count: '64 Accounts', // Still in data, but not rendered
    actions: [
      'Encrypt production volumes',
      'Delete backup repositories',
      'Modify firewall rules'
    ]
  }
];

const targetSystemsData = [
  { id: 'target-cloud', icon: Cloud, title: 'Cloud Platforms (AWS, Azure, GCP)', color: 'text-sky-500', bgColor: 'bg-sky-50/80' },
  { id: 'target-saas', icon: Globe, title: 'SaaS Applications (Salesforce, O365)', color: 'text-lime-500', bgColor: 'bg-lime-50/80' },
  { id: 'target-onprem', icon: Server, title: 'On-Premise Systems (Databases)', color: 'text-amber-500', bgColor: 'bg-amber-50/80' },
  { id: 'target-custom', icon: Code2, title: 'Custom Applications & APIs', color: 'text-violet-500', bgColor: 'bg-violet-50/80' },
  { id: 'target-ai', icon: BrainCircuit, title: 'AI Workloads & Models', color: 'text-pink-500', bgColor: 'bg-pink-50/80' },
];

// This is the NEW governanceActions data from the outline, intended for the core process pills
const coreProcessActions = [
  {
    icon: Filter,
    text: 'Contextualize Action',
    subtitle: 'Enriches every action with identity, asset, environment, and behavioral context to assess real risk',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    isActive: true,
    isUpperFlow: true
  },
  {
    icon: BarChart3,
    text: 'Assess Risk Score',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    isActive: true,
    isUpperFlow: true
  }
];

// This is the ORIGINAL governanceActions data, now renamed to be used for the workflow activation pills
const workflowActivationActions = [
  { id: 'mpa', label: 'Multi Party Approval', icon: MpaUsersIcon, color: 'text-green-600', bgColor: 'bg-green-100' },
  { id: 'mfa', label: 'MFA', icon: Lock, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { id: 'notify', label: 'Notify', icon: Bell, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  { id: 'block', 'label': 'Block', icon: XCircle, color: 'text-red-600', bgColor: 'bg-red-100' }
];


// --- Main Solution Component ---
export default function Solution() {
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setSvgDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    updateDimensions(); // Initial call
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">

      {/* Styled Page Title */}
      <PageTitle
        title="The Jade Solution"
        tagline="Identifies high-risk actions in real time and applies the right response."
      />

      <div ref={containerRef} className="relative w-full max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div
          className="grid items-start gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12"
          style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.8fr) minmax(0, 1fr)' }}
        >

          {/* Actors Column */}
          <div className="flex flex-col items-center">
            <PremiumSectionHeader text="ACTORS PERFORMING ACTIONS" icon={UserIcon} iconColor="text-blue-500" />
            <PremiumContentBox id="actors-box" className="space-y-2"> {/* Removed flex-1 */}
              {actorsData.map(actor => <PremiumActorItem key={actor.id} {...actor} />)}
            </PremiumContentBox>
          </div>

          {/* Jade Platform Column - Corrected Header Text */}
          <div className="flex flex-col items-center">
            <PremiumSectionHeader
              text="JADE PLATFORM"
              icon={Shield}
              iconColor="text-emerald-500"
              isCentral={true}
              className="whitespace-nowrap"
            />
            <PremiumContentBox id="jade-platform-box">
              <PremiumJadePlatformHubInternal workflowActivationActions={workflowActivationActions} />
            </PremiumContentBox>
          </div>

          {/* Target Systems Column - Updated title */}
          <div className="flex flex-col items-center">
            <PremiumSectionHeader text="WHERE THE ACTION LANDS" icon={MonitorPlay} iconColor="text-purple-500" />
            <PremiumContentBox id="target-systems-box" className="space-y-2"> {/* Changed space-y-2.5 to space-y-2 */}
              {targetSystemsData.map(target => <PremiumTargetItem key={target.id} {...target} />)}
            </PremiumContentBox>
          </div>
        </div>

        {/* SVG for Arrows - ensure it covers the grid area */}
        <svg width={svgDimensions.width} height={svgDimensions.height} className="absolute top-0 left-0 pointer-events-none z-0 solution-svg-container">
          <defs>
            {/* The marker below is not strictly needed anymore because arrows are drawn within the path data.
                Keeping it in defs as it was in the original code, but it's not referenced by ModernCircularArrow. */}
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="rgba(100, 116, 139, 0.6)" />
            </marker>
          </defs>
          {/* Straightened Arrows */}
          <ModernCircularArrow fromId="actors-box" toId="jade-platform-box" color="rgba(16, 185, 129, 0.5)" startOffset={{ x: 5, y: 0 }} endOffset={{ x: -5, y: 0 }} curvature={0} />
          <ModernCircularArrow fromId="jade-platform-box" toId="target-systems-box" color="rgba(16, 185, 129, 0.5)" startOffset={{ x: 5, y: 0 }} endOffset={{ x: -5, y: 0 }} curvature={0} />
        </svg>
      </div>
    </div>
  );
}
