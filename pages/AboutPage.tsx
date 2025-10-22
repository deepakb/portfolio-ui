import React from 'react';
import { PROFILE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, CONTACT_INFO } from '../constants';
import { FaGraduationCap, FaCertificate, FaEnvelope, FaLinkedin, FaGithub, FaLightbulb, FaUsers, FaCogs } from 'react-icons/fa';

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="font-semibold text-indigo-500 dark:text-indigo-400">{children}</span>
);

const InfoCard: React.FC<{ icon: React.ElementType, title: string, children: React.ReactNode, className?: string }> = ({ icon: Icon, title, children, className }) => (
    <div className={`relative bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 ${className}`}>
        <div className="flex items-center mb-4">
            <Icon className="text-indigo-500 mr-3" size={24} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        </div>
        <div>{children}</div>
    </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column: Profile */}
            <div className="lg:col-span-1 space-y-6">
                 <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl text-center">
                    <img src="https://picsum.photos/seed/deepak/200/200" alt="Deepak Biswal" className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-indigo-500/50 shadow-lg"/>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{PROFILE_DATA.name}</h1>
                    <h2 className="text-md text-indigo-500 dark:text-indigo-400 font-medium">{PROFILE_DATA.title.split('|')[0]}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{PROFILE_DATA.location}</p>
                 </div>

                 <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl">
                    <p className="text-gray-600 dark:text-gray-300">
                        With over 15 years in web application and infrastructure development, I specialize in leading complex projects from concept to completion. My expertise lies in <Highlight>React</Highlight>, <Highlight>TypeScript</Highlight>, and <Highlight>Node.js</Highlight>, focusing on creating <Highlight>scalable solutions</Highlight> and optimizing for <Highlight>peak performance</Highlight>.
                    </p>
                 </div>
                 <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl flex justify-center gap-6">
                    <a href={`mailto:${CONTACT_INFO.email}`} aria-label="Email" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"><FaEnvelope size={24}/></a>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"><FaLinkedin size={24}/></a>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"><FaGithub size={24}/></a>
                 </div>
            </div>

            {/* Right Column: Pillars */}
            <div className="lg:col-span-2 space-y-8">
                <InfoCard icon={FaLightbulb} title="Philosophy & Approach">
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start"><FaCogs className="mr-3 mt-1 text-indigo-400 flex-shrink-0"/><span>Blending <Highlight>object-oriented</Highlight> and <Highlight>functional programming</Highlight> to build robust, scalable, and maintainable solutions.</span></li>
                        <li className="flex items-start"><FaUsers className="mr-3 mt-1 text-indigo-400 flex-shrink-0"/><span>My leadership is rooted in <Highlight>collaboration</Highlight> and mentorship, fostering team excellence to deliver projects on time and beyond expectations.</span></li>
                    </ul>
                </InfoCard>

                <InfoCard icon={FaGraduationCap} title="Education & Certifications">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">Education</h4>
                            {EDUCATION_DATA.map((edu, index) => (
                                <div key={index}>
                                    <p className="font-semibold text-gray-700 dark:text-gray-300">{edu.degree}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
                                </div>
                            ))}
                        </div>
                         <div className="space-y-4">
                             <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">Certifications</h4>
                            {CERTIFICATIONS_DATA.map((cert, index) => (
                                <div key={index}>
                                    <p className="font-semibold text-gray-700 dark:text-gray-300">{cert.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </InfoCard>
                 <div className="text-center p-8 bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl">
                     <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Let's Connect!</h3>
                     <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
                     </p>
                     <a href={`mailto:${CONTACT_INFO.email}`} className="mt-6 inline-block px-6 py-3 text-white font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                        Say Hello
                     </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutPage;