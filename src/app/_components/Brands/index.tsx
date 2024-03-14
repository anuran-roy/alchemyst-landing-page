"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from './brandData';

import Image from "next/image";

import brand1 from '../../../../public/assets/brands/logo1.png';
import brand2 from '../../../../public/assets/brands/logo2.png';
import brand3 from '../../../../public/assets/brands/logo3.png';
import brand4 from '../../../../public/assets/brands/logo4.png';
import brand5 from '../../../../public/assets/brands/logo5.png';
import brand6 from '../../../../public/assets/brand7.png'

const Brands = () => {


  return (
    <>
    
    <div className='relative w-[75%] py-10 px-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] overflow-hidden bg-inherit whitespace-nowrap flex'>
      <div className="py-12 animate-infinite-scroll whitespace-nowrap min-w-max">
        <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
          <Image src={brand1} alt='partners' className='object-cover filter grayscale'/>
        </span>
        <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
          <Image src={brand2} alt='partners' className='object-cover filter grayscale'/>
        </span>
        <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
          <Image src={brand3} alt='partners' className='object-cover filter grayscale'/>
        </span>
        <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
          <Image src={brand4} alt='partners' className='object-cover filter grayscale'/>
        </span>
        <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
          <Image src={brand5} alt='partners' className='object-cover filter grayscale'/>
        </span>
        <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
          <Image src={brand6} alt='partners' className='object-cover filter grayscale mt-1'/>
        </span>
      </div>

      <div className="absolute bittom-0 py-12 animate-marquee2 whitespace-nowrap min-w-max">
          <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
            <Image src={brand1} alt='partners' className='object-cover filter grayscale'/>
          </span>
          <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
            <Image src={brand2} alt='partners' className='object-cover filter grayscale'/>
          </span>
          <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
            <Image src={brand3} alt='partners' className='object-cover filter grayscale'/>
          </span>
          <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
            <Image src={brand4} alt='partners' className='object-cover filter grayscale'/>
          </span>
          <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
            <Image src={brand5} alt='partners' className='object-cover filter grayscale'/>
          </span>
          <span className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
            <Image src={brand6} alt='partners' className='object-cover filter grayscale mt-1'/>
          </span>
        </div>
    </div>
    </>
  );
};

export default Brands;
