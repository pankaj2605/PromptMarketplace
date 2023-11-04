import { Styles } from '@/utils/Styles'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Future({}: Props) {
  return (
    <div className='w-full relative p-4 md:p-[unset] grid md:grid-cols-2'>
        <div className="col-span-1">
            <Image src="https://pixner.net/aikeu/assets/images/tools-thumb.png" alt="" width={800} height={500} className='md:w-[90%] md:ml-[-50px] 2xl:ml-[-90px]' />
        </div>
        <div className="col-span-1 w-full flex justify-center items-center">
            <div className='2xl:w-[60%]'>
                <Button className={`${Styles.button} mb-[30px] h-[37px] bg-[#12211f]`}>
                    Future
                </Button>
                <h5 className={`${Styles.heading} mb-5 !leading-[50px]`}>
                    Unleashing The Glorious Future Of Ai generated Images
                </h5>
                <p className={`${Styles.paragraph} pb-5`}>
                    One of the most prominent techniques in AI image generation is the
                    use of Generative Adversarial Networks
                </p>
            </div>
        </div>
    </div>
  )
}