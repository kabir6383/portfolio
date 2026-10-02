import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070E13] py-14 text-slate-400 border-t border-slate-800 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        
        {/* 3-Column Footer Grid matching target template */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand & Social Links */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-md">
                <span className="font-mono-code font-bold text-lg text-gradient-primary">
                  MK /&gt;
                </span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Muthu Mohamed Kabir
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Full-Stack Web &amp; Embedded Hardware Engineer specializing in MERN stack, ESP32 microcontrollers, and PCB prototyping.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/kabir6383"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <i className="fab fa-github text-sm"></i>
              </a>

              <a
                href="mailto:muthukabir112@gmail.com"
                aria-label="Email Kabir"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+916380205821"
                aria-label="Call Kabir"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Achievements', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Contact Info
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-400" /> muthukabir112@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" /> +91 6380205821
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-400" /> Tamil Nadu, India (GCC Open)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <span>&copy; {new Date().getFullYear()} Muthu Mohamed Kabir. All rights reserved.</span>
          <span className="font-mono-code text-cyan-400">Crafted with React, Tailwind &amp; Framer Motion</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
