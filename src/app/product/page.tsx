/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRef, useEffect } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import styles from './style.module.css'
import Link from 'next/link'

import section1img from  '../../../public/assets/products/Group 49.png'
import section2img from '../../../public/assets/products/Frame 22.png'
import section4img from '../../../public/assets/products/Frame 14.png';

import cardimg1 from '../../../public/assets/products/Frame 16.png';
import cardimg2 from '../../../public/assets/products/Frame 17.png';
import cardimg3 from '../../../public/assets/products/Frame 18.png';
import cardimg4 from '../../../public/assets/products/Frame 19.png';
import logo from '../../../public/assets/AI.png'

import frameimg from '../../../public/assets/products/Frame 21.png'

// import { TbBrandInstagram, TbBrandTwitterFilled, TbBrandFacebookFilled, TbBrandLinkedin, TbBrandDiscordFilled } from "react-icons/tb";
// import imageicon from '../../../public/assets/india.png'

//gsap

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GiSandsOfTime } from 'react-icons/gi'


gsap.registerPlugin(ScrollTrigger);

const deployementCard = [
  {
    id:1,
    image : cardimg1,
    description : 'Maya Engages Prospects on Multiple Channels to Book Meetings.'
  },
  {
    id:2,
    image : cardimg2,
    description : 'Maya empowers your entire Go-To-Market, Growth, Marketing.'
  },
  {
    id:3,
    image : cardimg3,
    description : 'Stop prospecting, Start connecting.'
  },
  {
    id:4,
    image : cardimg4,
    description : 'Maya Personalizes Outreach to Drive Conversions.'
  }
]

