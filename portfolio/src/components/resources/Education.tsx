
import { useState } from 'react'

const education = [
    {
        id: 1,
        place: "Universidad Politécnica del Valle de Toluca (UPVT) | Almoloya de Juárez, Estado de México",
        time: "Septiembre 2018 - Diciembre 2021",
        details: 
        <>
         <p>Ingeniería en Tecnologías de la Información</p>
         <ul className="space-y-1 pl-4 border-l border-neon-blue list-disc">
            <li>
                Lenguajes de Programación:
                <ul className="list-[square] pl-5">
                    <li></li>
                </ul>
            </li>
            <li>
                Fundamentos de Informática:
                <ul className="list-[square] pl-5">
                    <li>Estructura de datos y algoritmos, fundamentos de modelos de lenguaje natural.</li>
                </ul>
            </li>
            <li>
                Bases de Datos:
                <ul className="list-[square] pl-5">
                    <li>Diseño y administración de bases de datos relacionales (SQL).</li>
                </ul>
            </li>
            <li>
                Otras tecnologías
                <ul className="list-[square] pl-5">
                    <li>Inteligencia de negocios (BI), introducción a la implementación de bots, redes de computadoras e infraestructura.</li>
                </ul>
            </li>
         </ul>
        </>
    },
    {
        id: 2,
        place: "Centro de Estudios Tecnológicos, Industriales y de Servicios #64 (CETIS 64) | Toluca, Estado de México",
        time: "Agosto 2015 - Agosto 2018",
        details: 
        <>
            <p>Carrera Técnica en Programación</p>
            <ul className="space-y-1 pl-4 border-l border-neon-red list-disc">
                <li>
                    Fundamentos de Computación:
                    <ul className="list-[square] pl-5">
                        <li>Lenguaje binario.</li>
                    </ul>
                </li>
                <li>
                    Lenguajes de Programación:
                    <ul className="list-[square] pl-5">
                        <li>
                            Java.
                        </li>
                    </ul>
                </li>
                <li>
                    Redes e Infraestructura:
                    <ul className="list-[square] pl-5">
                        <li>Fundamentos de redes y protocolos TCP/IP.</li>
                    </ul>
                </li>
                <li>
                    Diseño:
                    <ul className="list-[square] pl-5">
                        <li>Diseño gráfico básico (Photoshop).</li>
                    </ul>
                </li>
                <li>
                    Herramientas Ofimáticas:
                    <ul className="list-[square] pl-5">
                        <li>Microsoft Office Suite (Word, Excel, PowerPoint).</li>
                    </ul>
                </li>
            </ul>
        </>

    }

]

export default function EducationAccordion () {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setActiveId((prev) => (prev === id ? null: id))
    }

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
        {education.map((edu) => (
            <div
            key={edu.id}
            className="bg-[#121212] border border-white/10 rounded-lg overflow-hidden shadow-lg"
            >
            <button
                onClick={() => toggle(edu.id)}
                className="w-full text-left p-4 flex justify-between items-center hover:bg-[#1c1c1c] transition"
            >
                <div>
                <h3 className="text-white font-bold text-lg">{edu.place}</h3>
                <p className="text-sm text-secondary-grey italic">{edu.time}</p>
                </div>
                <span className="text-neon-blue text-xl">
                {activeId === edu.id ? "−" : "+"}
                </span>
            </button>
            {activeId === edu.id && (
                <div className="p-4 pt-0 text-color-font text-sm space-y-2 text-left ">
                {edu.details}
                </div>
            )}
            </div>
        ))}
        </div>
    )
}