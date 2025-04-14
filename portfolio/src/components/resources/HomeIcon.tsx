import { motion, Variants } from 'framer-motion';
import { div } from 'framer-motion/client';
import React, { useState } from 'react';

type MenuHomeIconProps = {
    size?: number
}

export const MenuHomeIcon: React.FC<MenuHomeIconProps> = ({
    size = 60
}) => {

    return(
        <div>
            <motion.svg viewBox={'0 0 200 200'}
            width="max-width" height={size} xmlns="http://www.w3.org/2000/svg" > 
                <motion.line 
                    x1= "40" y1= "120" x2= "40" y2= "80"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "40" y1= "80" x2= "100" y2= "30"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "100" y1= "30" x2= "160" y2= "80"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "160" y1= "80" x2= "160" y2= "120"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "160" y1= "120" x2= "135" y2= "120"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "135" y1= "120" x2= "135" y2= "85"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "135" y1= "85" x2= "115" y2= "85"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "115" y1= "85" x2= "115" y2= "120"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "115" y1= "120" x2= "85" y2= "120"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "85" y1= "120" x2= "85" y2= "85"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "85" y1= "85" x2= "65" y2= "85"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "65" y1= "85" x2= "65" y2= "120"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
                <motion.line 
                    x1= "65" y1= "120" x2= "40" y2= "120"
                    fill="none"
                    stroke="#ff4bf2"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></motion.line>
            </motion.svg>
        </div>
    )

}

