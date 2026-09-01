import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
      <div>
        <h2
          id="about-section-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 tracking-normal"
        >
          About Me
        </h2>

        <div className="space-y-6 text-slate-300/90 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            {PERSONAL_INFO.aboutParagraph1 ||
              "I am a passionate Software Developer with a focus on building user-friendly and responsive web applications. Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Kakinada Institute of Engineering and Technology (2023–2027)."}
          </p>
          <p>
            {PERSONAL_INFO.aboutParagraph2 ||
              "I believe in writing clean, maintainable code and creating solutions that make a real impact. My journey in software engineering is driven by continuous learning and a commitment to excellence."}
          </p>
        </div>
      </div>
    </section>
  );
};


