import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEMO_STUDENT = {
  id: 'usr_nano_001',
  name: 'Alex Rivera',
  email: 'alex.student@codewintage.edu',
  role: 'nano', // 'nano' = Student / Learner
  college: 'National Institute of Technology',
  stream: 'AI & Full-Stack Engineering',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  xp: 750,
  level: 4,
  streak: 7,
  badges: [
    { id: 'b1', name: 'Python Initiate', icon: '🐍', date: 'Oct 2025' },
    { id: 'b2', name: '7-Day Streak', icon: '🔥', date: 'Nov 2025' },
    { id: 'b3', name: 'API Architect', icon: '⚡', date: 'Dec 2025' }
  ],
  completedQuizzes: 6,
  certifications: [
    {
      id: 'CWT-NANO-2025-9842',
      title: 'Full-Stack Modern Web Engineering',
      issueDate: '2025-11-15',
      score: '94%'
    }
  ],
  internshipApplications: [
    { id: 'app_1', company: 'NovaTech AI', role: 'Full-Stack Intern', status: 'Under Review' },
    { id: 'app_2', company: 'CodeVantage Labs', role: 'Python/FastAPI Intern', status: 'Interview Scheduled' }
  ]
};

const DEMO_CLIENT = {
  id: 'usr_pro_101',
  name: 'Sarah Jenkins',
  email: 'sarah.jenkins@nexustech.io',
  role: 'pro', // 'pro' = Client / Business
  company: 'NexusTech Global Solutions',
  industry: 'FinTech & Cloud Systems',
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
  activeProjects: [
    {
      id: 'prj_01',
      title: 'Automated Micro-Lending Portal',
      stage: 'Core Development & Integration',
      progress: 68,
      nextMilestone: 'Beta Staging Release (Milestone 3)',
      targetDate: 'Nov 25, 2025',
      stagingUrl: 'https://staging-nexus-lending.codewintage.dev'
    },
    {
      id: 'prj_02',
      title: 'AI Fraud Detection Pipeline',
      stage: 'Architecture & Scoping',
      progress: 25,
      nextMilestone: 'SRS & Architecture Signoff',
      targetDate: 'Dec 10, 2025',
      stagingUrl: null
    }
  ],
  invoicesPending: 1,
  totalEngagements: 3
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('cwt_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'register'
  const [authModalInitialRole, setAuthModalInitialRole] = useState('nano'); // 'nano' | 'pro'

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('cwt_auth_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('cwt_auth_user');
      }
    } catch (err) {
      console.error('Failed to sync auth user to localStorage', err);
    }
  }, [user]);

  const openAuthModal = (tab = 'login', role = 'nano') => {
    setAuthModalTab(tab);
    setAuthModalInitialRole(role);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const loginAsDemoStudent = () => {
    setUser(DEMO_STUDENT);
    closeAuthModal();
  };

  const loginAsDemoClient = () => {
    setUser(DEMO_CLIENT);
    closeAuthModal();
  };

  const login = (email, password, role = 'nano') => {
    if (email === DEMO_STUDENT.email || role === 'nano') {
      setUser({
        ...DEMO_STUDENT,
        email: email || DEMO_STUDENT.email
      });
    } else {
      setUser({
        ...DEMO_CLIENT,
        email: email || DEMO_CLIENT.email
      });
    }
    closeAuthModal();
  };

  const signup = ({ name, email, role, company, stream }) => {
    const newUser = {
      id: `usr_${role}_${Date.now()}`,
      name: name || (role === 'nano' ? 'New Student' : 'New Client'),
      email,
      role,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || 'User')}`,
      ...(role === 'nano'
        ? {
            college: 'Computer Science & Engineering',
            stream: stream || 'Full-Stack Web Engineering',
            xp: 100,
            level: 1,
            streak: 1,
            badges: [{ id: 'b_welcome', name: 'Welcome Aboard', icon: '🚀', date: 'Just now' }],
            completedQuizzes: 0,
            certifications: [],
            internshipApplications: []
          }
        : {
            company: company || 'My Enterprise Venture',
            industry: 'Technology & Digital Products',
            activeProjects: [],
            invoicesPending: 0,
            totalEngagements: 1
          })
    };

    setUser(newUser);
    closeAuthModal();
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (newRole) => {
    if (newRole === 'nano') {
      setUser(DEMO_STUDENT);
    } else if (newRole === 'pro') {
      setUser(DEMO_CLIENT);
    }
  };

  const addXP = (amount) => {
    if (!user || user.role !== 'nano') return;
    setUser((prev) => {
      const newXP = (prev.xp || 0) + amount;
      const newLevel = Math.floor(newXP / 200) + 1;
      return {
        ...prev,
        xp: newXP,
        level: newLevel
      };
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isNano: user?.role === 'nano',
        isPro: user?.role === 'pro',
        isAuthModalOpen,
        authModalTab,
        authModalInitialRole,
        openAuthModal,
        closeAuthModal,
        login,
        signup,
        loginAsDemoStudent,
        loginAsDemoClient,
        logout,
        switchRole,
        addXP
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
