
import NavbarTop from './components/NavbarTop';
import BubbleMenu from './components/BubblesMenu';
import MainContent from './components/MainContent';




function App() {
  return (
    <div className="h-full w-full bg-cover bg-center bg-fixed bg-background-gray">
      <NavbarTop/>
      <BubbleMenu/>
      <MainContent />          
    </div>

  );
}

export default App; 
