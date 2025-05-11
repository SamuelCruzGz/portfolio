import { motion } from 'framer-motion'
import { draw, flicker } from '../../../animations/MenuAnimations'

export default function Mexico(){
    return(
    <motion.svg

        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"         
        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] 
                   h-[15vw] sm:h-[12vw] md:h-[10vw] lg:h-[5vw]" 
        whileHover={{
            opacity: flicker.opacity,
            scale: flicker.scale,
            transition: flicker.transition
        }}
    > 
    
    <motion.path
        d="M50 40
            L50 160 3 130
            L3 70 50 40"
        stroke="#00ff00" stroke-width="4" stroke-linecap="round"
        fill="#013b01"         
        variants={draw}/>
    <motion.path
        d="M53 40
            L100 0 145 40
            L145 160 100 200
            L53 160 53 40"
        stroke="white" stroke-width="4" stroke-linecap="round"
        fill="#979a9a"         
        variants={draw}/> 
    <motion.path
        d="M150 40
            L150 160 197 130
            L197 70 150 40" 
        stroke="#ff0000" stroke-width="4" stroke-linecap="round"
        fill="#5e0101" 
        
        variants={draw}/>   
    <motion.circle
        cx="100" cy="90" r="10" stroke="#FFFF00" stroke-width="4" stroke-linecap="round" fill="#717104"/>
    <motion.path
        d="M70 110
            C70 110 100 150 130 110" 
        stroke="#36973c" stroke-width="4" stroke-linecap="round"
        fill="none"
    />    
    </motion.svg>
    )
}