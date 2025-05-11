import { motion } from 'framer-motion';
import { draw, flicker } from '../../../animations/MenuAnimations'


export default function PlusIcon () {
    
    return (
    <motion.svg
        width="55"
        height="50"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
    > 
        <motion.path
            d="
                M90 90
                L90 40 110 40
                L110 90 160 90
                L160 110 110 110
                L110 160 90 160
                L90 110 40 110
                L40 90 90 90 
            "
            stroke="#ff4bf2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
            fill="transparent" 
            variants={draw}   
            
            whileHover={{
                opacity: flicker.opacity,
                scale: flicker.scale,
                transition: flicker.transition
            }}
        
        />
        <motion.path
            d="
                M90 90
                L90 40 110 40
                L110 90 160 90
                L160 110 110 110
                L110 160 90 160
                L90 110 40 110
                L40 90 90 90 
            "
            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            fill="transparent" 
            style={{ filter: 'drop-shadow(0 0 6px #ff4bf2)' }} 
            variants={draw}   
            
            whileHover={{
                opacity: flicker.opacity,
                scale: flicker.scale,
                transition: flicker.transition
            }}
        
        />
    </motion.svg>  
    );
};