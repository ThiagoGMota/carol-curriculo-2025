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
        gsap.to('#paragraph',{
          opacity: 1,
          delay: 1.5,
          ease: 'power2.out',
          duration: 1
        })
        gsap.fromTo('#insta', {
            x:-1250,
            opacity: 0,
            
        },{
          opacity:1,
          x:0,
          ease: 'power1.inOut',
            duration: 2,
            rotation: 360,
            delay: 2,
          
        })
        gsap.fromTo('#linkedin', {
            x:-1250,
            opacity: 0,
        },{
            opacity: 1,
            x:0,
            ease: 'power1.inOut',
            duration: 2,
            rotation: 360,
            delay: 1.5,
        })
    },[])

  return (
    <main className={`${aestheticFont.className} flex h-screen  border-2 border-black  flex-col justify-between`}>
      <div className="flex ">
        <Logo />
      </div>
      <div className="flex flex-col  items-center justify-center text-yellow-500 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        <h1 id='title' className="opacity-0 text-5xl lg:text-8xl ">Ana Carolina</h1>
        <p id='paragraph' className="opacity-0 text-2xl text-yellow-700">Odontologia 2028</p>
      </div>

      <div className="text-black flex flex-row justify-evenly items-center py-12">
        <Link href={''} id='insta' className='opacity-0'>
          <div className=" border-2 border-dashed w-20 h-20 text-white border-black p-3 rounded-full hover:bg-yellow-600">
            <Instagram size={64} className="w-full h-full text-black "/>
          </div>    
        </Link>

        <Link href={''} id='linkedin' className='opacity-0'>
          <div className="border-2 border-dashed w-20 h-20  text-white border-black p-3 rounded-full hover:bg-yellow-600">
            <Linkedin size={64} className="w-full h-full  text-black"/>
          </div>
        </Link>
      </div>
      
    </main>
  )
}

export default Hero