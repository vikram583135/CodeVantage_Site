import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  GraduationCap, 
  Flame, 
  Zap, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  ArrowUpRight, 
  BookOpen, 
  ShieldCheck, 
  Code2,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentHub = () => {
  const { user, switchRole, addXP } = useAuth();

  if (!user || user.role !== 'nano') {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Student Hub (Nano Tier)</h2>
        <p className="text-gray-400 mb-6">
          You are currently viewing as a guest or client. Switch to a Nano Student account to access your gamified learning dashboard.
        </p>
        <button
          onClick={() => switchRole('nano')}
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all inline-flex items-center gap-2"
        >
          <GraduationCap className="w-5 h-5" />
          Switch to Demo Student Account
        </button>
      </div>
    );
  }

  const xpForNextLevel = 1000;
  const currentXPInLevel = user.xp % 200;
  const xpProgress = Math.min(100, Math.round((currentXPInLevel / 200) * 100));

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Profile Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-3xl p-8 bg-gradient-to-r from-purple-900/40 via-indigo-950/40 to-gray-900/60 border border-purple-500/20 backdrop-blur-xl mb-10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-purple-400/40 shadow-xl"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Nano Student
                </span>
                <span className="text-xs text-gray-400">ID: {user.id}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">{user.name}</h1>
              <p className="text-sm text-purple-300">{user.stream} • {user.college}</p>
            </div>
          </div>

          {/* Gamified Stat Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-gray-900/70 border border-purple-500/30 flex items-center gap-3 shadow-lg">
              <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Streak</div>
                <div className="text-lg font-black text-white">{user.streak} Days 🔥</div>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-gray-900/70 border border-purple-500/30 flex items-center gap-3 shadow-lg">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Total XP</div>
                <div className="text-lg font-black text-white">{user.xp} XP</div>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-gray-900/70 border border-purple-500/30 flex items-center gap-3 shadow-lg">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Rank</div>
                <div className="text-lg font-black text-white">Level {user.level}</div>
              </div>
            </div>

            <button
              onClick={() => addXP(50)}
              className="px-4 py-2.5 rounded-2xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 text-xs font-bold transition-all flex items-center gap-1.5"
              title="Simulate completing a quiz or daily task"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-300" />
              +50 XP Demo
            </button>
          </div>
        </div>

        {/* Level Progression Bar */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex justify-between items-center text-xs text-gray-300 mb-2 font-medium">
            <span>Level {user.level} Progress</span>
            <span>Level {user.level + 1} (Next milestone: {xpForNextLevel} XP)</span>
          </div>
          <div className="w-full h-3 bg-gray-800/80 rounded-full overflow-hidden p-0.5 border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${xpProgress}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full shadow-lg shadow-purple-500/50"
            />
          </div>
        </div>
      </motion.div>

      {/* Main Grid: Enrolled Learning & Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Learning Streams & Quizzes */}
        <div className="lg:col-span-2 space-y-8">
          {/* Active IT Learning Tracks */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">My Active IT Tracks</h2>
                  <p className="text-xs text-gray-400">Interactive modules, assessments, and certifications</p>
                </div>
              </div>
              <Link
                to="/academy"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
              >
                Browse All Streams <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-gray-800/50 border border-gray-700/60 hover:border-purple-500/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                      FULL-STACK STREAM
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">Full-Stack React & Node.js Architecture</h3>
                  </div>
                  <span className="text-xs font-semibold text-purple-300">Module 4 of 6 (72% complete)</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '72%' }} />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Next: Microservices with Docker & JWT</span>
                  <Link
                    to="/academy"
                    className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all"
                  >
                    Resume Module
                  </Link>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-800/50 border border-gray-700/60 hover:border-purple-500/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                      AI & DATA STREAM
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">Applied Machine Learning & Prompt Pipelines</h3>
                  </div>
                  <span className="text-xs font-semibold text-emerald-300">Module 2 of 5 (40% complete)</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '40%' }} />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Next: Fine-Tuning Embeddings & RAG Vector Search</span>
                  <Link
                    to="/academy"
                    className="px-3.5 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-all"
                  >
                    Resume Module
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Earned Certifications */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Verified Certifications</h2>
                <p className="text-xs text-gray-400">Publicly verifiable digital credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              {user.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-800/30 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                      VERIFIED CREDENTIAL
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">{cert.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Credential ID: <span className="text-cyan-400 font-mono">{cert.id}</span> • Issued: {cert.issueDate} • Score: {cert.score}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Public verification link: https://codewintage.com/verify/${cert.id}`)}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-all flex items-center gap-1"
                    >
                      Verify Link
                    </button>
                    <button
                      onClick={() => alert('Certificate downloaded as PDF!')}
                      className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-all"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Badges & Internship Applications */}
        <div className="space-y-8">
          {/* Unlocked Badges */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Unlocked Badges</h2>
                <p className="text-xs text-gray-400">Milestone achievements</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {user.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="p-3 rounded-2xl bg-gray-800/40 border border-gray-700/60 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-xs font-bold text-white line-clamp-1">{badge.name}</div>
                  <div className="text-[10px] text-gray-400">{badge.date}</div>
                </div>
              ))}
              <div className="p-3 rounded-2xl bg-gray-800/20 border border-dashed border-gray-700 text-center opacity-60">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-xs font-bold text-gray-400">Cloud Guru</div>
                <div className="text-[10px] text-gray-500">Locked</div>
              </div>
            </div>
          </div>

          {/* Internship Application Tracker */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Internship Tracker</h2>
                  <p className="text-xs text-gray-400">Applied opportunities</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                {user.internshipApplications.length} Active
              </span>
            </div>

            <div className="space-y-3">
              {user.internshipApplications.map((app) => (
                <div
                  key={app.id}
                  className="p-4 rounded-2xl bg-gray-800/40 border border-gray-700/60"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{app.role}</h4>
                      <div className="text-xs text-gray-400">{app.company}</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-800 text-center">
              <Link
                to="/academy"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center justify-center gap-1"
              >
                Find More Internships <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHub;
