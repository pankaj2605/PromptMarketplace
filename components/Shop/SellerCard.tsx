import Ratings from '@/utils/Ratings'
import { Styles } from '@/utils/Styles'
import { Avatar, Card } from '@nextui-org/react'
import React from 'react'

type Props = {}

export default function SellerCard({}: Props) {
  return (
    <Card className='py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffff22]'>
        <Avatar src="https://pixner.net/aikeu/assets/images/blog-details/a-one.png"  className='w-[80px] h-[80px]'/>
        <span className={`${Styles.label} py-2 text-xl`}>
            @Pankaj
        </span>
        <div className='flex items-center'>
            <span className={`${Styles.label} pr-2`}>
                4.5/5
            </span>
            <Ratings rating={4.5}/>
        </div>
        <span className={`${Styles.label} py-2`}>
            Total Sales:212
        </span>
    </Card>
  )
}