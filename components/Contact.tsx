import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, MapPin, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSending(true);

    const form = e.currentTarget;
    if (!form) {
      setError('Form unavailable');
      setIsSending(false);
      return;
    }

    emailjs.sendForm('service_t3oxqph', 'template_l4vp3fk', form, 'W79V6Hj-7uw8ON9Ll')
      .then(() => {
        setSent(true);
        form.reset();
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          setSent(false);
          timeoutRef.current = null;
        }, 10000);
      })
      .catch((err) => {
        const readable = (err && (err.text || err.message)) ? (err.text || err.message) : JSON.stringify(err);
        setError('Transmission failed: ' + readable);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <form onSubmit={sendEmail} className="space-y-4 font-sans text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs text-slate-300 font-bold uppercase tracking-wider">YOUR NAME</label>
          <input 
            name="user_name" 
            type="text" 
            placeholder="Enter your name" 
            required 
            disabled={sent || isSending}
            className="w-full px-4 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl focus:border-cyan-400 focus:bg-slate-900 outline-none transition-all text-white placeholder:text-slate-500 font-sans text-xs" 
          />
        </div>
        
        <div className="space-y-1.5">
          <label className="text-xs text-slate-300 font-bold uppercase tracking-wider">YOUR EMAIL</label>
          <input 
            name="user_email" 
            type="email" 
            placeholder="Enter your email" 
            required 
            disabled={sent || isSending}
            className="w-full px-4 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl focus:border-cyan-400 focus:bg-slate-900 outline-none transition-all text-white placeholder:text-slate-500 font-sans text-xs" 
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-slate-300 font-bold uppercase tracking-wider">MESSAGE</label>
        <textarea 
          name="message" 
          rows={4} 
          placeholder="Describe your project requirements, job opportunities, or inquiries..." 
          required 
          disabled={sent || isSending}
          className="w-full px-4 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl focus:border-cyan-400 focus:bg-slate-900 outline-none transition-all text-white placeholder:text-slate-500 font-sans text-xs resize-none"
        ></textarea>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="text-xs text-rose-400 font-extrabold" 
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <button 
        type="submit" 
        disabled={sent || isSending}
        className="w-full py-4 rounded-full font-black text-xs tracking-wider uppercase transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 bg-gradient-primary text-slate-950 hover:opacity-95"
      >
        {isSending ? (
          <span className="flex items-center gap-2">
            <i className="fas fa-circle-notch animate-spin"></i> SENDING MESSAGE...
          </span>
        ) : (sent ? 'MESSAGE SENT SUCCESSFULLY' : 'SEND MESSAGE')}
      </button>
    </form>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B1319] border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-14">
        
        {/* Centered Header matching target template */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            CONNECT &amp; COLLABORATE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        {/* 2-Column Split matching target template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Panel: Contact Links & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {[
                { href: 'mailto:muthukabir112@gmail.com', icon: <Mail size={18} />, label: 'Email', value: 'muthukabir112@gmail.com' },
                { href: 'tel:+916380205821', icon: <Phone size={18} />, label: 'Phone', value: '+91 6380205821' },
                { href: 'https://github.com/kabir6383', icon: <i className="fab fa-github text-lg"></i>, label: 'GitHub', value: 'github.com/kabir6383' },
                { href: '#', icon: <MapPin size={18} />, label: 'Location', value: 'Tamil Nadu, India (GCC Open)' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4.5 glass-card border border-slate-800 rounded-3xl hover:border-cyan-500/30 transition-all group shadow-xl"
                >
                  <div className="w-11 h-11 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-gradient-primary group-hover:text-slate-950 transition-all shadow-md shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                    <p className="text-white font-bold text-sm mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500"></span>
              <span className="text-xs font-bold text-slate-200">Available for Full-Stack &amp; Embedded Engineering roles</span>
            </div>
          </div>

          {/* Right Panel: Form Box */}
          <div className="lg:col-span-7 glass-card border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
