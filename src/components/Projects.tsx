import React, { useState } from 'react';
import { Github, ArrowRight, CheckCircle } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header matching Screenshot 5 */}
      <div className="flex items-center justify-between gap-4 mb-12">
        <h2
          id="projects-section-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-normal"
        >
          Projects
        </h2>

        {/* View All Projects Outline Button matching Screenshot 5 */}
        <a
          id="view-all-projects-btn"
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-transparent hover:bg-[#38efbb]/10 text-[#38efbb] border border-[#38efbb] text-sm font-medium transition-all group cursor-pointer"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4 text-[#38efbb] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* 3 Projects Grid matching Screenshot 5 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="bg-[#0e1b33] border border-[#1b3052] rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-[#38efbb]/50 hover:shadow-xl hover:shadow-black/40 group"
          >
            {/* Top Project General Photo matching Screenshot 5 */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900 mb-5">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2.5">
                  {project.title}
                </h3>

                <p className="text-slate-300/80 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags Pills matching Screenshot 5 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#091224] text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: View on GitHub Link matching Screenshot 5 */}
              <div className="pt-3 flex items-center justify-between">
                <a
                  id={`project-github-link-${project.id}`}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#38efbb] hover:underline"
                >
                  <Github className="w-4 h-4 text-[#38efbb]" />
                  <span>View on GitHub</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div
          id="project-details-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-[#0e1b33] border border-[#1b3052] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-[#38efbb]">
                  {activeModalProject.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                id="close-project-modal-btn"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#1b3052]">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{activeModalProject.description}</p>

              <div>
                <h4 className="text-white font-semibold mb-2">Key Highlights & Architecture:</h4>
                <ul className="space-y-2">
                  {activeModalProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[#38efbb] mt-1 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#091224] text-[#38efbb] border border-[#38efbb]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1b3052] flex items-center justify-between">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38efbb] hover:bg-[#34dbaa] text-[#091224] font-semibold text-sm tracking-wide transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Open GitHub Repository</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
