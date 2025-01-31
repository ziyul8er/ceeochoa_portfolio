import { motion, MotionValue, useTransform } from 'motion/react';

interface Motion {
    value: MotionValue<number>, 
    distance: number
}

export default function useParallax( 
    value: Motion["value"], 
    distance: Motion["distance"] ) {

    return useTransform( value, [0,1], [-distance, distance] );
}