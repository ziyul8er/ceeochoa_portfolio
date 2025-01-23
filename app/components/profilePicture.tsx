'use client';
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import DevProfilePicture from '../../public/media/IMG_2481.jpg';
import { motion } from "motion/react";

export default function ProfilePicture() {
    const [x, setX] = useState(0);

    const circle: React.CSSProperties = {
        width: "100px",
        height: "100px",
        borderRadius: "100%",
    };

    onwheel = (e) => {
        setX(x + e.deltaY);
    };

    return(
        <div id="profileImageContainer">
            <motion.div
                style={{...circle, backgroundColor: "pink"}} 
                animate={{x}}
            />
                <div id="ceeHomeProfilePicture" className="circle">
                    <Image 
                        src={DevProfilePicture}
                        placeholder="blur"
                        alt="Cee's profile picture"
                    />
                </div>
            <div id="blueCircle" className="circle"></div>
        </div>    
    );
};