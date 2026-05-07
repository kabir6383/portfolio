import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, CheckCircle2, Sparkles, Send } from 'lucide-react';
import kabirImg from './kabirimg.jpg';
import resumePdf from './Kabir-Resume.pdf';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative hero-gradient min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[90px] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="relative group z-10"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 shadow-2xl">
           <img
            src={kabirImg}
            alt="Muthu Mohamed Kabir"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#0f172a] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </div>
        
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="absolute bottom-2 right-4 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_20px_#3b82f6] border-[5px] border-[#0f172a] z-20"
        >
          <CheckCircle2 size={24} fill="white" className="text-blue-500" />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 mt-10"
      >


        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[1] italic uppercase cursor-default z-10">
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 mb-4">
            <motion.span 
              whileHover={{ scale: 1.1, y: -5 }}
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 inline-block"
            >
              Muthu
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, y: -5 }}
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 transition-all duration-300 inline-block"
            >
              Mohamed
            </motion.span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10">
            <motion.span 
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 transition-all duration-500 inline-block"
            >
              Kabir
            </motion.span>

          </div>
        </h1>


        
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">
          <span className="px-6 py-2 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:text-white transition-all cursor-default">Electrical Systems</span>
          <span className="w-1 h-1 bg-white/20 rounded-full hidden md:block"></span>
          <span className="px-6 py-2 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:text-white transition-all cursor-default">Full Stack (MERN)</span>
          <span className="w-1 h-1 bg-white/20 rounded-full hidden md:block"></span>
          <span className="px-6 py-2 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:text-white transition-all cursor-default">IoT Architecture</span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 flex flex-col sm:flex-row gap-6 z-10"
      >
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-10 py-5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-[2rem] hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3"
        >
          <Send size={16} /> Contact Me

        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={resumePdf}
          download="Muthu_Mohamed_Kabir_Resume.pdf"
          className="px-10 py-5 bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-[2rem] hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-xl"
          target="_blank"
          rel="noreferrer"
        >
          <Download size={16} /> Get Resume
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce z-10"
      >
        <a href="#about" className="text-slate-600 hover:text-white transition-colors">
          <ChevronDown size={32} strokeWidth={3} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
