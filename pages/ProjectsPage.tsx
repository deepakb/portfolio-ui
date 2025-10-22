import React, { useState, useMemo } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS_DATA } from '../constants';

const allCategories = ['All', ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))];

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <Section id="projects" title="My Projects" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsPage;