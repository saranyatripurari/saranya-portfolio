import React from 'react';
import { Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onViewProjects: () => void;
  onContactMe: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewProjects,
  onContactMe,
  onDownloadResume,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Main Name Heading matching Screenshot 2 */}
        <h1
          id="hero-name-heading"
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Subtitle matching Screenshot 2 */}
        <p
          id="hero-roles-subtitle"
          className="text-lg sm:text-xl md:text-2xl text-[#8ba3c7] font-normal tracking-wide mb-6"
        >
          {PERSONAL_INFO.rolesSubtitle || "Software Developer | Python Developer | Passionate Problem Solver"}
        </p>

        {/* Bio Text matching Screenshot 2 */}
        <p
          id="hero-bio-paragraph"
          className="text-base sm:text-lg text-slate-300/90 max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
        >
          {PERSONAL_INFO.bio}
        </p>

        {/* Action Buttons Row matching Screenshot 2 */}
        <div
          id="hero-cta-group"
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* View Projects: Solid Mint Button */}
          <button
            id="hero-view-projects-btn"
            onClick={onViewProjects}
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#38efbb] hover:bg-[#34dbaa] text-[#091224] font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer shadow-md shadow-[#38efbb]/20"
          >
            View Projects
          </button>

          {/* Download Resume: Outline Mint Button */}
          <button
            id="hero-download-resume-btn"
            onClick={onDownloadResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent hover:bg-[#38efbb]/10 text-white border border-[#38efbb] font-medium text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#38efbb]" />
            <span>Download Resume</span>
          </button>

          {/* Contact Me: Outline Mint Button */}
          <button
            id="hero-contact-btn"
            onClick={onContactMe}
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-transparent hover:bg-[#38efbb]/10 text-white border border-[#38efbb] font-medium text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};
