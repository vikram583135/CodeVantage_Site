import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  GraduationCap, 
  Sparkles, 
  Code2, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Database, 
  Smartphone, 
  Radio, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Zap,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TRACKS = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    category: 'AI',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-600',
    borderColor: 'border-purple-500/30',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    modulesCount: 6,
    xpReward: 600,
    level: 'Beginner to Advanced',
    topics: ['Python & PyTorch', 'Transformers & LLMs', 'RAG & Vector Databases', 'Computer Vision'],
    capstone: 'Autonomous Disease Detection via Medical Imaging'
  },
  {
    id: 'web-fullstack',
    title: 'Full-Stack Web Engineering',
    category: 'Web',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    modulesCount: 8,
    xpReward: 800,
    level: 'All Levels',
    topics: ['React 19 & Next.js', 'Node.js & Express', 'PostgreSQL & Prisma', 'Microservices & Redis'],
    capstone: 'Scalable Multi-Tenant SaaS Workspace'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Engineering & DevOps',
    category: 'Cloud',
    icon: Cloud,
    color: 'from-sky-500 to-blue-600',
    borderColor: 'border-sky-500/30',
    badgeColor: 'bg-sky-500/20 text-sky-300',
    modulesCount: 5,
    xpReward: 550,
    level: 'Intermediate',
    topics: ['Docker & Containerization', 'Kubernetes Orchestration', 'GitHub Actions CI/CD', 'AWS / GCP Cloud Infra'],
    capstone: 'Zero-Downtime Auto-Scaling GitOps Pipeline'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    category: 'Security',
    icon: ShieldCheck,
    color: 'from-rose-500 to-red-600',
    borderColor: 'border-rose-500/30',
    badgeColor: 'bg-rose-500/20 text-rose-300',
    modulesCount: 6,
    xpReward: 650,
    level: 'Intermediate',
    topics: ['Network Pentesting', 'OWASP Top 10 Web Vulns', 'Cryptography & PKI', 'SOC Monitoring & SIEM'],
    capstone: 'Enterprise Vulnerability Scanner & Exploit Mitigation'
  },
  {
    id: 'data-science',
    title: 'Data Science & Big Data Analytics',
    category: 'Data',
    icon: Database,
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-500/30',
    badgeColor: 'bg-amber-500/20 text-amber-300',
    modulesCount: 5,
    xpReward: 500,
    level: 'Beginner to Intermediate',
    topics: ['Pandas & NumPy', 'SQL Analytics & BigQuery', 'Tableau & PowerBI', 'Statistical Hypothesis Testing'],
    capstone: 'Algorithmic Financial Trend Forecasting System'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/30',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
    modulesCount: 5,
    xpReward: 500,
    level: 'Beginner to Intermediate',
    topics: ['React Native / Flutter', 'Native Device APIs', 'Offline-First SQLite Cache', 'App Store Deployment'],
    capstone: 'Cross-Platform Real-Time Social Delivery App'
  },
  {
    id: 'iot-embedded',
    title: 'IoT & Smart Embedded Systems',
    category: 'IoT',
    icon: Radio,
    color: 'from-teal-500 to-cyan-600',
    borderColor: 'border-teal-500/30',
    badgeColor: 'bg-teal-500/20 text-teal-300',
    modulesCount: 5,
    xpReward: 500,
    level: 'All Levels',
    topics: ['ESP32 & Arduino C++', 'MQTT & WebSockets', 'Sensor Calibration', 'Cloud IoT Telemetry'],
    capstone: 'Autonomous Precision Agriculture Node Network'
  }
];

const INTERNSHIPS = [
  {
    id: 'int_1',
    role: 'AI & Computer Vision Intern',
    company: 'NovaVision Labs',
    stream: 'AI & Machine Learning',
    type: 'Remote (3 Months)',
    stipend: '₹15,000 / month',
    badge: 'Hiring Fast'
  },
  {
    id: 'int_2',
    role: 'Full-Stack React Developer Intern',
    company: 'CodeVantage Engineering',
    stream: 'Full-Stack Web',
    type: 'Remote (6 Months)',
    stipend: '₹18,000 / month',
    badge: 'In-House Client Pipeline'
  },
  {
    id: 'int_3',
    role: 'Cloud DevOps Trainee',
    company: 'CloudScale Infrastructure',
    stream: 'Cloud & DevOps',
    type: 'Hybrid (3 Months)',
    stipend: '₹12,000 / month',
    badge: 'Mentorship Provided'
  }
];

