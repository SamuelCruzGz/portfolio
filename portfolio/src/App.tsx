import { Routes, Route } from 'react-router-dom';
import NavbarTop from './components/NavbarTop';
import NavbarMenu from './components/NavbarMenu';
import NavbarSide from './components/NavbarSide';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen w-full  bg-cover bg-center bg-fixed bg-background-gray">
      
      <NavbarTop/>
      <NavbarMenu/>
      <NavbarSide/>
      <div className="p-4 mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
