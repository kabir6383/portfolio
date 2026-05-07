import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code, Terminal, Globe, Cpu, Rocket, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    { name: 'Programming', icon: Terminal, color: 'text-blue-500' },
    { name: 'Web', icon: Globe, color: 'text-cyan-500' },
    { name: 'Engineering', icon: Code, color: 'text-indigo-500' },
    { name: 'IoT', icon: Cpu, color: 'text-emerald-500' },
    { name: 'Learning', icon: Rocket, color: 'text-amber-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  } as const;


  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 300 }
    }
  } as const;


  const getIconPrefix = (icon: string) => {
    if (icon.startsWith('fa-js') || icon.startsWith('fa-python') || icon.startsWith('fa-react') || icon.startsWith('fa-node-js')) return 'fab';
    return 'fas';
  };

  return (
    <section id="skills" className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Core Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.name} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`glass-panel group relative p-10 rounded-[2.5rem] border ${cat.name === 'Learning' ? 'border-amber-500/30 bg-amber-500/5' : 'border-white/5'} hover:border-blue-500/30 transition-all`}
              style={{ background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(20px)' }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${cat.color} border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                  <cat.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                   <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tight">
                    {cat.name === 'Learning' ? 'Pursuing' : cat.name}
                  </h3>
                  <div className="w-8 h-1 bg-white/10 mt-1 rounded-full group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === cat.name).map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-5 py-3 bg-white/5 text-slate-300 rounded-2xl text-[11px] font-bold border border-white/5 hover:text-white transition-all cursor-default shadow-sm"
                  >
                    <i className={`${getIconPrefix(skill.icon)} ${skill.icon} text-blue-500 group-hover:rotate-12 transition-transform duration-300`}></i>
                    {skill.name}
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/5 group-hover:bg-blue-500/50 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

