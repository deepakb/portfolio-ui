import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJira, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiExpress, SiJest, SiTestinglibrary, SiDocker, SiMysql, SiNextdotjs, SiNestjs } from 'react-icons/si';
import { TbBrain, TbDatabaseSearch } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';
import type { Experience, Project, SkillCategory, Education, Certification, Contact } from './types';

export const CONTACT_INFO: Contact = {
    email: "deepak412@gmail.com",
    phone: "+91-9937295512",
    linkedin: "https://www.linkedin.com/in/deepak-biswal-6305112a",
    github: "https://github.com/deepak-biswal",
};

export const PROFILE_DATA = {
    name: "Deepak Biswal",
    title: "Lead Software Engineer | React, TypeScript, Node.js & AI Enthusiast",
    location: "Sambalpur, Odisha, India",
    summary: [
        "With over 15 years of hands-on experience in web application and infrastructure development, I've had the privilege of leading and delivering complex, high-impact projects that showcase my deep expertise in both front-end and back-end technologies. From designing sleek user interfaces to optimizing web performance, my focus is always on pushing the boundaries of what's possible.",
        "My technical toolkit includes React, TypeScript, JavaScript, HTML5, CSS3, Node.js, and Express—giving me the versatility to tackle challenges from architecture design to feature development. My approach blends object-oriented and functional programming, ensuring robust, scalable solutions.",
        "I'm not just passionate about coding—I'm driven by the desire to create seamless user experiences and innovative solutions. My leadership style is rooted in collaboration and a dedication to excellence, which has helped me mentor teams and consistently deliver projects on time and beyond expectations."
    ]
};

