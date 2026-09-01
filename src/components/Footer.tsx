import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-[#070c1d] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            id="footer-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#111c38] text-slate-300 hover:text-teal-300 hover:bg-teal-500/10 border border-slate-800 transition-all cursor-pointer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            id="footer-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#111c38] text-slate-300 hover:text-teal-300 hover:bg-teal-500/10 border border-slate-800 transition-all cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            id="footer-mail-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full bg-[#111c38] text-slate-300 hover:text-teal-300 hover:bg-teal-500/10 border border-slate-800 transition-all cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-slate-400 text-sm space-y-1">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> using React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
