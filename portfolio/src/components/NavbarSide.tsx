import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f] border-b border-neon-blue text-white shadow-lg z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-neon-pink">MiPortafolio</span>
        <div className="space-x-4">
          <Link to="/" className="hover:text-neon-blue">Inicio</Link>
          <Link to="/projects" className="hover:text-neon-blue">Proyectos</Link>
          <Link to="/contact" className="hover:text-neon-blue">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
