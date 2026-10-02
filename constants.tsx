import { Project, Skill, Experience, Achievement } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Smart Power Management System (SPMS)",
    category: "IoT & Full-Stack",
    description: "An industrial energy management application connecting ESP32 power sensors, WebSockets real-time data streaming, and automated load prioritization.",
    icon: "fa-bolt",
    githubUrl: "https://github.com/kabir6383",
    extendedDetails: {
      overview: "Energy management system built with microcontrollers, real-time WebSockets streaming, and automated load control.",
      technicalDeepDive: "Integrates ESP32 microcontrollers and power metering hardware with automated load control logic. Executes dynamic load shedding during peak power demand while streaming live data to a MERN-stack dashboard.",
      milestone: "Achieved automated real-time load balancing and live energy reporting under peak simulated building loads.",
      skills: ["ESP32 Microcontroller", "React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "PCB Design"]
    }
  },
  {
    title: "ISLRS (Indian Sign Language Recognition)",
    category: "AI & Computer Vision",
    description: "Real-time sign language translation system processing live camera feeds into speech and text using MediaPipe hand tracking and neural networks.",
    icon: "fa-hands-asl-interpreting",
    githubUrl: "https://github.com/kabir6383",
    extendedDetails: {
      overview: "Translating sign language gestures into instant spoken audio and text to make communication easier.",
      technicalDeepDive: "Uses Computer Vision to track hand spatial keypoints from camera frames. Classifies gesture sequences in real-time and converts them to audio output and text captions.",
      milestone: "Selected among the Top 500 Projects in Tamil Nadu at Niral Thiruvizha 3.0 out of thousands of regional entries.",
      skills: ["Python", "OpenCV", "MediaPipe", "Machine Learning", "React.js"]
    }
  },
  {
    title: "AI Energy Analytics Bot",
    category: "AI & Machine Learning",
    description: "Conversational assistant trained on facility power usage data to identify energy leaks and suggest smart power-saving schedules.",
    icon: "fa-robot",
    githubUrl: "https://github.com/kabir6383",
    extendedDetails: {
      overview: "Converting power usage logs into clear actionable recommendations and automated scheduling.",
      technicalDeepDive: "Analyzes historical energy datasets with Python algorithms to detect power leaks, predict peak usage times, and generate energy reduction steps.",
      skills: ["Python", "Machine Learning", "Data Analytics", "Pandas", "NumPy"]
    }
  },
  {
    title: "Biometric Face ID Access Lock",
    category: "IoT & Embedded",
    description: "Smart access control system running on Raspberry Pi and OpenCV that operates physical lock relays via real-time facial recognition.",
    icon: "fa-user-shield",
    githubUrl: "https://github.com/kabir6383",
    extendedDetails: {
      overview: "Edge security system replacing physical keys with fast facial recognition access control.",
      technicalDeepDive: "Runs OpenCV facial identification models directly on Raspberry Pi hardware to trigger physical door locks instantly.",
      skills: ["Raspberry Pi", "OpenCV", "Python", "Relay Hardware", "Embedded Systems"]
    }
  },
  {
    title: "2D CNC Circuit Plotter Prototype",
    category: "Embedded & Hardware",
    description: "Custom dual-axis CNC printer prototype built to etch mini circuit board layouts directly using stepper motor firmware.",
    icon: "fa-print",
    githubUrl: "https://github.com/kabir6383",
    extendedDetails: {
      overview: "Prototyping machine for converting PCB design files directly onto physical copper boards.",
      technicalDeepDive: "Built stepper motor control firmware in Embedded C to control X/Y axis drivers and drawing tools with high accuracy.",
      skills: ["Embedded C", "Arduino", "Stepper Drivers", "PCB Layout", "G-Code"]
    }
  }
];

