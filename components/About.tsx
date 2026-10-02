import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, CircuitBoard, Users, MapPin, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';
import kabirImg from './kabir.jpg';

const About: React.FC = () => {
  const bentoCards = [
    {
      title: 'Full-Stack Development',
      description: 'Building web applications with React.js frontend, Node.js and Express.js backend, and MongoDB database architecture.',
      icon: Code,
      accent: 'text-cyan-400'
    },
    {
      title: 'Embedded Systems & IoT',
      description: 'Developing hardware firmware for ESP32 and Raspberry Pi microcontrollers with real-time WebSockets streaming.',
      icon: Cpu,
      accent: 'text-emerald-400'
    },
    {
      title: 'PCB Design & Prototyping',
      description: 'Designing schematics, trace routing, footprint creation, and manufacturing circuit boards via 2D CNC prototyping.',
      icon: CircuitBoard,
      accent: 'text-amber-400'
    },
    {
      title: 'Leadership & Execution',
      description: 'Managing technical team projects, conducting presentations, product planning, and executing sprint prototypes.',
      icon: Users,
      accent: 'text-teal-400'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B1319] border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Centered Header matching target template */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            BACKGROUND & EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Story Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 max-w-4xl mx-auto space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <img 
              src={kabirImg} 
              alt="Muthu Mohamed Kabir - B.E. Electrical & Electronics Engineering Graduate" 
              width={112}
              height={112}
              className="w-28 h-28 rounded-2xl object-cover border-2 border-cyan-500/40 shadow-xl shrink-0"
            />
            <div className="space-y-3 text-slate-300 text-base leading-relaxed">
              <p>
                As a <strong className="text-white">B.E. Electrical &amp; Electronics Engineering (EEE)</strong> graduate, I bring together software engineering and hardware development.
              </p>
              <p>
                I build full-stack web applications using <strong className="text-white">React.js, Node.js, Express.js, and MongoDB</strong>, while also developing embedded hardware systems using <strong className="text-white">ESP32 microcontrollers, Raspberry Pi, and PCB Design</strong>.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-2">
              <GraduationCap size={16} className="text-cyan-400" /> B.E. Electrical &amp; Electronics
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-emerald-400" /> Tamil Nadu, India
            </span>
            <span className="flex items-center gap-2">
              <Globe size={16} className="text-amber-400" /> Open for Global &amp; GCC Roles
            </span>
          </div>
        </motion.div>

        {/* 4-Card Bento Grid matching target template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bentoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-md">
                  <card.icon className={card.accent} size={22} />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
