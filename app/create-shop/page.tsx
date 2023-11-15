'use client'
import { Styles } from '@/utils/Styles'
import { useUser } from '@clerk/nextjs'
import { Button, Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'

type Props = {}

export default function Page({}: Props) {
    const {user}=useUser();
    const [loading,setLoading] = useState(false);
    const [shopData,setShopData] = useState({
        name:"",
        description:"",
        shopProductsType:"",
        avatar:"",
    });

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(user){
            const data={
                name:shopData.name,
                description :shopData.description,
                shopProductsType:shopData.shopProductsType,
                avatar:user?.imageUrl || '',
                userId:user?.id,
            };

            //send one Post request
        }

    }
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div>
            <h1 className={`${Styles.heading} font-Monserrat text-center`} >
                Start to selling with us.
            </h1>
            <form className='2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto' onSubmit={handleSubmit}>
                <div className='w-full my-5'>
                    <label className={`${Styles.label} mb-2 block`}>
                        Shop Name
                    </label>
                    <Input isRequired type="name" value={shopData.name} onChange={(e)=> setShopData({...shopData,name:e.target.value})} label="JGScodemy" size="sm" variant='bordered'/>
                </div>
                <div className='w-full my-5'>
                    <label className={`${Styles.label} mb-2 block`}>Shop Description (max 120 letters)</label>
                    <Input isRequired type="text" value={shopData.description} onChange={(e)=> setShopData({...shopData,description:e.target.value})} label="Lorem ipsum" size="sm" variant='bordered' maxLength={120}/>
                </div>
                <div className='w-full my-5'>
                    <label className={`${Styles.label} mb-2 block`}>What you wanna sale with us?</label>
                    <Textarea className='col-span-12 md:col-span-6 md:mb-0' required  value={shopData.shopProductsType} onChange={(e)=> setShopData({...shopData,shopProductsType:e.target.value})} placeholder="Chatgpt, Midjourney Prompts..."  variant='bordered'/>
                    <br/>
                    <Button className='mb-3 w-full bg-transparent h-[45px] border  text-[#16c252] hover:bg-[#16c252] hover:text-black hover:border-[#16c252] duration-300 transition-opacity font-Inter font-[600]' type="submit" disabled={loading} disableAnimation={loading}>Create Shop</Button>

                </div>
            </form>
        </div>
    </div>
  )
}