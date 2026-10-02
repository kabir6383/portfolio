import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, ArrowDown, Award, CheckCircle2, Briefcase, GraduationCap } from 'lucide-react';

import kabirImg from './kabir.jpg';
import resumePdf from './kabir.pdf';

const Hero: React.FC = () => {
  const techStack = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'ESP32 / Microcontrollers',
    'PCB Design',
    'Python',
    'Git'
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-32 pb-20 px-6 md:px-12 hero-gradient overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10 space-y-8">

        {/* Profile Avatar with Descriptive Alt Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-primary shadow-xl shadow-cyan-500/20">
            <img
              src={kabirImg}
              alt="Muthu Mohamed Kabir - Full-Stack Web and Embedded Hardware Engineer"
              width={128}
              height={128}
              className="w-full h-full rounded-full object-cover border-4 border-[#0B1319]"
            />
          </div>
          <span className="absolute bottom-1 right-1 w-7 h-7 bg-emerald-500 border-2 border-[#0B1319] rounded-full flex items-center justify-center text-slate-950 font-bold shadow-md" title="Verified Engineer">
            <CheckCircle2 size={16} />
          </span>
        </motion.div>

        {/* Hero Title & Subtitle Structure matching target site */}
        <div className="space-y-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            Muthu Mohamed <span className="text-gradient-primary">Kabir</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wide"
          >
            Full-Stack Web &amp; Embedded Hardware Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            I build full-stack web applications with <strong className="text-white">React.js, Node.js, Express, and MongoDB</strong>, and engineer microcontrollers and hardware prototypes with <strong className="text-white">ESP32, Raspberry Pi, and PCB Layout</strong>.
          </motion.p>
        </div>

        {/* Tech Stack Horizontal Pills matching target template */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center gap-3 w-full max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            TECH STACK
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-semibold hover:border-cyan-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action Button & Social Links matching target template */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-col items-center gap-6 pt-2"
        >
          <a
            href={resumePdf}
            download="Muthu_Mohamed_Kabir_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-primary text-slate-950 font-extrabold text-sm tracking-wider shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all flex items-center gap-2.5 group"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>

          {/* Social Links Circular Outline Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kabir6383"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-md"
            >
              <i className="fab fa-github text-lg"></i>

            </a>
            <a
              href="mailto:muthukabir112@gmail.com"
              aria-label="Email Kabir"
              className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-md"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+916380205821"
              aria-label="Call Kabir"
              className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-md"
            >
              <Phone size={18} />
            </a>
          </div>
        </motion.div>

        {/* Key Verified Metrics Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl border-t border-slate-800"
        >
          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col items-center">
            <span className="text-2xl font-black text-cyan-400">61.68%</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">TCS NQT (IT) Score</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col items-center">
            <span className="text-2xl font-black text-white">Top 500</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">TN Hackathon Finalist</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col items-center">
            <span className="text-2xl font-black text-emerald-400">3 Internships</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">MERN, PCB &amp; Electrical</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
