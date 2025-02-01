'use client';
import React, { MouseEvent, MouseEventHandler, useRef, useState } from "react";
import localFont from 'next/font/local';
import { NextFont } from "next/dist/compiled/@next/font";
import { motion } from 'motion/react';

import '../styles/nameTitle.css';
import '../global.css';

interface IFonts { 
    [ index: number ]: NextFont;
}

// Fonts
const defaultFont = localFont({ src: "../fonts/franchise-free-bold.ttf" });
const engineerFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });
const hackerFont = localFont({ src: "../fonts/st-marie.woff2"});
const devFont = localFont({ src: "../fonts/kaushanScript-regular.ttf"});

const fontsArray: IFonts = [ defaultFont, engineerFont, hackerFont, devFont ];

export default function NameTitle() {
    const engineerRef = useRef(null);
    const devRef = useRef(null);
    const hackerRef = useRef(null);

    const [ displayFont, setDisplayFont ] = useState( fontsArray[1] );

    function changeThemes(x: any) {
        let chosenTheme = x.target.className;

        switch (chosenTheme) {
            case 'nt-nameTitle-engineer':
                chosenTheme = engineerFont;
                break;
            case 'nt-nameTitle-dev':
                chosenTheme = devFont;
                break;
            case 'nt-nameTitle-hacker':
                chosenTheme = hackerFont;
                break;                
        }
        setDisplayFont(chosenTheme);
    }    

    return(
        <div className={ "nt-nameTitle " + displayFont.className }>
            <motion.div 
                className="nt-nameTitle-me"
            >
                <span>Cee Ochoa</span>
            </motion.div>
            <div className="u-themesWrapper">
                <div ref={engineerRef}
                    className="nt-nameTitle-engineer"
                    onClick={(e) => changeThemes(e)}
                >
                    ENGINEER
                </div>

                <div ref={devRef}
                    className="nt-nameTitle-dev"
                    onClick={(e) => changeThemes(e)}
                >
                    <span>WEB DEVELOPER</span>
                </div>

                <div ref={hackerRef}
                    className="nt-nameTitle-hacker"
                    onClick={(e) => changeThemes(e)}
                >
                    <span>HACKER</span>
                </div>
            </div>
        </div>
    );
}