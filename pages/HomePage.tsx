import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { PROFILE_DATA, SKILLS_DATA, PROJECTS_DATA } from '../constants';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import type { SkillCategory, Skill } from '../types';

const TechSphere: React.FC = () => {
    const outerSkills = [
        SKILLS_DATA[0].skills[0], // React
        SKILLS_DATA[0].skills[1], // TS
        SKILLS_DATA[1].skills[0], // Node.js
        SKILLS_DATA[1].skills[2], // Next.js
        SKILLS_DATA[1].skills[3], // NestJS
        SKILLS_DATA[1].skills[4], // MongoDB
        SKILLS_DATA[1].skills[5], // PostgreSQL
        SKILLS_DATA[4].skills[2], // Docker
        SKILLS_DATA[4].skills[3], // AWS
        SKILLS_DATA[4].skills[0], // Git
        SKILLS_DATA[0].skills[2], // JS
    ]; 
    const innerSkills = [
        SKILLS_DATA[0].skills[3], // HTML5
        SKILLS_DATA[0].skills[4], // CSS3
        SKILLS_DATA[1].skills[1], // Express
        SKILLS_DATA[1].skills[6], // MySQL
        SKILLS_DATA[2].skills[0], // GenAI
        SKILLS_DATA[2].skills[1], // LLM
        SKILLS_DATA[2].skills[2], // RAG
        SKILLS_DATA[3].skills[0], // Jest
        SKILLS_DATA[4].skills[1], // Jira
    ];

    const sphereSize = 350;
    const outerRadius = sphereSize / 2.5;
    const innerRadius = sphereSize / 4.5;

    const IconWithTooltip: React.FC<{ skill: Skill; size?: string }> = ({ skill, size = 'w-14 h-14' }) => (
        <div className={`relative flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:scale-125 group-hover:z-20 ${size}`}>
            <skill.icon size="50%" style={{ color: skill.color }} className="transition-all duration-300 group-hover:filter group-hover:brightness-125" />
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30 pointer-events-none">
                {skill.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
        </div>
    );

    return (
        <div className="relative flex items-center justify-center tech-sphere-container" style={{ height: `${sphereSize}px`, width: `${sphereSize}px` }}>
            <style>
                {`
                @keyframes spin-clockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-counter-clockwise { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                
                .orbit-container, .icon-rotator {
                    animation-play-state: running;
                }
                .tech-sphere-container:hover .orbit-container,
                .tech-sphere-container:hover .icon-rotator {
                    animation-play-state: paused;
                }
                .icon-spoke {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform-origin: 0 0;
                }
                `}
            </style>
            
            {/* Orbital Paths */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-indigo-400/30 dark:border-indigo-500/20 rounded-full" style={{ width: `${outerRadius * 2}px`, height: `${outerRadius * 2}px` }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-indigo-400/30 dark:border-indigo-500/20 rounded-full" style={{ width: `${innerRadius * 2}px`, height: `${innerRadius * 2}px` }}></div>

            {/* Outer Orbit */}
            <div className="orbit-container" style={{ width: '100%', height: '100%', position: 'absolute', borderRadius: '50%', animation: 'spin-clockwise 30s linear infinite' }}>
                {outerSkills.map((skill, i) => {
                    const angle = (i / outerSkills.length) * 360;
                    return (
                        <div key={`outer-${skill.name}`} className="icon-spoke" style={{ transform: `rotate(${angle}deg)` }}>
                            <div style={{ transform: `translateX(${outerRadius}px)` }}>
                                <div className="icon-rotator group" style={{ animation: 'spin-counter-clockwise 30s linear infinite' }}>
                                    <IconWithTooltip skill={skill} size="w-14 h-14" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Inner Orbit */}
            <div className="orbit-container" style={{ width: '100%', height: '100%', position: 'absolute', borderRadius: '50%', animation: 'spin-counter-clockwise 25s linear infinite' }}>
                {innerSkills.map((skill, i) => {
                    const angle = (i / innerSkills.length) * 360;
                    return (
                        <div key={`inner-${skill.name}`} className="icon-spoke" style={{ transform: `rotate(${angle}deg)` }}>
                            <div style={{ transform: `translateX(${innerRadius}px)` }}>
                                <div className="icon-rotator group" style={{ animation: 'spin-clockwise 25s linear infinite' }}>
                                    <IconWithTooltip skill={skill} size="w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


const BentoCard: React.FC<{ category: SkillCategory; className?: string }> = ({ category, className = '' }) => (
    <div className={`bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 ${className}`}>
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{category.title}</h3>
        <div className="flex flex-wrap gap-4">
            {category.skills.map(skill => (
                <div key={skill.name} className="flex items-center gap-2 p-2 pr-3 rounded-full bg-gray-100 dark:bg-gray-800">
                    <skill.icon style={{ color: skill.color }} size={20} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);


const HomePage: React.FC = () => {
    const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-500/10 rounded-full filter blur-3xl" />
        
        <div className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center z-10">
            <div className="text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight">
                <span className="block text-gray-800 dark:text-gray-100">Deepak Biswal</span>
                <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text mt-2 tracking-widest text-3xl sm:text-4xl lg:text-5xl leading-normal">
                  Lead Software Engineer
                </span>
              </h1>
              <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-gray-600 dark:text-gray-400">
                Crafting scalable, high-performance web applications and intelligent solutions that drive innovation and deliver exceptional user experiences.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <Link to="/projects" className="group relative inline-flex items-center justify-center px-6 py-3 text-white font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-300 overflow-hidden">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    <span className="relative flex items-center">
                        View My Work <FiArrowRight className="ml-2" />
                    </span>
                </Link>
                <Link to="/about" className="px-6 py-3 text-gray-700 dark:text-gray-300 font-medium bg-gray-200 dark:bg-gray-800/50 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-colors duration-300">
                  About Me
                </Link>
              </div>
               <div className="mt-12 relative w-full h-0.5 max-w-sm mx-auto md:mx-0 overflow-hidden">
                  <div className="bg-gray-200 dark:bg-gray-800 h-full w-full rounded-full"></div>
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    style={{
                      width: '100%',
                      animation: 'scan 4s linear infinite',
                      backgroundSize: '200% 100%',
                    }}
                  ></div>
                  <style>{`
                    @keyframes scan {
                      0% { background-position: 200% 0; }
                      100% { background-position: -200% 0; }
                    }
                  `}</style>
                </div>
            </div>
            
            <div className="hidden md:flex justify-center items-center">
                <TechSphere />
            </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <Section id="featured-projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/projects" className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium transition-colors duration-300 flex items-center justify-center group">
                See all projects <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </Section>
      
      {/* Tech Stack Section */}
      <Section id="tech-stack" title="Core Technologies & Expertise" className="bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <BentoCard category={SKILLS_DATA[0]} className="md:col-span-2 lg:col-span-5" />
            <BentoCard category={SKILLS_DATA[1]} className="md:col-span-2 lg:col-span-3" />
            <BentoCard category={SKILLS_DATA[2]} className="md:col-span-4 lg:col-span-2" />
            <BentoCard category={SKILLS_DATA[3]} className="md:col-span-2 lg:col-span-2" />
            <BentoCard category={SKILLS_DATA[4]} className="md:col-span-2 lg:col-span-3" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;