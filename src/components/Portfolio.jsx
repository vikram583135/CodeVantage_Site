import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            category: "Web Application",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            link: "#"
        },
        {
            title: "Health Tracker App",
            category: "Mobile App",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            link: "#"
        },
        {
            title: "Smart Home Interface",
            category: "IoT Dashboard",
            image: "https://images.unsplash.com/photo-1558002038-1091a166111c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            link: "#"
        }
    ];

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
                        <p className="text-gray-400 max-w-md">
                            Explore some of our recent projects delivered to satisfied clients.
                        </p>
                    </div>
                    <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                    <span className="px-6 py-2 bg-white text-black rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        View Live Demo
                                    </span>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-gray-500 text-sm">{project.category}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
