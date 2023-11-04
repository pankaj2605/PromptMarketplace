'use client'
import Header from '@/components/Header'
import About from '@/components/Route/About'
import Hero from '@/components/Route/Hero'
import Image from 'next/image'
import React from 'react'

type Props = {
}

export default function Page({}: Props) {
  return (
    <div>
      <div className='banner'>
        <Header activeItem={1}/>
        <Hero/>
      </div>
      <Image src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"} alt="" width={120} height={120} className='absolute right-[-30px]'/>
      <br/>
      <div className='w-[95%] md:w-[90%] xl:w-[8-%] 2xl:w-[75%] m-auto'>
        <About/>
      </div>
    </div>
    
  )
}