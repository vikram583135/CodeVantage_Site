import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Whether you're a student with a big idea or a startup looking for scalability, we're here to help.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                        <a
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-blue-600 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/30 transform hover:-translate-y-1"
                        >
                            Book a Free Architecture Review
                        </a>
                        <a
                            href="https://wa.me/919606578966"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full text-lg font-bold hover:bg-gray-700 transition-all transform hover:-translate-y-1"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
                        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-bold mb-2 text-blue-400">Lead Developer</h3>
                            <p className="text-gray-300">Vikram</p>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-bold mb-2 text-purple-400">Location</h3>
                            <p className="text-gray-300">Bengaluru, India</p>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-bold mb-2 text-green-400">Email</h3>
                            <a href="mailto:vikram583135@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                vikram583135@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
