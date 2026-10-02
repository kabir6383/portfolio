import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Calendar, MapPin, CheckCircle2, Clock } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0B1319] border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-14">
        
        {/* Centered Header matching target template */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            CAREER TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Timeline List */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-slate-800 hidden sm:block"></div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group"
              >
                {/* Node Dot */}
                <div className="absolute left-[11px] top-7 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#0B1319] ring-4 ring-cyan-500/20 z-10 hidden sm:block group-hover:scale-125 transition-transform shadow-md shadow-cyan-400" />

                {/* Content Card */}
                <div className="sm:ml-10 w-full glass-card border border-slate-800 p-6 md:p-8 rounded-3xl space-y-5 shadow-2xl hover:border-cyan-500/30 transition-all">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2 tracking-tight">
                        {exp.company}
                        <CheckCircle2 size={16} className="text-cyan-400" />
                      </h3>
                      {exp.location && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mt-1">
                          <MapPin size={13} className="text-cyan-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {exp.duration && (
                        <span className="flex items-center gap-1 text-xs font-extrabold text-cyan-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                          <Clock size={12} />
                          {exp.duration}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs font-extrabold text-slate-300 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        <Calendar size={12} />
                        Completed: {exp.completionDate || exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Role Title & Description */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-cyan-400">
                      {exp.role}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-semibold rounded-xl border border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
