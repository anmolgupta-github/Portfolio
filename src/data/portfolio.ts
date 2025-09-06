import { Project, Skill, Experience, Education } from '../types/portfolio';
import pphoto from "../assets/Portfolio1.png";
import ppphotot from "../assets/Porfolio2.png";

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    description: 'Sensai (AI Carrer Coach)',
    longDescription: 'This is an AI that generates professional resumes, company-specific quizzes and personalised cover letters.',
    image: pphoto,
    technologies: ['next.js', 'JavaScript', 'Tailwind CSS', 'Gemini AI','Prisma','Shadcn UI'],
    githubUrl: 'https://github.com/anmolgupta-github/Sensai',
    category: 'other',
    featured: true,
    completedAt: '2025-08'
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description: 'Portfolio',
    longDescription: 'This is my Profolio.',
    image: ppphotot,
    technologies: ['Tailwind CSS', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/username/project-2',
    category: 'other',
    featured: true,
    completedAt: '2025-09'
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'C', level: 85, category: 'languages' },
  { name: 'C++', level: 80, category: 'languages' },
  { name: 'Python', level: 90, category: 'languages' },
  { name: 'HTML/CSS', level: 85, category: 'languages' },
  { name: 'JavaScript', level: 80, category: 'languages' },
  { name: 'SQL', level: 75, category: 'languages' },
  
  // Frameworks & Libraries
  { name: 'React.js', level: 70, category: 'frameworks' },
  { name: 'Next.js', level: 70, category: 'frameworks' },
  { name: 'Node.js', level: 75, category: 'frameworks' },
  
  // Databases & Tools
  { name: 'MongoDB', level: 70, category: 'tools' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Linux', level: 75, category: 'tools' },
  
  // Coursework
  { name: 'Data Structures & Algorithms (DSA)', level: 85, category: 'coursework' },
  { name: 'OOP', level: 90, category: 'coursework' },
  { name: 'Operating Systems', level: 80, category: 'coursework' },
  { name: 'DBMS', level: 75, category: 'coursework' },
  { name: 'System Design', level: 70, category: 'coursework' }
];

export const experiences: Experience[] = [
  {
    id: 'intern-tech-corp',
    title: 'Web Development Intern',
    company: 'Unified Mentor',
    duration: 'Jun 2024 - Aug 2024',
    description: 'Developed and maintanied responsive web applications using modern web technolgies and gained hands-on experience in front-end and back-end development.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Git', 'CSS', 'HTML', 'Javascript']
  },
  // {
  //   id: 'freelance-dev',
  //   title: 'Freelance Web Developer',
  //   company: 'Self-Employed',
  //   duration: 'Jan 2024 - Present',
  //   description: 'Built custom websites and web applications for small businesses and startups. Managed client relationships, project timelines, and delivered high-quality solutions on time and within budget.',
  //   technologies: ['React', 'Vue.js', 'WordPress', 'PHP', 'MySQL']
  // },
  // {
  //   id: 'research-assistant',
  //   title: 'Research Assistant',
  //   company: 'University AI Lab',
  //   duration: 'Sep 2023 - Dec 2023',
  //   description: 'Assisted in machine learning research projects focusing on computer vision and natural language processing. Implemented algorithms, conducted experiments, and contributed to research publications.',
  //   technologies: ['Python', 'TensorFlow', 'PyTorch', 'R', 'Jupyter']
  // }
];

export const education: Education[] = [
  {
    id: 'BE-cse',
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Ramaiah Institue  of Technology',
    duration: '2023 - 2027',
    gpa: '8.79/10',
    description: 'Specializing in Data Structures and Algorithms. Relevant coursework includes Data Structures, Algorithms, Database Systems, Software Engineering, Machine Learning, and Computer Vision.'
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary Education (Science)',
    institution: 'Shiksha Niketan Higher Secondary School',
    duration: '2020 - 2022',
    gpa: '97%',
    description: 'Mathematics, Physics, Chemistry, and Computer Science. Participated in various coding competitions and science fairs.'
  }
];