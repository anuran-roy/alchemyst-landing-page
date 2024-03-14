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
      <div className='w-full flex justify-center items-center py-6 text-white text-semibold text-xl border-b-[1px] border-b-gray-500 bg-bg-primary'>
        <div className='navbar__inner__section w-full flex justify-between px-10 items-center gap-4'>
          <div>
            <Link href={'/'} ><Image src={logo} alt='logo' width={230} className='' /></Link>
          </div>

          <ul className='text-lg flex justify-center items-center gap-8 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#414770] to-[#41477000] py-2 px-28 rounded-2xl'>
            <Link href='/' className={`cursor-pointer ${pathname.split('/')[1] === '' ? 'text-text-yellow' : 'text-white'}`}>Home</Link>
            <Link href='/product' className={`cursor-pointer ${pathname.split('/')[1] === 'product' ? 'text-text-yellow' : 'text-white'}`}>Products</Link>
            <li className='cursor-pointer' onClick={() => {
                scrollToSection('teamsSection');
            }}>
              Team
            </li>
          </ul>

            <div className='text-lg'>
              <button className='py-2 px-6 rounded-md bg-bg-yellow text-white'>Say Hello</button>
            </div>
        </div>
      </div>
  )
}

export default Navbar