import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Mexico from '../resources/icons/Mexico';
import GitHub from '../resources/icons/GitHub';
import LinkedIn from '../resources/icons/LinkedIn';
import WhatsApp from '../resources/icons/WhatsApp';
import Gmail from '../resources/icons/Gmail';
import CV from '../resources/icons/CV';
import Copy from '../resources/icons/Copy'

type Origin = {
  x: number;
  y: number;
};

interface ContactModalProp {
  isOpen: boolean;
  isFullScreen: boolean;
  origin: Origin;
  onClose: () => void;
}

export const ContactSection: React.FC<ContactModalProp> = ({
  isOpen,
  onClose,
  origin,
}) => {
  
  const phone = "(+52) 56-1062-1878'"
  const phoneRef = useRef<HTMLParagraphElement>(null);
  const email = "samuel.sebas46@gmail.com"
  const emailRef = useRef<HTMLParagraphElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    navigator.clipboard.writeText(phone)
  }

  useEffect(() => {
    if (!isOpen || !emailRef.current || !phoneRef.current) return;

    const emailTyped = new Typed(emailRef.current, {
      strings: ['samuel.sebas46@gmail.com'],
      startDelay: 500,
      typeSpeed: 120,
    });

    const phoneTyped = new Typed(phoneRef.current, {
      strings: ['(+52) 56-1062-1878'],
      startDelay: 500,
      typeSpeed: 120,
    });

    return () => {
      emailTyped.destroy();
      phoneTyped.destroy();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="retro-stars backdrop-blur-sm">
      <motion.div
        initial={{ clipPath: `circle(0% at 50% 50%)`, opacity: 0 }}
        animate={{ clipPath: `circle(45% at 50% 50%)`, opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          duration: 4,
          delay: 0.05,
        }}
        style={{
          transformOrigin: `${origin.x}px ${origin.y}px`,
        }}
        className="fixed top-0 left-0 w-full h-full z-50 max-h-screen max-w-screen"
      >
      <div
        className="relative 
          w-[65vw] sm:w-[40vw] md:w-[50vw] lg:w-[40vw]
          h-[100vw] sm:h-[40vw] md:h-[40vw] lg:h-[20vw]
          my-[45vw] sm:my-[45vw] md:my-[45vw] lg:my-[15vw]  
          mx-auto    
          rounded-2xl border-2 border-pink-500 
          shadow-[0_0_15px_#ff4bf2]
          bg-[radial-gradient(circle,rgba(64,1,28,0.463)_0%,rgb(2,21,44)_100%)]"
      >
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-white text-2xl hover:text-red-400 transition"
            aria-label="Cerrar"
          >
            ✕
          </button>
          
          <h1 className='my-[4vw] sm:my-[4vw] md:my-[3vw] lg:my-[1vw]
                         mx-[25vw] sm:mx-[25vw] md:mx-[20vw] lg:mx-[18vw]' ><Mexico/></h1>

          <div className="flex items-center
                         mx-[5vw] sm:mx-[5vw] md:mx-[8vw] lg:mx-[10vw]
                         my-[1vw]">
            <p ref={emailRef} className="text-sm sm:text-sm md:text-lg lg:text-2xl text-white text-sm font-oxanium text-center font-bold" />
            <button onClick={handleCopy} className="cursor-pointer" title="Copiar email">
              <Copy />
            </button>
          </div>
          <div className='flex items-center 
                          mx-[10vw] sm:mx-[10vw] md:mx-[11vw] lg:mx-[12vw]'>
            <p ref={phoneRef} className="text-sm sm:text-sm md:text-lg lg:text-2xl text-white text-sm font-oxanium text-center font-bold" />
              <button onClick={handleCopy} className="cursor-pointer" title="Copiar phone">
                <Copy />
              </button>
          </div>

          <div className="mt-6 px-6 w-full flex justify-between items-center flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/samuel-sebastian-cruz-gonzalez-31b360151/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center"
            >
              <LinkedIn />
            </a>
            <a
              href="https://wa.me/525610621878?text=Hola%20Samuel,%20me%20interesa%20contactarte%20por%20tu%20portafolio."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center"
            >
              <WhatsApp />
            </a>
            <a
              href="https://github.com/SamuelCruzGz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center"
            >
              <GitHub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center"
            >
              <Gmail />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center"
            >
              <CV />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