export const EXPERIENCE_DATA: Experience[] = [
    {
        role: "Lead Software Engineer",
        company: "EPAM Systems",
        period: "Aug 2021 - Present",
        duration: "4 years 3 months",
        location: "Anywhere",
        description: [
            "Led development of key features, ensuring seamless integration of new functionalities.",
            "Optimized existing codebase for enhanced performance and maintainability.",
            "Conducted thorough code reviews to maintain code quality and adherence to standards.",
            "Implemented robust code setup with tools like Husky, lint, lint-staged, and prettier.",
            "Played a pivotal role in defining the architecture of new features for scalability and flexibility."
        ],
        techStack: ["React", "TypeScript", "Node.js", "JavaScript", "HTML5", "CSS3", "Husky", "Prettier"]
    },
    {
        role: "Technical Lead",
        company: "ClickMail Marketing",
        period: "Jun 2017 - Aug 2021",
        duration: "4 years 3 months",
        location: "Bhubaneshwar, Orissa, India",
        description: [
            "Led a team of 7 developers in the implementation and delivery of key modules.",
            "Developed a custom analytics system for tracking customer activity, conversion, and funnels.",
            "Created a calendar feature for displaying email schedules and notices using React FullCalendar.",
            "Integrated Facebook Lead Ads API and Facebook Audience API for user data management."
        ],
        techStack: ["React", "Node.js", "Express", "HTML5", "CSS3", "SASS", "Webpack", "MySQL"]
    },
    {
        role: "Module Lead",
        company: "Tech Mahindra",
        period: "Jun 2016 - Jun 2017",
        duration: "1 year 1 month",
        location: "Bhubaneshwar, Orissa, India",
        description: [
            "Designed and implemented a REST API using Spring Boot and Couchbase for CRUD operations.",
            "Utilized Shell Script to streamline the data ingestion process from Teradata and DB2.",
            "Developed data validation functions to ensure the integrity of ingested data.",
            "Contributed to the development and testing process as a key team player."
        ],
        techStack: ["Spring Boot", "Java", "Couchbase", "Shell Script", "Teradata", "DB2"]
    },
    {
        role: "Senior Software Engineer",
        company: "Mindfire Solutions",
        period: "Jun 2008 - Jun 2016",
        duration: "8 years 1 month",
        location: "Bhubaneswar, Orissa, India",
        description: [
            "Led the development of an agile project management system, improving team collaboration.",
            "Utilized Node.js, HTML5, and CSS3 in development processes.",
            "Mentored a team of 9 developers and implemented modules with a focus on performance.",
            "Implemented real-time notifications using AJAX long polling.",
            "Developed a rating system with HTML5 canvas-based graphs for team performance."
        ],
        techStack: ["Node.js", "HTML5", "CSS3", "AJAX", "Karma", "Jasmine", "PHP"]
    },
    {
        role: "Software Engineer",
        company: "Interfinet Technologies Pvt. Ltd.",
        period: "Jun 2006 - Jun 2008",
        duration: "2 years 1 month",
        location: "Bhubaneshwar, Orissa, India",
        description: [
            "Collaborated with clients to gather and understand project requirements.",
            "Utilized expertise in web development technologies to deliver high-quality projects.",
            "Acted as a technical advisor and problem-solver, assisting in the resolution of programming issues.",
            "Demonstrated strong communication and teamwork skills to deliver successful projects."
        ],
        techStack: ["PHP", "JavaScript", "jQuery", "Ajax", "CSS", "HTML"]
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        title: "Scalable Feature Architecture",
        description: "Architected and led the development of a modular, scalable frontend architecture for a high-traffic enterprise application, improving feature development velocity by 40%.",
        tags: ["React", "TypeScript", "Architecture", "Scalability"],
        image: "https://picsum.photos/seed/architecture/800/600",
        githubUrl: "#",
        liveUrl: "#",
        category: "Full-Stack"
    },
    {
        title: "Performance Optimization Initiative",
        description: "Led a code refactoring initiative that improved application load times by 30% and enhanced maintainability through modern coding practices and performance tuning.",
        tags: ["Performance", "React", "Optimization", "Refactoring"],
        image: "https://picsum.photos/seed/performance/800/600",
        githubUrl: "#",
        liveUrl: "#",
        category: "Frontend"
    },
    {
        title: "Automated Code Quality Pipeline",
        description: "Implemented a robust CI/CD pipeline with automated linting, testing, and formatting using Husky, lint-staged, and Prettier, increasing code consistency and quality.",
        tags: ["CI/CD", "Husky", "Prettier", "Automation", "DevOps"],
        image: "https://picsum.photos/seed/cicd/800/600",
        githubUrl: "#",
        liveUrl: "#",
        category: "Full-Stack"
    },
    {
        title: "Custom Analytics System",
        description: "Developed a comprehensive analytics platform for tracking customer activity, including conversion tracking, funnel analysis, and page engagement.",
        tags: ["React", "Node.js", "Analytics", "Data Visualization"],
        image: "https://picsum.photos/seed/analytics/800/600",
        githubUrl: "#",
        liveUrl: "#",
        category: "Full-Stack"
    },
    {
        title: "Email Marketing Calendar",
        description: "Created an interactive calendar feature for scheduling and visualizing email campaigns, system notices, and custom events using React FullCalendar.",
        tags: ["React", "TypeScript", "UI/UX", "FullCalendar"],
        image: "https://picsum.photos/seed/calendar/800/600",
        liveUrl: "#",
        category: "Frontend"
    },
    {
        title: "Social Media API Integration",
        description: "Integrated Facebook Lead Ads and Audience APIs to automate user data collection and synchronization for targeted email marketing campaigns.",
        tags: ["Node.js", "API Integration", "Facebook API", "Automation"],
        image: "https://picsum.photos/seed/socialapi/800/600",
        githubUrl: "#",
        category: "Backend"
    },
    {
        title: "Agile Project Management Tool",
        description: "Led the development of an agile project management system that improved collaboration and project visibility for remote teams, featuring real-time updates.",
        tags: ["Node.js", "AJAX", "Project Management", "Real-time"],
        image: "https://picsum.photos/seed/pmtool/800/600",
        liveUrl: "#",
        category: "Full-Stack"
    },
    {
        title: "Enterprise REST API Service",
        description: "Designed and implemented a scalable REST API using Spring Boot and Couchbase, enabling robust CRUD operations and JSON responses for enterprise applications.",
        tags: ["Spring Boot", "Java", "Couchbase", "REST API", "Microservices"],
        image: "https://picsum.photos/seed/restapi/800/600",
        githubUrl: "#",
        category: "Backend"
    },
    {
        title: "Team Performance Visualizer",
        description: "Developed a rating system to track team performance, using HTML5 canvas-based graphs to display project velocity and impact metrics visually.",
        tags: ["HTML5 Canvas", "JavaScript", "Data Visualization", "Frontend"],
        image: "https://picsum.photos/seed/dataviz/800/600",
        liveUrl: "#",
        category: "Frontend"
    }
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "Express", icon: SiExpress, color: "#444444" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        ]
    },
    {
        title: "AI & Data",
        skills: [
            { name: "Generative AI", icon: GiArtificialIntelligence, color: "#8A2BE2" },
            { name: "LLM", icon: TbBrain, color: "#9370DB" },
            { name: "RAG", icon: TbDatabaseSearch, color: "#20B2AA" },
        ]
    },
    {
        title: "Testing",
        skills: [
            { name: "Jest", icon: SiJest, color: "#C21325" },
            { name: "Testing Library", icon: SiTestinglibrary, color: "#E33332" },
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "Jira", icon: FaJira, color: "#0052CC" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "AWS", icon: FaAws, color: "#FF9900" },
        ]
    }
];

export const EDUCATION_DATA: Education[] = [
    {
        degree: "Master of Computer Applications - MCA",
        institution: "Sikkim Manipal University - Distance Education",
    },
    {
        degree: "GNIIT, Information Technology",
        institution: "NIIT",
    },
    {
        degree: "Bachelor of Science - BS, PCM",
        institution: "Sambalpur University",
        period: "2000 - 2003",
    }
];

export const CERTIFICATIONS_DATA: Certification[] = [
    { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft" },
    { name: "Certified MongoDB Professional", issuer: "MongoDB" },
    { name: "Programming in HTML5 with JavaScript and CSS3(70-480)", issuer: "Microsoft" },
];