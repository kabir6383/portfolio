import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, X, Layers, Code, Terminal, Award, Cpu } from 'lucide-react';


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'IOT', 'AI', 'FULL-STACK', 'EMBEDDED'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'ALL') return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 bg-[#0B1319] border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-14">
        
        {/* Centered Header matching target template */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Directory Filters */}
        <div className="flex overflow-x-auto pb-4 justify-center gap-2 scrollbar-hide border-b border-slate-800">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all border ${
                activeFilter === filter
                  ? 'bg-gradient-primary text-slate-950 font-black border-cyan-400 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="group relative glass-card border border-slate-800 hover:border-cyan-500/30 p-7 md:p-8 rounded-3xl flex flex-col justify-between shadow-2xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors shadow-md">
                      <i className={`fas ${project.icon} text-base`}></i>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-extrabold tracking-wider uppercase transition-colors"
                  >
                    <span>TECHNICAL DETAILS</span>
                    <ArrowUpRight size={15} />
                  </button>
                  
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label={`View ${project.title} repository on GitHub`}
                        className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                        title="GitHub Repository"
                      >
                        <i className="fab fa-github"></i>

                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Technical Spec Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#0B1319] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-800 shadow-2xl relative z-10 flex flex-col text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#0B1319]/95 backdrop-blur-md px-6 py-5 border-b border-slate-800 flex items-center justify-between z-20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-xs uppercase tracking-wider">
                    <Cpu size={14} />
                    <span>{selectedProject.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 flex items-center justify-center rounded-2xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                >
                  <X size={16} />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 space-y-6 font-sans">
                {selectedProject.extendedDetails ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                        <Layers size={14} className="text-cyan-400" />
                        <span>System Architecture Overview</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed text-sm font-medium border-l-4 border-cyan-400 pl-4 py-2 bg-slate-900/90 rounded-r-2xl border-y border-r border-slate-800 italic">
                        "{selectedProject.extendedDetails.overview}"
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                        <Code size={14} className="text-cyan-400" />
                        <span>Technical Details</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {selectedProject.extendedDetails.technicalDeepDive}
                      </p>
                    </div>
                    
                    {selectedProject.extendedDetails.milestone && (
                      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-xs uppercase tracking-wider">
                          <Award size={15} />
                          <span>Key Milestone / Recognition</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs font-semibold">
                          {selectedProject.extendedDetails.milestone}
                        </p>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                        <Terminal size={14} className="text-cyan-400" />
                        <span>Technologies Used</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.extendedDetails.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-bold rounded-xl border border-slate-800">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <p className="text-slate-300 leading-relaxed text-sm">
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
