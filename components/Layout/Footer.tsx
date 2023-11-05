import { Styles } from '@/utils/Styles'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='mt-8'>
        <div className='w-full mb-5 flex justify-between items-center'>
            <div>
                <Link href={"/"}>
                    <h1 className='font-Inter text-3xl cursor-pointer'>
                        <span className='text-[#deff4c]'>JGSc</span>odemy
                    </h1>
                </Link>
            </div>
            <div>
                <ul className='flex items-center flex-wrap'>
                    <li>
                        <Link href={"#"} className={`${Styles.label} hover:text-[#64ff4c] duration-200 transition px-4 `}>Home</Link>
                    </li>
                    <li>
                        <Link href={"#"} className={`${Styles.label} hover:text-[#64ff4c] duration-200 transition px-4 `}>MarketPlace</Link>
                    </li>
                    <li>
                        <Link href={"#"} className={`${Styles.label} hover:text-[#64ff4c] duration-200 transition px-4 `}>Contact US</Link>
                    </li>
                </ul>
            </div>
            </div>
            <p className={`${Styles.paragraph} text-center `}>
                Copyright © 2023 JGScodemy . ALl Rights Reserved
            </p>
            <br/>
            <br/>
    </div>
  )
}