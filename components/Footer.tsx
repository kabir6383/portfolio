
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-white tracking-tighter">
            KABIR
          </div>
          
          <div className="flex space-x-6 text-xl">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/kabir6383" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
            <a href="mailto:muthukabir112@gmail.com" className="hover:text-white transition-colors"><i className="fas fa-envelope"></i></a>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Muthu Mohamed Kabir. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
