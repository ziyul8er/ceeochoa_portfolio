import React, { useRef } from "react";
import { motion, useAnimationFrame, useTime, useTransform } from 'motion/react';
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";
import { motionValue } from "motion";

const blockFont: NextFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });


export default function Marquee() {
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
        <motion.div
            ref={ref}
            className={"nt-nameTitle-role " + blockFont.className}
        >
            {marquee}
        </motion.div>    
    );
}