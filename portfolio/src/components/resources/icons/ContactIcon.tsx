import { motion } from 'framer-motion';
import { draw, flicker } from '../../../animations/MenuAnimations';



const whileHov = {
    whileHover:{
        opacity: flicker.opacity,
        scale: flicker.scale,
        transition: flicker.transition
    }
}

export default function MenuContactIcon() {
    return (
        <motion.svg
            width="40"
            height="35"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible">   
            <motion.circle
                cx="100" cy="100" r="60" 
                fill="none"
                stroke="#00ff99" stroke-width="8"
                variants={draw}
                style={{ pathLength: 0 }}
                {...whileHov}/>
            <motion.circle
                cx="100" cy="70" r="3" 
                fill="none"
                stroke="#00ff99" stroke-width="8"
                variants={draw}
                style={{ pathLength: 0 }}
                {...whileHov}/>
            <motion.circle
                cx="100" cy="70" r="1" 
                fill="none"
                stroke="#00ff99" stroke-width="8"
                variants={draw}
                style={{ pathLength: 0 }}
                {...whileHov}/>
            <motion.path
                d="M80 90
                L80 90 100 90
                L100 90 100 130
                M80 130
                L80 130 120 130
                "
                fill="none" stroke="#00ff99" stroke-width="5"  
                variants={draw}
                style={{ pathLength: 0 }}
                {...whileHov}/>
                
        </motion.svg>  
    )
}
