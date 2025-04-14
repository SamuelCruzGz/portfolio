import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuBarIcon } from './resources/MenuBarIcon'; 

export default function Navbar() {
  
  return (
    <nav className="fixed w-full bg-[#0f0f0f] border-b border-neon-blue text-white ">      
      <div className="flex items-center justify-start p-4">
        {/* Coloca el icono en la izquierda */}
        <div className="ml-2">
          <MenuBarIcon />
        </div>
      </div>    
      {/*  <div
          className={`space-x-4 transition-all duration-500 ease-in-out `}>
          <Link to="/" className="hover:text-neon-blue">
            <i className="fas fa-home text-white text-lg"></i>
          </Link>
          <Link to="/projects" className="hover:text-neon-blue">
            <i className='fa-solid fa-briefcase'></i>
          </Link>
          <Link to="/contact" className="hover:text-neon-blue">
            <i className='fa-solid fa-address-card'></i>
          </Link>
        </div>*/}
      
    </nav>
  );
}
