import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type CardProps = {
  title: string;
};

const skill = [
  { id: 1, name: "Lenguajes de programación" },
  { id: 2, name: "Frameworks/Bibliotecas" },
  { id: 3, name: "Bases de datos" },
  { id: 4, name: "Computación en la nube" },
  { id: 5, name: "Desarrollo Web" },
  { id: 6, name: "APIs" },
  { id: 7, name: "Herramientas tecnológicas" },
  { id: 8, name: "Habilidades blandas" },
  { id: 9, name: "Idiomas" },
];

export function Skill({ title }: CardProps) {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [angles, setAngles] = useState<number[]>(
    skill.map((_, i) => (i / skill.length) * 2 * Math.PI)
  );
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    if (!showModal) return;

    const rotate = () => {
      setAngles((prev) => prev.map((a) => a + 0.01));
      requestRef.current = requestAnimationFrame(rotate);
    };
    requestRef.current = requestAnimationFrame(rotate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [showModal]);

  const handleClick = () => {
    setFlipped(true);
    setAngles(skill.map((_, i) => (i / skill.length) * (2 * Math.PI))); 
    setTimeout(() => setShowModal(true), 500);
  };

  const handleClose = () => {
    setShowModal(false);
    setFlipped(false);
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <div
        className="bg-[#c1c1] rounded-xl p-6 cursor-pointer 
          hover:scale-105 hover:brightness-125 hover:saturate-150 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] 
          transition-all duration-300 ease-in-out 
          border border-cyan-500/20 
          aspect-square max-w-[250px] 
          flex items-center justify-center text-center glitch side-text"
        onClick={handleClick}
      >
        <div
          className={`transition-transform duration-700 transform-style-preserve-3d w-full h-full ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center pb-4 card backface-hidden">
            <h2 className="font-orbitron text-white text-xl mb-4 mt-12">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-white overflow-visible">
          {/* Fondo */}
          <div
            className="fixed inset-0 modal-warp-bg retro-grid-overlay retro-stars"
            onClick={handleClose}
          ></div>

          {/* Círculo de tarjetas */}
          <div className="fixed w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <AnimatePresence>
              {skill.map((ski, index) => {
                const radius = 300;
                const centerX = 400; // la mitad de 800px
                const centerY = 400;
                const x = centerX + radius * Math.cos(angles[index]);
                const y = centerY + radius * Math.sin(angles[index]);

                return (
                  <motion.div
                    key={ski.id}
                    className="absolute bg-gradient-to-br from-[#1a0e2a] via-[#2a0a2f] to-[#0d1b2a]
                      border border-white/10 rounded-lg overflow-hidden shadow-lg p-4 font-game text-xl w-40 h-24 flex
                      items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.5, x: centerX, y: centerY }}
                    animate={{ opacity: 1, scale: 1, x, y }}
                    exit={{ opacity: 0, scale: 0.5, x: centerX, y: centerY }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    <h1 className="card-programming">{ski.name}</h1>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Panel central */}
          <div className="fixed bg-[#111111cc] rounded-xl border border-white/10 p-6 shadow-[0_0_20px_rgba(0,255,255,0.3)] backdrop-blur-md top-10 left-1/2 -translate-x-1/2">
            <button
              onClick={handleClose}
              className="absolute top-1 right-2 text-white text-2xl hover:text-neon-fucsia cursor-pointer"
            >
              ✕
            </button>
            <div
              className="bg-gradient-to-br from-[#1a0e2a] via-[#2a0a2f] to-[#0d1b2a] 
                rounded-lg p-20 border border-white/10 shadow-[0_0_20px_rgba(255,0,255,0.1)] 
                max-w-sm mx-auto animate-fade-in-up scanlines"
            >
              <h2 className="text-white font-game text-5xl mb-4 text-center">
                {title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
