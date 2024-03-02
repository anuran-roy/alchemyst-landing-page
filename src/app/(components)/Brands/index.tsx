"use client";
import React, { useEffect } from "react";
import SingleBrand from "./SingleBrand";
import brandData from './brandData';

import { useRef } from "react";

import Image from "next/image";

const Brands = () => {

  const innerScroller = useRef<HTMLDivElement>(null);
  // console.log(scrollerConent)
  
  useEffect(() => {

  const scrollerConent = Array.from(innerScroller.current?.children || [])

    
      scrollerConent.forEach((content, index) => {
     const duplicatedItem = content.cloneNode(true) as Element
    //  console.log(duplicatedItem)
    duplicatedItem.setAttribute('aria-hidden', 'true')
    innerScroller.current?.appendChild(duplicatedItem)
  })
  
  },[])


  return (
    <>
      {/* <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black overflow-hidden w-full flex justify-center items-center">
        <div className="px-4 md:px-8 2xl:px-0 border-2 border-red-600 overflow-hidden w-full">
          <div className="flex justify-start items-center flex-nowrap gap-8 border-2 border-red-600 max-w-max" ref={innerScroller}>
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>import mandiri from '@/assets/partners/mandiri.svg'
import nike from '@/assets/partners/nike.svg'
import amazon from '@/assets/partners/amazon.svg'
import amd from '@/assets/partners/amd.svg'
import dropcam from '@/assets/partners/dropcam.svg'
import logitech from '@/assets/partners/logitech.svg'

      </section> */}

    <div className='w-full mx-auto py-10 px-2 flex justify-center items-center [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] overflow-hidden bg-inherit'>
        <div 
        className='flex justify-center items-center gap-10 animate-infinite-scroll'
        ref={innerScroller}
        >

          {brandData.map((brand, key) => (
            <Image key={key} src={brand.image} alt='partners' className='py-2 px-4 w-32' />
          ))}
          
        </div>
    </div>
    </>
  );
};

export default Brands;
