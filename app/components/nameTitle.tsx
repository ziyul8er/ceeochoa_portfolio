'use client';
import React, { useRef } from "react";
import localFont from 'next/font/local';
import { NextFont } from "next/dist/compiled/@next/font";

import '../styles/nameTitle.css';
import '../global.css';
import { motion, useAnimationFrame, useTime } from "motion/react";

// Fonts
const boderFont: NextFont = localFont({ src: "../fonts/outward-borders-webfont.woff2" });
const blockFont: NextFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });



export default function NameTitle() {
    const ref = useRef<HTMLDivElement>(null)
    const time = useTime();
    const distanceTravelled = 1000;
    
    console.log(time.get());
    useAnimationFrame((time) => {
        if (!ref.current) return;

        const x = (Math.sin(time / 9000)) * distanceTravelled;
        ref.current.style.transform = `translateX(${x}px)`;
    });

    const web: string = 'WEB';
    const dev: string = 'DEVELOPER';
    const space: string = '·';

    let  marquee: string = space;

    for (let i=0; i<10; i++) {
        marquee = marquee + web + space + dev + space;
    }

    return(
        <div className="nt-nameTitle">
            {/* <svg className="svg" >
                <path fill="white" stroke="white" strokeWidth="1" d="M33 0q-14 0 -23.5 9.5t-9.5 23.5v633q0 14 9.5 24t23.5 10h80q14 0 23.5 -10t9.5 -24v-310h-67v277h-12v-566h12v277h67v-311q0 -14 -9.5 -23.5t-23.5 -9.5h-80v0z" />
            </svg> */}
            <div className={"nt-nameTitle-me " + blockFont.className}>CEE OCHOA</div>
                    <motion.div
                        ref={ref}
                        className={"nt-nameTitle-role " + blockFont.className}
                    >
                        {marquee}
                    </motion.div> 
        </div>
    );
}