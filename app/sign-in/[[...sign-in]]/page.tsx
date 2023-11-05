import React from 'react'
import { SignIn } from "@clerk/nextjs";

type Props = {}

export default function page({}: Props) {
  return (
    <div className='w-full h-screen flex items-center justify-center'><SignIn /></div>
  )
}