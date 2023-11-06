import React from 'react'
import { SignUp } from "@clerk/nextjs";

type Props = {}

export default function page({}: Props) {
  return (
    <div className='w-full h-screen flex items-center justify-center'><SignUp /></div>
  )
}