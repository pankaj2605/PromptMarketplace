import { Styles } from '@/utils/Styles'
import { Avatar, Button, Card, Divider } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import Ratings from '@/utils/Ratings'
import Link from 'next/link'


type Props = {}

export default function PromptCard({}: Props) {
  return (
    <Card radius='lg' className='w-full md:w-[31%] 2xl:w-[23%] p-4 bg-[#130f23] m-3'>
        <div className='relative'>
            <Image src="https://pixner.net/aikeu/assets/images/category/fourteen.png" alt="" className='w-full ' height={300} width={300} />
            <div className='absolute bottom-2 left-2'>
               <div className='w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl'>
                <Image src="https://pixner.net/aikeu/assets/images/category/chat.png" alt="" width={25} height={25}/>
                <span className={`${Styles.label} pl-2 text-white`}>
                    Chatgpt
                </span>
                </div> 
            </div>
        </div>
        <div className='w-full flex justify-between py-2'>
            <h3 className={`${Styles.label} text-[18px] text-white`}>
                Animal Prompts
            </h3>
            <p className={`${Styles.paragraph}`}>₹25.00</p>
        </div>
        <Divider className=' bg-[#ffffff18] my-3' />
        <div className='w-full flex items-center justify-between '>
            <div className="flex items-center">
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
                <span className={`${Styles.label} pl-3`}>@Pankaj</span>
            </div>
            {/* ratings */}
            <Ratings rating={4.5} />
        </div>
        <br/>
        <Link href="/shop/124" className='w-full'/>
        <Button className={`${Styles.button} !py-2 !px-3 text-center mb-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]`} >Buy Now</Button>
    </Card>
  )
}