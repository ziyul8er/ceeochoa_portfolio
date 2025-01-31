import React from "react";
import './landing.css';
import WelcomeMessage from "./welcomeMessage";


export default function Landing() {
    return (
        <div className="landingContainer">

            <div className="welcomeContainer">
                <div className="devName">
                    <h1>Cee Ochoa</h1>
                    <h2>Engineer, Web Developer, Something else</h2>
                </div>

                <WelcomeMessage />
            </div>
            
            <div className="devApproach">
                <p>I believe in writing clean, maintainable code, embracing continuous learning, and building applications that prioritize accessibility for all users.</p>

                <p>If you're looking for a developer who combines technical expertise with a user-first mindset, let’s connect and build something great together!
                </p>
            </div>
        </div>
    );
};