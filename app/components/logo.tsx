import React from 'react'
import Image from 'next/image'
import { aestheticFont } from '@/fonts/fonts'

const Logo = () => {
  return (
    <div className={`${aestheticFont.className} text-black text-5xl flex py-8`}>
          <p className="relative left-7 top-3">A</p>
          <Image src={'/logo.svg'} width={50} height={40} alt="logo" />
          <p className="relative right-5 top-3">C</p>
    </div>
  )
}

export default Logo