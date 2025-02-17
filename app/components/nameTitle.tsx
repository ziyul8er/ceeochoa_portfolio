"use client";
import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import { NextFont } from "next/dist/compiled/@next/font";
import { nameSvgArray, surnameSvgArray } from "../variables/svgPaths";
import "../styles/nameTitle.css";
import "../global.css";
import { motion, useAnimationFrame } from "motion/react";

const blockFont: NextFont = localFont({
  src: "../fonts/outward-block-webfont.woff2",
});

export default function NameTitle() {
  //states
  const [isDisplayRow, setDisplaydirection] = useState<boolean>(false);

  //refs
  const nameTitleRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const surnameRef = useRef<HTMLDivElement>(null);
  const marqueeOutTopRef = useRef<HTMLDivElement>(null);
  const marqueeOutBotRef = useRef<HTMLDivElement>(null);
  const marqueeRefTop = useRef<HTMLDivElement>(null);
  const marqueeRefBot = useRef<HTMLDivElement>(null);

  //animation variables
  const speed: number = 2000;
  const distanceTravelled: number = 100;
  let marquee: string = "·";

  //styles
  const marqueeClasses = `nt-marquee ${blockFont.className}`;
  const marqueeClassesOut = `${blockFont.className} nt-marqueeOut`;
  const isTopBotHidden = isDisplayRow === true ? " nt-marquee--hidden" : "";
  const isHidden = !isDisplayRow === true ? " nt-marquee--hidden" : "";

  for (let i = 0; i < 20; i++) {
    marquee += "WEB" + "·" + "DEVELOPER" + "·";
  }

  function _checkDisplayDirection() {
    if (window.innerWidth < 768) {
      setDisplaydirection(false);
      return;
    }
    setDisplaydirection(true);
  }

  useAnimationFrame((t) => {
    if (!marqueeOutTopRef.current) return;
    if (!marqueeOutBotRef.current) return;
    if (!marqueeRefTop.current) return;
    if (!marqueeRefBot.current) return;

    const x = Math.sin(t / speed) * distanceTravelled;
    const xBot = -Math.sin(t / speed) * distanceTravelled;

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

    _checkDisplayDirection();

    window.addEventListener("resize", () => {
      if (!nameRef.current) return;
      if (!marqueeOutTopRef.current) return;
      if (!marqueeOutBotRef.current) return;
      if (!nameTitleRef.current) return;
      if (!surnameRef.current) return;

      _checkDisplayDirection();
    });
  }, [isDisplayRow]);

  return (
    <div ref={nameTitleRef} className="nt-nameTitle">
      <div ref={nameRef} className="nt-nameTitle-name" style={{}}>
        {nameSvgArray.map((el) => el)}
        <motion.div
          ref={marqueeRefTop}
          className={marqueeClasses + isTopBotHidden}
        >
          {marquee}
        </motion.div>
      </div>

      <div ref={surnameRef} className="nt-nameTitle-surname" style={{}}>
        {surnameSvgArray.map((el) => el)}
        <motion.div
          ref={marqueeRefBot}
          className={marqueeClasses + isTopBotHidden}
        >
          {marquee}
        </motion.div>
      </div>
      <div className="u-marqueeOutWrapper">
        <motion.div
          ref={marqueeOutTopRef}
          className={marqueeClassesOut + "--top" + isHidden}
        >
          {marquee}
        </motion.div>
        <motion.div
          ref={marqueeOutBotRef}
          className={marqueeClassesOut + "--bot" + isHidden}
        >
          {marquee}
        </motion.div>
      </div>
    </div>
  );
}
