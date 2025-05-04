import { MenuBarIcon } from './resources/icons/MenuBarIcon';


export default function Navbar() {
  
  return (
    <nav className="fixed w-full bg-[#0f0f0f] ">      
      <div className="relative flex items-center justify-start overflow-visible p-10 ">
        
          <MenuBarIcon />          
        
      </div>   
      <div className="w-full flex justify-center mt-4">
        <div className="border-neon-blue glow-bar-blue animate-none"></div>
    </div>   
    </nav>
  );
}
