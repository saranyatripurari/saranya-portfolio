import React from 'react';
import {
  Code,
  FileCode,
  Database,
  Cpu,
  Binary,
  Terminal,
  FolderGit2,
  Users,
  MessageSquare,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const renderIcon = (type: string, colorClass = 'text-[#38efbb]') => {
    switch (type) {
      case 'python':
      case 'js':
        return <Code className={`w-5 h-5 ${colorClass}`} />;
      case 'sql':
        return <Database className={`w-5 h-5 ${colorClass}`} />;
      case 'html5':
      case 'css3':
        return <FileCode className={`w-5 h-5 ${colorClass}`} />;
      case 'dsa':
        return <Binary className={`w-5 h-5 ${colorClass}`} />;
      case 'algo':
        return <Cpu className={`w-5 h-5 ${colorClass}`} />;
      case 'ml':
        return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
      case 'github':
        return <FolderGit2 className={`w-5 h-5 ${colorClass}`} />;
      case 'vscode':
        return <Terminal className={`w-5 h-5 ${colorClass}`} />;
      case 'comm':
        return <MessageSquare className={`w-5 h-5 ${colorClass}`} />;
      case 'team':
        return <Users className={`w-5 h-5 ${colorClass}`} />;
      case 'problem':
        return <Lightbulb className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Code className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2
          id="skills-section-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-normal"
        >
          Technical Skills
        </h2>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            id={`skill-card-${idx}`}
            className="bg-[#0e1b33] border border-[#1b3052] rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:border-[#38efbb]/50 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6 border-b border-[#1b3052]/80 pb-3">
                {category.title}
              </h3>

              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-3.5 text-slate-200 text-base font-medium"
                  >
                    <span className="shrink-0">{renderIcon(skill.icon, skill.color)}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

