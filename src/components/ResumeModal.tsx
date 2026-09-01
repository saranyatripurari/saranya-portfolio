import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, ExternalLink, Maximize2, Minimize2, ZoomIn, ZoomOut } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, INTERNSHIPS_DATA, PROJECTS_DATA } from '../data/portfolioData';

const RESUME_CERTIFICATIONS = [
  { title: "SQL (Basic / Intermediate)", issuer: "HackerRank" },
  { title: "Data Analysis with Python", issuer: "IBM" },
  { title: "Foundations of Modern Machine Learning (FMML)", issuer: "IIIT Hyderabad" },
  { title: "TCS CodeVita Season XII", issuer: "Global Rank 6023 (Certificate of Achievement)" },
  { title: "Data Structures and Algorithms Certification", issuer: "Problem Solving & Data Structures in Python" },
];

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
TRIPURARI SARANYA
+91 ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}
LeetCode: https://leetcode.com/u/SaranyaTripurari/
HackerRank: https://www.hackerrank.com/profile/saranyatripurari

SUMMARY
Aspiring Software Developer with strong skills in Python, Machine Learning, Data Structures, Algorithms, and Web Development. Experienced in building ML and computer vision projects through internships and certifications. Passionate about developing AI-driven solutions and solving real-world problems.

EDUCATION
• B.Tech in Artificial Intelligence and Machine Learning – BVC Engineering College, Odalarevu (2022–2026) | CGPA: 8.0/10.0
• Intermediate (MPC) – Sri Chaitanya Junior College (2020–2022) | Percentage: 87.8%
• Secondary School Certificate (SSC) – Pragathi English Medium High School (2019–2020) | Percentage: 95.8%

SKILLS
• Programming Languages: Python, SQL
• Web Technologies: HTML5, CSS3, JavaScript, Tailwind CSS, React (Basics)
• Frameworks & Libraries: Flask, FastAPI, Scikit-Learn, TensorFlow, PyTorch, NumPy, Pandas
• Developer Tools: Git, GitHub, VS Code, Google Colab, Jupyter Notebook
• Core Concepts: Data Structures & Algorithms, OOP, Machine Learning, Computer Vision, REST APIs

INTERNSHIP EXPERIENCE
• Saadhyam – AI Developer Intern (Jun 2026 – Jul 2026)
  - Curated and structured JSON/JSONL datasets for LLM training; developed responsive web modules using HTML, CSS, JavaScript.

• Google AI/ML Virtual Internship – AICTE EduSkills (Apr 2025 – Jun 2025)
  - Trained and evaluated supervised and unsupervised ML models in Python with EDA and feature engineering.

• Google Android Developer Virtual Internship – AICTE EduSkills (Jan 2025 – Mar 2025)
  - Developed Android application components focusing on UI/UX lifecycle and mobile app architecture.

• Web Full Stack Developer – AICTE EduSkills (Oct 2024 – Dec 2024)
  - Built responsive, accessible web interfaces using HTML5, CSS3, and modern JavaScript.

