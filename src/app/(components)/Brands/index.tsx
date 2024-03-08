"use client";
import React, { useEffect } from "react";
import SingleBrand from "./SingleBrand";
import brandData from './brandData';

import { useRef } from "react";

import Image from "next/image";
import { truncate } from "fs";

// import brand1 from '../../../../public/assets/brands/brand1.png'
// import brand2 from '../../../../public/assets/brands/brand2.png'
// import brand3 from '../../../../public/assets/brands/brand3.png'
// import brand4 from '../../../../public/assets/brands/brand4.png'
// import brand5 from '../../../../public/assets/brands/brand5.png'
// import brand6 from '../../../../public/assets/brands/brand6.png'
// import brand7 from '../../../../public/assets/brand7.png'

import brand1 from '../../../../public/assets/brands/logo1.png';
import brand2 from '../../../../public/assets/brands/logo2.png';
import brand3 from '../../../../public/assets/brands/logo3.png';
import brand4 from '../../../../public/assets/brands/logo4.png';
import brand5 from '../../../../public/assets/brands/logo5.png';
import brand6 from '../../../../public/assets/brand7.png'

const Brands = () => {

  const innerScroller = useRef<HTMLDivElement>(null);

  return (
    <>
    
    <div className='relative w-[75%] py-10 px-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] overflow-hidden bg-inherit whitespace-nowrap flex'>
{/* 
          <div className="animate-infinite-scroll inline-block border-2 border-red-600" ref={innerScroller}>
            // {brandData.map((brand, key) => (
            //     // <span key={key}>
            //       <Image key={key} src={brand.image} alt='partners' className='inline-block object-contain w-[10rem] h-[10rem] scale-[160%] filter grayscale'/>
            //     // </span>
            // ))}
          </div>

          <div className="animate-infinite-scroll inline-block" ref={innerScroller}>
            {brandData.map((brand, key) => (
                // <span key={key}>
                  <Image key={key} src={brand.image} alt='partners' className='inline-block object-contain w-[10rem] h-[10rem] scale-[160%] filter grayscale'/>
                // </span>
            ))}
          </div>
           */}

  <div className="py-12 animate-infinite-scroll whitespace-nowrap min-w-max">
          {/* {  
              brandData.map((brand, key) => (
              <span key={key} className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
                <Image key={key} src={brand.image} alt='partners' className='object-cover filter grayscale'/>
              </span>
            ))
          } */}
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

          {/* {  
              brandData.map((brand, key) => (
              <span key={key} className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
                <Image key={key} src={brand.image} alt='partners' className='object-contain filter grayscale'/>
              </span>
            ))
          } */}
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
