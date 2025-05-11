// components/FloatingBubbles.tsx
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import MenuContactIcon from "../components/resources/icons/ContactIcon";
import PlusIcon from "../components/resources/icons/PlusIcon"
import {ContactSection} from "../components/sections/ContactSection";


export default function BubbleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBubbles = () => setIsOpen(!isOpen);
  const [showContact, setShowContact] = useState(false)
  const buttonRef =useRef<HTMLButtonElement>(null)
  const [buttonPos, setButtonPos] = useState( { x : 0, y : 0 } )

  const handleOpenContact = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setButtonPos({ x: rect.left, y: rect.top })
    }
    setShowContact(true)
  }



  return (    
    
      <AnimatePresence>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {isOpen && (
          <>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bubble-green bg-white/10 backdrop-blur-md border border-white/30 hover:border-white w-16 h-16"
                onClick={() => setShowContact(true)}
                title="Proyectos"
                aria-label="Proyectos"
                >
              <MenuContactIcon />    
                         
            </motion.button>
            <ContactSection
                isOpen={showContact}
                isFullScreen={false}
                origin={buttonPos}
                onClose={() => setShowContact(false)}/> 
          </>
          
        )}
          
      {/* Botón principal */}
      <button
          onClick={toggleBubbles}
          className="bubble-pink bg-white/10 backdrop-blur-md border border-white/30 hover:border-white w-20 h-20"
          aria-label="Menú"
        >
        <PlusIcon/> 
        </button>
      </div>
      </AnimatePresence>


    

    
  );
}
