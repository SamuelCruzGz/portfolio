import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuBarIcon } from './resources/MenuBarIcon';
import { MenuHomeIcon } from './resources/HomeIcon'; 
import { MenuProjectIcon } from './resources/ProjectIcon';
import { MenuContactIcon } from './resources/ContactIcon';

export default function Navbar() {
  
  return (
    <nav className="fixed w-full bg-[#0f0f0f] border-b border-neon-blue text-white ">      
      <div className="relative flex items-center justify-start overflow-visible p-10">
        
          <MenuBarIcon />          
        
      </div>   
    </nav>
  );
}
