import { motion } from 'framer-motion'
import { flicker, draw } from '../../../animations/MenuAnimations'

export default function CV() {
    return (
        
        <motion.svg
            width={120}
            height={120}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            filter="url(#neon-shadow)"
            whileHover={{
                opacity: flicker.opacity,
                scale: flicker.scale,
                transition: flicker.transition
            }}>
            <svg width="0" height="0">
                <defs>
                    <filter id="neon-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#c2ff05" />
                    </filter>
                </defs>
            </svg>
            <motion.path 
                d="M125 50
                L125 75 150 75
                L125 50 65 50
                L65 150 150 150
                L150 75"
                stroke="#c2ff05" stroke-width="1" 
                fill="none"
                variants={draw}
            />
            <motion.circle 
                cx="107" cy="80" r="5"
                stroke="#c2ff05" stroke-width="2" 
                fill="none" variants={draw}/>
                
            <motion.circle 
                cx="107" cy="80" r="5"
                stroke="#c2ff05" stroke-width="0.4" 
                fill="none" variants={draw}/>
            <motion.path 
                d="M95 105
                C95 105 106 80 120 105"
                stroke="#c2ff05" stroke-width="2" 
                fill="none" variants={draw}/>
            <motion.path 
                d="M95 105
                C95 105 106 80 120 105"
                stroke="#c2ff05" stroke-width="0.4" 
                fill="none" variants={draw}/>
            <motion.line
                x1="80" x2="135" y1="120" y2="120" stroke="#c2ff05" 
                stroke-width="3" stroke-linecap="round" variants={draw}/>
            <motion.line
                x1="80" x2="135" y1="135" y2="135" stroke="#c2ff05" 
                stroke-width="3" stroke-linecap="round" variants={draw}/>
            <motion.line
                x1="80" x2="135" y1="120" y2="120" stroke="white" 
                stroke-width="1" stroke-linecap="round" variants={draw}/>
            <motion.line
                x1="80" x2="135" y1="135" y2="135" stroke="white" 
                stroke-width="1" stroke-linecap="round" variants={draw}/>
        </motion.svg>         
    )
}