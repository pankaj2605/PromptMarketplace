'use client'
import Header from '@/components/Header'
import PromptCard from '@/components/Prompts/PromptCard'
import About from '@/components/Route/About'
import Future from '@/components/Route/Future'
import Hero from '@/components/Route/Hero'
import BestSellers from '@/components/Shop/BestSellers'
import { Styles } from '@/utils/Styles'
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
        <div >
          <h1 className={`${Styles.heading} p-2 font-Monserrat`}>
              Latest Prompts
          </h1>
          <div className="flex flex-wrap">
            <PromptCard/>
            <PromptCard/>
            <PromptCard/>
            <PromptCard/>
            <PromptCard/>
            <PromptCard/>
            <PromptCard/>
          </div>
          <br/>
          <BestSellers />
          <Future/>
        </div>
      </div>
    </div>
    
  )
}