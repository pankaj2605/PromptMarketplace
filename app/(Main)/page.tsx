'use client'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import PromptCard from '@/components/Prompts/PromptCard'
import About from '@/components/Route/About'
import Future from '@/components/Route/Future'
import Hero from '@/components/Route/Hero'
import Partners from '@/components/Route/Partners'
import BestSellers from '@/components/Shop/BestSellers'
import SellerBanner from '@/components/Shop/SellerBanner'
import { Styles } from '@/utils/Styles'
import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Loader from '@/utils/Loader'

type Props = {
}

export default function Page({}: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(false);

  
  useEffect(()=>{
    setLoading(true);
    axios.get("api/me").then((res)=>{
      setUser(res.data.user);
      setLoading(false)
    }).catch((error)=>{
      console.log(error);
      setLoading(false)
    })
  },[])


  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {
        loading ?(
          <>
            <Loader/>
          </>
        ):(
          <div>
            <div className='banner'>
              <Header activeItem={1} user={user}/>
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
                <Partners />
                <SellerBanner/>
                <br/>
                <br/>
                <Divider className='bg-[#ffffff23]'/>
                <Footer/>
              </div>
            </div>
          </div>
        )
      }
    </>
    
  )
}