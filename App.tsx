
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { PROJECTS, SKILLS, ACHIEVEMENTS_DATA, ACTIVITIES_LIST } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Web Dev' | 'AI & ML' | 'Data Science' | 'Game Dev'>('All');

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const tabs: ('All' | 'Web Dev' | 'AI & ML' | 'Data Science' | 'Game Dev')[] = ['All', 'Web Dev', 'AI & ML', 'Data Science', 'Game Dev'];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-[#f0fdfa] dark:bg-slate-950 px-6 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-8 relative inline-block group">
             <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-400 to-sky-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-all animate-pulse"></div>

             <img 
               src="https://raw.githubusercontent.com/aditirev/aditirev.github.io/main/profile.png" 
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "/profile.png";
               }}
               alt="Aditi Sanjay Revankar" 
               className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl relative z-10 transition-transform duration-500 hover:scale-105"
             />
          </div>
          {/* Hero Name: Black and Sky Theme */}
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 tracking-tight">
            Aditi Sanjay Revankar <span className="text-sky-500"></span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-10 max-w-2xl mx-auto">
            Data Science Engineering Student @ RNSIT
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a 
              href="https://www.linkedin.com/in/aditi-revankar-86729b2aa" 
              target="_blank" 
              className="px-6 py-3 bg-[#0077b5] text-white rounded-xl font-bold hover:-translate-y-1 transition-all flex items-center gap-2 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/aditirev" 
              target="_blank"
              className="px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-700 hover:-translate-y-1 transition-all flex items-center gap-2 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a 
              href="mailto:revankaraditi17@gmail.com" 
              className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all flex items-center gap-2 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>


            <div className="mt-6 flex flex-wrap gap-4">
            <a
            href="/Aditi Sanjay Revankar's Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-700 hover:-translate-y-1 transition-all flex items-center gap-2 shadow-lg">
             View Resume
  </a>
</div>

            <a 
              href="https://medium.com/@aditi.revankar17" 
              target="_blank"
              className="px-6 py-3 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-all flex items-center gap-2 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4"/><circle cx="12" cy="7" r="4"/></svg>
              Blog
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <Section id="about" title="About Me" light>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-3/5 space-y-6">
            <p className="text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              I’m a Data Science Engineering student passionate about blending technology and creativity to solve real-world problems. My interests span data analytics, front-end development, game development, and animation.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Beyond academics, I’m actively involved in my college community through technical, data science, and literature clubs. I enjoy collaborating with people, organizing engaging events, and expressing my creativity through writing.
            </p>
          </div>
          <div className="lg:w-2/5 w-full bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Education
            </h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-emerald-100 dark:border-emerald-800">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-400 border-4 border-white dark:border-slate-800"></div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight">RNS Institute of Technology</h4>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">Bachelor of Computer Science (Data Science)</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">2022 — 2026 (Currently studying)</p>
              </div>
              <div className="relative pl-6 border-l-2 border-sky-100 dark:border-sky-800">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-sky-400 border-4 border-white dark:border-slate-800"></div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight">Swargarani School and P.U. College</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">2010 — 2022</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(['Language', 'Data & Big Data', 'Framework', 'Tool', 'Operating System', 'Currently Learning'] as const).map(category => (
            <div key={category} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-emerald-200 transition-all">
              <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                {category}
                <span className={`w-2 h-2 rounded-full ${category.includes('Learning') ? 'bg-sky-400 animate-pulse' : 'bg-emerald-400'}`}></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <span 
                    key={skill.name} 
                    className="px-3 py-1.5 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-100 dark:border-slate-600 hover:border-emerald-200 hover:text-emerald-600 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Work & Projects" light>
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-emerald-500 text-white shadow-lg' 
                : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" title="Achievements and Certifications">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements Column */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-2">
              <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </span>
              Achievements
            </h3>
            
            {ACHIEVEMENTS_DATA.achievements.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{group.category}</h4>
                <div className="space-y-3">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all hover:border-emerald-200">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                  {group.researchUrl && (
                    <div className="mt-2">
                      <a 
                        href={group.researchUrl} 
                        target="_blank" 
                        className="inline-flex items-center gap-2 px-6 py-2 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-xl text-xs font-bold hover:bg-sky-100 transition-all border border-sky-100 dark:border-sky-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                        View Research Paper
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-2">
              <span className="p-2 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3"/><path d="m15 12-3 3-3-3"/><path d="M2 17v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"/></svg>
              </span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {ACHIEVEMENTS_DATA.certifications.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-sky-200 transition-colors">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-1">{item.title}</h4>
                  <p className="text-sky-500 dark:text-sky-400 font-medium text-sm">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Activities Section */}
      <Section id="activities" title="Activities & Other Interests" light>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ACTIVITIES_LIST.map((activity) => (
            <div key={activity.id} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18.1H3"/></svg>
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-1">{activity.title}</h4>
              <p className="text-sky-500 dark:text-sky-400 font-bold text-[10px] mb-4 uppercase tracking-widest">{activity.role}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" light className="pb-40">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/aditirev" target="_blank" className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:scale-110 transition-all text-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/aditi-revankar-86729b2aa" target="_blank" className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:scale-110 transition-all text-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:revankaraditi17@gmail.com" className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:scale-110 transition-all text-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a href="https://www.instagram.com/aditi_revankar03/" target="_blank" className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:scale-110 transition-all text-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:w-3/5">
            <form className="space-y-6 bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    className="w-full px-5 py-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl outline-none focus:border-sky-500 transition-all dark:text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Hello!" 
                    className="w-full px-5 py-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl outline-none focus:border-sky-500 transition-all dark:text-white text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full px-5 py-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl outline-none focus:border-sky-500 transition-all dark:text-white text-sm resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Aditi Sanjay Revankar. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 dark:text-slate-500 text-sm font-bold">
            <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="hover:text-sky-500 transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-sky-500 transition-colors">About Me</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="hover:text-sky-500 transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-sky-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;