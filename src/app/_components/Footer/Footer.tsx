import React from 'react'

import Image from 'next/image'
import logo from '../../../../public/assets/AI.png'

import { TbBrandInstagram, TbBrandTwitterFilled, TbBrandFacebookFilled, TbBrandLinkedin, TbBrandDiscordFilled } from "react-icons/tb";

import imageicon from '../../../../public/assets/india.png';

const Footer = () => {
  return (
    <div className='bg-bg-primary'>
      <div className='footer__section__grid__container overflow-hidden flex justify-start gap-6 w-full items-center flex-col border-gray-600 border-t-2 bg-gradient-to-t from-[#1F9C9A4D] to-[#F8F8F84D] backdrop-blur-lg bg-opacity-30 rounded-t-2xl'>

      <div className='bg-white/10 backdrop-blur-lg w-full py-10 px-20'>
        <div className='w-full flex justify-start'>
          <Image src={logo} alt='logo' width={200}/>
        </div>
        <div className='text-white text-xl w-full flex justify-start items-baseline flex-row gap-2'>
          <div className=''>
            <p className='my-5'>
            Building Next Gen AI Digital Employees.<br /> Spearheading the next Industrial Revolution in India.
            </p>
            <p>
              getalchemystai@gmail.com
            </p>
            <ul className='flex justify-start items-center gap-4 text-white text-2xl mt-4 my-8'>
              <li className='border-2 flex justify-center items-center border-white rounded-full w-[3rem] h-[3rem]'><TbBrandTwitterFilled /></li>
              <li className='border-2 flex justify-center items-center border-white rounded-full w-[3rem] h-[3rem]'><TbBrandFacebookFilled /></li>
              <li className='border-2 flex justify-center items-center border-white rounded-full w-[3rem] h-[3rem]'><TbBrandDiscordFilled /></li>
              <li className='border-2 flex justify-center items-center border-white rounded-full w-[3rem] h-[3rem]'><TbBrandInstagram /></li>
              <li className='border-2 flex justify-center items-center border-white rounded-full w-[3rem] h-[3rem]'><TbBrandLinkedin /></li>
            </ul>
          </div>
        </div>

        <div className='w-full flex justify-between items-center gap-6 text-white font-medium text-md mt-10'>
          <div className='flex justify-center items-center gap-6 text-xl'>
          <p>Terms of use</p>
          <p>Privacy Policy</p>
          </div>
          <p className='text-xl bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>© 2023 Alchemyst AI. All rights reserved</p>
          <p className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text text-xl relative'>Made with <span className='text-red-600'>❤️</span> from <span className='inline-block absolute -right-9'><Image src={imageicon} alt='someimage' width={30}/></span> </p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Footer