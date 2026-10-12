import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  Star, 
  CheckCircle2, 
  ThumbsUp, 
  MessageSquarePlus, 
  Filter, 
  GraduationCap, 
  Briefcase,
  Sparkles,
  X
} from 'lucide-react';

const INITIAL_REVIEWS = [
  {
    id: 1,
    author: 'Rahul Sharma',
    role: 'Final Year CS Student (Nano Graduate)',
    college: 'RV College of Engineering',
    tier: 'nano',
    stream: 'AI & Machine Learning',
    project: 'AI-Powered Traffic Management System',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The AI project code and documentation from codeWINtage was top-notch! The viva preparation quiz and the model architecture documentation helped me secure an A+ in my final semester defense.',
    helpfulCount: 42
  },
  {
    id: 2,
    author: 'Priya Patel',
    role: 'Founder & CEO (Pro Client)',
    college: 'HealthFirst Technologies',
    tier: 'pro',
    stream: 'Full-Stack Web',
    project: 'Custom Patient Tele-Consultation MVP',
    rating: 5,
    date: '1 month ago',
    comment: 'codeWINtage built our startup MVP in record time. The milestone tracking portal gave us full transparency on sprint progress, and their lead architect was accessible at every turn.',
    helpfulCount: 38
  },
  {
    id: 3,
    author: 'Vikram Singh',
    role: 'B.Tech IT Student (Nano Member)',
    college: 'Vellore Institute of Technology',
    tier: 'nano',
    stream: 'IoT & Embedded Systems',
    project: 'Smart Agriculture IoT Node Network',
    rating: 5,
    date: '1 month ago',
    comment: 'I was struggling with ESP32 MQTT cloud integration. The step-by-step guidance, circuit diagrams, and live debugging explanation were phenomenal. Got certified on the spot!',
    helpfulCount: 29
  },
  {
    id: 4,
    author: 'Ananya Deshmukh',
    role: 'Full-Stack Engineering Student',
    college: 'Pune Institute of Computer Technology',
    tier: 'nano',
    stream: 'Full-Stack Web',
    project: 'Collaborative Code Sandbox Platform',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Earned my verified certification after passing the timed assessment. Added it directly to LinkedIn and received two recruiter interview calls within 10 days!',
    helpfulCount: 35
  },
  {
    id: 5,
    author: 'Karthik Raja',
    role: 'Cybersecurity Aspirant (Nano Member)',
    college: 'BMS College of Engineering',
    tier: 'nano',
    stream: 'Cybersecurity',
    project: 'Automated OWASP Vulnerability Scanner',
    rating: 4,
    date: '2 months ago',
    comment: 'Practical and hands-on. The assessments actually test real exploits rather than just rote theory. Recommended for anyone wanting practical skills.',
    helpfulCount: 19
  }
];

