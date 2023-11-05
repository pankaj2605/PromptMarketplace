import { Styles } from '@/utils/Styles'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function SellerBanner({}: Props) {
  return (
    <div className='w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] flex items-center justify-center sellers-banner rounded-xl md:m-2'>
        <div className='text-center'>
            <h1 className={`${Styles.heading} !text-indigo-950 font-Monserrat `}>
                Start to selling with Us.
            </h1>
            <br/>
            <br/>
            <Link href={"/create-shop"}/>
                <Button className='mb-3 p-6 rounded-md text-xl bg-black text-white font-Inter'> <span>Get Started</span></Button>

        </div>
    </div>
  )
}