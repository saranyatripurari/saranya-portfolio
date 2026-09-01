import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1128]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-[#0a1128]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => scrollToSection('home')}
            className="flex items-center text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#38efbb] font-serif uppercase group-hover:opacity-90 transition-opacity">
              {PERSONAL_INFO.shortName}
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer py-1.5 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#38efbb] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#38efbb]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#0d1633] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-base font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-teal-500/15 text-teal-300 border-l-4 border-teal-400'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,1)]" />}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold text-teal-300 border border-teal-500/50 hover:bg-teal-500/15 transition-all"
            >
              View Full Resume
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
