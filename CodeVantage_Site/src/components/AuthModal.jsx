import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  X, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Lock, 
  Mail, 
  User, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

const AuthModal = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalTab,
    authModalInitialRole,
    login,
    signup,
    loginAsDemoStudent,
    loginAsDemoClient
  } = useAuth();

  const [selectedRole, setSelectedRole] = useState(authModalInitialRole || 'nano');
  const [mode, setMode] = useState(authModalTab || 'login'); // 'login' | 'register'
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [stream, setStream] = useState('AI & Machine Learning');

  useEffect(() => {
    if (authModalInitialRole) setSelectedRole(authModalInitialRole);
    if (authModalTab) setMode(authModalTab);
  }, [authModalInitialRole, authModalTab, isAuthModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      login(email, password, selectedRole);
    } else {
      signup({
        name,
        email,
        password,
        role: selectedRole,
        company,
        stream
      });
    }
  };

  return (
    <AnimatePresence>
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAuthModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl bg-gray-900/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
            style={{
              boxShadow: selectedRole === 'nano' 
                ? '0 0 50px -10px rgba(168, 85, 247, 0.25)' 
                : '0 0 50px -10px rgba(59, 130, 246, 0.25)'
            }}
          >
            {/* Header Gradient Accent */}
            <div 
              className={`h-1.5 w-full bg-gradient-to-r ${
                selectedRole === 'nano' 
                  ? 'from-purple-500 via-pink-500 to-cyan-400' 
                  : 'from-blue-600 via-cyan-500 to-emerald-400'
              }`} 
            />

            {/* Close Button */}
            <button
              onClick={closeAuthModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

          <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
            {/* Top Branding & Mode */}
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                codeWINtage Unified Gateway
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Select your track to access tailored tools and portals
              </p>
            </div>

            {/* Role Switcher Cards: Nano (Student) vs Pro (Client) */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setSelectedRole('nano')}
                className={`relative p-4 rounded-xl text-left border transition-all ${
                  selectedRole === 'nano'
                    ? 'bg-purple-950/40 border-purple-500/80 shadow-lg shadow-purple-950/50'
                    : 'bg-gray-800/40 border-gray-700/60 hover:border-gray-600 text-gray-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${selectedRole === 'nano' ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-800 text-gray-400'}`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  {selectedRole === 'nano' && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      ACTIVE
                    </span>
                  )}
                </div>
                <div className="font-bold text-white text-sm">🎓 Nano Tier</div>
                <div className="text-xs text-gray-400 mt-0.5 leading-snug">
                  Students & Learners
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('pro')}
                className={`relative p-4 rounded-xl text-left border transition-all ${
                  selectedRole === 'pro'
                    ? 'bg-blue-950/40 border-blue-500/80 shadow-lg shadow-blue-950/50'
                    : 'bg-gray-800/40 border-gray-700/60 hover:border-gray-600 text-gray-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${selectedRole === 'pro' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-800 text-gray-400'}`}>
                    <Briefcase className="w-5 h-5" />
                  </div>
                  {selectedRole === 'pro' && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      ACTIVE
                    </span>
                  )}
                </div>
                <div className="font-bold text-white text-sm">💼 Pro Tier</div>
                <div className="text-xs text-gray-400 mt-0.5 leading-snug">
                  Clients & Businesses
                </div>
              </button>
            </div>

            {/* Quick Demo Login Pill for instantaneous testing */}
            <div className="mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Instant reviewer test account:</span>
              </div>
              {selectedRole === 'nano' ? (
                <button
                  type="button"
                  onClick={loginAsDemoStudent}
                  className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  ⚡ Demo Student Login
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={loginAsDemoClient}
                  className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  🏢 Demo Client Login
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={selectedRole === 'nano' ? 'e.g. Alex Rivera' : 'e.g. Sarah Jenkins'}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>
              )}

              {mode === 'register' && selectedRole === 'pro' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. NexusTech Ventures"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>
              )}

              {mode === 'register' && selectedRole === 'nano' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Preferred IT Learning Stream
                  </label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Cybersecurity & Ethical Hacking">Cybersecurity & Ethical Hacking</option>
                    <option value="Data Science & Analytics">Data Science & Analytics</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="IoT & Embedded Systems">IoT & Embedded Systems</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={selectedRole === 'nano' ? 'student@university.edu' : 'client@company.com'}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-xl font-bold text-sm text-white transition-all shadow-lg flex items-center justify-center gap-2 mt-2 ${
                  selectedRole === 'nano'
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-900/30'
                    : 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 shadow-blue-900/30'
                }`}
              >
                {mode === 'login' ? (
                  <>
                    Sign In to {selectedRole === 'nano' ? 'Nano Academy' : 'Pro Client Portal'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Join {selectedRole === 'nano' ? 'Nano Student Tier' : 'Pro Client Tier'}
                    <CheckCircle2 className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Toggle Mode */}
            <div className="text-center mt-5 text-xs text-gray-400">
              {mode === 'login' ? (
                <>
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('register')}
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    Create Account
                  </button>
                </>
              ) : (
                <>
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 mt-6 pt-4 border-t border-white/5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Protected by 256-bit SSL encryption & Role-Based Access Control</span>
            </div>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
