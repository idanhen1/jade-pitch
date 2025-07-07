
import React from 'react';
import {
  Chrome,
  User,
  Cloud,
  Globe,
  Terminal,
  Shield,
  Database,
  ShieldAlert,
  MessageSquare,
  Zap,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const UserIcon = ({ delay, active = false }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, type: 'spring', stiffness: 200, damping: 12 }}
        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${active ? 'bg-emerald-500' : 'bg-slate-300'}`}
    >
        <User className="w-4 h-4 text-white" />
    </motion.div>
);

const SmallAppCard = ({ icon: Icon, title, delay, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="bg-white border border-slate-100 p-2 rounded-md shadow-sm hover:shadow-md transition-all duration-200 flex-1"
    >
        <div className="flex flex-col items-center text-center">
            <div className={`w-6 h-6 rounded flex items-center justify-center mb-1 ${color}`}>
                <Icon className="w-3 h-3 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 text-[9px]">{title}</h3>
        </div>
    </motion.div>
);

const ConnectorCard = ({ icon: Icon, title, subtitle, delay, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="bg-white border border-slate-100 p-2 rounded-md shadow-sm"
    >
        <div className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${color}`}>
                <Icon className="w-3 h-3 text-white" />
            </div>
            <div>
                <h4 className="font-medium text-slate-800 text-xs">{title}</h4>
                <p className="text-[10px] text-slate-500">{subtitle}</p>
            </div>
        </div>
    </motion.div>
);

const SectionTitle = ({ title, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="text-center mb-4 h-8"
    >
        <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wider">{title}</h2>
    </motion.div>
);

export default function JadePlatform() {
    return (
        <div className="w-full h-full bg-white flex flex-col p-8 font-sans">
            
            {/* Header */}
            <div className="w-full mb-12 flex-shrink-0">
                <h1 className="text-4xl font-bold text-slate-900">
                    The Jade Platform
                </h1>
            </div>
            
            {/* Main Horizontal Diagram */}
            <div className="w-full max-w-7xl flex items-start justify-center gap-8 mb-8">

                {/* Users (Left) */}
                <div className="flex items-center gap-4 pt-12">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-2 mb-4">
                            <UserIcon delay={0.1} active />
                            <UserIcon delay={0.2} />
                            <UserIcon delay={0.3} />
                        </div>
                        <h3 className="font-semibold text-slate-700 text-center text-xs">Users</h3>
                    </div>
                    
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-8 h-0.5 bg-slate-300 origin-left"
                    />
                </div>

                {/* Discover Section */}
                <div className="flex flex-col items-center">
                    <SectionTitle title="Discover" delay={0.6} />
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-white/50"
                    >
                        {/* Small Apps Row */}
                        <div className="flex gap-2 mb-3" style={{width: "316px"}}>
                            <SmallAppCard
                                icon={Cloud}
                                title="SaaS Apps"
                                delay={0.8}
                                color="bg-purple-500"
                            />
                            <SmallAppCard
                                icon={Globe}
                                title="Custom Apps"
                                delay={0.9}
                                color="bg-emerald-500"
                            />
                            <SmallAppCard
                                icon={Terminal}
                                title="Cloud Consoles"
                                delay={1.0}
                                color="bg-orange-500"
                            />
                        </div>

                        {/* Core Components Row */}
                        <div className="flex gap-3">
                            {/* Interaction Layer */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg shadow-lg"
                                style={{width: "200px"}}
                            >
                                <div className="flex flex-col items-center text-center text-white">
                                    <Chrome className="w-8 h-8 mb-2" />
                                    <h2 className="text-sm font-bold mb-1">Interaction Layer</h2>
                                    <p className="text-blue-100 text-[10px]">Browser extension observes all user actions</p>
                                </div>
                            </motion.div>

                            {/* Learning Engine */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-lg shadow-lg"
                                style={{width: "104px"}}
                            >
                                <div className="flex flex-col items-center text-center text-white">
                                    <h3 className="text-xs font-bold leading-tight mb-1">Rapid Learning Engine</h3>
                                    <p className="text-teal-100 text-[10px]">learns all actions in seconds</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Assess Section */}
                <div className="flex flex-col items-center">
                    <SectionTitle title="Assess" delay={1.1} />
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="bg-gradient-to-br from-slate-600 to-slate-700 p-4 rounded-lg shadow-lg mb-3 w-40"
                        >
                            <div className="flex flex-col items-center text-center text-white">
                                <Shield className="w-6 h-6 mb-1" />
                                <h3 className="text-xs font-bold">Contextual Risk Engine</h3>
                            </div>
                        </motion.div>

                        <div className="space-y-2">
                            <ConnectorCard 
                                icon={Database}
                                title="Active Directory" 
                                subtitle="Microsoft AD"
                                delay={1.3}
                                color="bg-blue-500"
                            />
                            <ConnectorCard 
                                icon={Database}
                                title="Okta" 
                                subtitle="Identity Platform"
                                delay={1.4}
                                color="bg-slate-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Control Section */}
                <div className="flex flex-col items-center">
                    <SectionTitle title="Control" delay={1.5} />
                    <div className="flex flex-col items-center">
                        <div className="space-y-2 mb-3">
                            <ConnectorCard 
                                icon={ShieldAlert}
                                title="SIEM" 
                                subtitle="Splunk, Datadog"
                                delay={1.6}
                                color="bg-yellow-500"
                            />
                            <ConnectorCard 
                                icon={MessageSquare}
                                title="Slack" 
                                subtitle="Real-time alerts"
                                delay={1.7}
                                color="bg-pink-500"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                            className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-4 rounded-lg shadow-lg w-40"
                        >
                            <div className="flex flex-col items-center text-center text-white">
                                <Zap className="w-6 h-6 mb-1" />
                                <h3 className="text-xs font-bold">Real-Time Control Plane</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Admin Portal Section */}
            <div className="flex justify-center mt-8">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                        className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <User className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 2.1 }}
                        className="w-8 h-0.5 bg-emerald-300 origin-left"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                        className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-4 rounded-lg shadow-lg"
                        style={{width: "200px"}}
                    >
                        <div className="flex flex-col items-center text-center text-white">
                            <Shield className="w-8 h-8 mb-2" />
                            <h2 className="text-sm font-bold mb-1">Jade Admin Portal</h2>
                            <p className="text-emerald-100 text-[10px]">Configure policies and view insights</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
