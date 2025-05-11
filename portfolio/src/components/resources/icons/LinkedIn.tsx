import { motion } from 'framer-motion';
import { draw, flicker } from '../../../animations/MenuAnimations'


export default function LinkedIn () {
    
    return (
    <motion.svg
        width={120}
        height={120}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"    
        animate="visible"
        initial="hidden"
        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"   
        whileHover={{
            opacity: flicker.opacity,
            scale: flicker.scale,
            transition: flicker.transition
        }}     
    > 
        <motion.circle 
            cx="50" cy="50" r="10" 
            stroke="white" stroke-width="2"
            fill="none"
            variants={draw}
            
        />
        <motion.path
            d="M40 70
            L40 150 60 150
            L60 70 40 70"
            stroke="white"
            stroke-width="2"
            fill="none"
            variants={draw}   
            

        
        />
        <motion.path
            d="M100 110
                L100 150 80 150
                L80 70 100 70
                L100 85
                C100 85 110 70 125 70
                C125 70 150 64 150 100
                L150 150 130 150
                L130 110
                C130 110 116 80 100 111"
            stroke="white"
            stroke-width="2"
            fill="none"
        
            variants={draw}   
            

        
        />
    </motion.svg>  
    );
};