const Product = () => {

  const pathname = usePathname()

  const headingtextref= useRef(null)
  const subheadingRef = useRef(null)
  const sectionTwoRef = useRef(null)
  const sectionTwoHeading = useRef(null)


  const elementRef = useRef(null)
  const section2Ref = useRef(null)
  const section4Ref = useRef(null)
  const section5Ref = useRef(null)
  const section6Ref = useRef(null)
  const section7Ref = useRef(null)

  const controls = useAnimation()
  const section3controls = useAnimation()
  const section4controls = useAnimation()
  const section5controls = useAnimation()
  const section6controls = useAnimation()
  const section7controls = useAnimation()

  const inView= useInView(elementRef)
  const inView2 = useInView(section2Ref)
  const inView3 = useInView(section4Ref)
  const inView4 = useInView(section5Ref)
  const inView5 = useInView(section6Ref)
  const inView6 = useInView(section7Ref)

  useEffect(() => {
    if(inView)
       controls.start('visible')
    if(inView2)
      section3controls.start('visible')
    if(inView3)
      section4controls.start('visible') 
    if(inView4)
      section5controls.start('visible')
    if(inView5)
      section6controls.start('visible')
    if(inView6)
      section7controls.start('visible')

  },[inView,inView2,inView3,inView4,inView5,inView6])

  const productimg1Ref = useRef<HTMLImageElement>(null)
  const imageanimationRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const imagecontRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {

    gsap.from(
      productimg1Ref.current,
      {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }
    )

    gsap.to(
      imagecontRef.current,
      {
        scrollTrigger: {
          trigger: imageanimationRef.current,
          start: 'top 90%',
          end: '+=100%',
          toggleActions: 'play none none reverse',
          scrub: 1,
        },
        rotateX: 0,
        duration: 1
      }
    )

    gsap.to(
      imageRef.current,
      {
        scrollTrigger: {
          trigger: imageanimationRef.current,
          start: 'top 90%',
          end: '+=100%',
          toggleActions: 'play none none reverse',
          scrub: 1,
        },
        rotateX: 0,
        duration: 1
      }
    )
  })

  
  return (
    <div className='font-league bg-bg-primary max-h-min overflow-x-hidden'>
      
      <div className='products__section__1 w-full min-h-max py-5 px-5 flex justify-center items-center flex-col bg-bg-primary relative backdrop-blur-sm bg-opacity-30'>

        <div className='absolute top-[5%] left-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10'></div>

        <div>
          <div className='w-full flex justify-center items-center'>
            <div className=' w-[80%] flex justify-center items-center overflow-y-hidden'>
              <Image ref={productimg1Ref} src={section1img} alt='section1' className='object-cover w-[90%] py-5'/>
            </div>
          </div>
        <div className='w-full py-3 flex justify-center items-center'>
              <Link href='/contact' className='py-4 px-6 rounded-md bg-bg-yellow text-black'>
                Hire Maya
              </Link>
        </div>
        </div>
        
        <div
         className='section-2 flex-1 w-full flex justify-start pt-10 items-center flex-col'>
          <div
           className='products__text__section__2 text-white text-5xl font-semibold my-3 flex justify-center items-center text-center tracking-wide mb-10 overflow-hidden '>
            <motion.div 
            variants={{
              visible: {opacity: 1, y: 0},
              hidden: {opacity: 0, y: '40%'}
            }}
            initial='hidden'
            animate={controls}
            transition={{duration: 0.8}}
            ref={elementRef}

            className='py-2'>
              <p className='text-6xl'><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text text-6xl'>First Indian </span> Human-Like AI <br/> Employees</p>
            </motion.div>
          </div>

          <div className='landing__text__section__subconten  text-white font-normal my-3t text-center text-2xl'>
            <p>Alchemysts can become integral members of your <br/>  buisness and start-up teams</p>
          </div>
        </div>
      </div>

      <div className='products__section__2 py-20 px-20 relative backdrop-blur-sm bg-opacity-30 overflow-hidden'>
        <div className='absolute top-0 left-[50%] w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[25rem] -z-10'></div>
          <div className='overflow-hidden'>
            <motion.div className='w-full text-6xl text-white flex justify-center items-center py-5 font-semibold'
              variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: '40%'}
              }}
              initial='hidden'
              animate={section3controls}
              transition={{duration: 0.8}}
              ref={section2Ref}
              >
              <p>All <span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text text-6xl'>Sales</span> Complexities</p>
            </motion.div>
          </div>
      
      <div className=' flex justify-center items-center'>
          <div className=' w-[80%] '>
            <Image src={section2img} alt='section2' className='object-cover w-full'/>
          </div>
      </div>
      
      </div>

       <div className='section3 w-full min-h-max py-5 flex justify-center items-center px-2 bg-bg-primary backdrop-blur-sm bg-opacity-30'>
        <div className={'absolute top-0 right-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[15rem] -z-10 hover:blur-[30rem]'}></div>

        <div className='section__2__inner__container w-[85%] flex justify-center items-center gap-10 my-16 py-4 '>
          <div className='section__2__image__container flex-1 flex justify-end items-center min-h-min'>
            <Image src={section4img} alt='landing__image__two' width={700} height={700} className='w-full h-full scale-[1.8] bg-center'/>
          </div>
          <div className='section__2__text__container flex-1 self-start pt-12'>
            <div>
              <div className='overflow-hidden'>
                <motion.div 
                ref={section4Ref} 
                variants={{
                  visible: {opacity: 1, y: 0},
                  hidden: {opacity: 0, y: '40%'}
                }}
                initial='hidden'
                animate={section4controls}
                transition={{duration: 0.8}}
                className=' text-white font-semibold text-6xl'>
                  <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>Discovers</span> Best fit</p>
                  <p>for Customers</p>
                </motion.div>
              </div>
            </div>

            <div className='text-white mt-5 text-2xl'>
              <p>Alchemysts can become integral</p>
              <p>members of your buisness and start-up</p>
              <p>teams</p>
            </div>
          </div>
        </div>

      </div>
      
      <div className='section4 py-2 px-5'>
        <div>
          <div className='overflow-hidden'>
            <motion.div 
            variants={{
              visible: {opacity: 1, y: 0},
              hidden: {opacity: 0, y: '40%'}
            }}
            initial='hidden'
            animate={section5controls}
            transition={{duration: 0.8}}
            ref={section5Ref}
            className=' text-center py-10 text-white font-semibold text-4xl w-full flex justify-center items-center mb-10 gap-2'>
              <p className='text-5xl'>An Efficient <span className='text-text-yellow'>Sales Deployer</span></p>
            </motion.div>
          </div>

          <div>
            <div className=' flex justify-center items-center gap-4 py-2'>
              {
                deployementCard.map((card, key) => {
                  return (
                      <div key={key} className='w-[20rem] h-[30rem] bg-gradient-to-t from-[#1F9C9A1A] to-[#F8F8F81A] backdrop-blur-sm bg-opacity-100 rounded-xl border-2 border-cyan-500 py-2 px-2 flex justify-start items-center flex-col gap-4'>
                        <div className='h-[60%] overflow-hidden flex justify-center items-center object-contain p-8'>
                          <Image src={card.image} alt='card' className=''/>
                        </div>

                        <div className='text-xl text-white'>
                          <p>
                            {card.description}
                          </p>
                        </div>
                      </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center '>
        <div ref={imageanimationRef} className='w-[85%] flex justify-center items-center gap-10 my-16 p-6'>
          <div className={styles.image__wrapper}>
            <div className={styles.image__container} ref={imagecontRef}>
                <Image ref={imageRef} src={frameimg} alt='someimage' width={1000} height={1300} className={styles.image__style}/>
            </div>
          </div>
        </div>
      </div>
      
      <div className='ready__to__hire__section w-full min-h-max py-20 flex justify-center items-center px-5 bg-bg-primary backdrop-blur-sm bg-opacity-30'>

        <div className='absolute -bottom-[5rem] w-[25rem] h-[25rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[20rem] -z-10'></div>

        <div className='p-[2.5px] rounded-2xl w-[80%]'>
          <div className=' landing__section__5__card w-[100%] bg-bg-primary flex justify-center items-center flex-col py-16 gap-10 rounded-xl bg-gradient-to-t backdrop-blur-sm bg-opacity-0 from-[#1F9C9A1A] to-[#F8F8F81A]'>
            
            <div>
              <div 
              // ref={section7Ref} 
              // variants={{
              //   visible: {opacity: 1, y: 0},
              //   hidden: {opacity: 0, y: '40%'}
              // }}
              // initial='hidden'
              // animate={section7controls}
              // transition={{duration: 1}}
              className='w-full text-white font-semibold text-4xl text-center'>
                <p>Ready to Hire an Alchemyst to act</p>
                <p>as a Catalyst for your Team ?</p>
              </div>c
            </div>

            <div className='w-full text-white font-normal text-xl text-center'>
                <p>Alchemysts can become integral</p>
                <p>members of your business and start-up teams</p>
            </div>
            
            <div className='w-full py-3 flex justify-center items-center'>
              <Link href='/contact' className='py-4 px-6 rounded-md bg-bg-yellow text-black'>
                Hire Maya
              </Link>
            </div>
            
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Product