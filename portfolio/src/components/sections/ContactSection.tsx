import React, { HtmlHTMLAttributes, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import imageMexico  from '../resources/icons/mexico.png';
import github from '../resources/icons/github.png'
import linkedin from '../resources/icons/linkedin.png'
import whatsapp from '../resources/icons/whatsapp.png'
import gmail from '../resources/icons/gmail.png'

interface ContactModalProp {
    isOpen: boolean,
    isFullScreen: boolean
}

export const Test: React.FC<ContactModalProp> = ({  }) => {    
    const email = useRef<HTMLParagraphElement>(null)
    const phone = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const emailTyped = new Typed(email.current, {
            strings: ['samuel.sebas46@gmail.com'],
            startDelay: 500,            
            typeSpeed: 120, 
                       
        })
        
        const phoneTyped = new Typed(phone.current, {
            strings: ['(+52) 56-1062-1878'],
            startDelay: 500,            
            typeSpeed: 120,            
        })

        return () => {
            emailTyped.destroy()
            phoneTyped.destroy()
        }
    }, [])

    return (
        
    <div className={`fixed top-0 left-0 w-full h-full z-50 max-h-screen max-w-screen retro-stars`}>
            <div className="relative w-[50vw] h-[30vw] bg-background-gray mx-[25vw] my-[10vw] bg-[radial-gradient(circle,rgba(64,1,28,0.463)_0%,rgb(2,21,44)_100%)]">
                <h1 className="absolute text-xl text-white font-bold font-oxanium top-[8vw] left-[5vw]" ref={email}></h1>
                <h1 className="relative text-xl text-white font-bold font-oxanium top-[12vw] left-[5vw]" ref={phone}></h1>
                <img className='relative top-[3.5vw] left-[35vw] backdrop-opacity-10 ' src={imageMexico} alt="" />
                <div className='w-[4vw]'>
                    <img className='relative top-[8vw] left-[8vw] backdrop-opacity-10 ' src={linkedin} alt="" />
                    <img className='relative top-[4vw] left-[18vw] backdrop-opacity-10 ' src={whatsapp} alt="" />
                    <img className='relative top-[0vw] left-[28vw] backdrop-opacity-10 ' src={github} alt="" />
                    <img className='relative top-[-4vw] left-[38vw] backdrop-opacity-10 ' src={gmail} alt="" />
                </div>
                
            </div>
    </div>


    )
}


