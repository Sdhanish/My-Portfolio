
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
  SiPython, SiPhp, SiGit, SiPostman,
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
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' }
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
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Firebase'],
      image: '/works/yoga.png',
      github: 'https://github.com/Sdhanish/Yoga-Connect',
      demo: 'https://yoga-frontend-three.vercel.app/',
      category: 'Full Stack MERN Project',
      emoji: '🧘'
    },
    {
      title: 'Smartfin AI',
      description: 'AI-powered financial management application that provides intelligent insights, budget recommendations, and predictive analytics for personal finance.',
      tech: ['Next.js', 'Supabase', 'Clerk', 'Inngest', 'Arcjet'],
      image: '/works/finance.png',
      github: 'https://github.com/Sdhanish/SmartFin-AI',
      demo: 'https://smart-fin-ai.vercel.app/',
      category: 'Full Stack Next Js Project',
      emoji: '🤖'
    },
    {
      title: 'Notes Application',
      description: 'Full stack notes management app in MERN Stack for skill enhancement',
      tech:  ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: '/works/notes.png',
      github: 'https://github.com/Sdhanish/notes-app',
      demo: 'https://notes-app-nc54.onrender.com/',
      category: 'Full Stack',
      emoji: '📋'
    }
  ];


  export const techColors: Record<string, string> = {
  'React.js': 'bg-[#61DBFB]/10 text-[#61DBFB]', // React blue
  'Next.js': 'bg-gray-400 text-white', // Next.js black/white
  'Node.js': 'bg-[#68A063]/10 text-[#68A063]', // Node green
  'Express.js': 'bg-green-200 text-green-500', // Express black
  'MongoDB': 'bg-[#4DB33D]/10 text-[#4DB33D]', // MongoDB green
  'Firebase': 'bg-[#FFCA28]/10 text-[#FFCA28]', // Firebase yellow
  'Tailwind CSS': 'bg-[#38B2AC]/10 text-[#38B2AC]', // Tailwind teal
  'PostgreSQL': 'bg-[#336791]/10 text-[#336791]', // PG blue
  'Arcjet': 'bg-gray-300 text-black', // Redis red
  'Supabase': 'bg-[#0db7ed]/10 text-[#0db7ed]', // Docker blue
  'Clerk': 'bg-violet-200 text-violet-600 ',
  'Stripe': 'bg-[#635BFF]/10 text-[#635BFF]', // Stripe purple
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