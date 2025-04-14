import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

type MenuBarIconProps = {
    size?: number;

}

export const MenuBarIcon: React.FC<MenuBarIconProps> = ({
    size= 60
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const line1 = {
        closed: { x: 0, y: 0, rotate: 0 },
        open: { x: 360, y: -20 },
    };

    const line2 = {
        closed: { x: 0, opacity: 1 },
        open: { x: 80, opacity: 0 },
    };

    const line3 = {
        closed: { x: 0, y: 0, rotate: 0 },
        open: { x: 50, y: 20, rotate: -20 },
    };

    return(
        // Made by Samuel Cruz 
        <div onClick={toggleMenu} className='cursor-pointer relative overflow-visible w-[200px] h-[50px]' >
            <motion.svg       viewBox={`0 0 200 200`}
                             width="max-width" height={size} xmlns="http://www.w3.org/2000/svg" >
                {/*   Line 1  */}   
                <motion.line 
                    x1="10" y1="50" x2="190" y2="50" 
                    stroke="#ff4bf2"
                    stroke-width="12"                
                    stroke-linecap="round"
                    variants={line1}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ 
                        duration: 1.5,
                        type: "spring",
                        stiffness: 120,
                        damping: 10
                    }}

                />
                <motion.line
                    x1="10" y1="50" x2="190" y2="50" 
                    stroke="#ccc"
                    stroke-width="8"                
                    stroke-linecap="round"
                />
                {/*   Line 2  */}   
                <motion.line 
                    x1="10" y1="100" x2="190" y2="100" 
                    stroke="#00ff99"
                    stroke-width="12"
                    stroke-linecap="round"
                    variants={line2}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 1.5 }}
                />
                <motion.line 
                    id="line_2" x1="10" y1="100" x2="190" y2="100" 
                    stroke="#ccc"
                    stroke-width="8"
                    stroke-linecap="round"
                />
                {/*   Line 3  */}   
                <motion.line 
                    x1="10" y1="150" x2="190" y2="150" 
                    stroke="#00f7ff"
                    stroke-width="12"                
                    stroke-linecap="round"
                    variants={line3}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 1.5 }}
                />
                <motion.line 
                    x1="10" y1="150" x2="190" y2="150"
                    stroke="#ccc"
                    stroke-width="8" 
                    stroke-linecap="round"
                />
            </motion.svg>
        </div>
    );
}