PROJECTS
• AI Interview Preparation Assistant [GitHub: https://github.com/saranyatripurari/AI_Interview_Assistant]
  - Developed AI-powered interview prep application using FastAPI and Google Gemini AI for dynamic question generation and real-time response evaluation.
  - Built clean, responsive UI with HTML5, CSS3, JavaScript, and Jinja2 templates.
  - Tech Stack: Python, FastAPI, Google Gemini AI, HTML5, CSS3, JavaScript, Jinja2

• Employee Promotion Prediction System [GitHub: https://github.com/saranyatripurari/employee-promotion-prediction]
  - Built ML classification pipeline on HR Analytics dataset with feature engineering, achieving 92%+ model accuracy.
  - Connected trained model via Flask REST API with interactive frontend for instant promotion predictions.
  - Tech Stack: Python, Flask, Machine Learning, Scikit-Learn, HTML5, CSS3, JavaScript

• Visual Crowd Density & Flow Analysis [GitHub: https://github.com/saranyatripurari/visual-crowd-density-and-flow-analysis]
  - Developed deep learning crowd density estimation system using CNN and MCNN architectures on ShanghaiTech dataset.
  - Trained models in TensorFlow and PyTorch for density map generation and flow analysis.
  - Tech Stack: Python, Computer Vision, CNN, MCNN, TensorFlow, PyTorch

CERTIFICATIONS
• SQL (Basic / Intermediate) – HackerRank
• Data Analysis with Python – IBM
• Foundations of Modern Machine Learning (FMML) – IIIT Hyderabad
• TCS CodeVita Season XII – Global Rank 6023 (Certificate of Achievement)
• Data Structures and Algorithms Certification

CODING PROFILES & ACHIEVEMENTS
• LeetCode: https://leetcode.com/u/SaranyaTripurari/ (Solved 100+ problems in DSA and Problem Solving in Python)
• HackerRank: https://www.hackerrank.com/profile/saranyatripurari (SQL Basic & Intermediate Certified, Python Problem Solving)
• TCS CodeVita Season XII: Global Rank 6023 (Certificate of Achievement)
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-overlay"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md overflow-hidden ${
        isFullScreen ? 'p-0' : 'p-2 sm:p-4 md:p-6'
      }`}
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className={`bg-[#0b1328] border border-slate-700/80 flex flex-col shadow-2xl overflow-hidden transition-all duration-200 ${
          isFullScreen
            ? 'w-full h-full max-w-none max-h-none rounded-none'
            : 'w-full max-w-5xl h-[95vh] rounded-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-[#070e1e] shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#38efbb]" />
            <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-normal truncate">
              Tripurari Saranya — Resume
            </h3>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            <div className="hidden md:flex items-center gap-1 mr-2 px-2 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
              <button
                onClick={() => setZoomLevel(prev => Math.max(80, prev - 10))}
                className="p-1 hover:text-white transition-colors cursor-pointer"
                title="Zoom Out"
                disabled={zoomLevel <= 80}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] px-1 w-9 text-center font-medium">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(130, prev + 10))}
                className="p-1 hover:text-white transition-colors cursor-pointer"
                title="Zoom In"
                disabled={zoomLevel >= 130}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Copy Text Button */}
            <button
              onClick={handleCopyText}
              id="resume-copy-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer border border-slate-700/60"
              title="Copy formatted resume text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#38efbb]" />
                  <span className="text-[#38efbb] hidden sm:inline font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            {/* Print / Download Button */}
            <button
              onClick={handlePrint}
              id="resume-download-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#38efbb] hover:bg-[#34dbaa] text-[#091224] text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
              title="Download or Print PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Print PDF</span>
            </button>

            {/* Toggle Full Screen Button */}
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              id="resume-fullscreen-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer hidden sm:inline-flex"
              title={isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
            >
              {isFullScreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-resume-modal-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Preview Container with Full Scrolling from top to bottom */}
        <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6 md:p-8 bg-[#091224]/95 flex flex-col items-center">
          {/* Printable White Resume Paper Sheet with Complete Structured Sections */}
          <div
            id="printable-resume-sheet"
            className="w-full max-w-[850px] bg-white text-black p-6 sm:p-10 md:p-12 shadow-2xl rounded-sm font-sans leading-relaxed text-[13px] sm:text-[14px] my-2 transition-transform duration-150 origin-top"
            style={{
              color: '#000000',
              transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : undefined,
            }}
          >
            {/* 1. Header with Contact Info & All Profile Links */}
            <div className="text-center pb-3 mb-4 border-b-2 border-black">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-black mb-1">
                TRIPURARI SARANYA
              </h1>
              <div className="text-xs sm:text-[13.5px] text-neutral-900 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-medium">
                <span>+91 {PERSONAL_INFO.phone}</span>
                <span className="text-neutral-400 font-bold">•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-black font-semibold">
                  {PERSONAL_INFO.email}
                </a>
                <span className="text-neutral-400 font-bold">•</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="text-xs sm:text-[13.5px] text-neutral-900 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1.5 font-medium">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-blue-800 font-bold inline-flex items-center gap-0.5"
                >
                  LinkedIn <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                </a>
                <span className="text-neutral-400 font-bold">•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-black font-bold inline-flex items-center gap-0.5"
                >
                  GitHub <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                </a>
                <span className="text-neutral-400 font-bold">•</span>
                <a
                  href="https://leetcode.com/u/SaranyaTripurari/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-amber-800 font-bold inline-flex items-center gap-0.5"
                >
                  LeetCode <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                </a>
                <span className="text-neutral-400 font-bold">•</span>
                <a
                  href="https://www.hackerrank.com/profile/saranyatripurari"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-emerald-800 font-bold inline-flex items-center gap-0.5"
                >
                  HackerRank <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                </a>
              </div>
            </div>

            {/* 2. Professional Summary */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 mb-1.5">
                SUMMARY
              </h2>
              <p className="text-black text-justify text-xs sm:text-[13.5px] leading-relaxed">
                Aspiring Software Developer with strong skills in Python, Machine Learning, Data Structures, Algorithms, and Web Development. Experienced in building ML and computer vision projects through internships and certifications. Passionate about developing AI-driven solutions and solving real-world problems.
              </p>
            </div>

            {/* 3. Education */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 mb-1.5">
                EDUCATION
              </h2>
              <div className="space-y-1.5 text-xs sm:text-[13.5px]">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                    <div>
                      <span className="font-bold text-black">{edu.degree}</span>
                      <span className="text-neutral-900 font-medium">, {edu.institution}</span>
                    </div>
                    <div className="text-left sm:text-right shrink-0 text-neutral-900 font-medium">
                      <span>{edu.year}</span> | <span className="font-bold text-black">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Skills */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 mb-1.5">
                SKILLS
              </h2>
              <div className="space-y-1 text-xs sm:text-[13.5px] text-neutral-900 leading-snug">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row">
                    <span className="font-bold text-black sm:w-48 shrink-0">
                      {cat.title}:
                    </span>
                    <span className="text-neutral-900 font-normal">
                      {cat.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Internship Experience */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 mb-1.5">
                INTERNSHIP EXPERIENCE
              </h2>
              <div className="space-y-2 text-xs sm:text-[13.5px]">
                {INTERNSHIPS_DATA.map((intern, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
                      <div className="font-bold text-black">
                        {intern.company} <span className="font-semibold text-neutral-800">– {intern.role}</span>
                      </div>
                      <div className="text-neutral-800 text-xs font-semibold">
                        {intern.period}
                      </div>
                    </div>
                    <ul className="list-disc ml-5 space-y-0.5 text-neutral-900 mt-0.5">
                      {intern.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Projects */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 mb-1.5">
                PROJECTS
              </h2>
              <div className="space-y-2.5 text-xs sm:text-[13.5px]">
                {PROJECTS_DATA.map((proj, idx) => (
                  <div key={idx}>
                    <div className="flex items-baseline justify-between flex-wrap gap-1">
                      <div className="font-bold text-black">
                        {proj.title}
                      </div>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-blue-800 hover:underline inline-flex items-center gap-0.5"
                      >
                        GitHub <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                      </a>
                    </div>
                    <ul className="list-disc ml-5 space-y-0.5 text-neutral-900 mt-0.5">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                    <div className="text-xs text-neutral-900 mt-0.5">
                      <span className="font-bold text-black">Tech Stack: </span>
                      {proj.techStack.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Certifications */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 mb-1.5">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc ml-5 space-y-0.5 text-xs sm:text-[13.5px] text-neutral-900">
                {RESUME_CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx}>
                    <span className="font-bold text-black">{cert.title}</span>
                    {cert.issuer && <span className="text-neutral-800 font-medium"> – {cert.issuer}</span>}
                  </li>
                ))}
              </ul>
            </div>

            {/* 8. Coding Profiles & Achievements */}
            <div>
              <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 mb-1.5">
                CODING PROFILES & ACHIEVEMENTS
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-[13.5px] text-neutral-900">
                <li>
                  <span className="font-bold text-black">LeetCode: </span>
                  <a
                    href="https://leetcode.com/u/SaranyaTripurari/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-800 hover:underline font-bold inline-flex items-center gap-0.5"
                  >
                    leetcode.com/u/SaranyaTripurari <ExternalLink className="w-2.5 h-2.5 ml-0.5 inline" />
                  </a>
                  <span className="text-neutral-900"> – Solved 100+ problems in Data Structures and Algorithms with Python and Problem Solving.</span>
                </li>
                <li>
                  <span className="font-bold text-black">HackerRank: </span>
                  <a
                    href="https://www.hackerrank.com/profile/saranyatripurari"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-800 hover:underline font-bold inline-flex items-center gap-0.5"
                  >
                    hackerrank.com/profile/saranyatripurari <ExternalLink className="w-2.5 h-2.5 ml-0.5 inline" />
                  </a>
                  <span className="text-neutral-900"> – Certified in SQL (Basic & Intermediate) and active Problem Solving in Python.</span>
                </li>
                <li>
                  <span className="font-bold text-black">TCS CodeVita Season XII: </span>
                  <span className="font-bold text-black">Global Rank 6023</span>
                  <span className="text-neutral-900"> – Certificate of Achievement in competitive programming among thousands of global participants.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


