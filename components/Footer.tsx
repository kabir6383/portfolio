
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a111f] py-12 text-slate-500 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black text-white tracking-tighter uppercase italic hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 cursor-default">
            KABIR
          </div>


          
          <div className="flex space-x-8 text-xl">
            <a href="#" className="hover:text-blue-500 transition-all hover:-translate-y-1"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/kabir6383" className="hover:text-blue-500 transition-all hover:-translate-y-1"><i className="fab fa-github"></i></a>
            <a href="mailto:muthukabir112@gmail.com" className="hover:text-blue-500 transition-all hover:-translate-y-1"><i className="fas fa-envelope"></i></a>
          </div>
          
          <div className="text-xs font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Muthu Mohamed Kabir
            <span className="mx-2 text-slate-800">|</span>
            Built for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
