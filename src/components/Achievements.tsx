import React from 'react';
import { Trophy, Code2, Award, Star } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy className="w-8 h-8 text-[#38efbb]" />;
      case 'code':
        return <Code2 className="w-8 h-8 text-[#38efbb]" />;
      case 'award':
        return <Award className="w-8 h-8 text-[#38efbb]" />;
      default:
        return <Star className="w-8 h-8 text-[#38efbb]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
      {/* Section Title matching Screenshot 4 */}
      <div className="text-center mb-14">
        <h2
          id="achievements-section-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-normal"
        >
          Achievements
        </h2>
      </div>

      {/* 2-Column Balanced Grid for Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {ACHIEVEMENTS_DATA.map((item, idx) => {
          const CardWrapper = item.url ? 'a' : 'div';
          const linkProps = item.url ? { href: item.url, target: '_blank', rel: 'noreferrer' } : {};
          return (
            <CardWrapper
              key={idx}
              id={`achievement-card-${idx}`}
              {...linkProps}
              className="bg-[#0e1b33] border border-[#1b3052] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#38efbb]/50 hover:shadow-xl hover:shadow-black/40 group block cursor-pointer"
            >
              <div className="p-4 rounded-2xl bg-[#38efbb]/10 border border-[#38efbb]/20 mb-5 group-hover:scale-105 transition-transform">
                {getIcon(item.icon)}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-base font-semibold text-[#38efbb] mb-3">
                {item.subtitle}
              </p>

              <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm">
                {item.description}
              </p>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