const Reviews = () => {
  const { user, openAuthModal } = useAuth();
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review form
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [stream, setStream] = useState('AI & Machine Learning');

  const filteredReviews = selectedFilter === 'All'
    ? reviews
    : reviews.filter(r => r.stream === selectedFilter || (selectedFilter === 'Nano Only' && r.tier === 'nano') || (selectedFilter === 'Pro Only' && r.tier === 'pro'));

  const handleHelpful = (id) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!user) {
      openAuthModal('login');
      return;
    }

    const newRev = {
      id: Date.now(),
      author: user.name,
      role: user.role === 'nano' ? `${user.stream} Student` : `${user.company} Client`,
      college: user.college || user.company,
      tier: user.role,
      stream: stream,
      project: projectTitle || 'Custom Engagement',
      rating,
      date: 'Just now',
      comment,
      helpfulCount: 1
    };

    setReviews([newRev, ...reviews]);
    setIsModalOpen(false);
    setComment('');
    setProjectTitle('');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-4">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          Verified Public Reviews & Ratings
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Trusted by Students & Tech Clients Alike
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Read genuine feedback from students who cleared their university vivas and business clients who launched their software products with codeWINtage.
        </p>
      </div>

      {/* Ratings Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-8 rounded-3xl bg-gray-900/60 border border-gray-800 backdrop-blur-xl flex flex-col items-center justify-center text-center">
          <div className="text-5xl font-black text-white mb-2">4.9</div>
          <div className="flex items-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <div className="text-xs text-gray-400">Based on 280+ verified reviews</div>
        </div>

        <div className="p-8 rounded-3xl bg-gray-900/60 border border-gray-800 backdrop-blur-xl flex flex-col justify-center">
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-12 text-gray-400">5 Star</span>
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '92%' }} />
              </div>
              <span className="text-gray-400 w-8 text-right">92%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-gray-400">4 Star</span>
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '7%' }} />
              </div>
              <span className="text-gray-400 w-8 text-right">7%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-gray-400">3 Star</span>
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '1%' }} />
              </div>
              <span className="text-gray-400 w-8 text-right">1%</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/40 via-blue-950/30 to-gray-900/60 border border-purple-500/20 backdrop-blur-xl flex flex-col items-center justify-center text-center">
          <h3 className="text-lg font-bold text-white mb-2">Have You Worked With Us?</h3>
          <p className="text-xs text-gray-400 mb-5">
            Share your experience to help other students and businesses.
          </p>
          <button
            onClick={() => {
              if (!user) {
                openAuthModal('login');
              } else {
                setIsModalOpen(true);
              }
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Leave Public Feedback
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div className="flex items-center flex-wrap gap-2">
          {['All', 'AI & Machine Learning', 'Full-Stack Web', 'IoT & Embedded Systems', 'Cybersecurity', 'Nano Only', 'Pro Only'].map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === f
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-400">Showing {filteredReviews.length} reviews</span>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((rev) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/30 transition-all backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              {/* Header: Author & Tier Badge */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-base">{rev.author}</h4>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" title="Verified Member" />
                  </div>
                  <div className="text-xs text-gray-400">{rev.role}</div>
                  <div className="text-[11px] text-purple-300">{rev.college}</div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  rev.tier === 'nano'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}>
                  {rev.tier === 'nano' ? '🎓 Nano Tier' : '💼 Pro Client'}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs text-gray-400 ml-2">{rev.date}</span>
              </div>

              {/* Project / Stream Tag */}
              <div className="mb-3">
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white/[0.04] text-gray-300 border border-white/5 inline-block">
                  Project: {rev.project}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                "{rev.comment}"
              </p>
            </div>

            {/* Helpful Counter */}
            <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span className="text-[11px] text-gray-500">Verified Experience</span>
              <button
                onClick={() => handleHelpful(rev.id)}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Helpful ({rev.helpfulCount})</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Submit Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8 z-10 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white mb-1">Submit Public Review</h3>
              <p className="text-xs text-gray-400 mb-5">
                Posting as <span className="text-cyan-400 font-semibold">{user?.name}</span> ({user?.role === 'nano' ? 'Nano Student' : 'Pro Client'})
              </p>

              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setRating(s)}
                        className="text-amber-400 hover:scale-110 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${s <= rating ? 'fill-amber-400' : 'text-gray-600'}`} />
                      </button>
                    ))}
                    <span className="text-xs text-gray-400 ml-2">({rating} of 5 Stars)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Project / Course Completed</label>
                  <input
                    type="text"
                    required
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="e.g. AI Traffic Light System or Custom FinTech MVP"
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Domain / Stream</label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Full-Stack Web">Full-Stack Web</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="IoT & Embedded Systems">IoT & Embedded Systems</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Your Feedback</label>
                  <textarea
                    rows={4}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share how codeWINtage helped you with your project, viva, or software delivery..."
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs shadow-lg transition-all"
                >
                  Publish Verified Review
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reviews;
