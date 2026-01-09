
import React from 'react';
import kabirImg from './kabirimg.jpg';
import resumePdf from './Muthu_Mohamed_Kabir_Resume.pdf';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <img
          src={kabirImg}
          alt="Muthu Mohamed Kabir"
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <h1 className="mt-8 text-4xl md:text-6xl font-bold text-white tracking-tight">
        Muthu Mohamed Kabir
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-slate-300 font-light max-w-2xl">
        Electrical Engineer <span className="text-blue-400 mx-2">|</span> Full Stack Developer <span className="text-blue-400 mx-2">|</span> IoT Specialist
      </p>
      
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
        >
          Hire Me
        </a>
        <a
          href={resumePdf}
          download="Muthu_Mohamed_Kabir_Resume.pdf"
          className="px-8 py-3 bg-transparent border-2 border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-slate-800 hover:border-slate-400 transition-all flex items-center justify-center gap-2"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-file-pdf"></i> Save as PDF
        </a>
      </div>

      <div className="mt-16 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-white transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
