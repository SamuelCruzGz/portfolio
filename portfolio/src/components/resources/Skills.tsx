// components/resources/SkillsModal.tsx
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ModalPortal from "./ModalPortal";

type SkillItem = {
  id: number;
  name: string;
};

type SkillsModalProps = {
  title: string;
  skills: SkillItem[];
  onClose: () => void;
};

export default function SkillsModal({ title, skills, onClose }: SkillsModalProps) {
  const [angles, setAngles] = useState<number[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    setAngles(skills.map((_, i) => (i / skills.length) * (2 * Math.PI)));
  }, [skills.length]);

  useEffect(() => {
    const rotate = () => {
      setAngles(prev => prev.map(a => a + 0.01));
      animationRef.current = requestAnimationFrame(rotate);
    };

    animationRef.current = requestAnimationFrame(rotate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const radius = 550;

  return (
    <ModalPortal>
      <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111cc] shadow-[0_0_20px_rgba(0,255,255,0.3)] backdrop-blur-md "
  onClick={onClose} 
>
  <div
    className="relative w-full h-full flex items-center justify-center retro-stars text-white"
    onClick={(e) => e.stopPropagation()} 
  >


          <AnimatePresence>
            {skills.map((skill, index) => {
              const x = radius * Math.cos(angles[index]);
              const y = radius * Math.sin(angles[index]);

              return (
                <motion.div
                  key={skill.id}
                  className="absolute bg-gradient-to-br from-[#1a0e2a] via-[#2a0a2f] to-[#0d1b2a]
                    border border-white/10 rounded-lg overflow-hidden shadow-lg p-4 font-game text-xl w-45 h-24 flex
                    items-center justify-center text-center "
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <h1>{skill.name}</h1>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          <div
            className="bg-gradient-to-br from-[#1a0e2a] via-[#2a0a2f] to-[#0d1b2a]
            rounded-lg p-20 border border-white/10 shadow-[0_0_20px_rgba(255,0,255,0.1)]
            max-w-sm mx-auto animate-fade-in-up scanlines text-white font-game text-5xl text-center cursor-default"
          >
                <button
                onClick={onClose}
                className="absolute top-4 right-6 text-white text-3xl hover:text-pink-500 cursor-pointer z-50"
                >
                ✕
                </button>

            {title}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
