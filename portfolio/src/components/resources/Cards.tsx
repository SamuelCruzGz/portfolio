import { useState } from 'react';

type CardProps = {
  title: string;
  description: React.ReactNode;
};

export function Card({ title, description }: CardProps) {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setFlipped(true);
    setTimeout(() => setShowModal(true), 500); 
  };

  const handleClose = () => {
    setShowModal(false);
    setFlipped(false); 
  };

  return (
    <>
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
            flipped ? 'rotate-y-180' : ''
          }`}
        >
          
          <div className="rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center pb-4 card backface-hidden">
            <h2 className="font-orbitron text-white text-xl mb-4 mt-12">
              {title}
            </h2>
          </div>
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-white ">
          <div className='modal-warp-bg retro-grid-overlay retro-stars' onClick={handleClose}></div>
          <div className="bg-[#111111cc] rounded-xl border border-white/10 p-6 shadow-[0_0_20px_rgba(0,255,255,0.3)] backdrop-blur-md "
          >
            <button
              onClick={handleClose}
              className="absolute top-1 right-2 text-white text-2xl hover:text-neon-fucsia cursor-pointer"
              >
              ✕
            </button>
            <div className="bg-gradient-to-br from-[#1a0e2a] via-[#2a0a2f] to-[#0d1b2a] 
                rounded-lg p-6 border border-white/10 shadow-[0_0_20px_rgba(255,0,255,0.1)] 
                max-w-sm mx-auto animate-fade-in-up scanlines">
              <h2 className="text-white font-game text-3xl mb-4 text-center">{title}</h2>
              <p className="font-oxanium text-color-font text-sm whitespace-pre-line ">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
