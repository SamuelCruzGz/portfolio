import { motion } from 'framer-motion';
import { draw, flicker, draw_whatsapp } from '../../../animations/MenuAnimations'


export default function WhatsApp () {
    
    return (
    <motion.svg
        width={80}
        height={80}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        className="drop-shadow-[0_0_10px_rgba(0,255,0,1)]"   
        whileHover={{
            opacity: flicker.opacity,
            scale: flicker.scale,
            transition: flicker.transition
        }}
    > 
    <motion.circle 
        cx="100" cy="100" r="90" 
        fill="none" 
        stroke="#25D366" 
        strokeWidth={4}
        initial= "hidden" 
        animate= "visible" 
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        variants={draw_whatsapp}   />
    <motion.path
        d="M28 153
            L10.5 190 53 176"
        stroke="#25D366"
        stroke-width="4"
        stroke-linecap="round"
        fill="none"
        variants={draw}   
    
    />
    <motion.path
        d="M89 80
            C89 80 72 50 70 56
            L70 55
            C70 56 60 66 59 86
            C59 86 83 130 126 141
            C126 141 144 140 148 121 
            L125 109 114 121
            C114 121 90 110 80 90
            L89 80
            "
        stroke="#25D366"
        stroke-width="4"
        stroke-linecap="round"
        fill="none" 
        style={{ filter: 'drop-shadow(0 0 6px #ff4bf2)' }} 
        variants={draw}   
    />
    <motion.circle 
        cx="100" cy="100" r="89.44" 
        fill="none" 
        stroke="white" stroke-width="1"  
        variants={draw_whatsapp}  
        />
    <motion.path
        d="M28 153
            L10.5 190 53 176"
        stroke="white"
        stroke-width="1"
        stroke-linecap="round"
        fill="none"
        variants={draw}   
    />
    <motion.path
        d="M89 80
            C89 80 72 50 70 56
            L70 55
            C70 56 60 66 59 86
            C59 86 83 130 126 141
            C126 141 144 140 148 121 
            L125 109 114 121
            C114 121 90 110 80 90
            L89 80
            "
        stroke="white"
        stroke-width="1"
        stroke-linecap="round"
        fill="none" 
        style={{ filter: 'drop-shadow(0 0 6px #ff4bf2)' }} 
        variants={draw}   
    />
    </motion.svg>  
    );
};