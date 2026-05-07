import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowRight, ExternalLink, Layers, ArrowUpRight, X, Sparkles, Code, Terminal } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef(null);

  const filters = ['All', 'IoT', 'AI', 'Full-Stack', 'Embedded'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="projects" className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic gradients for premium feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Layers size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Portfolio Highlights</span>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Dynamic Filters - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-8 justify-start md:justify-center gap-4 scrollbar-hide mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)]'
                  : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Project Grid / Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="group relative bg-[#1e293b]/40 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
                
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-10">
                      <div className="px-5 py-2 bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-[0.2em] rounded-xl border border-blue-500/20">
                         {project.category}
                      </div>
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl border border-white/5">
                        <i className={`fas ${project.icon}`}></i>
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors tracking-tight">
                     {project.title}
                   </h3>
                   
                   <p className="text-slate-400 leading-relaxed mb-10 line-clamp-3 text-sm font-medium">
                     {project.description}
                   </p>
                   
                   <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <motion.button 
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-3 text-blue-500 font-black text-[10px] uppercase tracking-[0.2em] cursor-pointer"
                      >
                        Technical Details <ArrowUpRight size={16} />
                      </motion.button>
                      
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                         <div className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"><i className="fab fa-github text-sm"></i></div>
                         <div className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"><ExternalLink size={14} /></div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modern Full-Screen Project Overlay (Instagram Style) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
            />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-[#0f172a] w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] relative z-10 border border-white/10 custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-[#0f172a]/90 backdrop-blur-3xl px-12 py-10 border-b border-white/5 flex items-center justify-between z-20">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                     <Sparkles size={14} className="text-blue-500" />
                     <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">{selectedProject.category}</span>
                  </div>
                  <h3 className="text-4xl font-black text-white tracking-tighter italic">{selectedProject.title.toUpperCase()}</h3>
                </div>
                <motion.button 
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-all text-slate-400 border border-white/5"
                >
                  <X size={24} strokeWidth={3} />
                </motion.button>
              </div>
              
              <div className="p-12 space-y-12">
                {selectedProject.extendedDetails ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="space-y-6">
                          <div className="flex items-center gap-3 text-blue-500">
                            <Layers size={18} />
                            <h4 className="text-[11px] font-black uppercase tracking-widest">Core Mission</h4>
                          </div>
                          <p className="text-slate-200 leading-relaxed text-2xl font-bold italic border-l-4 border-blue-500 pl-8 py-3 bg-blue-500/5 rounded-r-2xl">
                            "{selectedProject.extendedDetails.overview}"
                          </p>
                       </div>
                       
                       <div className="space-y-6">
                          <div className="flex items-center gap-3 text-blue-500">
                            <Code size={18} />

                            <h4 className="text-[11px] font-black uppercase tracking-widest">Technical Implementation</h4>
                          </div>
                          <p className="text-slate-400 leading-relaxed text-base">
                            {selectedProject.extendedDetails.technicalDeepDive}
                          </p>
                       </div>
                    </div>
                    
                    {selectedProject.extendedDetails.milestone && (
                       <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 p-10 rounded-[2.5rem] border border-blue-500/30 shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-10"><Sparkles size={100} /></div>
                          <div className="flex items-center gap-3 text-blue-400 mb-6">
                            <i className="fas fa-award text-xl"></i>
                            <h4 className="text-[11px] font-black uppercase tracking-widest">Industry Impact</h4>
                          </div>
                          <p className="text-white leading-relaxed text-xl font-bold tracking-tight">
                            {selectedProject.extendedDetails.milestone}
                          </p>
                       </div>
                    )}
                    
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 text-blue-500">
                        <Terminal size={18} />
                        <h4 className="text-[11px] font-black uppercase tracking-widest">Technology Matrix</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.extendedDetails.skills.map((skill, i) => (
                          <span key={i} className="px-6 py-3 bg-white/5 text-slate-300 text-xs font-bold rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-blue-500">
                      <Sparkles size={18} />
                      <h4 className="text-[11px] font-black uppercase tracking-widest">About Project</h4>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-xl font-medium">
                      {selectedProject.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

