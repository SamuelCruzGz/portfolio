import { motion, Variants } from 'framer-motion';
import { draw, flicker } from '../../animations/MenuAnimations';

type MenuContactIconProps = {
    isOpen: boolean
}

const whileHov = {
    whileHover:{
        opacity: flicker.opacity,
        scale: flicker.scale,
        transition: flicker.transition
    }
}

export const MenuContactIcon: React.FC<MenuContactIconProps> = ({ isOpen }) => {
    return (
        <motion.g
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            className={"glitch"}
            transition={{ duration: 3, ease: "easeInOut" }}
            transform="translate(3900, 0)">   
            <motion.circle
                cx="100" cy="100" r="60" 
                fill="none"
                stroke="#00ff99" stroke-width="8"
                variants={draw}
                style={{ pathLength: 0 }}
                {...whileHov}/>
            <motion.circle
                cx="100" cy="70" r="5" 
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
                L100 90 100 140
                M80 140
                L80 140 120 140
                "
                fill="none" stroke="#00ff99" stroke-width="5"  
                variants={draw}
                style={{ pathLength: 0 }}
                {...whileHov}/>
                
        </motion.g>  
    )
}
