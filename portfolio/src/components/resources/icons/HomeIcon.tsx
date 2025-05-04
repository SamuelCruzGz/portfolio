import { motion } from 'framer-motion';
import { draw, flicker } from '../../../animations/MenuAnimations'

interface HomeIconProp {
    isOpen: boolean
}



export const MenuHomeIcon: React.FC<HomeIconProp> = ({ isOpen }) => {
    
    return (
    <motion.g
    
    
        className="tooltip"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 3, ease: "easeInOut" }}            
        transform="translate(2500, 0)">                
            <motion.path
                d="M40 140 L40 100 L100 50 L160 100 L160 140 L135 140 L135 105 
                    L115 105 L115 140 L85 140 L85 105 L65 105 L65 140 L40 140"
                stroke="#ff4bf2" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
                fill="transparent" 
                variants={draw}   
                
                whileHover={{
                    opacity: flicker.opacity,
                    scale: flicker.scale,
                    transition: flicker.transition
                }}
         
            />
    </motion.g>  
    );
};