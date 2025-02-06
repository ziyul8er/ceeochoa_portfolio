'use client';
import React, { useEffect, useRef, useState } from "react";
import localFont from 'next/font/local';
import { NextFont } from "next/dist/compiled/@next/font";
import { nameSvgArray, surnameSvgArray } from "../variables/svgPaths";
import '../styles/nameTitle.css';
import '../global.css';
import { motion, useAnimationFrame } from "motion/react";

const blockFont: NextFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });

export default function NameTitle() {
    const [surnameOffset, setSurnameOffset] = useState<string | undefined>(undefined);
    const [nameOffset, setNameOffset] = useState<string | undefined>(undefined);
    const [flexRow, setFlexRow] = useState<boolean>(false);
    const [marqueeOffset, setMarqueeOffset] = useState<string | undefined>(undefined);
    
    const nameTitleRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const surnameRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeRefTop = useRef<HTMLDivElement>(null);
    const marqueeRefBot = useRef<HTMLDivElement>(null);
    const speed: number = 500;
    const distanceTravelled: number = 100;
    const web: string = 'WEB';
    const dev: string = 'DEVELOPER';
    const space: string = '·';
    let  marquee: string = space;
    const surnameStyles = surnameOffset ? {left: surnameOffset} : {};
    const nameStyles = nameOffset ? {left: nameOffset} : {};
    const classes = `nt-nameTitle-marquee ${blockFont.className}`;
    const isTopBotHidden = flexRow === true ? " nt-nameTitle-marquee--hidden" : "";
    const isHidden = !flexRow === true ? " nt-nameTitle-marquee--hidden" : "";
 
    for (let i = 0; i < 10; i++) {
        marquee = marquee + web + space + dev + space;
    }

    function _getLetterOffset(nameRef: HTMLDivElement, surnameRef: HTMLDivElement, wrapperRef: HTMLDivElement) {
        if(window.innerWidth < 640) {
            setNameOffset(undefined);
            setSurnameOffset(undefined);
            return;
        };

        const nameStyles = getComputedStyle(nameRef);
        const surnameStyles = getComputedStyle(surnameRef);
        const wrapperStyles = getComputedStyle(wrapperRef);
        
        const nameWidth = nameStyles.getPropertyValue('width');
        const surnameWidth = surnameStyles.getPropertyValue('width');
        const wrapperWidth = wrapperStyles.getPropertyValue('width');
        
        console.log(wrapperWidth);
        
            const n = Number(nameWidth.slice(0, -2));
            const s = Number(surnameWidth.slice(0, -2));
            const w = Number(wrapperWidth.slice(0, -2));

            const totalGap = w - (n + s);
            const finalNameOffset = (totalGap / 2).toString() + "px";
            const finalSurnameOffset = ((n + totalGap / 2)).toString() + "px";

            // return ((w - (n + s))).toString() + "px";


        
        setNameOffset(finalNameOffset);
        setSurnameOffset(finalSurnameOffset);
    }

    function _getMarqueeOffset(ref: HTMLDivElement) {
        const marqueeStyles = getComputedStyle(ref);
        const currentOffset = marqueeStyles.getPropertyValue('right');

        const marqueeOffsetNumber = Math.abs(Number(currentOffset.slice(0, -2)) / 2);
        const marqueeOffset = marqueeOffsetNumber.toString() + "px";

        if(window.innerWidth < 640) {
            setMarqueeOffset(undefined);
            return;
        }
        // console.log(marqueeOffset);
        setMarqueeOffset(marqueeOffset);
    }

    function flexDirection() {
        if(window.innerWidth < 640) {
            setFlexRow(false);
            return;
        }
        setFlexRow(true);
    }

    useAnimationFrame((t) => {
        if (!marqueeRef.current) return;
        if (!marqueeRefTop.current) return;
        if (!marqueeRefBot.current) return;

        const x = (Math.sin(t / speed)) * distanceTravelled;
        const xBot = -(Math.sin(t / speed)) * distanceTravelled;
        
        marqueeRef.current.style.transform = `translateX(${x}px) left:"${surnameOffset}"`;
        marqueeRefTop.current.style.transform = `translateX(${x}px)`;
        marqueeRefBot.current.style.transform = `translateX(${xBot}px)`;
    });

    useEffect(() => {
        if (!nameRef.current) return;
        if (!surnameRef.current) return;
        if (!marqueeRef.current) return;
        if (!nameTitleRef.current) return;

        flexDirection();
        _getMarqueeOffset(marqueeRef.current);
        _getLetterOffset(nameRef.current, surnameRef.current,nameTitleRef.current);

        window.addEventListener('resize', (screen) => {
            if (!nameRef.current) return;                
            if (!marqueeRef.current) return;
            if (!nameTitleRef.current) return;
            if (!surnameRef.current) return;

            flexDirection();
            _getMarqueeOffset(marqueeRef.current);
            _getLetterOffset(nameRef.current, surnameRef.current,nameTitleRef.current);
        });
    }, [screen, surnameOffset, flexRow, marqueeOffset]);

    return(
        <div ref={nameTitleRef} className="nt-nameTitle">
            <div ref={nameRef} className="nt-nameTitle-name" style={{...nameStyles}}>
                {nameSvgArray.map(el => el)}
                <motion.div ref={marqueeRefTop} 
                    className={classes + isTopBotHidden} 
                >
                    {marquee}
                </motion.div>
            </div>

            <div ref={surnameRef} className="nt-nameTitle-surname" style={{...surnameStyles}}>
                {surnameSvgArray.map(el => el)}
                <motion.div ref={marqueeRefBot} 
                    className={classes + isTopBotHidden} 
                >
                    {marquee}
                </motion.div>
            </div>
            <motion.div ref={marqueeRef} 
                className={classes + isHidden}
            >
                {marquee}
            </motion.div>
        </div>
    );
}