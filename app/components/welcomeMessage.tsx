'use client'
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useMotionValue, useSpring, SpringOptions } from 'motion/react';
import useParallax from "./useParallax";

export default function WelcomeMessage() {

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.1,
                scale: { type: "spring", bounce: 0 }
            }}
            className="bio"
        >
            <p>I'm a Front-End Developer based in Melbourne with over 3 years of experience building modern, user-friendly web applications. I specialize in React, Next.js, and TypeScript, crafting seamless digital experiences with a strong focus on performance and accessibility.</p>

            <p>Alongside my Front-End expertise, I have a solid grasp of Back-End development with C# and .NET, allowing me to collaborate effectively across the full stack.</p>
        </motion.div>
    );
}