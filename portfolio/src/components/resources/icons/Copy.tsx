import { motion } from 'framer-motion'

export default function Copy(){
    return(
    <motion.svg
        width={30}
        height={30}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"    
        animate="visible"
        initial="hidden"
        className="drop-shadow-[0_0_10px_rgba(255, 0, 200, 0.9)]">
        <motion.path
            d="M70 50
                L50 50 50 150
                L120 150 120 130
                L150 130 150 40
                L130 20 130 40
                L150 40 130 20
                L70 20 70 130
                L120 130"
            stroke="#ff00c8" fill="none" stroke-width="2"/>  
        <motion.line
            x1="90" x2="135" y1="70" y2="70" 
            stroke="#ff00c8" stroke-width="6" stroke-linecap="round"/>    
        <motion.line
            x1="90" x2="135" y1="100" y2="100"  
            stroke="#ff00c8" stroke-width="6" stroke-linecap="round"/>          
    </motion.svg> 
    )
}