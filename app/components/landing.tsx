'use client';
import React, { useEffect, useRef } from "react";
import './landing.css';

export default function Landing() {
    return (
        <div className="landingContainer">

            <div className="welcome">
                <div className="devName">
                    <h1>Cee Ochoa</h1>
                    <h2>Engineer, Web Developer, Something else</h2>
                </div>

                <div className="bio">
                    <p>I'm a Front-End Developer based in Melbourne with over 3 years of experience building modern, user-friendly web applications. I specialize in React, Next.js, and TypeScript, crafting seamless digital experiences with a strong focus on performance and accessibility.</p>

                    <p>Alongside my front-end expertise, I have a solid grasp of back-end development with C# and .NET, allowing me to collaborate effectively across the full stack.</p>
                </div>
            </div>
            
            <div className="devApproach">
                <p>I believe in writing clean, maintainable code, embracing continuous learning, and building applications that prioritize accessibility for all users.</p>

                <p>If you're looking for a developer who combines technical expertise with a user-first mindset, let’s connect and build something great together!
                </p>
            </div>
        </div>
    );
};