import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuBarIcon } from './resources/MenuBarIcon';
import { MenuHomeIcon } from './resources/HomeIcon'; 
import { MenuProjectIcon } from './resources/ProjectIcon';
import { MenuContactIcon } from './resources/ContactIcon';

export default function Navbar() {
  
  return (
    <nav className="fixed w-full bg-[#0f0f0f] border-b border-neon-blue text-white ">      
      <div className="flex items-center justify-around p-4">
        <div className="ml-2 justify-start">
          <MenuBarIcon />          
        </div>
        <div className={`space-x-10 transition-all duration-500 ease-in-out flex`}>
          <MenuHomeIcon/>
          <MenuProjectIcon/>
          <MenuContactIcon/>
        </div>
      </div>   
    </nav>
  );
}
