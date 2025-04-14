import { motion } from 'framer-motion';
import { useState } from 'react';

export const MenuBarIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (  
    <div onClick={toggleMenu} className="relative overflow-visible cursor-pointer ">
      
      {/* Bar icon */}
      <motion.svg
        viewBox="0 0 200 200" width="300" height="60" className="overflow-visible">
        <motion.line
            className="absolute top-[26px] left-[10px]"
            animate={{ x: isOpen ? 2500 : 0 }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            x1="10" y1="50" x2="190" y2="50"
            stroke="#ff4bf2" strokeWidth="16" strokeLinecap="round">            
        </motion.line>        
        <line
            x1="10" y1="50" x2="190" y2="50"
            stroke="#ccc" strokeWidth="8" strokeLinecap="round" 
        ></line>
        <motion.line
            className="absolute top-[26px] left-[10px]"
            animate={{ x: isOpen ? 3200 : 0 }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            x1="10" y1="100" x2="190" y2="100" 
            stroke="#00ffee" strokeWidth="16" strokeLinecap="round">            
        </motion.line>        
        <line
            x1="10" y1="100" x2="190" y2="100" 
            stroke="#ccc" strokeWidth="8" strokeLinecap="round" 
        ></line>
        <motion.line
            className="absolute top-[26px] left-[10px]"
            animate={{ x: isOpen ? 3900 : 0 }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            x1="10" y1="150" x2="190" y2="150" 
            stroke="#00ff99" strokeWidth="16" strokeLinecap="round">            
        </motion.line>        
        <line
            x1="10" y1="150" x2="190" y2="150" 
            stroke="#ccc" strokeWidth="8" strokeLinecap="round" 
        ></line>
      </motion.svg>

    </div>
  );
};
