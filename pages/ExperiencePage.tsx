import React from 'react';
import Section from '../components/Section';
import { EXPERIENCE_DATA } from '../constants';
import { FaBriefcase } from 'react-icons/fa';

const ExperiencePage: React.FC = () => {
  return (
    <Section id="experience" title="Career Journey" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative mb-12 flex items-start md:items-center w-full">
            {/* Dot on timeline */}
            <div className="absolute left-4 md:left-1/2 top-2 z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-500 flex items-center justify-center transform -translate-x-1/2">
              <FaBriefcase className="text-indigo-400" />
            </div>

            <div className={`w-full p-6 ml-10 md:ml-0 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-indigo-500/30 transition-all duration-300 ${index % 2 === 0 ? 'md:pr-8 md:mr-auto' : 'md:pl-8 md:ml-auto'} md:w-[46%]`}>
                <div className="flex justify-between items-start mb-2 flex-wrap">
                    <div>
                        <h3 className="text-xl font-bold text-indigo-500 dark:text-indigo-400">{exp.role}</h3>
                        <p className="text-md font-semibold text-gray-800 dark:text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-xs mt-1 font-semibold text-indigo-700 bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-300 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.location} &bull; {exp.duration}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                <div className="flex flex-wrap gap-2">
                    {exp.techStack.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs font-medium rounded-md">
                            {tech}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperiencePage;