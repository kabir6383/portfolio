import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Professional <span className="text-blue-500">Journey</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translateX-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/0 via-blue-500/50 to-blue-600/0 hidden md:block"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center justify-between md:justify-normal w-full group ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translateX-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 transition-transform group-hover:scale-150"></div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:border-blue-500/30 transition-all">
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-4">{exp.role}</h3>
                    <div className="text-blue-500 font-bold text-sm mt-1">{exp.company}</div>
                    <p className="mt-4 text-slate-400 leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
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
