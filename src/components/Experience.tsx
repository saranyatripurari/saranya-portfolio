import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { INTERNSHIPS_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2
          id="experience-section-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-normal"
        >
          Internship Experience
        </h2>
      </div>

      <div className="space-y-6">
        {INTERNSHIPS_DATA.map((internship, idx) => (
          <div
            key={idx}
            id={`internship-card-${idx}`}
            className="bg-[#0e1b33] border border-[#1b3052] rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:border-[#38efbb]/50 hover:shadow-xl hover:shadow-black/40"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#1b3052]/80">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {internship.company}
                </h3>
                <p className="text-base font-medium text-[#38efbb] mt-0.5">
                  {internship.role}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081224] border border-[#1b3052] text-xs sm:text-sm text-slate-300 font-mono self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-[#38efbb]" />
                <span>{internship.period}</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-slate-300">
              {internship.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38efbb] mt-2 shrink-0 shadow-[0_0_6px_rgba(56,239,187,0.8)]" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {internship.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-md text-xs font-semibold bg-[#081224] text-[#38efbb] border border-[#1b3052]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

