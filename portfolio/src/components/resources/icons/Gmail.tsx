import { motion } from 'framer-motion'
import { draw, flicker } from '../../../animations/MenuAnimations';

export default function Gmail() {
    return (
        <motion.svg
            width={120}
            height={120}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"                   
            whileHover={{
                opacity: flicker.opacity,
                scale: flicker.scale,
                transition: flicker.transition
            }}>
            <svg width="0" height="0">
                <defs>
                    <filter id="dark-red-shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#c6231a" />
                    </filter>
                    <filter id="red-shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#ee4232" />
                    </filter>
                    <filter id="blue-shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#4385f7" />
                    </filter>
                    <filter id="yellow-shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#ffbb00" />
                    </filter>
                    <filter id="green-shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#31a652" />
                    </filter>
                </defs>
            </svg>
             <motion.path
                d="M65 98 L65 60 C65 60 45 40 36 60 C36 60 35 60 36 75 L65 98"
                stroke="#c6231a" stroke-width="4" stroke-linecap="round"                 
                filter= "url(#dark-red-shadow)" 
                variants={draw}           
                fill="none"
             />                
             <motion.path
                d="M36 80 L36 140 C36 140 36 148 42 149 L65 149 65 102 L36 80"
                stroke="#4385f7" stroke-width="4" stroke-linecap="round" 
                filter= "url(#blue-shadow)" 
                variants={draw}             
                fill="none"
             /> 

            <motion.path
                d="M135 98 L135 60 C135 60 155 40 164 60 C164 60 165 60 164 75 L135 98"
                stroke="#ffbb00" stroke-width="4" stroke-linecap="round" 
                filter= "url(#yellow-shadow)" 
                variants={draw}           
                fill="none"
             />   
             <motion.path
                d="M164 80 L164 140 C164 140 164 148 158 149 L135 149 135 102 L164 80"
                stroke="#31a652" stroke-width="4" stroke-linecap="round" 
                filter= "url(#green-shadow)"  
                variants={draw}            
                fill="none"
             /> 
             <motion.path
                d="M132 98 L100 123 65 98 L65 60 100 86 L132 61 132 98 C132 98 35 61"
                stroke="#ee4232" stroke-width="4" stroke-linecap="round" 
                filter= "url(#red-shadow)" 
                variants={draw}           
                fill="none"
             /> 

            <motion.path
                d="M65 98 L65 60 C65 60 45 40 36 60 C36 60 35 60 36 75 L65 98"
                stroke="white" stroke-width="1" stroke-linecap="round" 
                variants={draw}           
                fill="none"
             /> 
            <motion.path
                d="M36 80 L36 140 C36 140 36 148 42 149 L65 149 65 102 L36 80"
                stroke="white" stroke-width="1" stroke-linecap="round" 
                variants={draw}           
                fill="none"
             /> 
            <motion.path
                d="M132 98 L100 123 67 98 L67 60 100 86 L132 61 132 98 C132 98 35 61"
                stroke="white" stroke-width="1" stroke-linecap="round" 
                variants={draw}           
                fill="none"
             /> 
            <motion.path
                d="M135 98 L135 60 C135 60 155 40 164 60 C164 60 165 60 164 75 L135 98"
                stroke="white" stroke-width="1" stroke-linecap="round" 
                variants={draw}           
                fill="none"
             /> 
            <motion.path
                d="M164 80 L164 140 C164 140 164 148 158 149 L135 149 135 102 L164 80"
                stroke="white" stroke-width="1" stroke-linecap="round" 
                variants={draw}           
                fill="none"
             /> 
        </motion.svg> 
    )
}