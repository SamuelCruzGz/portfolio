import { motion, Variants } from 'framer-motion';
import { div } from 'framer-motion/client';
import React, { useState } from 'react';

type MenuProjectIconProps = {
    size?: number
}

export const MenuProjectIcon: React.FC<MenuProjectIconProps> = ({
    size = 60
}) => {
    return(
        <div>
            <motion.svg viewBox={'0 0 200 200'}
            width="max-width" height={size} xmlns="http://www.w3.org/2000/svg" >
                <motion.rect
                    x= "60" y= "60" width= "80" height= "80" rx={"8"} 
                    stroke={"#00ffee"} stroke-width="8"
                    fill="none"
                ></motion.rect>
                <motion.line 
                    x1="60" y1="70" x2="40" y2="70" 
                    stroke="#00ffee" stroke-width="4"
                ></motion.line>
                <motion.line 
                    x1="60" y1="90" x2="40" y2="90"
                    stroke="#00ffee" stroke-width="4"
                ></motion.line>
                <motion.line 
                    x1="60" y1="110" x2="40" y2="110"
                    stroke="#00ffee" stroke-width="4"
                ></motion.line>
                <motion.line 
                    x1="60" y1="130" x2="40" y2="130" 
                    stroke="#00ffee" stroke-width="4"
                ></motion.line>
                <motion.line 
                    x1="140" y1="70" x2="160" y2="70"
                    stroke="#00ffee" stroke-width="4"
                ></motion.line>
                <motion.line 
                    x1="140" y1="90" x2="160" y2="90"
                    stroke="#00ffee" stroke-width="4"
                ></motion.line>
                <motion.line 
                    x1="140" y1="110" x2="160" y2="110"
                    stroke="#00ffee" stroke-width="4"
                ></motion.line>
                <motion.line 
                    x1="140" y1="130" x2="160" y2="130"
                    stroke="#00ffee" stroke-width="4"
                ></motion.line>
                <motion.rect
                    x="85" y="85" width="30" height="30"
                    stroke={"#00ffee"} stroke-width="8"
                    fill="none"
                ></motion.rect>
            </motion.svg>
        </div>
    )
}