export const SKILLS: Skill[] = [
  // Frontend Development
  { name: "React.js", icon: "fa-react", category: "Frontend Development", level: "expert", kind: "technical", proficiency: 92 },
  { name: "JavaScript / TypeScript", icon: "fa-js", category: "Frontend Development", level: "good", kind: "technical", proficiency: 88 },
  { name: "HTML5 & CSS3", icon: "fa-html5", category: "Frontend Development", level: "expert", kind: "technical", proficiency: 90 },
  { name: "Tailwind CSS", icon: "fa-paint-brush", category: "Frontend Development", level: "good", kind: "technical", proficiency: 86 },

  // Backend & Databases
  { name: "Node.js", icon: "fa-node-js", category: "Backend & Databases", level: "good", kind: "technical", proficiency: 86 },
  { name: "Express.js", icon: "fa-server", category: "Backend & Databases", level: "good", kind: "technical", proficiency: 85 },
  { name: "MongoDB", icon: "fa-database", category: "Backend & Databases", level: "good", kind: "technical", proficiency: 84 },
  { name: "REST APIs & WebSockets", icon: "fa-network-wired", category: "Backend & Databases", level: "good", kind: "technical", proficiency: 83 },

  // Embedded Systems & Hardware
  { name: "ESP32 & Microcontrollers", icon: "fa-microchip", category: "Embedded Systems & Hardware", level: "good", kind: "technical", proficiency: 88 },
  { name: "PCB Design & Layout", icon: "fa-ring", category: "Embedded Systems & Hardware", level: "good", kind: "technical", proficiency: 84 },
  { name: "Raspberry Pi", icon: "fa-memory", category: "Embedded Systems & Hardware", level: "good", kind: "technical", proficiency: 85 },
  { name: "Embedded C", icon: "fa-code", category: "Embedded Systems & Hardware", level: "good", kind: "technical", proficiency: 83 },

  // Tools & Programming
  { name: "Python", icon: "fa-python", category: "Tools & Programming", level: "good", kind: "technical", proficiency: 88 },
  { name: "Machine Learning Basics", icon: "fa-brain", category: "Tools & Programming", level: "average", kind: "technical", proficiency: 72 },
  { name: "Computer Vision (OpenCV)", icon: "fa-eye", category: "Tools & Programming", level: "good", kind: "technical", proficiency: 80 },
  { name: "Git & GitHub", icon: "fa-code-branch", category: "Tools & Programming", level: "good", kind: "technical", proficiency: 86 },

  // Soft Skills
  { name: "Presentation & Communication", icon: "fa-chalkboard-teacher", category: "Soft Skills", level: "expert", kind: "soft", proficiency: 95 },
  { name: "Team Management", icon: "fa-users-cog", category: "Soft Skills", level: "expert", kind: "soft", proficiency: 94 },
  { name: "Problem Solving", icon: "fa-lightbulb", category: "Soft Skills", level: "good", kind: "soft", proficiency: 90 },
  { name: "Project & Product Planning", icon: "fa-drafting-compass", category: "Soft Skills", level: "good", kind: "soft", proficiency: 86 }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "CODEC Technologies",
    role: "MERN Stack Developer Intern",
    date: "11-02-2026",
    duration: "1 Month",
    completionDate: "11-02-2026",
    location: "Remote / On-site",
    description: "Built full-stack MERN (MongoDB, Express, React, Node) applications. Developed REST APIs, user authentication, database models, and responsive web dashboards.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Full-Stack"]
  },
  {
    company: "PCB Prototyping Lab",
    role: "PCB Design Intern",
    date: "05-01-2026",
    duration: "15 Days",
    completionDate: "05-01-2026",
    location: "On-site Workshop",
    description: "Designed PCB schematics, routed circuit traces, created component footprints, and manufactured mini circuit boards using 2D CNC prototyping tools.",
    tags: ["PCB Design", "Circuit Layout", "Hardware Prototyping", "Embedded Systems"]
  },
  {
    company: "DCW Limited",
    role: "Electrical Engineering Intern",
    date: "02-08-2026",
    duration: "19 Days",
    completionDate: "02-08-2026",
    location: "Tuticorin, India",
    description: "Learned industrial plant power distribution, inspected power transformers, monitored high-voltage switchgear safety, and maintained motor control systems.",
    tags: ["Electrical Engineering", "Power Distribution", "Switchgear", "Industrial Automation"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Niral Thiruvizha Hackathon",
    organization: "Government of Tamil Nadu",
    category: "Hackathon & Prototyping",
    date: "State Hackathon",
    description: "Built and deployed a functional web-based prototype within a limited sprint to address real-world problem statements. Selected among the Top 500 projects in Tamil Nadu.",
    highlight: "Top 500 Project Finalist & Prototype Deployed",
    icon: "Trophy",
    badgeColor: "emerald",
    tags: ["Web Prototype", "Sprint Deployment", "Problem Solving", "Hackathon"]
  },
  {
    title: "Spark-Wars Technical Competition",
    organization: "Technical Symposium",
    category: "Coding Competition",
    date: "Technical Contest",
    description: "Competed in technical events focused on problem-solving, algorithmic logic, and code optimization.",
    highlight: "Algorithmic Logic & Speed Code Optimization",
    icon: "Zap",
    badgeColor: "amber",
    tags: ["Algorithmic Logic", "Code Optimization", "Problem Solving"]
  },
  {
    title: "Wadhwani Foundation Ignite Program",
    organization: "Wadhwani Foundation",
    category: "Product & Project Training",
    date: "Structured Training",
    description: "Completed structured training on project execution, product design, software planning workflows, and team collaboration.",
    highlight: "Certified Product Execution & Software Planning",
    icon: "Target",
    badgeColor: "teal",
    tags: ["Product Design", "Agile Execution", "Software Planning"]
  },
  {
    title: "TCS National Qualifier Test (TCS NQT – IT)",
    organization: "Tata Consultancy Services",
    category: "National Assessment",
    date: "May 2026",
    score: "61.68% Aggregate Score",
    description: "Secured 61.68% aggregate score across Cognitive, Advanced Reasoning, and Programming assessments (May 2026).",
    highlight: "National Level IT Cognitive & Coding Qualification",
    icon: "Award",
    badgeColor: "indigo",
    tags: ["Cognitive Ability", "Advanced Reasoning", "Programming Assessment", "May 2026"]
  }
];
