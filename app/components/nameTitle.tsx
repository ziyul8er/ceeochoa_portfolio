'use client';
import React, { useRef } from "react";
import localFont from 'next/font/local';
import { NextFont } from "next/dist/compiled/@next/font";
import '../styles/nameTitle.css';
import '../global.css';
import { motion, useAnimationFrame } from "motion/react";

// Fonts
const boderFont: NextFont = localFont({ src: "../fonts/outward-borders-webfont.woff2" });
const blockFont: NextFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });

export default function NameTitle() {
    const refTop = useRef<HTMLDivElement>(null)
    const refBottom = useRef<HTMLDivElement>(null)
    const distanceTravelled = 1000;
    
    useAnimationFrame((t) => {
        if (!refTop.current) return;
        if (!refBottom.current) return;

        const xTop = (Math.sin(t / 9000)) * distanceTravelled;
        const xBottom = -(Math.sin(t / 9000)) * distanceTravelled;
        refTop.current.style.transform = `translateX(${xTop}px)`;
        refBottom.current.style.transform = `translateX(${xBottom}px)`;
    });

    const web: string = 'WEB';
    const dev: string = 'DEVELOPER';
    const space: string = '·';

    let  marquee: string = space;

    for (let i=0; i<10; i++) {
        marquee = marquee + web + space + dev + space;
    }

    const svgNamePaths = {
        a: <path fill="white" strokeWidth="1" d="M113 700q14 0 23.5 -10t9.5 -24v-283v-67v-316h-67v316h-12v-316h-67v316v67v283q0 14 9.5 24t23.5 10h80zM79 383v250h-12v-250h12z" />,
        c: <path fill="white" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v633q0 14 9.5 24t23.5 10h80q14 0 23.5 -10t9.5 -24v-310h-67v277h-12v-566h12v277h67v-311q0 -14 -9.5 -23.5t-23.5 -9.5h-80v0z" />,
        e: <path fill="white" strokeWidth="1" d="M146 0h-146v700h146v-304h-67v237h-12v-249h79v-67h-79v-250h12v237h67v-304v0z" />,
        h: <path fill="white" strokeWidth="1" d="M67 316v-316h-67v316v67v317h67v-317h12v317h67v-317v-67v-316h-67v316h-12v0z" />,
        o: <path fill="white" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v634q0 14 9.5 23.5t23.5 9.5h80q14 0 23.5 -9.5t9.5 -23.5v-634q0 -14 -9.5 -23.5t-23.5 -9.5h-80zM67 67h12v566h-12v-566z" />
    }

    return(
        <div className="nt-nameTitle">
            <div className="nt-nameTitle-name">
                <svg className="svg" style={{ paddingBottom: "94%", height: "1px", width: "150px", overflow: "visible"}} >
                    {svgNamePaths.c}
                </svg>
                <svg className="svg" style={{ paddingBottom: "94%", height: "1px", width: "150px", overflow: "visible"}}>
                    {svgNamePaths.e}
                </svg>
                <svg className="svg" style={{ paddingBottom: "94%", height: "1px", width: "150px", overflow: "visible"}}>
                    {svgNamePaths.e}
                </svg>
            </div>

            <div className="nt-nameTitle-surname">
                <svg className="svg" style={{ paddingBottom: "94%", height: "1px", width: "150px", overflow: "visible"}}>
                    {svgNamePaths.o}
                </svg>
                <svg className="svg" style={{ paddingBottom: "94%", height: "1px", width: "150px", overflow: "visible"}}>
                    {svgNamePaths.c}
                </svg>
                <svg className="svg" style={{ paddingBottom: "94%", height: "1px", width: "150px", overflow: "visible"}}>
                    {svgNamePaths.h}
                </svg>
                <svg className="svg" style={{ paddingBottom: "94%", height: "1px", width: "150px", overflow: "visible"}}>
                    {svgNamePaths.o}
                </svg>
                <svg className="svg" style={{ paddingBottom: "93.5%", height: "1px", width: "150px", overflow: "visible", transform: "scale(1, -1)"}}>
                    {svgNamePaths.a}
                </svg>
            </div>

            <motion.div
                ref={refTop}
                className={"nt-nameTitle-marquee " + blockFont.className}
            >
                {marquee}
            </motion.div>
            <motion.div
                ref={refBottom}
                className={"nt-nameTitle-marquee " + blockFont.className}
                style={{top: "60%"}}
            >
                {marquee}
            </motion.div>
        </div>
    );
}