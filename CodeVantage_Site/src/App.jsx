import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectCatalog from './components/ProjectCatalog';
import ResourceVault from './components/ResourceVault';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import FloatingSpheres from './components/FloatingSpheres';
import AuthModal from './components/AuthModal';
import Academy from './components/Academy';
import Reviews from './components/Reviews';
import StudentHub from './components/StudentHub';
import ClientPortal from './components/ClientPortal';
import { AuthProvider } from './context/AuthContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'codeWINtage - Custom Software & Academic Projects',
      '/projects': 'Top Final Year Projects 2025 - codeWINtage',
      '/about': 'About Us - codeWINtage',
      '/services': 'Our Services - codeWINtage',
      '/contact': 'Contact Us - codeWINtage',
      '/academy': 'Nano Academy & IT Tracks - codeWINtage',
      '/reviews': 'Public Ratings & Reviews - codeWINtage',
      '/student-hub': 'Student Hub (Nano Tier) - codeWINtage',
      '/client-portal': 'Client Portal (Pro Tier) - codeWINtage'
    };
    document.title = titles[location.pathname] || 'codeWINtage';
  }, [location]);

  return null;
};

// Layout wrapper to ensure consistent spacing for non-home pages
const PageLayout = ({ children }) => (
  <div className="pt-24 min-h-screen relative z-10">
    {children}
  </div>
);

function App() {
  return (
    <AuthProvider>
      <div className="bg-black min-h-screen text-white relative overflow-hidden">
        {/* Global Background Animation */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <FloatingSpheres count={20} />
        </div>

        <ScrollToTop />
        <DynamicTitle />
        <Navbar />
        <AuthModal />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Why />
                <TechStack />
                <Testimonials />
                <Portfolio />
              </>
            } />

            <Route path="/about" element={
              <PageLayout>
                <About />
                <Why /> {/* Reusing Why section as it fits well in About */}
              </PageLayout>
            } />

            <Route path="/services" element={
              <PageLayout>
                <Services />
                <TechStack /> {/* Reusing TechStack as it fits well in Services */}
              </PageLayout>
            } />

            <Route path="/projects" element={
              <PageLayout>
                <ProjectCatalog />
                <ResourceVault />
              </PageLayout>
            } />

            <Route path="/academy" element={
              <PageLayout>
                <Academy />
              </PageLayout>
            } />

            <Route path="/reviews" element={
              <PageLayout>
                <Reviews />
              </PageLayout>
            } />

            <Route path="/student-hub" element={
              <PageLayout>
                <StudentHub />
              </PageLayout>
            } />

            <Route path="/client-portal" element={
              <PageLayout>
                <ClientPortal />
              </PageLayout>
            } />

            <Route path="/contact" element={
              <PageLayout>
                <Contact />
              </PageLayout>
            } />
          </Routes>
        </div>

        <div className="relative z-10">
          <Footer />
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919606578966?text=Hi%20codeWINtage,%20I'm%20interested%20in%20a%20project..."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
      </div>
    </AuthProvider>
  );
}

export default App;
