'use client';
import React, { useEffect, useRef } from "react";
import ProfilePicture from "./profilePicture";

export default function Body() {
    return (
        <div id="pageContainer">
            <div id="loadingMask"></div>

            <div id="welcomeBannerContainer"></div>

            <ProfilePicture/>
            
            <div id="infoContainer">
                <div className="infoSection">
                    <h2 className="heading">Hi</h2>
                    <h3 className="subheading">I'm a web developer based in     Melbourne, Australia</h3>
                    <p className="text">I have a passion for frontend   development, and I love to build great code that makes <span  id="nerdy">nerdy</span> cool stuff happen.</p>
                </div>
            </div>

            <div id="infoContainer">
                <div className="infoSection">
                    <h2 className="heading">What can I do?</h2>
                    <h3 className="subheading">I can design what you want</h3>
                    <p className="text">I enjoy figuring out how to bring ideas     to life using code. I have experience developing with HTML,     CSS, JavaScript and React. Check out my <a id="projectsLink"    href="#">projects</a> to see examples of my work.</p>
                </div>
            </div>
        </div>
    );
};