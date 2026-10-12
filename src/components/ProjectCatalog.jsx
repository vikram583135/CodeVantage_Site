import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';

const ProjectCatalog = () => {
    const [filterDomain, setFilterDomain] = useState('All');
    const [filterLanguage, setFilterLanguage] = useState('All');

    const domains = ['All', 'AI', 'Web', 'IoT'];
    const languages = ['All', 'Python', 'Java'];

    const filteredProjects = projectsData.filter(project => {
        const domainMatch = filterDomain === 'All' || project.domain === filterDomain;
        const languageMatch = filterLanguage === 'All' || project.language === filterLanguage;
        return domainMatch && languageMatch;
    });

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Project Idea Generator
                </h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">Domain:</span>
                        <div className="flex gap-2">
                            {domains.map(domain => (
                                <button
                                    key={domain}
                                    onClick={() => setFilterDomain(domain)}
                                    className={`px-4 py-2 rounded-full text-sm transition-all ${filterDomain === domain
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    {domain}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">Language:</span>
                        <div className="flex gap-2">
                            {languages.map(lang => (
                                <button
                                    key={lang}
                                    onClick={() => setFilterLanguage(lang)}
                                    className={`px-4 py-2 rounded-full text-sm transition-all ${filterLanguage === lang
                                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                                    {project.domain}
                                </span>
                                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium border border-purple-500/20">
                                    {project.language}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group/btn">
                                <span>Download Synopsis</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover/btn:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No projects found matching your criteria.
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectCatalog;
