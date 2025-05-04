export default function Home() {
  return (
    <section aria-labelledby="intro-title">
      <div className="relative pb-6 animate-fade-in-down">
      <div className="flex flex-col sm:flex-row sm:justify-around items-center px-5 pt-4 text-2xl text-center sm:text-left">
        
          <h1 id="intro-title" className="font-orbitron text-color-font text-glow sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Samuel Sebastián Cruz González</h1>
          <p className="font-game text-secondary-grey text-right ml-4 mt-2 text-glow sm:text-sm md:text-xl lg:text-2xl xl:text-3xl">Desarrollador de Software</p>              
      </div>    
      <div className="w-full flex justify-center mt-4">
          <div className="glow-bar animate-none"></div>
      </div>    
      </div>
    </section>        
  );
}