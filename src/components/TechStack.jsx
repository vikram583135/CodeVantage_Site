import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="tech" className="section-padding bg-dark">
      <div className="container text-center">
        <h2 className="section-title white-text">The Tech Stack</h2>
        <p className="white-text">We build using modern, industry-standard technologies:</p>
        <motion.div
          className="tech-list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span variants={item}>React.js</motion.span>
          <motion.span variants={item}>Node.js</motion.span>
          <motion.span variants={item}>Python</motion.span>
          <motion.span variants={item}>Java</motion.span>
          <motion.span variants={item}>MySQL</motion.span>
          <motion.span variants={item}>MongoDB</motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
