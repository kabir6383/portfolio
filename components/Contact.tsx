
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

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
      setError('Internal error: form unavailable');
      setIsSending(false);
      return;
    }

    emailjs.sendForm('service_t3oxqph', 'template_l4vp3fk', form, 'W79V6Hj-7uw8ON9Ll')
      .then((res) => {
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
        setError('Failed to send message — ' + readable);
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
    <form onSubmit={sendEmail} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input 
          name="user_name" 
          type="text" 
          placeholder="Name" 
          required 
          disabled={sent || isSending}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-white placeholder:text-slate-500" 
        />
        
        <input 
          name="user_email" 
          type="email" 
          placeholder="Email" 
          required 
          disabled={sent || isSending}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-white placeholder:text-slate-500" 
        />
      </div>

      <textarea 
        name="message" 
        rows={5} 
        placeholder="How can I help you?" 
        required 
        disabled={sent || isSending}
        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-white placeholder:text-slate-500 resize-none"
      ></textarea>

      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="text-sm text-red-400 font-medium" 
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <button 
        type="submit" 
        disabled={sent || isSending}
        className={`w-full py-4 font-bold rounded-2xl transition-all shadow-lg ${
          sent 
            ? 'bg-green-500 text-white shadow-green-500/20' 
            : 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/20 hover:shadow-blue-500/40'
        }`}
      >
        {isSending ? (
          <span className="flex items-center justify-center gap-2">
            <i className="fas fa-circle-notch animate-spin"></i> Sending...
          </span>
        ) : (sent ? 'Message Sent!' : 'Send Message')}
      </button>
    </form>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In <span className="text-blue-500">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"
          ></motion.div>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Let's collaborate on something extraordinary. Reach out for opportunities or technical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { href: 'tel:+916380205821', icon: 'fa-phone-alt', label: 'Call Me', value: '+91 6380205821' },
            { href: 'mailto:muthukabir112@gmail.com', icon: 'fa-envelope', label: 'Email Me', value: 'muthukabir112@gmail.com' },
            { href: 'https://github.com/kabir6383', icon: 'fa-github', label: 'GitHub', value: 'github.com/kabir6383' },
          ].map((link, i) => (
            <motion.a
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              href={link.href}
              className="flex flex-col items-center p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.08] transition-all group"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i className={`fas ${link.icon}`}></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{link.label}</h4>
              <p className="text-slate-400 text-sm font-medium">{link.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
