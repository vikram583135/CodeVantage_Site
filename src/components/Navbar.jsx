import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WLogo from './WLogo';
import { useAuth } from '../context/AuthContext';
import { 
  GraduationCap, 
  Briefcase, 
  Flame, 
  Zap, 
  LogOut, 
  User, 
  ChevronDown, 
  Sparkles,
  Star,
  RefreshCw
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const profileDropdownRef = useRef(null);

  const {
    user,
    isAuthenticated,
    isNano,
    isPro,
    openAuthModal,
    logout,
    switchRole
  } = useAuth();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Academy', path: '/academy', badge: 'Nano', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
    { name: 'Reviews', path: '/reviews', badge: '4.9★', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
    ...(isNano ? [{ name: 'Student Hub', path: '/student-hub', highlight: true }] : []),
    ...(isPro ? [{ name: 'Client Portal', path: '/client-portal', highlight: true }] : [])
  ];

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        fontFamily: 'Outfit, sans-serif',
        background: 'linear-gradient(to bottom, rgba(10, 10, 15, 0.85), rgba(5, 5, 10, 0.7))',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.45)'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 mr-4 lg:mr-8 hover:scale-105 transition-transform duration-300 flex-shrink-0"
        >
          <WLogo size={46} className="drop-shadow-lg" />
          <div className="flex flex-col">
            <span
              className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 25px rgba(0, 212, 255, 0.35)',
                letterSpacing: '-0.5px'
              }}
            >
              codeWINtage
            </span>
            <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold -mt-1 hidden sm:block">
              Tech Agency & Academy
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-200 relative group flex items-center gap-1.5 py-1 ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  } ${link.highlight ? 'text-cyan-300 font-bold' : ''}`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${link.badgeColor}`}>
                      {link.badge}
                    </span>
                  )}
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Action / Auth Controls */}
        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated ? (
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => openAuthModal('login', 'nano')}
                className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors rounded-xl hover:bg-white/5"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => openAuthModal('register', 'nano')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-900/30 transition-all hover:scale-105 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                Get Started
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* Nano Tier Stats Tag */}
              {isNano && (
                <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs">
                  <span className="flex items-center gap-1 text-orange-400 font-bold">
                    <Flame className="w-3.5 h-3.5" /> {user.streak}d
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="flex items-center gap-1 text-purple-300 font-semibold">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" /> {user.xp} XP
                  </span>
                </div>
              )}

              {/* Pro Tier Client Badge */}
              {isPro && (
                <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-xs text-blue-300 font-semibold">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{user.activeProjects.length} Active Deliverables</span>
                </div>
              )}

              {/* Profile Avatar & Dropdown Trigger */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`flex items-center gap-2.5 p-1.5 pr-3 rounded-full border transition-all ${
                    isNano
                      ? 'border-purple-500/40 hover:border-purple-400 bg-purple-950/20'
                      : 'border-blue-500/40 hover:border-blue-400 bg-blue-950/20'
                  }`}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-white/20"
                  />
                  <div className="text-left hidden lg:block">
                    <div className="text-xs font-bold text-white line-clamp-1">{user.name}</div>
                    <div className="text-[10px] text-gray-400 -mt-0.5">
                      {isNano ? '🎓 Nano Student' : '💼 Pro Client'}
                    </div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-64 rounded-2xl bg-gray-900 border border-white/10 shadow-2xl p-2 z-50 overflow-hidden"
                    >
                      {/* User Info Header */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-2">
                        <div className="font-bold text-white text-sm">{user.name}</div>
                        <div className="text-xs text-gray-400 truncate">{user.email}</div>
                        <div className="mt-2 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {isNano ? `🎓 Nano: ${user.stream}` : `💼 Pro: ${user.company}`}
                        </div>
                      </div>

                      {/* Role Specific Actions */}
                      <div className="space-y-1 text-xs">
                        {isNano ? (
                          <>
                            <Link
                              to="/student-hub"
                              onClick={() => setIsProfileOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-950/40 transition-colors"
                            >
                              <GraduationCap className="w-4 h-4 text-purple-400" />
                              My Student Hub & Certs
                            </Link>
                            <Link
                              to="/academy"
                              onClick={() => setIsProfileOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-950/40 transition-colors"
                            >
                              <Zap className="w-4 h-4 text-amber-400" />
                              Continue Learning Tracks
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              to="/client-portal"
                              onClick={() => setIsProfileOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-950/40 transition-colors"
                            >
                              <Briefcase className="w-4 h-4 text-blue-400" />
                              Client Command Center
                            </Link>
                            <Link
                              to="/services"
                              onClick={() => setIsProfileOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-950/40 transition-colors"
                            >
                              <Sparkles className="w-4 h-4 text-cyan-400" />
                              Explore Our Services
                            </Link>
                          </>
                        )}

                        {/* Quick Role Switcher for previewing both Nano and Pro */}
                        <div className="pt-2 border-t border-white/5 my-1">
                          <button
                            type="button"
                            onClick={() => {
                              switchRole(isNano ? 'pro' : 'nano');
                              setIsProfileOpen(false);
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <span className="flex items-center gap-1.5">
                              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                              Switch to {isNano ? 'Pro Client View' : 'Nano Student View'}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Preview</span>
                          </button>
                        </div>

                        {/* Logout */}
                        <button
                          type="button"
                          onClick={() => {
                            logout();
                            setIsProfileOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
            style={{
              background: 'linear-gradient(to bottom, rgba(12, 12, 18, 0.98), rgba(6, 6, 12, 0.95))',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="p-6 space-y-4">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between text-base font-medium px-4 py-3 rounded-xl transition-all ${
                        location.pathname === link.path
                          ? 'text-white bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-l-2 border-cyan-400'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${link.badgeColor}`}>
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Auth Area */}
              <div className="pt-4 border-t border-white/10">
                {!isAuthenticated ? (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        openAuthModal('login', 'nano');
                      }}
                      className="py-2.5 rounded-xl text-xs font-semibold bg-gray-800 text-white hover:bg-gray-700"
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        openAuthModal('register', 'nano');
                      }}
                      className="py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    >
                      Get Started
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-white">{user.name}</div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                        {isNano ? 'Nano Student' : 'Pro Client'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        switchRole(isNano ? 'pro' : 'nano');
                        setIsOpen(false);
                      }}
                      className="w-full py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-xs font-semibold text-gray-200 flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                      Switch to {isNano ? 'Pro Client Mode' : 'Nano Student Mode'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="w-full py-2 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <LogOut className="w-3.5 h-3.5" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
