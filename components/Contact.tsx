
import React, { useState, useRef, useEffect } from 'react';
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

    // capture the form element because React's SyntheticEvent is pooled
    const form = e.currentTarget;
    if (!form) {
      setError('Internal error: form unavailable');
      setIsSending(false);
      return;
    }

    // mail send
    emailjs.sendForm('service_t3oxqph', 'template_l4vp3fk', form, 'W79V6Hj-7uw8ON9Ll')
      .then((res) => {
        console.debug('EmailJS success', res);
        // Reset Form
        setSent(true);
        form.reset();

        // clear any previous timeout and schedule reset
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => {
          setSent(false);
          timeoutRef.current = null;
        }, 10000);
      })
      .catch((err) => {
        console.error('Email send error', err);
        // Prefer readable message when available
        const readable = (err && (err.text || err.message)) ? (err.text || err.message) : JSON.stringify(err);
        setError('Failed to send message — ' + readable);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <form onSubmit={sendEmail} className="space-y-6 max-w-md mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input name="user_name" type="text" placeholder="Your Name" required disabled={sent || isSending}
          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" />
        
        <input name="user_email" type="email" placeholder="Your Email" required disabled={sent || isSending}
          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" />
      </div>

      <textarea name="message" rows={5} placeholder="Your Message" required disabled={sent || isSending}
        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>

      {error && <p className="text-sm text-red-500 mt-2" role="alert">{error}</p>}

      <button type="submit" disabled={sent || isSending}
        className={`w-full py-4 font-bold rounded-2xl transition-all ${
          sent ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-500'
        }`}>
        {isSending ? 'Sending...' : (sent ? 'Message Sent!' : 'Send Message')}
      </button>
    </form>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            I am currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="tel:+916380205821"
            className="flex flex-col items-center p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-400 hover:bg-blue-50 transition-all group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Call Me</h4>
            <p className="text-slate-600">+91 6380205821</p>
          </a>

          <a
            href="mailto:muthukabir112@gmail.com"
            className="flex flex-col items-center p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-400 hover:bg-blue-50 transition-all group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i className="fas fa-envelope"></i>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Email Me</h4>
            <p className="text-slate-600">muthukabir112@gmail.com</p>
          </a>

          <a
            href="https://github.com/kabir6383"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-400 hover:bg-blue-50 transition-all group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i className="fab fa-github"></i>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">GitHub</h4>
            <p className="text-slate-600">github.com/kabir6383</p>
          </a>
        </div>

        <div className="mt-20 max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
