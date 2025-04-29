import { useState } from "react";
import ExperienceAccordion from './resources/Experiences';
import EducationAccordion from './resources/Education';
import { Card } from './resources/Cards';
import SkillsModal from './resources/Skills';

const skillData = [
  { id: 1, name: "Lenguajes de programación" },
  { id: 2, name: "Frameworks/Bibliotecas" },
  { id: 3, name: "Bases de datos" },
  { id: 4, name: "Computación en la nube" },
  { id: 5, name: "Desarrollo Web" },
  { id: 6, name: "APIs" },
  { id: 7, name: "Herramientas tecnológicas" },
  { id: 8, name: "Habilidades blandas" },
  { id: 9, name: "Idiomas" },
];

export default function MainContent() {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-black px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        <Card title="RESUMEN" description={
                    <>
                    <p className="mb-3">Ingeniero de software con experiencia en el desarrollo de APIs, servicios backend y frontend, 
                    especializado en Apigee Edge, microservicios y tecnologías de AWS (Lambda, DynamoDB, S3, API Gateway, entre otras).</p>
                    <p className="mb-3">He trabajado con TypeScript, Node.js, React, Tailwind, JavaScript y Python, enfocándome en soluciones escalables y eficientes.</p>
                    <p className="mb-3">Cuento con experiencia en la creación de documentación técnica (Swagger), el uso de herramientas colaborativas como Git, 
                    y la gestión de datos con herramientas como Excel.</p>
                    <p className="mb-3">Me apasiona liderar equipos pequeños, promover la mejora continua y 
                    aprender nuevas tecnologías para optimizar el rendimiento de los sistemas.</p>
                    </>
                  }     />
        <Card title="EXPERIENCIA" description={<ExperienceAccordion />} />
        <Card title="EDUCACIÓN" description={<EducationAccordion />} />

        <div
          className="bg-[#c1c1] rounded-xl p-6 cursor-pointer
          hover:scale-105 hover:brightness-125 hover:saturate-150 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
          transition-all duration-300 ease-in-out border border-cyan-500/20
          aspect-square max-w-[250px] flex items-center justify-center text-center glitch side-text"
          onClick={() => setIsSkillModalOpen(true)}
        >
          <h2 className="font-orbitron text-white text-xl mb-12 mt-10">HABILIDADES</h2>
        </div>

        
      

      {/* MODAL DE HABILIDADES */}
      {isSkillModalOpen && (
        <SkillsModal title="Habilidades" skills={skillData} onClose={() => setIsSkillModalOpen(false)} />
      )}
        <Card title="ACERCA DE MI" description= {
                  <>
                  <p className="mb-3">Hola, soy Samuel Sebastián. Como ingeniero de software, me apasiona la tecnología y el desafío de 
                    resolver problemas complejos.
                    </p>
                  <p className="mb-3">
                    Disfruto aprendiendo nuevas tecnologías y pensando en cómo optimizar el código y la arquitectura de los sistemas.
                  </p>
                  <p className="mb-3">
                    Mi curiosidad me impulsa a explorar diferentes enfoques y a buscar constantemente la mejora continua. 
                  </p>
                  <p className="mb-3">
                    Fuera del trabajo, me gusta la música (especialmente rock, metal y rap), los videojuegos y el cine. 
                  </p>
                  <p className="mb-3">
                    Valoro la honestidad, la creatividad y la curiosidad en mi vida personal y profesional"
                  </p>
                  </>
                } />
      
      </div>

    </main>
  );
}
