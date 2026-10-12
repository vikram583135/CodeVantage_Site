import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import FloatingSpheres from './FloatingSpheres';



const Hero = () => {
    return (
        <header className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* 3D Background Layer */}
            {/* 3D Background Layer */}
            <FloatingSpheres count={40} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '3rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Bridging the Gap Between Academic Concepts and Real-World Software.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Premium software solutions for final-year students, budding developers, and startups. We deliver clean code, complete documentation, and 100% execution support.
                    </motion.p>
                    <motion.div
                        className="btn-group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                    >
                        <a href="#services" className="btn btn-primary">View Project Catalog</a>
                        <a href="#contact" className="btn btn-secondary">Request Custom Software</a>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
