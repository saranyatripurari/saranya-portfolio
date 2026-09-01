import profileAvatar from '../assets/images/profile_avatar_saranya_1788184438728.jpg';
import interviewProjectImage from '../assets/images/interview_general_pic_1788183898678.jpg';
import hrAnalyticsImage from '../assets/images/hr_analytics_general_1788183916620.jpg';
import crowdDensityImage from '../assets/images/crowd_surveillance_gen_1788183939009.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  techStack: string[];
  githubUrl: string;
  imageUrl: string;
  liveUrl?: string;
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  iconType: 'machine-learning' | 'data' | 'algorithm' | 'achievement';
}

export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export const PERSONAL_INFO = {
  name: "Tripurari Saranya",
  shortName: "SARANYA",
  college: "Kakinada Institute of Engineering and Technology",
  tagline: "Software Developer | Python Developer | Problem Solver",
  rolesSubtitle: "Software Developer | Python Developer | Problem Solver",
  bio: "A passionate B.Tech Artificial Intelligence & Machine Learning student focused on software development and Python programming. I enjoy building practical applications, solving problems with data structures and algorithms, and developing reliable software solutions.",
  aboutParagraph1: "I am a passionate Software Developer with a focus on building user-friendly and responsive web applications. Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Kakinada Institute of Engineering and Technology (2023–2027).",
  aboutParagraph2: "I believe in writing clean, maintainable code and creating solutions that make a real impact. My journey in software engineering is driven by continuous learning and a commitment to excellence.",
  avatarUrl: profileAvatar,
  email: "saranyatripurari@gmail.com",
  phone: "8374418503",
  location: "Amalapuram, Andhra Pradesh",
  github: "https://github.com/saranyatripurari",
  linkedin: "https://www.linkedin.com/in/saranyatripurari",
  leetcode: "https://leetcode.com/u/SaranyaTripurari/",
  hackerrank: "https://www.hackerrank.com/profile/saranyatripurari",
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.Tech– Artificial Intelligence & Machine Learning",
    institution: "KIET Engineering College, Andhra Pradesh",
    year: "2023–2027",
    score: "CGPA: 8.6",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Govt Junior College for Girls, Amalapuram",
    year: "2023",
    score: "CGPA: 9.5",
  },
  {
    degree: "SSC",
    institution: "Govt High School, Anathavaram",
    year: "2021",
    score: "CGPA: 9.5",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "python", color: "text-yellow-300" },
      { name: "JavaScript", icon: "js", color: "text-yellow-400" },
      { name: "SQL", icon: "sql", color: "text-amber-400" },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: "html5", color: "text-orange-500" },
      { name: "CSS3", icon: "css3", color: "text-blue-500" },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures", icon: "dsa", color: "text-teal-400" },
      { name: "Algorithms", icon: "algo", color: "text-[#38efbb]" },
      { name: "Machine Learning Fundamentals", icon: "ml", color: "text-purple-400" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: "github", color: "text-white" },
      { name: "VS Code", icon: "vscode", color: "text-blue-400" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: "comm", color: "text-[#38efbb]" },
      { name: "Teamwork", icon: "team", color: "text-cyan-400" },
      { name: "Problem Solving", icon: "problem", color: "text-emerald-400" },
    ],
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "TCS CodeVita Season XII",
    subtitle: "Global Rank 6023",
    description: "Certificate of Achievement in global competitive coding competition among thousands of participants.",
    icon: "trophy",
  },
  {
    title: "LeetCode",
    subtitle: "100+ Problems Solved",
    description: "Solved 100+ coding and Data Structures & Algorithms problems on LeetCode, strengthening problem-solving skills, algorithmic thinking, and coding fundamentals.",
    icon: "code",
    url: "https://leetcode.com/u/SaranyaTripurari/",
  },
];

