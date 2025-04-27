import ExperienceAccordion  from './resources/Experiences'
import EducationAccordion  from './resources/Education'
import { Card } from './resources/Cards'
import { Skill } from './resources/Skills'



export default function MainContent() {
    return (
      <main className="w-full min-h-screen bg-black px-6 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            <Card title="RESUMEN" 
                  description={
                    <>
                    <p className="mb-3">Ingeniero de software con experiencia en el desarrollo de APIs, servicios backend y frontend, 
                    especializado en Apigee Edge, microservicios y tecnologías de AWS (Lambda, DynamoDB, S3, API Gateway, entre otras).</p>
                    <p className="mb-3">He trabajado con TypeScript, Node.js, React, Tailwind, JavaScript y Python, enfocándome en soluciones escalables y eficientes.</p>
                    <p className="mb-3">Cuento con experiencia en la creación de documentación técnica (Swagger), el uso de herramientas colaborativas como Git, 
                    y la gestión de datos con herramientas como Excel.</p>
                    <p className="mb-3">Me apasiona liderar equipos pequeños, promover la mejora continua y 
                    aprender nuevas tecnologías para optimizar el rendimiento de los sistemas.</p>
                    </>
                  }    
            />

            <Card title="EXPERIENCIA"         
                description={
                  <>
                  <ExperienceAccordion/>
                  </>
                }/>
                            
            <Card title="EDUCACIÓN" 
                description={
                  <>
                  <EducationAccordion/>
                  </>
                }/>

            <Skill title="HABILIDADES"/>
                
            <Card title="ACERCA DE MI" 
                description= {
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
                }
            />
                
        </div>
      </main>
    )
}