"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ModalPortal from "./ModalPortal";

interface SkillProps {
  id: number;
  name: string;
}

interface ModalSkillsProps {
  skill: SkillProps[];
  title: string;
  onClose: () => void;
}

export default function Skill({ skill, title, onClose }: ModalSkillsProps) {
  const [angles, setAngles] = useState<number[]>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    const numSkills = skill.length;
    const initialAngles = Array.from({ length: numSkills }, (_, i) => (i / numSkills) * Math.PI * 2);
    setAngles(initialAngles);

    const update = () => {
      setAngles(prevAngles => prevAngles.map(angle => angle + 0.01)); // Velocidad de rotación
      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [skill.length]);

  const handleClose = () => {
    cancelAnimationFrame(requestRef.current!);
    onClose();
  };

  const radius = 200; // radio de la órbita

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md retro-grid-overlay retro-stars"
          onClick={handleClose}
        />
        <div className="relative w-full h-full overflow-hidden pointer-events-none">
          {skill.map((ski, index) => {
            const angle = angles[index] || 0;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const x = centerX + radius * Math.cos(angle) - 80; // ajustar 80px mitad ancho
            const y = centerY + radius * Math.sin(angle) - 48; // ajustar 48px mitad alto

            return (
              <motion.div
                key={ski.id}
                className="absolute w-40 h-24 flex items-center justify-center
                  bg-gradient-to-br from-[#1a0e2a] via-[#2a0a2f] to-[#0d1b2a]
                  text-white font-game text-lg rounded-lg shadow-lg border border-white/10 pointer-events-auto"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {ski.name}
              </motion.div>
            );
          })}

          {/* --- Modal central --- */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              bg-[#111111cc] p-6 rounded-xl border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.3)] backdrop-blur-md pointer-events-auto">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-white text-2xl hover:text-neon-fucsia cursor-pointer"
            >
              ✕
            </button>
            <div className="bg-gradient-to-br from-[#1a0e2a] via-[#2a0a2f] to-[#0d1b2a]
                rounded-lg p-20 shadow-[0_0_20px_rgba(255,0,255,0.2)] border border-white/10 max-w-sm mx-auto">
              <h2 className="text-white font-game text-5xl text-center">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
