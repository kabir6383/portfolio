import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Award, Code, Layers, Briefcase, Mail, Download } from 'lucide-react';
import resumePdf from './kabir.pdf';
import kabirImg from './kabir.jpg';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Achievements', id: 'achievements', icon: Award },
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
      {/* Desktop Glass Header */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 hidden md:block ${isScrolled ? 'py-3 glass-nav shadow-lg' : 'py-5 bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo Monogram like target template */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 transition-all shadow-md">
              <span className="font-mono-code font-bold text-lg text-gradient-primary">
                MK /&gt;
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Muthu Mohamed Kabir
              </span>
              <span className="text-[10px] font-medium text-slate-400">
                Full-Stack &amp; Embedded Developer
              </span>
            </div>
          </motion.div>

          {/* Right Aligned Nav Links */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${isActive
                        ? 'text-white font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-gradient-primary -z-10 shadow-md shadow-cyan-500/20"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                      />
                    )}
                    {link.name}
                  </button>
                );
              })}
            </nav>

            <a
              href={resumePdf}
              download="Muthu_Mohamed_Kabir_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-primary text-slate-950 font-bold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/20 hover:opacity-90 flex items-center gap-1.5"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
          </div>

        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="fixed top-0 left-0 w-full z-[100] md:hidden p-3">
        <div className="glass-nav px-4 py-2.5 rounded-2xl flex items-center justify-between border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2.5" onClick={() => handleNavClick('home')}>
            <span className="font-mono-code font-bold text-base text-gradient-primary">
              MK /&gt;
            </span>
          </div>
          <a
            href={resumePdf}
            download="Muthu_Mohamed_Kabir_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-gradient-primary text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md shadow-cyan-500/20"
          >
            <Download size={12} />
            <span>Resume</span>
          </a>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-[1000] md:hidden p-3 pb-5 pointer-events-none">
        <div className="bg-[#0B1319]/95 backdrop-blur-xl h-14 rounded-2xl flex items-center justify-around px-2 border border-slate-800 shadow-2xl pointer-events-auto max-w-md mx-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative flex flex-col items-center justify-center w-10 h-10"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute top-1 w-1 h-1 bg-cyan-400 rounded-full"
                  />
                )}
                <div className={`transition-all duration-200 ${isActive ? 'text-cyan-400 scale-110' : 'text-slate-400'}`}>
                  <link.icon size={18} />
                </div>
                <span className={`text-[9px] font-semibold mt-0.5 transition-all ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'
                  }`}>
                  {link.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