export const INTERNSHIPS_DATA: Internship[] = [
  {
    company: "Saadhyam",
    role: "AI Developer Intern",
    period: "Jun 2026 – Jul 2026",
    bullets: [
      "Curated and structured JSON/JSONL datasets for LLM training; developed responsive web modules using HTML, CSS, JavaScript.",
    ],
    skills: ["AI Dataset Prep", "LLM Data Engineering", "JSON/JSONL", "Web Development"],
  },
  {
    company: "Google AI/ML Virtual Internship – AICTE EduSkills",
    role: "AI/ML Virtual Intern",
    period: "Apr 2025 – Jun 2025",
    bullets: [
      "Trained and evaluated supervised and unsupervised ML models in Python with EDA and feature engineering.",
    ],
    skills: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Python ML"],
  },
  {
    company: "Google Android Developer Virtual Internship – AICTE EduSkills",
    role: "Android Developer Intern",
    period: "Jan 2025 – Mar 2025",
    bullets: [
      "Developed Android application components focusing on UI/UX lifecycle and mobile app architecture.",
    ],
    skills: ["Android Architecture", "App Lifecycle", "UI Design"],
  },
  {
    company: "Web Full Stack Developer – AICTE EduSkills",
    role: "Full Stack Developer Intern",
    period: "Oct 2024 – Dec 2024",
    bullets: [
      "Built responsive, accessible web interfaces using HTML5, CSS3, and modern JavaScript.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-interview-assistant",
    title: "AI Interview Preparation Assistant",
    subtitle: "Interactive Technical Interview Platform",
    description: "An AI-powered interview preparation application that dynamically generates role and experience-based interview questions, evaluates user responses in real-time, and provides constructive feedback using Google Gemini AI.",
    bullets: [
      "Developed AI-powered interview prep application using FastAPI and Google Gemini AI for dynamic question generation and real-time response evaluation.",
      "Built clean, responsive UI with HTML5, CSS3, JavaScript, and Jinja2 templates.",
    ],
    techStack: ["Python", "FastAPI", "Google Gemini AI", "HTML5", "CSS3", "JavaScript", "Jinja2"],
    githubUrl: "https://github.com/saranyatripurari/AI_Interview_Assistant",
    imageUrl: interviewProjectImage,
  },
  {
    id: "employee-promotion-prediction",
    title: "Employee Promotion Prediction System",
    subtitle: "Machine Learning HR Analytics",
    description: "A machine learning-driven web application designed to predict employee promotion eligibility accurately using HR analytics datasets, feature engineering, and classification models integrated with a Flask backend.",
    bullets: [
      "Built ML classification pipeline on HR Analytics dataset with feature engineering, achieving 92%+ model accuracy.",
      "Connected trained model via Flask REST API with interactive frontend for instant promotion predictions.",
    ],
    techStack: ["Python", "Flask", "Machine Learning", "Scikit-Learn", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/saranyatripurari/employee-promotion-prediction",
    imageUrl: hrAnalyticsImage,
  },
  {
    id: "visual-crowd-density",
    title: "Visual Crowd Density & Flow Analysis",
    subtitle: "Computer Vision & Deep Learning",
    description: "A deep learning-based crowd density estimation and flow analysis system using Multi-Column Convolutional Neural Networks (MCNN) and standard CNN architectures for automated crowd monitoring and density map generation.",
    bullets: [
      "Developed deep learning crowd density estimation system using CNN and MCNN architectures on ShanghaiTech dataset.",
      "Trained models in TensorFlow and PyTorch for density map generation and flow analysis.",
    ],
    techStack: ["Python", "Computer Vision", "CNN", "MCNN", "TensorFlow", "PyTorch"],
    githubUrl: "https://github.com/saranyatripurari/visual-crowd-density-and-flow-analysis",
    imageUrl: crowdDensityImage,
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "SQL (Basic / Intermediate)",
    issuer: "HackerRank",
    iconType: "data",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    iconType: "machine-learning",
  },
  {
    title: "TCS CodeVita Certification",
    issuer: "TCS CodeVita Season XII – Global Rank 6023 (Certificate of Achievement)",
    iconType: "achievement",
  },
  {
    title: "Data Structures and Algorithms Certification",
    issuer: "Problem Solving & Data Structures in Python",
    iconType: "algorithm",
  },
];

