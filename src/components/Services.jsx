import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section id="services" className="section-padding bg-light" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="service-grid">

                    <div className="card" ref={addToRefs}>
                        <h3>The "Nano" Tier</h3>
                        <p className="subtitle">For Students & Academia</p>
                        <ul>
                            <li>IEEE-standard Final Year Projects</li>
                            <li>Complete Documentation (Synopsis, SRS, Reports)</li>
                            <li>Code Walkthroughs & Examiner Prep</li>
                            <li>Tech Stack: Python, Java, MERN, PHP</li>
                        </ul>
                    </div>

                    <div className="card" ref={addToRefs}>
                        <h3>The "Pro" Tier</h3>
                        <p className="subtitle">For Business & Startups</p>
                        <ul>
                            <li>Custom Web Development (SEO-friendly)</li>
                            <li>Software Consulting & Analysis</li>
                            <li>24/7 Maintenance & Support</li>
                            <li>Scalable Business Solutions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
