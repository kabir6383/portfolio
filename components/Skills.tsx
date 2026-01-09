
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Programming', 'Web', 'Engineering', 'IoT', 'Learning'];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat} className={`bg-white p-6 rounded-2xl shadow-sm border ${cat === 'Learning' ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100'}`}>
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                {cat === 'Learning' ? <i className="fas fa-rocket text-blue-500"></i> : null}
                {cat === 'Learning' ? 'Learning (Pursuing)' : cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all cursor-default group"
                  >
                    <i className={`fab ${skill.icon} group-hover:scale-110 transition-transform`}></i>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
