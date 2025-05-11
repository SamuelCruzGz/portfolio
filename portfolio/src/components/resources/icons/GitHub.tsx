import { motion } from 'framer-motion';
import { draw, flicker, draw_github } from '../../../animations/MenuAnimations';

export default function GitHub() {
    return (
        <motion.svg
            width="80"
            height="80"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" 
            whileHover={{
                opacity: flicker.opacity,
                scale: flicker.scale,
                transition: flicker.transition
            }}
            >
        <motion.circle
            cx="100" cy="100" r="96" fill="none" 
            stroke="white" stroke-width="4"  
            initial= "hidden" 
            animate= "visible" 
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}            
            variants={draw_github}/>
        <motion.path
            d="M66 190
            C60 189 75 190 75 181
            L75 171
            C75 171 54 170 48 166
            C48 166 48 152 30 142
            C30 142 35 139 40 141
            C40 141 45 144 59 157
            C59 157 66 160 75 158
            C75 158 78 149 82 145 
            C82 145 60 139 51 129
            C51 129 43 120 41 100
            C41 100 42 83 48 72
            C48 72 47 60 51 46
            C51 46 64 49 75 56
            C75 56 100 51 123 56
            C123 56 135 49 150 45
            C150 45 154 61 152 72
            C152 72 160 85 160 100
            C161 100 158 118 149 131
            C149 131 140 138 120 145
            L124 154 124 181
            C124 181 122 185 132 190" 
          stroke="white"
          stroke-width="4"
          fill="none"          
          variants={draw}
        />
        </motion.svg>
    )
}