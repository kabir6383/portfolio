import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code2, Server, Cpu, Wrench, Users } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <Code2 className="text-cyan-400" size={20} />,
  "Backend & Databases": <Server className="text-emerald-400" size={20} />,
  "Embedded Systems & Hardware": <Cpu className="text-amber-400" size={20} />,
  "Tools & Programming": <Wrench className="text-teal-400" size={20} />,
  "Soft Skills": <Users className="text-cyan-400" size={20} />
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Frontend Development",
    "Backend & Databases",
    "Embedded Systems & Hardware",
    "Tools & Programming",
    "Soft Skills"
  ];

  const filteredCategories = activeCategory === "All"
    ? Object.keys(categoryIcons)
    : [activeCategory];

  return (
    <section id="skills" className="py-24 bg-[#0B1319] border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-14">
        
        {/* Centered Header matching target template */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            TECHNICAL &amp; SOFT PROFICIENCY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex overflow-x-auto pb-4 justify-center gap-2 scrollbar-hide border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-gradient-primary text-slate-950 font-black border-cyan-400 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat === "All" ? "ALL SKILLS" : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {filteredCategories.map((catName) => {
            const catSkills = SKILLS.filter(s => s.category === catName);
            if (catSkills.length === 0) return null;

            return (
              <motion.div
                key={catName}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Category Subheader */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-md">
                    {categoryIcons[catName]}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {catName}
                  </h3>
                  <span className="text-[11px] font-extrabold text-cyan-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 ml-auto tracking-wider">
                    {catSkills.length} Skills
                  </span>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {catSkills.map((skill) => {
                    return (
                      <div
                        key={skill.name}
                        className="glass-card border border-slate-800 hover:border-cyan-500/30 rounded-3xl p-6 shadow-xl transition-all duration-300 space-y-4"
                      >
                        {/* Title & Percentage Badge Pill */}
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <i className={`fas ${skill.icon} text-cyan-400 text-lg`}></i>
                            <h4 className="text-base font-bold text-white">
                              {skill.name}
                            </h4>
                          </div>

                          {/* Percentage Badge */}
                          <span className="px-3 py-1 bg-slate-900 text-cyan-400 font-extrabold text-xs rounded-full border border-slate-800 shadow-md">
                            {skill.proficiency}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-1.5">
                          <div className="w-full bg-slate-900/90 rounded-full h-3 p-0.5 overflow-hidden border border-slate-800">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full rounded-full bg-gradient-primary shadow-sm"
                            />
                          </div>

                          <div className="flex justify-between items-center text-[10px] font-black text-slate-400 pt-0.5 uppercase tracking-widest">
                            <span>PROFICIENCY</span>
                            <span className="text-cyan-400">{skill.level}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
