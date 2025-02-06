'use client';
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import localFont from 'next/font/local';
import { NextFont } from "next/dist/compiled/@next/font";
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

    let surnameStyles: CSSProperties = {};

    useEffect(() => {
        if (!nameRef.current) return;
        const nameStyles = getComputedStyle(nameRef.current);
        const nameWidth = nameStyles.getPropertyValue('width');

        if(window.innerWidth < 640) {
            setLetterOffset(undefined);
            return;
        }
        
        setLetterOffset(nameWidth);

        window.addEventListener('resize', (screen) => {
            if (!nameRef.current) return;

            const nameStyles = getComputedStyle(nameRef.current);
            const nameWidth = nameStyles.getPropertyValue('width');
    
            setLetterOffset(nameWidth);
            
            if(window.innerWidth < 640) {
                setLetterOffset(undefined);
                return;
            }
        });
    }, [screen, letterOffset]);

    surnameStyles = letterOffset ? {left: letterOffset} : {};
    const speed: number = 4000;
    const distanceTravelled: number = 400;
    const web: string = 'WEB';
    const dev: string = 'DEVELOPER';
    const space: string = '·';

    let  marquee: string = space;

    for (let i = 0; i < 10; i++) {
        marquee = marquee + web + space + dev + space;
    }

    //svgs
    const svgNamePaths = {
        a: <path fill="white" stroke="black" strokeWidth="1" d="M113 700q14 0 23.5 -10t9.5 -24v-283v-67v-316h-67v316h-12v-316h-67v316v67v283q0 14 9.5 24t23.5 10h80zM79 383v250h-12v-250h12z" />,
        c: <path fill="white" stroke="black" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v633q0 14 9.5 24t23.5 10h80q14 0 23.5 -10t9.5 -24v-310h-67v277h-12v-566h12v277h67v-311q0 -14 -9.5 -23.5t-23.5 -9.5h-80v0z" />,
        e: <path fill="white" stroke="black" strokeWidth="1" d="M146 0h-146v700h146v-304h-67v237h-12v-249h79v-67h-79v-250h12v237h67v-304v0z" />,
        h: <path fill="white" stroke="black" strokeWidth="1" d="M67 316v-316h-67v316v67v317h67v-317h12v317h67v-317v-67v-316h-67v316h-12v0z" />,
        o: <path fill="white" stroke="black" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v634q0 14 9.5 23.5t23.5 9.5h80q14 0 23.5 -9.5t9.5 -23.5v-634q0 -14 -9.5 -23.5t-23.5 -9.5h-80zM67 67h12v566h-12v-566z" />
    }
    const svgStyles: CSSProperties = { overflow: "visible"};


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
                <svg viewBox="0 0 146 700" className="svg" style={svgStyles} >
                    {svgNamePaths.c}
                </svg>
                <svg viewBox="0 0 146 700" className="svg" style={svgStyles}>
                    {svgNamePaths.e}
                </svg>
                <svg viewBox="0 0 146 700" className="svg" style={svgStyles}>
                    {svgNamePaths.e}
                </svg>
                <motion.div ref={marqueeTopRef}
                    className={"nt-nameTitle-marquee " + blockFont.className}
                >
                    {marquee}
                </motion.div>
            </div>

            <div ref={surnameRef} className="nt-nameTitle-surname" style={{...surnameStyles}}>
                <svg viewBox="0 0 146 700" className="svg" style={svgStyles}>
                    {svgNamePaths.o}
                </svg>
                <svg viewBox="0 0 146 700" className="svg" style={svgStyles}>
                    {svgNamePaths.c}
                </svg>
                <svg viewBox="0 0 146 700" className="svg" style={svgStyles}>
                    {svgNamePaths.h}
                </svg>
                <svg viewBox="0 0 146 700" className="svg" style={svgStyles}>
                    {svgNamePaths.o}
                </svg>
                <svg viewBox="0 0 146 700" className="svg" style={{...svgStyles, transform: "scale(1, -1)"}}>
                    {svgNamePaths.a}
                </svg>
                <motion.div ref={marqueeBotRef}
                    className={"nt-nameTitle-marquee nt-nameTitle-marquee--row " + blockFont.className}
                >
                    {marquee}
                </motion.div>
            </div>



        </div>
    );
}