'use client'

import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { aestheticFont } from '@/fonts/fonts'
import { Instagram, Linkedin } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    useGSAP(() =>{
        gsap.to('#title',{
            opacity: 1,
            delay: 0.5,
            ease: 'power1.in',
            duration: 1
        })
        gsap.from('#insta', {
            x:-750,
            ease: 'power1.inOut',
            duration: 1,
            rotation: 360,
            delay: 1.5,
        })
        gsap.from('#linkedin', {
            x:-550,
            ease: 'power1.inOut',
            duration: 1,
            rotation: 360,
            delay: 1.5,
        })
    },[])
  return (
    <main className={`${aestheticFont.className} flex   border-2 border-black  flex-col`}>
      <div className="flex ">
        <Logo />
      </div>
      <div className="flex flex-col h-screen items-center justify-center text-yellow-500 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        <h1 id='title' className="opacity-0 text-6xl lg:text-8xl ">Ana Carolina</h1>
        <p id='paragraph' className="text-2xl text-yellow-700">Odontologia 2028</p>
      </div>

      <div className="text-black flex flex-row justify-evenly items-center py-12">
        <Link href={''} id='insta'>
          <div className="border-2 w-20 h-20 text-white border-black p-3 rounded-full hover:bg-yellow-600">
            <Instagram size={64} className="w-full h-full text-black "/>
          </div>    
        </Link>

        <Link href={''} id='linkedin'>
          <div className="border-2 w-20 h-20 text-white border-black p-3 rounded-full hover:bg-yellow-600">
            <Linkedin size={64} className="w-full h-full text-black "/>
          </div>
        </Link>
      </div>
      
    </main>
  )
}

export default Hero