const Academy = () => {
  const { user, openAuthModal, addXP } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI', 'Web', 'Cloud', 'Security', 'Data', 'Mobile', 'IoT'];

  const filteredTracks = selectedCategory === 'All'
    ? TRACKS
    : TRACKS.filter(t => t.category === selectedCategory);

  const handleTrackEnroll = (track) => {
    if (!user) {
      openAuthModal('register', 'nano');
      return;
    }
    addXP(100);
    alert(`Enrolled in "${track.title}"! You earned +100 XP.`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-4">
          <GraduationCap className="w-4 h-4 text-purple-400" />
          Nano Tier: Gamified Academy & Career Engine
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Master All Streams of IT. <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Earn Verified Certifications & Land Internships.
          </span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Self-paced interactive tracks with XP points, streaks, live quiz assessments, and verified credentials shareable directly to LinkedIn.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <div className="px-4 py-2 rounded-xl bg-gray-900/80 border border-purple-500/20 text-xs font-semibold text-purple-300 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" /> Earn XP & Badges
          </div>
          <div className="px-4 py-2 rounded-xl bg-gray-900/80 border border-cyan-500/20 text-xs font-semibold text-cyan-300 flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" /> Tamper-Proof Digital Certs
          </div>
          <div className="px-4 py-2 rounded-xl bg-gray-900/80 border border-emerald-500/20 text-xs font-semibold text-emerald-300 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-emerald-400" /> Direct Internship Referrals
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                : 'bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {cat === 'All' ? 'All IT Streams (7)' : cat}
          </button>
        ))}
      </div>

      {/* Learning Tracks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredTracks.map((track) => {
          const Icon = track.icon;
          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-gray-900/60 border ${track.borderColor} rounded-3xl p-7 backdrop-blur-xl flex flex-col justify-between hover:border-purple-400/50 hover:bg-gray-900/90 transition-all group`}
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${track.color} text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${track.badgeColor}`}>
                    +{track.xpReward} XP
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {track.title}
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  {track.modulesCount} Core Modules • {track.level}
                </p>

                {/* Topics Covered */}
                <div className="mb-6 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    Curriculum Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {track.topics.map((t, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capstone Preview */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-xs">
                  <span className="text-gray-400 font-medium">Capstone Project: </span>
                  <span className="text-white font-semibold">{track.capstone}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleTrackEnroll(track)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{user?.role === 'nano' ? 'Start Track (+100 XP)' : 'Enroll in Track'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Internships Section */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-indigo-950/40 via-gray-900/60 to-purple-950/40 border border-purple-500/20 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 mb-2 inline-block">
              TALENT PIPELINE
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Curated Student Internships & Opportunities
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Top Nano Tier graduates get direct access to client projects and startup placements.
            </p>
          </div>
          {user?.role === 'nano' && (
            <Link
              to="/student-hub"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all self-start md:self-auto"
            >
              View My Applications
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INTERNSHIPS.map((int) => (
            <div
              key={int.id}
              className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                  {int.badge}
                </span>
                <h4 className="text-base font-bold text-white mt-2 mb-1">{int.role}</h4>
                <div className="text-xs text-purple-300 mb-3">{int.company}</div>
                <div className="text-xs text-gray-400 space-y-1 mb-6">
                  <div>Track: {int.stream}</div>
                  <div>Mode: {int.type}</div>
                  <div className="text-emerald-400 font-semibold">Stipend: {int.stipend}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  if (!user) {
                    openAuthModal('register', 'nano');
                  } else {
                    alert(`Application submitted for ${int.role} at ${int.company}!`);
                  }
                }}
                className="w-full py-2.5 rounded-xl bg-gray-800 hover:bg-purple-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                1-Click Apply
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academy;
