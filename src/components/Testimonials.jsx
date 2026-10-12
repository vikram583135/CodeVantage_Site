import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Final Year CS Student",
            text: "The AI project I got from codeWINtage was top-notch. The documentation was perfect, and I cleared my viva with ease!",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Priya Patel",
            role: "Startup Founder",
            text: "codeWINtage helped us build our MVP in record time. The code quality is excellent and scalable.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "Vikram Singh",
            role: "IT Student",
            text: "I was struggling with my IoT project. Their team not only provided the code but also explained how it works.",
            image: "https://randomuser.me/api/portraits/men/86.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Trusted by Students & Startups
                </h2>

                <div className="relative max-w-4xl mx-auto h-80">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-full"
                        >
                            <div className="bg-gray-800 rounded-2xl p-10 border border-gray-700 shadow-2xl relative">
                                <div className="absolute -top-6 -left-6 text-6xl text-blue-500 opacity-30 font-serif">"</div>

                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500/30 flex-shrink-0">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="text-center md:text-left">
                                        <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                                            {testimonials[currentIndex].text}
                                        </p>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-blue-400 text-sm">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
