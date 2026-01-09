
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className={`fas ${project.icon}`}></i>
              </div>
              
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full mb-4">
                {project.category}
              </span>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex items-center text-blue-600 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform">
                Read More <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
