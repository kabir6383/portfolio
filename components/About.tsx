
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="text-blue-500">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-slate-400"
          >
            <p className="leading-relaxed">
              I am a dynamic <strong className="text-white">B.E. (EEE) graduate</strong> with a unique dual-competency in Core Engineering and Advanced Software Development. My expertise lies at the intersection of electrical infrastructure and modern AI integration.
            </p>
            <p className="leading-relaxed">
              I have a proven track record in building AI-driven solutions for <span className="text-blue-400 font-bold">Energy Efficiency</span> and <span className="text-cyan-400 font-bold">Smart Automation</span>. My projects bridge the gap between industrial hardware (PLC/IoT) and high-level web ecosystems (MERN).
            </p>
            <p className="leading-relaxed border-l-2 border-blue-500/50 pl-6 italic bg-blue-500/5 py-4 rounded-r-2xl">
              "Currently architecting full-stack systems and exploring mobile development with Node.js and Flutter. Aiming to bring innovative industrial automation to the global stage."
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Core Information</h3>
            <ul className="space-y-6">
              {[
                { icon: 'fa-map-marker-alt', label: 'Location', value: 'Tamil Nadu, India' },
                { icon: 'fa-envelope', label: 'Email', value: 'muthukabir112@gmail.com' },
                { icon: 'fa-passport', label: 'Status', value: 'Ready for GCC Relocation' },
                { icon: 'fa-globe-asia', label: 'Languages', value: 'English, Tamil' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                    <p className="font-bold text-slate-200">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
