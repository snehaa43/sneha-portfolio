/**
 * Portfolio Data for Sneha Kumari
 * Centralized configuration to make updates easy and maintainable.
 */

export const personalInfo = {
  name: "Sneha Kumari",
  shortName: "Sneha",
  title: "Computer Engineering Student & Full Stack Developer",
  shortBio:
    "Computer Engineering student with hands-on experience developing full-stack web and mobile applications using modern frontend and backend technologies, REST APIs, databases, and cloud platforms.",
  about: [
    "I am a Computer Engineering student with a strong interest in building real-world applications that solve meaningful problems. My interest in technology started at a very young age, when I was fascinated by screens, websites, and how the digital experiences around me actually worked. That curiosity gradually grew into a passion for understanding how software is built and how ideas can be turned into useful applications.",
    "I enjoy exploring different areas of development, including web, backend, mobile, cloud, and AI technologies. Rather than building applications just for the sake of experimenting, I am more interested in identifying real-world problems and creating practical solutions around them. I learn primarily through building projects, experimenting with new technologies, and understanding the concepts behind the tools I use.",
    "For me, development is a continuous process of learning, problem-solving, and improving. I enjoy taking an idea from its initial stage, designing how it should work, developing the different components, and turning it into a complete and usable application. I am particularly interested in exploring how modern technologies can be combined to build applications that are practical, scalable, and user-focused.",
    "Alongside development, I also create technology-related content on social media, where I share my learning, experiences, and interests in the tech space. Content creation has helped me strengthen my communication and presentation skills while allowing me to connect with others in the technology community. I am continuously learning, building, and exploring new ideas with the goal of becoming a well-rounded developer capable of creating technology that makes a real-world impact."
  ],
  email: "snehak2929@gmail.com",
  github: "https://github.com/snehaa43",
  linkedin: "https://www.linkedin.com/in/sneha-kumari29",
  resumePath: "/resume/Sneha_Kumari_Resume.pdf",
  status: "Open to Internships & Opportunities"
};

export const featuredProjectsData = [
  {
    id: "docschat",
    title: "DocsChat",
    subtitle: "RAG-Powered Document Q&A",
    description:
      "RAG-based document Q&A application that allows users to upload PDFs and ask questions based on their document content.",
    technologies: [
      "Next.js",
      "Google Cloud Storage",
      "PostgreSQL",
      "pgvector",
      "Gemini"
    ],
    projectUrl: "https://docschat-tau.vercel.app/"
  },
  {
    id: "projectpartner",
    title: "ProjectPartner",
    subtitle: "Side Project Collaboration Platform",
    description:
      "Full-stack collaboration platform for creating projects, finding collaborators, submitting applications, and managing project teams.",
    technologies: ["Next.js", "Supabase", "Prisma", "PostgreSQL"],
    projectUrl: "https://projectpartner2026.vercel.app/"
  },
  {
    id: "puzzlewake",
    title: "PuzzleWake",
    subtitle: "Puzzle-Based Alarm App",
    description:
      "Flutter-based Android alarm application that requires users to solve a randomly generated jigsaw puzzle before dismissing the alarm.",
    technologies: ["Flutter", "Dart", "Android Studio"],
    projectUrl: "https://github.com/snehaa43/puzzlewake"
  }
];

export const additionalProjectsData = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Personal expense and budget manager",
    projectUrl: "https://github.com/yourusername/expense-tracker"
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "Productive daily task management tool",
    projectUrl: "https://github.com/yourusername/task-manager"
  },
  {
    id: "mood-garden",
    title: "Mood Garden",
    description: "Interactive wellbeing mood tracking app",
    projectUrl: "https://github.com/yourusername/mood-garden"
  },
  {
    id: "samadhan-setu",
    title: "Samadhan Setu",
    description: "Civic grievance and issue resolution",
    projectUrl: "https://github.com/yourusername/samadhan-setu"
  }
];

export const certificationsData = [
  {
    title: "AWS Certified Developer (Domain 1)",
    issuer: "Amazon Web Services (AWS)",
    year: "2026"
  },
  {
    title: "Mastering Python",
    issuer: "Infosys Springboard",
    year: "2026"
  },
  {
    title: "Introduction to Databases",
    issuer: "Meta",
    year: "2026"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
