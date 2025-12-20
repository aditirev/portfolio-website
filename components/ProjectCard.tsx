
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
      {project.isCurrent && (
        <div className="absolute top-4 right-4 z-20">
          <span className="flex items-center gap-1 px-3 py-1 bg-sky-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full animate-pulse">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Current Work
          </span>
        </div>
      )}
      
      <div className="flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 flex-grow leading-relaxed">{project.description}</p>
        
        <div className="flex gap-3 mt-auto">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                project.demoUrl 
                ? 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600' 
                : 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 hover:bg-slate-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
