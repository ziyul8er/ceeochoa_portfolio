import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useTime, useTransform } from 'motion/react';
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const blockFont: NextFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });

interface IMarquee {
    direction: boolean;
    flexRow: boolean;
}

export default function Marquee( props: IMarquee) {
    const [marqueeOffset, setMarqueeOffset] = useState<string | undefined>(undefined);
    
    const ref = useRef<HTMLDivElement>(null);
    const speed: number = 1000;
    const distanceTravelled: number = 400;
    const web: string = 'WEB';
    const dev: string = 'DEVELOPER';
    const space: string = '·';

    let  marquee: string = space;
    
    for (let i = 0; i < 10; i++) {
        marquee = marquee + web + space + dev + space;
    }

    const classes = `nt-nameTitle-marquee ${blockFont.className}`;
    const hidden = props.flexRow === true ? " nt-nameTitle-marquee--hidden" : "";

    function getMarqueeOffset(ref: HTMLDivElement) {
        const marqueeStyles = getComputedStyle(ref);
        const currentOffset = marqueeStyles.getPropertyValue('right');

        const marqueeOffsetNumber = Number(currentOffset.slice(0, -2)) / 2;
        let marqueeOffset: string;

        if (typeof marqueeOffsetNumber !== "number") {
            setMarqueeOffset(undefined);
            return;
        }

        marqueeOffset = marqueeOffsetNumber.toString();

        if(window.innerWidth < 640) {
            setMarqueeOffset(undefined);
            return;
        }
        console.log(marqueeOffset);
        setMarqueeOffset(marqueeOffset);
    }

    useEffect(() => {
        if(!ref.current) return;
        getMarqueeOffset(ref.current);

        window.addEventListener('resize', (screen) => {
            if (!ref.current) return;
            getMarqueeOffset(ref.current);
        });        
    }, [marqueeOffset]);

    useAnimationFrame((t) => {
        if (!ref.current) return;

        const x = (props.direction === true ? 1 : -1) * (Math.sin(t / speed)) * distanceTravelled;
        
        ref.current.style.transform = `translateX(${x}px)`;
    });

    return(            
        <motion.div ref={ref} className={classes + hidden} style={{right: marqueeOffset}}>
            {marquee}
        </motion.div>    
    );
}