import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ConnectWithMe: React.FC = () => {
  const socialLinks = [
    {
      id: 'connect-gmail',
      title: 'Gmail',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
    },
    {
      id: 'connect-linkedin',
      title: 'LinkedIn',
      href: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      id: 'connect-github',
      title: 'GitHub',
      href: PERSONAL_INFO.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <section id="connect" className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Title matching Screenshot 6 */}
      <h2
        id="connect-section-heading"
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 tracking-normal"
      >
        Connect With Me
      </h2>

      {/* Social Cards Row matching Screenshot 6 */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="bg-[#0e1b33] border border-[#1b3052] rounded-2xl w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center gap-2.5 transition-all duration-200 hover:border-[#38efbb]/70 hover:shadow-lg hover:shadow-black/40 group cursor-pointer"
            >
              <Icon className="w-7 h-7 text-[#38efbb] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                {item.title}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

