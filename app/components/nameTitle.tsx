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
    //states
    const [surnameOffset, setSurnameOffset] = useState<string | undefined>(undefined);
    const [nameOffset, setNameOffset] = useState<string | undefined>(undefined);
    const [flexRow, setFlexRow] = useState<boolean>(false);
    //refs
    const nameTitleRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const surnameRef = useRef<HTMLDivElement>(null);
    const marqueeOutTopRef = useRef<HTMLDivElement>(null);
    const marqueeOutBotRef = useRef<HTMLDivElement>(null);
    const marqueeRefTop = useRef<HTMLDivElement>(null);
    const marqueeRefBot = useRef<HTMLDivElement>(null);
    //animation
    const speed: number = 1000;
    const distanceTravelled: number = 100;
    const web: string = 'WEB';
    const dev: string = 'DEVELOPER';
    const space: string = '·';
    let  marquee: string = space;
    const surnameStyles = surnameOffset ? {left: surnameOffset} : {};
    const nameStyles = nameOffset ? {left: nameOffset} : {};
    const classes = `nt-marquee ${blockFont.className}`;
    const classesOut= `nt-marqueeOut ${blockFont.className}`;
    const isTopBotHidden = flexRow === true ? " nt-marquee--hidden" : "";
    const isHidden = !flexRow === true ? " nt-marquee--hidden" : "";
 
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
        
        const n = Number(nameWidth.slice(0, -2));
        const s = Number(surnameWidth.slice(0, -2));
        const w = Number(wrapperWidth.slice(0, -2));

        const totalGap = w - (n + s);
        const finalNameOffset = (totalGap / 2).toString() + "px";
        const finalSurnameOffset = ((n + totalGap / 2)).toString() + "px";

        setNameOffset(finalNameOffset);
        setSurnameOffset(finalSurnameOffset);
    }

    function flexDirection() {
        if(window.innerWidth < 640) {
            setFlexRow(false);
            return;
        }
        setFlexRow(true);
    }

    useAnimationFrame((t) => {
        if (!marqueeOutTopRef.current) return;
        if (!marqueeOutBotRef.current) return;
        if (!marqueeRefTop.current) return;
        if (!marqueeRefBot.current) return;

        const x = (Math.sin(t / speed)) * distanceTravelled;
        const xBot = -(Math.sin(t / speed)) * distanceTravelled;
        
        marqueeOutTopRef.current.style.transform = `translateX(${x}px)`;
        marqueeOutBotRef.current.style.transform = `translateX(${xBot}px)`;
        marqueeRefTop.current.style.transform = `translateX(${x}px)`;
        marqueeRefBot.current.style.transform = `translateX(${xBot}px)`;
    });

    useEffect(() => {
        if (!nameRef.current) return;
        if (!surnameRef.current) return;
        if (!marqueeOutTopRef.current) return;
        if (!marqueeOutBotRef.current) return;
        if (!nameTitleRef.current) return;

        flexDirection();
        _getLetterOffset(nameRef.current, surnameRef.current,nameTitleRef.current);

        window.addEventListener('resize', (screen) => {
            if (!nameRef.current) return;                
            if (!marqueeOutTopRef.current) return;
            if (!marqueeOutBotRef.current) return;
            if (!nameTitleRef.current) return;
            if (!surnameRef.current) return;

            flexDirection();
            _getLetterOffset(nameRef.current, surnameRef.current,nameTitleRef.current);
        });
    }, [screen, surnameOffset, flexRow]);

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
            <div className="u-marqueeOutWrapper">
                <motion.div ref={marqueeOutTopRef} 
                    style={{top: "25%"}}
                    className={classesOut + isHidden}
                >
                    {marquee}
                </motion.div>
                <motion.div ref={marqueeOutBotRef} 
                    className={classesOut + isHidden}
                    style={{top: "55%"}}
                >
                    {marquee}
                </motion.div>
            </div>

            <div className="u-linksWrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg" data-src="https://cdn.hugeicons.com/icons/linkedin-01-solid-sharp.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color="#ffffff">
        <path fillRule="evenodd" clipRule="evenodd" d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM6.25 9L6.25 17H7.75L7.75 9H6.25ZM10.25 9H11.75V9.99973C12.3767 9.52896 13.1558 9.25 14 9.25C16.0711 9.25 17.75 10.9289 17.75 13V17H16.25V13C16.25 11.7574 15.2426 10.75 14 10.75C12.7574 10.75 11.75 11.7574 11.75 13L11.75 17H10.25L10.25 9ZM7.00781 8C7.5601 8 8.00781 7.55229 8.00781 7C8.00781 6.44771 7.5601 6 7.00781 6H6.99883C6.44655 6 5.99883 6.44771 5.99883 7C5.99883 7.55228 6.44655 8 6.99883 8H7.00781Z" fill="#ffffff"></path>
      </svg>
    </div>
        </div>
    );
}