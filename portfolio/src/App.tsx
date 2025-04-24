import { Routes, Route } from 'react-router-dom';
import NavbarTop from './components/NavbarTop';
import NavbarMenu from './components/NavbarMenu';
import NavbarSide from './components/NavbarSide';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen w-full  bg-cover bg-center bg-fixed bg-background-gray">
      
      <NavbarTop/>
      <NavbarMenu/>
       
      <div className="mt-[180px] ">
        <MainContent />
      </div>
    </div>

  );
}

export default App;
