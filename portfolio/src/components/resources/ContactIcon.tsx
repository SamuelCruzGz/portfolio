import { motion, Variants } from 'framer-motion';
import { div } from 'framer-motion/client';
import React, { useState } from 'react';

type MenuContactIconProps = {
    size?: number
}

export const MenuContactIcon: React.FC<MenuContactIconProps> = ({
    size = 60
}) => {
    return (
        <div>
            <motion.svg viewBox={'0 0 200 200'}
            width="max-width" height={size} xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                 cx="100" cy="100" r="70" 
                 fill="none" 
                 stroke="#00ff99" stroke-width="8"
                ></motion.circle>
                <motion.circle
                 cx="100" cy="60" r="10" 
                 fill="none" 
                 stroke="#00ff99" stroke-width="5"
                ></motion.circle>
                <motion.circle
                 cx="100" cy="60" r="5"
                 fill="none" 
                 stroke="#00ff99" stroke-width="5"
                ></motion.circle>
                <motion.circle
                 cx="100" cy="60" r="1"
                 fill="none" 
                 stroke="#00ff99" stroke-width="5"
                ></motion.circle>
                <motion.path 
                    d="M80 90
                    L80 90 100 90
                    L100 90 100 150
                    M80 150
                    L80 150 120 150
                    "
                    fill="none" 
                    stroke="#00ff99" stroke-width="5"  
                ></motion.path>
            </motion.svg>
        </div>
    )
}

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="90" fill="none" stroke="#00ff99" stroke-width="8"/>
  <circle cx="100" cy="60" r="10" fill="none" stroke="#00ff99" stroke-width="5"/>
  <circle cx="100" cy="60" r="5" fill="none" stroke="#00ff99" stroke-width="3"/>
  <circle cx="100" cy="60" r="1" fill="none" stroke="#00ff99" stroke-width="3"/>
  <path 
  d="M80 90
    L80 90 100 90
    L100 90 100 150
    M80 150
    L80 150 120 150
    "

  fill="none" stroke="#00ff99" stroke-width="5"  
  />
</svg>