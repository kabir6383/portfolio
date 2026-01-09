
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-600">
            <p className="leading-relaxed">
              I am a dynamic <strong className="text-slate-900">B.E. (EEE) graduate</strong> with a unique dual-competency in Core Engineering (HVAC, AutoCAD) and Advanced Software Development.
            </p>
            <p className="leading-relaxed">
              I have a proven track record in building AI-driven solutions for <span className="text-blue-600 font-medium">Energy Efficiency</span> and <span className="text-blue-600 font-medium">Smart Automation</span>. My projects often bridge the gap between hardware and high-level software.
            </p>
            <p className="leading-relaxed italic">
              Currently actively expanding my full-stack and mobile capabilities with Node.js, Flask, and Flutter. Seeking a challenging role in the Gulf region.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow-inner border border-slate-200">
            <h3 className="text-xl font-semibold mb-6 text-slate-800">Key Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">Tamil Nadu, India (Willing to relocate)</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">muthukabir112@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <i className="fas fa-passport"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="font-medium">Passport Valid & Ready for GCC</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <i className="fas fa-globe-asia"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Languages</p>
                  <p className="font-medium">English, Tamil</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
