import { motion } from 'framer-motion';
import { draw, flicker } from '../../../animations/MenuAnimations'

interface ProjectsIconProp {
    isOpen: boolean
}

const baseLineParameters = {
    stroke:"#00ffee",
    strokeWidth: 4,
    strokeLinecap:"round" as const,
    strokeLinejoin:"round" as const,
    fill:"none",
    variants: draw,
    style:{ pathLength: 0 },
    whileHover:{
        opacity: flicker.opacity,
        scale: flicker.scale,
        transition: flicker.transition
    }
}



export const MenuProjectIcon: React.FC<ProjectsIconProp> = ({ isOpen }) => {
    return(
    <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0}}
        transition={{ duration: 3, ease: "easeInOut" }}
        transform="translate(3200, 0)">
                            
        <motion.rect
            {...baseLineParameters}
            x="60" y="60" width="80" height="80" rx="8" 
            strokeWidth="8"/>            
        <motion.line 
            {...baseLineParameters}
            x1="60" y1="70" x2="40" y2="70" />
        <motion.line
            x1="60" y1="90" x2="40" y2="90"
            {...baseLineParameters}/>
        <motion.line
            x1="60" y1="110" x2="40" y2="110"
            {...baseLineParameters}/>
        <motion.line
            x1="60" y1="130" x2="40" y2="130"
{           ...baseLineParameters}/>
        <motion.line
            x1="140" y1="70" x2="160" y2="70"
            {...baseLineParameters}/>
        <motion.line
            x1="140" y1="90" x2="160" y2="90"
            {...baseLineParameters}/>
        <motion.line
            x1="140" y1="110" x2="160" y2="110"
            {...baseLineParameters}/>
        <motion.line
            x1="140" y1="130" x2="160" y2="130"
            {...baseLineParameters}/>
        <motion.rect
            x="85" y="85" width="30" height="30" 
            {...baseLineParameters}
        />    
    </motion.g>
    
    )
}