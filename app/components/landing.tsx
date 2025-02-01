import React from "react";
import '../styles/landing.css';
import NameTitle from "./nameTitle";


export default function Landing() {

    return (    
        <div className="landingContainer">
            <NameTitle />
            <div className="devApproach" style={{visibility: "hidden"}}>
                <p>I believe in writing clean, maintainable code, embracing continuous learning, and building applications that prioritize accessibility for all users.</p>

                <p>If you're looking for a developer who combines technical expertise with a user-first mindset, let’s connect and build something great together!
                </p>
            </div>
        </div>
    );
};