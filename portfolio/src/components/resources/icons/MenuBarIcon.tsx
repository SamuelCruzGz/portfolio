import { motion } from 'framer-motion';
import { useState } from 'react';
import { MenuHomeIcon } from './HomeIcon';
import { MenuProjectIcon } from './ProjectsIcon';
import { MenuContactIcon } from './ContactIcon';


export const MenuBarIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  


  return (  
    <div className="relative overflow-visible cursor-pointer ">
      
      {/* Bar icon */}
      <motion.svg
        viewBox="0 0 200 200" width="300" height="60" 
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="overflow-visible"
        whileHover={{     
            filter: "drop-shadow(0px 0px 8px white)",             
        }}>    
        <rect
            x="0"
            y="0"
            width="200"
            height="200"
            fill="transparent"
            onClick={toggleMenu}
            cursor="pointer"
        />

        {/* Pink bar */}   
        <line            
            x1="10" y1="50" x2="190" y2="50"
            stroke="#ccc" strokeWidth="8" strokeLinecap="round" 
        ></line>
        <motion.line            
            className="absolute top-[26px] left-[10px]"
            animate={{ 
                x: isOpen ? 2500 : 0 ,
                opacity: isOpen ? 0 : 1
            }}
            transition={{ 
                duration: 2.0, ease: 'easeInOut' 
            }}            
            x1="10" y1="50" x2="190" y2="50"
            stroke="#ff4bf2" strokeWidth="16" strokeLinecap="round">            
        </motion.line>  

        {/* Home Icon */}   
        <MenuHomeIcon isOpen={isOpen} />

        {/* Blue bar */}
        <line                
            x1="10" y1="100" x2="190" y2="100" 
            stroke="#ccc" strokeWidth="8" strokeLinecap="round" 
        ></line>
        <motion.line 
            className="absolute top-[26px] left-[10px]"
            animate={{ 
                x: isOpen ? 3200 : 0,
                opacity: isOpen ? 0 : 1
            }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            x1="10" y1="100" x2="190" y2="100" 
            stroke="#00ffee" strokeWidth="16" strokeLinecap="round">            
        </motion.line> 

        {/* Project Icon */}
        <MenuProjectIcon isOpen={isOpen}/>
        {/* Green bar */}
        <line            
            x1="10" y1="150" x2="190" y2="150" 
            stroke="#ccc" strokeWidth="8" strokeLinecap="round" 
        ></line>
        <motion.line            
            className="absolute top-[26px] left-[10px]"
            animate={{ 
                x: isOpen ? 3900 : 0,
                opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            x1="10" y1="150" x2="190" y2="150" 
            stroke="#00ff99" strokeWidth="16" strokeLinecap="round">            
        </motion.line> 

        {/* Contact Icon */}
        <MenuContactIcon isOpen={isOpen}/>
        
      </motion.svg>
    </div>
  );
};




