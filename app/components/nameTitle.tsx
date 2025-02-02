'use client';
import React, { useState } from "react";
import localFont from 'next/font/local';
import { NextFont } from "next/dist/compiled/@next/font";
import { motion, useMotionValue, useTime, useTransform } from 'motion/react';

import '../styles/nameTitle.css';
import '../global.css';

// Fonts
const boderFont: NextFont = localFont({ src: "../fonts/outward-borders-webfont.woff2" });
const blockFont: NextFont = localFont({ src: "../fonts/outward-block-webfont.woff2" });

export default function NameTitle() {
    const time = useTime();
    const x = useTransform(time, [0, 1000], [0, 100], {clamp: false});

    return(
        <div className="nt-nameTitle">
            <span className={"nt-nameTitle-me " + boderFont.className}>CEE OCHOA</span>
            <motion.div 
                style={{x: x}}
            className={"nt-nameTitle-role " + blockFont.className}>·WEB DEVELOPER·</motion.div>
        </div>
    );
}