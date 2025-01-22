import React, {useEffect, useRef} from "react";
import Image from "next/image";
import DevProfilePicture from '../../public/media/IMG_2481.jpg';
import gsap from "gsap";

export default function ProfilePicture() {
    const devProfilePicture = DevProfilePicture;

    const animationContainer = useRef(null);
    const pinkCircle = useRef(null);
    const blueCircle = useRef(null);

    useEffect( () => {
        const context = gsap.context( () => {
            const tl =  gsap.timeline({
                scrollTrigger: {
                    scroller: animationContainer.current,
                    trigger: animationContainer.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            tl.to(pinkCircle.current, {x: -100}, 0)
                .to(blueCircle.current, {x: 100}, 0)
                .to(pinkCircle.current, {x: 100}, 1)
                .to(blueCircle.current, {x: -100}, 1)
                .repeat(-1);
        });

        return () => context.revert();

    }, []);

    return(
        <div ref={ animationContainer } id="profileImageContainer">
            <div ref={ pinkCircle } id="pinkCircle" className="circle"></div>
                <div id="ceeHomeProfilePicture" className="circle">
                    <Image 
                        src={devProfilePicture}
                        placeholder="blur"
                        alt="Cee's profile picture"
                    />
                </div>
            <div ref={ blueCircle } id="blueCircle" className="circle"></div>
        </div>
    );
};