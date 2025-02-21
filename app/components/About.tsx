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
    <div className='flex flex-col p-8 justify-evenly my-8  xl:flex-row mb-20'>
      <div className=" px-8  xl:w-1/2">
        <Image
          id="img-1"
          className=" opacity-0 w-full  rounded-xl "
          src={'/carolCover.jpg'}
          width={300}
          height={500}
          alt="Ana Carolina foto"
        />
      </div>

      <div className='  xl:w-1/2'>
        <div className='  '>
          <h1 id='title-about' className={` opacity-0  py-6 text-3xl text-yellow-600 mb-4 ${aestheticFont.className} para` }>
            Quem sou eu ?
          </h1>
          <p id='p-about' className=' opacity-0 lg:text-2xl text-black    xl:text-3xl text-xl para'>
          Olá! Meu nome é Ana Carolina Mota de Lima e sou uma apaixonada estudante do 5° semestre de Odontologia. Minha jornada acadêmica tem me despertado um profundo desejo de transformar sorrisos e impactar vidas através da saúde bucal. Atualmente, estou em busca de um estágio onde possa mergulhar de cabeça no universo odontológico, aprimorando minhas habilidades e conhecimentos com a orientação de profissionais experientes.

Além disso, estou aberta a explorar oportunidades em outras áreas que possam enriquecer minha formação e ampliar minha experiência profissional. Acredito que cada nova vivência pode trazer aprendizados valiosos e contribuir para meu desenvolvimento pessoal e profissional. Sou uma pessoa proativa, atenta aos detalhes e extremamente comprometida com tudo que me proponho a fazer. Estou confiante de que posso agregar valor à equipe e trilhar um caminho de sucesso, sempre com entusiasmo e dedicação.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About