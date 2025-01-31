'use client'
import React, { useRef } from "react";
import { motion, useScroll } from 'motion/react';
import useParallax from "./useParallax";

export default function WelcomeMessage() {
    const ref = useRef( null );
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax( scrollYProgress, 0 );

    return (
        <motion.div 
            // Hide until scroll progress is measured
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
            style={{ y }}
            className="bio"
        >
            <p>I'm a Front-End Developer based in Melbourne with over 3 years of experience building modern, user-friendly web applications. I specialize in React, Next.js, and TypeScript, crafting seamless digital experiences with a strong focus on performance and accessibility.</p>

            <p>Alongside my Front-End expertise, I have a solid grasp of Back-End development with C# and .NET, allowing me to collaborate effectively across the full stack.</p>
        </motion.div>
    );
}