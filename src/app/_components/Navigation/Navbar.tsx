"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../public/assets/AI.png'
import { usePathname } from 'next/navigation'


const Navbar = () => {

    const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };
    
  return (
        <div className='w-full flex justify-center items-center py-4 text-white text-semibold text-xl border-b-[1px] border-b-gray-500 bg-bg-primary'>
            <div className='navbar__inner__section w-full flex justify-between px-5 items-center'>
            <div className='flex-1'>
                <Link href={'/'} ><Image src={logo} alt='logo' className='w-[150px] lg:w-[230px]' /></Link>
            </div>

            <ul className='hidden flex-1 text-lg lg:flex justify-center items-center gap-8 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#414770] to-[#41477000] py-2 px-28 rounded-2xl'>
                <Link href='/' className={`cursor-pointer hover:text-text-yellow ${pathname.split('/')[1] === '' ? 'text-text-yellow' : 'text-white'}`}>Home</Link>
                <Link href='/product' className={`cursor-pointer hover:text-text-yellow ${pathname.split('/')[1] === 'product' ? 'text-text-yellow' : 'text-white'}`}>Products</Link>
                <Link href='/' className='cursor-pointer hover:text-text-yellow' onClick={() => {
                    scrollToSection('teamsSection');
                }}>
                Team
                </Link>
                <Link href='/contact' className={`cursor-pointer hover:text-text-yellow ${pathname.split('/')[1] === 'contact' ? 'text-text-yellow' : 'text-white'}`}>Contact</Link>
            </ul>

                <div className='text-lg flex-1 flex justify-end items-center'>
                    <Link href='/contact' className='py-1 px-4 lg:py-2 lg:px-6 rounded-md bg-bg-yellow text-black'>
                    Hire Maya
                    </Link>
                </div>
            </div>
        </div>
       )
}

export default Navbar