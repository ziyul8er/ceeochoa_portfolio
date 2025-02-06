'use client';
import React, { useEffect, useRef, useState } from "react";
import localFont from 'next/font/local';
import { NextFont } from "next/dist/compiled/@next/font";
import { nameSvgArray, surnameSvgArray } from "../variables/svgPaths";
import '../styles/nameTitle.css';
import '../global.css';
import { motion, useAnimationFrame } from "motion/react";

// Fonts
const blockFont: NextFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });

export default function NameTitle() {
    const [letterOffset, setLetterOffset] = useState<string | undefined>(undefined);

    const marqueeTopRef = useRef<HTMLDivElement>(null);
    const marqueeBotRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const surnameRef = useRef<HTMLDivElement>(null);

    function getLetterOffset(ref:HTMLDivElement) {
        const nameStyles = getComputedStyle(ref);
        const nameWidth = nameStyles.getPropertyValue('width');
    
        if(window.innerWidth < 640) {
            setLetterOffset(undefined);
            return;
        }
    
        setLetterOffset(nameWidth);
    }

    useEffect(() => {
        if (!nameRef.current) return;
        getLetterOffset(nameRef.current);

        window.addEventListener('resize', (screen) => {
            if (!nameRef.current) return;
            getLetterOffset(nameRef.current);
        });
    }, [screen, letterOffset]);

    //animation
    const surnameStyles = letterOffset ? {left: letterOffset} : {};
    const speed: number = 4000;
    const distanceTravelled: number = 400;
    const web: string = 'WEB';
    const dev: string = 'DEVELOPER';
    const space: string = '·';

    let  marquee: string = space;

    for (let i = 0; i < 10; i++) {
        marquee = marquee + web + space + dev + space;
    }

    useAnimationFrame((t) => {
        if (!marqueeTopRef.current) return;
        if (!marqueeBotRef.current) return;

        const xTop = (Math.sin(t / speed)) * distanceTravelled;
        const xBottom = -(Math.sin(t / speed)) * distanceTravelled;

        marqueeTopRef.current.style.transform = `translateX(${xTop}px)`;
        marqueeBotRef.current.style.transform = `translateX(${xBottom}px)`;

    });

    return(
        <div className="nt-nameTitle">
            <div ref={nameRef} className="nt-nameTitle-name">
                {nameSvgArray.map(el => el)}
                <motion.div ref={marqueeTopRef}
                    className={"nt-nameTitle-marquee " + blockFont.className}
                >
                    {marquee}
                </motion.div>
            </div>

            <div ref={surnameRef} className="nt-nameTitle-surname" style={{...surnameStyles}}>
                {surnameSvgArray.map(el => el)}
                <motion.div ref={marqueeBotRef}
                    className={"nt-nameTitle-marquee nt-nameTitle-marquee--row " + blockFont.className}
                >
                    {marquee}
                </motion.div>
            </div>
        </div>
    );
}