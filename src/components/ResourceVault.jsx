import React from 'react';
import { motion } from 'framer-motion';

const ResourceVault = () => {
    const resources = [
        {
            title: "Final Year Project Documentation Template",
            type: "DOCX",
            size: "2.4 MB",
            description: "Standard IEEE format documentation template with pre-filled headings and guidelines."
        },
        {
            title: "Viva Voce Question Bank",
            type: "PDF",
            size: "1.1 MB",
            description: "Top 50 most asked questions for AI, Web, and IoT project vivas."
        },
        {
            title: "Standard SRS Format",
            type: "PDF",
            size: "1.8 MB",
            description: "Software Requirements Specification template to define your project scope clearly."
        }
    ];

    return (
        <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        The Resource Vault
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Free tools and templates to jumpstart your academic project journey.
                        No strings attached.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all hover:bg-gray-900 group"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">
                                    {resource.type} • {resource.size}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-purple-300 transition-colors">
                                {resource.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                {resource.description}
                            </p>

                            <button className="w-full py-3 border border-gray-700 rounded-lg text-gray-300 font-medium hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all flex items-center justify-center gap-2">
                                <span>Download Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 text-center max-w-3xl mx-auto">
                    <p className="text-gray-300 mb-4">
                        "Downloaded the template but stuck on the implementation?"
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                        Get Expert Help from codeWINtage
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ResourceVault;
