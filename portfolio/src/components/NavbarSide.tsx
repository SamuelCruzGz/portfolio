import { Link } from 'react-router-dom';

export default function NavbarSide() {
  return (
    <nav className="fixed top-[275px] left-0 w-[250px] h-[calc(100vh-5rem)] bg-[#0f0f0f] text-white z-10 flex flex-col">
      <div className="flex flex-col font-orbitron gap-14 pt-20 pl pr-6">
        <h1 className="cursor-pointer glitch side-text" data-text="Resumen">Resumen</h1>
        <h1 className="cursor-pointer glitch side-text" data-text="Experiencia">Experiencia</h1>
        <h1 className="cursor-pointer glitch side-text" data-text="Educación">Educación</h1>
        <h1 className="cursor-pointer glitch side-text" data-text="Habilidades">Habilidades</h1>
        <h1 className="cursor-pointer glitch side-text" data-text="Acerca de mí">Acerca de mí</h1>
      </div>
      <div className="glow-bar-green border-r"></div>
    </nav>
  );
}
