
import { useState } from "react";

const experiences = [
    {
        id: 1,
        place: "Freelance | Remoto",
        time: "Abril 2025 - Actual",
        details: <>
            <p>Desarrollo de portafolio web personal con React, Vite, TypeScript y Tailwind CSS.</p>
            <ul className="space-y-1 pl-4 border-l border-neon-blue list-disc">
                <li>
                    Diseño UI/UX en Figma.
                </li>
                <li>
                    Creación de iconos SVG y animaciones CSS.
                </li>
                <li>
                    Implementación de componentes reutilizables.
                </li>
                <li>
                    Estructura de proyecto limpia.
                </li>
            </ul>
            <p>El objetivo es presentar mis habilidades y proyectos de manera profesional.</p>
        </>
    }, 
    {
        id: 2,
        place: "Altán Redes | Santa Fé, Ciudad de México",        
        time: "Octubre 2022 - Actual",
        details: <>
            <p>Como Ingeniero de Software en Altán Redes, mis responsabilidades incluyen:</p>
            <ul className="space-y-1 pl-4 border-l border-neon-pink list-disc">
                <li>
                    Programación de APIs:
                    <ul className="list-[square] pl-5">
                        <li>Desarrollo y gestión de APIs en Apigee Edge/X para optimizar el servicio al cliente.</li>
                    </ul>
                </li>
                <li>
                    Desarrollo Backend:
                    <ul className="list-[square] pl-5">
                        <li>Programación de servicios backend basados en microservicios y scripts para una arquitectura escalable.</li>
                    </ul>
                </li>
                <li>
                    Programación en AWS:
                    <ul className="list-[square] pl-5">
                        <li>Implementación de soluciones en la nube utilizando servicios de AWS.</li>
                    </ul>
                </li>
                <li>
                    Liderazgo y Colaboración:
                    <ul className="list-[square] pl-5">
                        <li>Liderazgo técnico de equipos de desarrolladores y promoción de buenas prácticas de programación.</li>
                    </ul>
                </li>
                <li>
                    Optimización:
                    <ul className="list-[square] pl-5">
                        <li>Programación y optimización de código para mejorar el rendimiento y reducir costos.</li>
                    </ul>
                </li>
            </ul>
        </>
    },
    {
        id: 3,
        place: "Hum-Hum | Remoto",        
        time: "Enero 2023 - Mayo 2023",
        details: 
        <>
            <p>Ingeniero de Software en Hum-Hum Remoto, enfocado en el desarrollo de una aplicación web de consultas online para dietas:</p>
            <ul className="space-y-1 pl-4 border-l border-neon-green list-disc">                
                <li>
                    Desarrollo Frontend:
                    <ul className="list-[square] pl-5">
                        <li>Programé la interfaz de usuario con TypeScript y LIT, creando modelos interactivos.</li>
                    </ul>
                </li>
                <li>
                    Desarrollo Backend:
                    <ul className="list-[square] pl-5">
                        <li>Desarrollé e implementé servicios en la nube en AWS con Python y Node.js habilitando recursos para funciones en desarrollo frontend.</li>
                    </ul>
                </li>
                <li>
                    Control de versiones:
                    <ul className="list-[square] pl-5">
                        <li>Utilicé Git para el control de versiones e integración continua.</li>
                    </ul>
                </li>
            </ul>
        </>
    },
    {
        id: 4,
        place: "UAEM | Toluca, Estado de México",        
        time: "Abril 2021 - Septiembre 2021",
        details: 
        <>
            <p>Ingeniero de Software en la UAEMex, enfocado en el desarrollo de un módulo de agenda para egresados:</p>
            <ul className="space-y-1 pl-4 border-l border-neon-fucsia list-disc">
                <li>
                    Módulo de Agenda:
                    <ul className="list-[square] pl-5">
                        <li>Programé y desarrollé el módulo para la gestión de citas.</li>
                    </ul>
                </li>
                <li>
                    Backend:
                    <ul className="list-[square] pl-5">
                        <li>Desarrollé el backend con PHP (Laravel).</li>
                    </ul>
                </li>
                <li>
                    Frontend:
                    <ul className="list-[square] pl-5">
                        <li>Desarrollé módulos con Node.js y JavaScript utilizando EJS.</li>
                    </ul>
                </li>
                <li>
                    APIs:
                    <ul className="list-[square] pl-5">
                        <li>Integré APIs para la comunicación con otros sistemas.</li>
                    </ul>
                </li>
            </ul>
        </>
    },
    {
        id: 5,
        place: "Qualtop | Ciudad de México",        
        time: "Septiembre 2021 - Diciembre 2021",
        details: 
        <>
            <p>Trainee en Qualtop, enfocado en el desarrollo y soporte de APIs:</p>
            <ul className="space-y-1 pl-4 border-l border-electric-cyan list-disc">
                <li>
                    Desarrollo de APIs:
                    <ul className="list-[square] pl-5">
                        <li>Programación, gestión y mantenimiento de APIs en Apigee Edge/X.</li>
                    </ul>
                </li>
                <li>
                    Prueba de APIs:
                    <ul className="list-[square] pl-5">
                        <li>Uso de Postman para probar y verificar APIs.</li>
                    </ul>
                </li>
                <li>
                    Documentación de APIs:
                    <ul className="list-[square] pl-5">
                        <li>Creación y actualización de documentación con Swagger.</li>
                    </ul>
                </li>
            </ul>
        </>
    },
    {
        id: 6,
        place: "Tecla (Bootcamp) | Remoto",        
        time: "Julio 2021 - Septiembre 2021",
        details: 
        <>
            <p>Bootcamp 'Nodejs backend' (Tecla): Adquisición de habilidades en:</p>
            <ul className="space-y-1 pl-4 border-l border-neon-red list-disc">
                <li>Desarrollo de proyectos backend con Node.js.</li>
                <li>Consumo de APIs externas para la creación de aplicaciones web.</li>
                <li>Proyectos: Tienda virtual (Mercado Libre API), red social interna, calculadora de impuestos.</li>
            </ul>
        </>
    }



]

export default function ExperienceAccordion () {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setActiveId((prev) => (prev === id ? null: id))
    }

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
        {experiences.map((exp) => (
            <div
            key={exp.id}
            className="bg-[#121212] border border-white/10 rounded-lg overflow-hidden shadow-lg"
            >
            <button
                onClick={() => toggle(exp.id)}
                className="w-full text-left p-4 flex justify-between items-center hover:bg-[#1c1c1c] transition"
            >
                <div>
                <h3 className="text-white font-bold text-lg">{exp.place}</h3>
                <p className="text-sm text-secondary-grey italic">{exp.time}</p>
                </div>
                <span className="text-neon-blue text-xl">
                {activeId === exp.id ? "−" : "+"}
                </span>
            </button>
            {activeId === exp.id && (
                <div className="p-4 pt-0 text-color-font text-sm space-y-2 text-left ">
                {exp.details}
                </div>
            )}
            </div>
        ))}
        </div>
    )
}