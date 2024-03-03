"use client";
import React, { useEffect } from "react";
import SingleBrand from "./SingleBrand";
import brandData from './brandData';

import { useRef } from "react";

import Image from "next/image";
import { truncate } from "fs";

import brand1 from '../../../../public/assets/brands/brand1.png'
import brand2 from '../../../../public/assets/brands/brand2.png'
import brand3 from '../../../../public/assets/brands/brand3.png'
import brand4 from '../../../../public/assets/brands/brand4.png'
import brand5 from '../../../../public/assets/brands/brand5.png'
import brand6 from '../../../../public/assets/brands/brand6.png'

const Brands = () => {

  const innerScroller = useRef<HTMLDivElement>(null);

  return (
    <>
    
    <div className='w-[80%] py-10 px-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] overflow-hidden bg-inherit whitespace-nowrap'>

          <div className="inline-block animate-infinite-scroll" ref={innerScroller}>
            {brandData.map((brand, key) => (
                <Image key={key} src={brand.image} alt='partners' className='inline-block py-2 px-4 ml-16 w-32 object-contain'/>
            ))}
          </div>

          <div className="inline-block animate-infinite-scroll" ref={innerScroller} aria-hidden={true}>
            {brandData.map((brand, key) => (
                <Image key={key} src={brand.image} alt='partners' className='inline-block py-2 px-4 ml-16 w-32 object-contain'/>
            ))}
          </div>
          
    </div>
    </>
  );
};

export default Brands;
