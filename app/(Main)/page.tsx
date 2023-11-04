'use client'
import Header from '@/components/Header'
import Hero from '@/components/Route/Hero'
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
    </div>
    
  )
}