import { Styles } from '@/utils/Styles';
import { User } from '@clerk/nextjs/server'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react';
import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import {TbSwitchVertical} from "react-icons/tb"
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

type Props = {
    user:User | null;
    setOpen:(open:boolean) =>void;
    handleprofile: ()=>void;
    isSellerExist:boolean;
}

export default function DropDown({user,setOpen,handleprofile,isSellerExist}: Props) {
    const {signOut} =useClerk();
    const router=useRouter();
    const handleLogout= async()=>{
     await signOut();
     router.push("/sign-in")
    };
  return (
    <div>
        <Dropdown placeholder="bottom-start">
            <DropdownTrigger>
                <Avatar src={user?.imageUrl} alt="" className='w-[40px] h-[40px] cursor-pointer'/>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant='flat'>
                <DropdownItem onClick={()=>{ handleprofile();setOpen(false)}}>
                    <div className='flex w-full items-center'>
                        <Avatar src={user?.imageUrl} alt="" className='w-[30px] h-[30px] cursor-pointer' />
                        <span className={`${Styles.label} text-black text-[16px] pl-2`} > MY Profile</span>
                    </div>
                </DropdownItem>
                <DropdownItem className={`${!isSellerExist && 'hidden'}` }>
                    <Link href={"/my-shop"} className='flex w-full items-center'>
                        <span className={`${Styles.label} text-black text-[16px] pl-2`}>
                            Switchingto seller
                        </span>
                        <TbSwitchVertical className="text-2xl ml-2 text-black"/>
                    </Link>
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>
                    <div className='flex items-center'>
                        <span className={`${Styles.label} text-black text-[16px] pl-2`}>
                            Logout
                        </span>
                        <AiOutlineLogout  className="text-2xl ml-2 text-black "/>
                    </div>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
  )
}