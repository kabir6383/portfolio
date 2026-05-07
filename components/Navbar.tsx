import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Layers, Briefcase, Mail, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Projects', id: 'projects', icon: Layers },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 hidden md:block ${isScrolled ? 'py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass-nav px-8 py-3 rounded-[2rem] flex items-center justify-between border border-white/5 shadow-2xl transition-all ${isScrolled ? 'bg-slate-950/80 border-white/10' : 'bg-transparent border-transparent shadow-none'}`}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <span className="text-lg font-black text-white tracking-tighter uppercase italic hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300">KABIR</span>
            </motion.div>

            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                    activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header (Top) */}
      <nav className="fixed top-0 left-0 w-full z-[100] md:hidden p-4">
         <div className="glass-nav px-6 py-4 rounded-3xl flex items-center justify-between border border-white/5 shadow-xl">
            <span className="text-sm font-black text-white tracking-widest uppercase italic hover:text-blue-400 transition-colors">KABIR</span>
         </div>
      </nav>

      {/* Mobile Bottom Navigation (WhatsApp/Instagram Style) */}
      <nav className="fixed bottom-0 left-0 w-full z-[1000] md:hidden p-4 pb-8 pointer-events-none">
        <div className="glass-nav h-20 rounded-[2.5rem] flex items-center justify-around px-4 border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative flex flex-col items-center justify-center w-12 h-12"
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute -top-1 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"
                />
              )}
              <div className={`transition-all duration-300 ${activeSection === link.id ? 'text-blue-500 scale-125' : 'text-slate-500'}`}>
                <link.icon size={22} strokeWidth={activeSection === link.id ? 2.5 : 2} />
              </div>
              <span className={`text-[8px] font-black uppercase tracking-tighter mt-1 ${activeSection === link.id ? 'text-blue-500 opacity-100' : 'text-slate-600 opacity-0'} transition-all`}>
                {link.name}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
