"use client";
import React from "react";
import brandData from './brandData';

import Image from "next/image";

const Brands = () => {


  return (
    <>
    
    <div className='relative w-[75%] py-10 px-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] overflow-hidden bg-inherit whitespace-nowrap flex'>
      <div className="py-12 animate-infinite-scroll whitespace-nowrap min-w-max">
        {
          brandData.map((brand, idx) => (
            <span key={idx} className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
              <Image src={brand.image} alt='partners' className='object-cover filter grayscale'/>
            </span>
          ))
        }
      </div>

      <div className="absolute bittom-0 py-12 animate-marquee2 whitespace-nowrap min-w-max">
       {
          brandData.map((brand, idx) => (
            <span key={idx} className="inline-block mx-12 w-[10rem] h-[5rem] scale-[150%] overflow-hidden">
              <Image src={brand.image} alt='partners' className='object-cover filter grayscale'/>
            </span>
          ))
        }
        </div>
    </div>
    </>
  );
};

export default Brands;
