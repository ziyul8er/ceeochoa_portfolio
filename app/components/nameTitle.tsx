'use client';
import React, { RefAttributes, useEffect, useRef, useState } from "react";
import localFont from 'next/font/local';
import { NextFont } from "next/dist/compiled/@next/font";
import { nameSvgArray, surnameSvgArray } from "../variables/svgPaths";
import Marquee from "./marquee";
import '../styles/nameTitle.css';
import '../global.css';

// Fonts
const blockFont: NextFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });

export default function NameTitle() {
    const [letterOffset, setLetterOffset] = useState<string | undefined>(undefined);
    const [flexRow, setFlexRow] = useState<boolean>(false);
    const [marqueeOffset, setMarqueeOffset] = useState<string | undefined>(undefined);

    const nameRef = useRef<HTMLDivElement>(null);
    const surnameRef = useRef<HTMLDivElement>(null);
    const marqueeTopRef = useRef<HTMLDivElement>(null);
    const marqueeBotRef = useRef<HTMLDivElement>(null);

    function getLetterOffset(ref:HTMLDivElement) {
        const nameStyles = getComputedStyle(ref);
        const nameWidth = nameStyles.getPropertyValue('width');
    
        if(window.innerWidth < 640) {
            setLetterOffset(undefined);
            return;
        }
    
        setLetterOffset(nameWidth);
    }

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

    function flexDirection() {
        if(window.innerWidth < 640) {
            setFlexRow(false);
            return;
        }
        setFlexRow(true);
    }

    useEffect(() => {
        flexDirection();

        if (!nameRef.current) return;
        getLetterOffset(nameRef.current);

        window.addEventListener('resize', (screen) => {
            if (!nameRef.current) return;
            getLetterOffset(nameRef.current);
            flexDirection();
        });
    }, [screen, letterOffset, flexRow, marqueeOffset]);

    const surnameStyles = letterOffset ? {left: letterOffset} : {};

    return(
        <div className="nt-nameTitle">
            <div ref={nameRef} className="nt-nameTitle-name">
                {nameSvgArray.map(el => el)}
                <Marquee direction={true} flexRow={flexRow} />
            </div>

            <div ref={surnameRef} className="nt-nameTitle-surname" style={{...surnameStyles}}>
                {surnameSvgArray.map(el => el)}
                <Marquee direction={false} flexRow={flexRow} />
            </div>
            <Marquee direction={false} flexRow={!flexRow} />
        </div>
    );
}