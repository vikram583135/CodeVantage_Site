import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  Briefcase, 
  Building2, 
  ExternalLink, 
  FileText, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  PlusCircle, 
  ShieldCheck, 
  ChevronRight,
  Code2,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientPortal = () => {
  const { user, switchRole } = useAuth();
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'invoices' | 'contracts'

  if (!user || user.role !== 'pro') {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Client Portal (Pro Tier)</h2>
        <p className="text-gray-400 mb-6">
          You are currently viewing as a guest or student. Switch to a Pro Client account to access enterprise project tracking, milestones, and deliverables.
        </p>
        <button
          onClick={() => switchRole('pro')}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all inline-flex items-center gap-2"
        >
          <Briefcase className="w-5 h-5" />
          Switch to Demo Client Account
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Client Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-3xl p-8 bg-gradient-to-r from-blue-950/50 via-slate-900/60 to-gray-900/70 border border-blue-500/20 backdrop-blur-xl mb-10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-400/40 shadow-xl"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5" />
                  Pro Tier Client
                </span>
                <span className="text-xs text-gray-400">Client ID: {user.id}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">{user.company}</h1>
              <p className="text-sm text-blue-300">{user.name} • {user.industry}</p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-gray-900/70 border border-blue-500/30 flex items-center gap-3 shadow-lg">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Engagements</div>
                <div className="text-lg font-black text-white">{user.activeProjects.length} Active</div>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-gray-900/70 border border-blue-500/30 flex items-center gap-3 shadow-lg">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Lead Architect</div>
                <div className="text-lg font-black text-white">Assigned & Active</div>
              </div>
            </div>

            <button
              onClick={() => alert('Opening Project Consultation & Scoping Form...')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-900/40 transition-all flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Commission New Product
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-800/60 text-gray-400 hover:text-white'
            }`}
          >
            Active Deliverables & Milestones
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'invoices'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-800/60 text-gray-400 hover:text-white'
            }`}
          >
            Billing & Invoices ({user.invoicesPending} Pending)
          </button>
          <button
            onClick={() => setActiveTab('contracts')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'contracts'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-800/60 text-gray-400 hover:text-white'
            }`}
          >
            Contracts & NDAs
          </button>
        </div>
      </motion.div>

      {/* Main Content Areas */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          {user.activeProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-blue-500/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      PROJECT ID: {project.id}
                    </span>
                    <span className="text-xs text-gray-400">Target Launch: {project.targetDate}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Current Phase: <span className="text-cyan-400 font-semibold">{project.stage}</span>
                  </p>
                </div>

                {project.stagingUrl && (
                  <a
                    href={project.stagingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all flex items-center gap-2 self-start md:self-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Launch Live Staging Preview
                  </a>
                )}
              </div>

              {/* Milestone Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                  <span className="font-semibold">Sprint Delivery Progress</span>
                  <span className="font-bold text-cyan-400">{project.progress}% Complete</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  />
                </div>
              </div>

              {/* Milestones Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-800">
                <div className="p-3.5 rounded-xl bg-gray-800/40 border border-gray-700/60 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">SRS & System Architecture</div>
                    <div className="text-[10px] text-emerald-400">Signed Off & Approved</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-800/40 border border-blue-500/40 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <div className="text-xs font-bold text-white">{project.nextMilestone}</div>
                    <div className="text-[10px] text-blue-400">In Active Development</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-800/20 border border-gray-800 flex items-center gap-3 opacity-60">
                  <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-gray-300">Final Security Audit & Handover</div>
                    <div className="text-[10px] text-gray-500">Upcoming</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-800">
                <div className="text-xs text-gray-400 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  Dedicated Lead Architect: <span className="text-white font-semibold">Dev Lead (codeWINtage)</span>
                </div>
                <button
                  onClick={() => alert('Starting direct messaging session with your dedicated Project Architect...')}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  Message Engineering Team <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'invoices' && (
        <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-xl font-bold text-white mb-4">Milestone Invoicing & Billing</h3>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-gray-800/40 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                  PAYMENT DUE
                </span>
                <h4 className="text-base font-bold text-white mt-1">Invoice #CWT-INV-2025-104 (Milestone 2 Delivery)</h4>
                <p className="text-xs text-gray-400 mt-0.5">Automated Micro-Lending Portal • Due: Nov 15, 2025</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-white">$2,450.00</span>
                <button
                  onClick={() => alert('Redirecting to secure payment checkout...')}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md"
                >
                  Pay Milestone
                </button>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-gray-800/20 border border-gray-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                  PAID & CLEARED
                </span>
                <h4 className="text-base font-bold text-white mt-1">Invoice #CWT-INV-2025-089 (Initiation & Architecture)</h4>
                <p className="text-xs text-gray-400 mt-0.5">Automated Micro-Lending Portal • Paid on Oct 10, 2025</p>
              </div>
              <span className="text-sm font-semibold text-gray-400">$1,800.00 (Tax Invoice Available)</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contracts' && (
        <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-xl font-bold text-white mb-4">Signed Agreements & Legal Vault</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-gray-800/40 border border-gray-700/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-sm font-bold text-white">Mutual Non-Disclosure Agreement (NDA)</div>
                  <div className="text-xs text-gray-400">Signed on Oct 02, 2025 • Fully Executed</div>
                </div>
              </div>
              <button
                onClick={() => alert('Downloading executed NDA PDF...')}
                className="text-xs font-bold text-blue-400 hover:underline"
              >
                Download PDF
              </button>
            </div>
            <div className="p-4 rounded-2xl bg-gray-800/40 border border-gray-700/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-sm font-bold text-white">Statement of Work (SOW - Phase 1)</div>
                  <div className="text-xs text-gray-400">Signed on Oct 08, 2025 • Scope Locked</div>
                </div>
              </div>
              <button
                onClick={() => alert('Downloading signed SOW PDF...')}
                className="text-xs font-bold text-blue-400 hover:underline"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientPortal;
