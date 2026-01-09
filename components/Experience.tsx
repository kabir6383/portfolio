
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto timeline-line">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className={`mb-12 flex flex-col md:flex-row items-center w-full ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2"></div>
              <div className="z-10 absolute left-5 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 shadow-md"></div>
              <div className={`w-full md:w-1/2 pl-12 md:px-10 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <span className="text-blue-600 font-bold text-sm">{exp.date}</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{exp.role}</h3>
                  <p className="text-slate-500 font-medium mb-4 italic">{exp.company}</p>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
