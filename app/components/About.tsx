import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='h-screen w-screen'>
      <div className="relative h-[600px] w-[600px] p-8">
        <Image
          id="img-1"
          className="absolute bottom-0 right-0 z-10 opacity-20"
          src={'/carolCover.jpg'}
          width={500}
          height={500}
          alt="Ana Carolina foto"
        />
        <Image
          id="img-2"
          className="absolute bottom-[20px] right-[20px] z-20 opacity-40"
          src={'/carolCover.jpg'}
          width={500}
          height={500}
          alt="Ana Carolina foto"
        />
        <Image
          id="img-3"
          className="absolute bottom-[40px] right-[40px] z-30"
          src={'/carolCover.jpg'}
          width={500}
          height={500}
          alt="Ana Carolina foto"
        />
      </div>

    </div>
  )
}

export default About