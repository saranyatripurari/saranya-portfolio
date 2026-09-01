import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Title matching Screenshot 6 */}
      <h2
        id="certifications-section-heading"
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 tracking-normal"
      >
        Certifications
      </h2>

      {/* Grid of Certification Cards matching Screenshot 6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS_DATA.map((cert, idx) => (
          <div
            key={idx}
            id={`cert-card-${idx}`}
            className="bg-[#0e1b33] border border-[#1b3052] rounded-2xl p-7 flex flex-col justify-center transition-all duration-300 hover:border-[#38efbb]/50 hover:shadow-xl hover:shadow-black/40"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              {cert.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-400 font-normal">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
