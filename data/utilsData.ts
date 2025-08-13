
// navbar /header data
export const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Works', href: '#works' },
  { name: 'Contact', href: '#contact' },
];




// hero

export  const titles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Frontend Developer', 
    'Backend Developer',
    'React.js Developer',
    'Web Designer',
    'Web Developer',
    'Freelancer'
  ];



// tech stacks
import {
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiMysql, SiJavascript,
  SiPython, SiPhp, SiGit, SiPostman,SiVercel,
  SiRender,
  SiPostgresql,
  SiSupabase,
  SiClerk,
  SiStripe
} from 'react-icons/si';

export type Technology = {
  name: string;
  icon: React.ElementType;
  color: string;
};

export type Category = {
  title: string;
  technologies: Technology[];
};

export const techCategories: Category[] = [
  {
    title: 'Frontend Technologies',
    technologies: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
    ]
  }
];

export const sideBySideCategories: Category[][] = [
  [
    {
      title: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' }
      ]
    },
    {
      title: 'Databases',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
      ]
    }
  ],
  [
    {
      title: 'Programming Languages',
      technologies: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' }
      ]
    },
    {
      title: 'Tools & Platforms',
      technologies: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Vercel', icon: SiVercel,  color: '#111111' },
        { 
    name: 'Render', 
    icon: SiRender, 
    color: '#111111'
  }
      ]
    }
  ]
];

export const skills = [
  { name: 'Frontend Development', percentage: 95 },
  { name: 'Backend Development', percentage: 90 },
  { name: 'API Development', percentage: 90 },
  { name: 'Database Management', percentage: 85 }
];


// works data
  export const projects = [
    {
      title: 'Yoga Connect',
      description: 'A comprehensive yoga platform connecting instructors with students. Features include class booking, progress tracking, and community interactions.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Firebase','Vercel','Render'],
      image: '/works/yoga.png',
      github: 'https://github.com/Sdhanish/Yoga-Connect',
      demo: 'https://yoga-frontend-three.vercel.app/',
      category: 'Full Stack MERN Project',
      emoji: '🧘'
    },
    {
      title: 'Smartfin AI',
      description: 'AI-powered financial management application that provides intelligent insights, budget recommendations, and predictive analytics for personal finance.',
      tech: ['Next.js', 'Supabase', 'Clerk', 'Inngest', 'Arcjet','Vercel'],
      image: '/works/finance.png',
      github: 'https://github.com/Sdhanish/SmartFin-AI',
      demo: 'https://smart-fin-ai.vercel.app/',
      category: 'Full Stack Next Js Project',
      emoji: '🤖'
    },
    {
      title: 'Notes Application',
      description: 'Full stack notes management app in MERN Stack for skill enhancement',
      tech:  ['React.js', 'Node.js', 'MongoDB', 'Express.js' ,'Vercel'],
      image: '/works/notes.png',
      github: 'https://github.com/Sdhanish/notes-app',
      demo: 'https://notes-app-nc54.onrender.com/',
      category: 'Full Stack',
      emoji: '📋'
    }
  ];


export const techColors: Record<string, string> = {
  'React.js': 'bg-[#a8eaff] text-black',      // Lighter React blue
  'Next.js': 'bg-[#2d2d2d] text-white',       // Softer black/charcoal
  'Node.js': 'bg-[#6cc96c] text-black',       // Softer Node green
  'Express.js': 'bg-[#4d4d4d] text-black',    // Softer black/charcoal
  'MongoDB': 'bg-[#7fd87a] text-black',       // Lighter Mongo green
  'Firebase': 'bg-[#ffe480] text-black',      // Softer yellow
  'Tailwind CSS': 'bg-[#7fd5d1] text-black',  // Lighter Tailwind teal
  'PostgreSQL': 'bg-[#6d8bb8] text-black',    // Softer blue
  'Arcjet': 'bg-[#b0b0b0] text-black',        // Softer gray
  'Supabase': 'bg-[#7fe6bb] text-black',      // Lighter Supabase green
  'Clerk': 'bg-[#a48bd8] text-black',         // Softer purple
  'Stripe': 'bg-[#9a93ff] text-black',        // Lighter Stripe purple
  'Render': 'bg-[#8ef3d5] text-black',        // Softer turquoise
  'Vercel': 'bg-[#2d2d2d] text-black',        // Softer black
  'Inngest': 'bg-[#2d2d2d] text-white',       // Softer black
};


import { IconType } from 'react-icons';


export const techIcons: Record<string, { icon: IconType; color: string }> = {
  'React.js': { icon: SiReact, color: '#61DBFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'Node.js': { icon: SiNodedotjs, color: '#3C873A' },
  'Express.js': { icon: SiExpress, color: '#6B7280' }, // gray-500
  'MongoDB': { icon: SiMongodb, color: '#4DB33D' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38B2AC' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'Supabase': { icon: SiSupabase, color: '#3ECF8E' },
  'Clerk': { icon: SiClerk, color: '#6E59A5' },
  'Stripe': { icon: SiStripe, color: '#635BFF' },
  'Render': { icon: SiRender, color: '#46E3B7' },
  'Vercel': { icon: SiVercel, color: '#000000' },
};


// eductaion data
export const educationData = [
    {
      title: 'Master of Computer Applications',
      cgpa: '9.09',
      duration: 'Sept 2023 – May 2025',
      institution: 'APJ Abdul Kalam Technological University',
      location: 'Kerala, India',
      status: 'Completed',
      type: 'degree',
    },
    {
      title: 'MERN Stack Training',
      duration: 'Nov 2022 – Jan 2023',
      institution: 'Techmindz, Infopark Kochi',
      location: 'Kochi, India',
      status: 'Completed',
      type: 'training',
      description:
        'Completed intensive MERN stack training. Built full-stack applications using React, Node.js, Express.js, and MongoDB; developed APIs, responsive UIs, and practiced deployment.',
    },
    {
      title: 'Bachelor of Computer Applications',
      cgpa: '7.17',
      duration: 'Jun 2019 – Mar 2022',
      institution: 'Mahatma Gandhi University',
      location: 'Kerala, India',
      status: 'Completed',
      type: 'degree',
    },
  ];




  // footer
  
  interface QuickLink {
  name: string;
  href: string;
}
export const quickLinks: QuickLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];