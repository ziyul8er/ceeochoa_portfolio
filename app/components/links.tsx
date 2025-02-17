"use client";
import { motion } from "motion/react";
import { mailIcon, linkedInIcon } from "../variables/svgPaths";

export default function Links() {
  return (
    <div className="u-linksWrapper">
      <motion.a
        className="nt-mailLink"
        href="mailto:xceeochoax@gmail.com"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {mailIcon}
      </motion.a>
      <motion.a
        className="nt-mailLink"
        href="http://www.linkedin.com/in/ceeochoa"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {linkedInIcon}
      </motion.a>
    </div>
  );
}
