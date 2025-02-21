'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { aestheticFont } from '@/fonts/fonts'
import { ScrollTrigger } from "gsap/all";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger)
const About = () => {
  
  useGSAP(() => {
    gsap.to('#img-1',{
      opacity: 1,
      delay: 1,
      ease: 'expo.inOut',
      duration: 1.5,
      scrollTrigger: '#img-1'
    }) 
    gsap.to('#title-about',{
      opacity:1,
      delay: 2.5,
      ease: 'back.out',
      duration: 2,
      scrollTrigger: '#title-about'
    })
    gsap.to('#p-about',{
      opacity: 1,
      delay: 2.5,
      ease: 'expo.inOut',
      duration: 2,
      
      scrollTrigger: '#p-about'
    })
  }, [])
  
    
  
  return (
    <div className='flex flex-col p-8 justify-evenly my-8 h-screen lg:flex-row mb-20'>
      <div className=" px-8  max-w-[800px] lg:w-1/2">
        <Image
          id="img-1"
          className=" opacity-0 w-full max-w-[600px] rounded-xl "
          src={'/carolCover.jpg'}
          width={300}
          height={500}
          alt="Ana Carolina foto"
        />
      </div>

      <div className='  lg:w-1/2'>
        <div className='  xl:mt-12 '>
          <h1 id='title-about' className={` opacity-0  py-6 text-3xl text-yellow-600 mb-4 ${aestheticFont.className} para` }>
            Quem sou eu ?
          </h1>
          <p id='p-about' className=' opacity-0 lg:text-2xl text-black    xl:text-3xl text-xl para'>
            Olá. Meu nome é Ana Carolina Mota de Lima, sou estudante de Odontologia do 5° semestre. Atualmente, busco uma oportunidade de estágio para aprimorar minhas habilidades e conhecimentos na área odontológica, ao mesmo tempo em que me mantenho aberta a outras possibilidades de trabalho que possam surgir. Sou uma pessoa proativa, detalhista e comprometida, pronta para somar à equipe e crescer profissionalmente
          </p>
        </div>
      </div>

    </div>
  )
}

export default About