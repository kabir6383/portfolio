import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Zap, Target, Award, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="text-cyan-400" size={24} />,
  Zap: <Zap className="text-amber-400" size={24} />,
  Target: <Target className="text-emerald-400" size={24} />,
  Award: <Award className="text-teal-400" size={24} />
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#0B1319] border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-14">
        
        {/* Centered Header matching target template */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            HONORS &amp; MILESTONES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Achievements &amp; <span className="text-gradient-primary">Awards</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Achievements Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card border border-slate-800 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Host + Score Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-md">
                        {iconMap[item.icon] || <Award size={24} className="text-cyan-400" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                          {item.organization}
                        </span>
                        <span className="text-xs font-semibold text-slate-300">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {item.score && (
                      <span className="px-3.5 py-1.5 bg-gradient-primary text-slate-950 font-extrabold text-xs rounded-full shadow-md shadow-cyan-500/20 shrink-0 flex items-center gap-1.5">
                        <CheckCircle2 size={14} />
                        {item.score}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  {/* Highlight Banner */}
                  {item.highlight && (
                    <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5 text-xs font-bold text-slate-200">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0"></span>
                      <span>{item.highlight}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags Footer */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-semibold rounded-xl border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
