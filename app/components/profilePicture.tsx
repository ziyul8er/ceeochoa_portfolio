'use client';
import React, {useState} from "react";
import Image from "next/image";
import DevProfilePicture from '../../public/media/IMG_2481.jpg';
import { motion } from "motion/react";

export default function ProfilePicture() {
    const [pinkX, setPinkX] = useState(0);
    const [blueX, setBlueX] = useState(0);

    const circle: React.CSSProperties = {
        width: "100px",
        height: "100px",
        borderRadius: "100%",
    };

    onwheel = (e) => {
        if (e.deltaY > 0 && pinkX > -100) {
            setPinkX(pinkX - e.deltaY);
            setBlueX(blueX + e.deltaY);
        } 
        
        if (e.deltaY < 0 && pinkX < 250) {
            setPinkX(pinkX - e.deltaY);
            setBlueX(blueX + e.deltaY);
        }

        console.log("pink: ", pinkX, "blue: ", blueX)
    };

    return(
        <div id="profileImageContainer">
            <motion.div style={{...circle, backgroundColor: "pink"}} animate={{x: pinkX}} />
            <div id="ceeHomeProfilePicture" className="circle">
                <Image 
                    src={DevProfilePicture}
                    placeholder="blur"
                    alt="Cee's profile picture"
                />
            </div>
            <motion.div style={{...circle, backgroundColor: "aqua"}} animate={{x: blueX}} />        
        </div>    
    );
};