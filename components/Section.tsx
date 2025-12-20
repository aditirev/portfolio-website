
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '', light = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${light ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/30'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 dark:text-slate-100 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-emerald-200 dark:bg-emerald-600 rounded-full"></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
