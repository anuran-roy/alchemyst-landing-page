/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'

import bgimg from '../../public/assets/frame7.png'
import section2img from '../../public/assets/frame2.png'
import section3img from '../../public/assets/frame3.png'
import section4img from '../../public/assets/frame4.png'
import imgborder from '../../public/assets/frame5.png'
import logo from '../../public/assets/AI.png'
import imageicon from '../../public/assets/india.png'
import bgwave from '../../public/assets/wave.png'

import { teamsData } from '../../public/data/teamsData'
import { artisans } from '../../public/data/artisans'
import Brands from './_components/Brands'

//icons
import { TbBrandInstagram, TbBrandTwitterFilled, TbBrandFacebookFilled, TbBrandLinkedin, TbBrandDiscordFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";


//framer motion
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'framer-motion';

//gsap

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const [isHovered, setIsHovered] = useState(false)
  const [triggered, setTriggered] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };
 
  
  const text1Ref = useRef<HTMLDivElement>(null)
  const text1subRef = useRef<HTMLDivElement>(null)
  const headingImgRef  = useRef<HTMLImageElement>(null)

  useGSAP(()=> {

    const tl1 = gsap.timeline({})

    tl1.from(
      text1Ref.current,
      {
        y: '40%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      }
    )
    .from(
      headingImgRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      },
      '-=0.9'
    )
    .from (
      text1subRef.current,
      {
        y: '40%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      },
      '-=0.5'
    )
  },[])
  
  return (
    <>
    
    <div className='font-league bg-bg-primary'>
      
      <div className='landing__section__1 w-full min-h-max py-5 px-5 flex justify-center items-center flex-col bg-bg-primary relative backdrop-blur-sm bg-opacity-30' >
        <div className='absolute top-[10rem] left-0 w-[18rem] h-[18rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10 glow-animation'></div>
        <div className='section-1 flex-1 w-[85%] flex justify-center items-center py-10 my-16'>
          <div className='landing__text__one flex-1 pl-10 '>

            <div className='overflow-hidden'>
            <div
             ref={text1Ref}
             className='px-4 text-7xl font-bold text-white'>
              <p>Introducing <span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>Maya,</span></p>
              <p>the first</p>
              <p>Alchemyst</p>
            </div>
            </div>

            <div className='overflow-y-hidden'>
              <div
              ref={text1subRef} 
              className='w-full px-4 text-white font-semibold mt-3'>
              Maya is India’s first digital employee,  <br />designed to automate your sales.
              </div>
            </div>

            <div className='w-full px-5 py-2 mt-16'>
              <button className='py-2 px-6 rounded-md bg-bg-yellow text-white'>Say Hello</button>
            </div>
          </div>

          <div className='landing__image__container flex-1 relative flex justify-center items-center'>
          <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[28rem] h-[28rem]  bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[5rem] -z-10 glow-animation'></div>
              <Image ref={headingImgRef} src={bgimg} alt='landing__image__one' width={500} height={500} className='z-30' />
          </div>

        </div>

        {/* <Image src={bgwave} alt='landing__image__one' className='absolute w-full h-[75rem] -z-50 top-[7rem] bg-clip-content bg-opacity-0 backdrop-blur-sm'/> */}


        <div
         className='section-2 flex-1 w-full flex justify-start pt-10 items-center flex-col mt-28'>
          <div
           className='landing__text__section__2 text-white text-5xl font-semibold my-3 flex justify-center items-center text-center tracking-wide mb-10 overflow-hidden '>
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
              <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>First Indian </span> Human-Like AI <br/> Employees</p>
            </motion.div>
          </div>

          <div className='landing__text__section__subconten  text-white text-xl font-normal my-3t text-center'>
            <p>Alchemysts can become integral members of your <br/>  buisness and start-up teams</p>
          </div>
        </div>
      </div>

      <div className='artisans__section w-full min-h-max py-16 px-5 flex justify-center items-center flex-col bg-bg-primary relative backdrop-blur-sm bg-opacity-30 mt-16'>
        <div className={`absolute top-[10rem] -left-[10rem] w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[20rem] -z-10`}></div>
        
        <div className='artisans__inner__section w-[90%] flex justify-center items-center gap-8'>

          {
            artisans.map((artisan, index) => {
              return (
                <div key={artisan.id} className='w-[30rem] h-[40rem] p-[3px] rounded-xl bg-gradient-to-b from-[#82D6D2] to-[#82D6D200]'>
                  <div className='rounded-xl w-full h-full p-5 bg-gradient-to-t from-[#313b45] to-[#43424c] flex justify-start items-baseline flex-col gap-8 relative backdrop-blur-sm bg-opacity-30 px-8'>

                    <div className='w-full flex justify-center items-center'>
                        <Image src={artisan.face} alt='landing__image__two' width={200} height={200} />
                    </div>

                    <div className='text-white font-semibold '>
                      <p className='text-4xl'>{artisan.name}</p>
                      <p className='text-xl'>{artisan.role}</p>
                    </div>

                    <ul className='text-white font-semibold list-disc flex flex-col justify-center items-center gap-6'>

                      {
                        artisan.capabilities.map((capability, ind) => (
                          <li key={capability.id}>{capability.value}</li>
                        ))
                      }
                    </ul>

                    <div className='w-full px-5 py-2 flex justify-center items-center self-end absolute bottom-5 left-0'>
                      <button className='py-2 px-6 rounded-md bg-bg-yellow text-white text-lg font-semibold'>{artisan.button_text}</button>
                    </div>
                    
                  </div>
                </div>
              )
            })
          }
          
        </div>
        
      </div>

      <div className='chat__with__ease__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary backdrop-blur-sm bg-opacity-30' onMouseOver={() => {
        setIsHovered((state) => !state)
      }} onMouseLeave={() => {
        setIsHovered((state) => !state)
      }}>
        <div className={'absolute top-0 right-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[15rem] -z-10 hover:blur-[30rem]'}></div>

        <div className='section__2__inner__container w-[85%] flex justify-center items-center gap-10 my-16 py-4'>
          <div className='section__2__image__container flex-1 flex justify-end items-center'>
            <Image src={section2img} alt='landing__image__two' width={500} height={500} />
          </div>
          <div className='section__2__text__container flex-1 self-start pt-12 ml-8'>
            <div className='overflow-hidden'>
              <motion.div 
              ref={section2Ref} 
              variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: '40%'}
              }}
              initial='hidden'
              animate={section3controls}
              transition={{duration: 0.8}}
              className=' text-white text-5xl font-semibold'>
                <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>Chat</span> with ease</p>
                <p>with our</p>
                <p>Alchemyst</p>
              </motion.div>
            </div>

            <div className='text-white mt-5 text-xl'>
              <p>Alchemysts can become integral</p>
              <p>members of your buisness adn start-up</p>
              <p>teams</p>
            </div>
          </div>
        </div>

      </div>

      <div className='empowers__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary relative backdrop-blur-sm bg-opacity-30'>
        <div className='absolute top-0 left-0 w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[15rem] -z-10'></div>
        <div className='section__3__inner__container w-[80%] flex justify-center items-center gap-2 my-20'>
          <div className='section__3__text__container flex-1 self-start pt-12'>
            <motion.div
              ref={section4Ref} 
              variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: '40%'}
              }}
              initial='hidden'
              animate={section4controls}
              transition={{duration: 0.8}}
            >
              <div className=' text-white text-5xl font-semibold'>
                <p>Empowers Go-to-</p>
                <p>Market, Growth,</p>
                <p>Marketing and</p>
                <p>sales</p>
              </div>
            </motion.div>

            <div className='text-white mt-5 text-xl'>
              <div>
              <p>Alchemysts can become integral</p>
              <p>members of your buisness adn start-up</p>
              <p>teams</p>
              </div>
            </div>
          </div>

          <div className='section__3__image__container flex-1 flex justify-center items-center relative h-[25rem]'>
              <Image src={imgborder} alt='landing__image__two' width={500} height={500} className='absolute'/>
              <Image src={section3img} alt='landing__image__two' width={800} height={800} className='z-20'/>
          </div>
          
        </div>
        
      </div>

      <div className='additional__info__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary'>

        <div className='section__4__inner__container w-[80%] flex justify-center items-center gap-2 my-20'>
          <div className='section__4__image__container flex-1 flex justify-center items-center relative h-[25rem]'>
              <Image src={imgborder} alt='landing__image__two' width={500} height={500} className='absolute'/>
            <Image src={section4img} alt='landing__image__two' width={500} height={500} className='z-20'/>
          </div>
          <div className='section__4__text__container flex-1 self-start pt-12 ml-10'>
            <div className='overflow-hidden'>
              <motion.div 
              ref={section5Ref} 
              variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: '40%'}
              }}
              initial='hidden'
              animate={section5controls}
              transition={{duration: 0.8}}
              className=' text-white text-5xl font-semibold '>
                <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>Additional </span>Info (if</p>
                <p>required)</p>
              </motion.div>
            </div>

            <div className='text-white mt-5 text-xl'>
              <p>Alchemysts can become integral</p>
              <p>members of your buisness adn start-up</p>
              <p>teams</p>
            </div>
          </div>
        </div>

      </div>

      <div className='ready__to__hire__section w-full min-h-max py-20 flex justify-center items-center px-5 bg-bg-primary backdrop-blur-sm bg-opacity-30'>

        <div className='absolute -bottom-[5rem] w-[25rem] h-[25rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[20rem] -z-10'></div>

        <div className='p-[2.5px] rounded-2xl w-[80%]'>
          <div className=' landing__section__5__card w-[100%] bg-bg-primary flex justify-center items-center flex-col py-16 gap-10 rounded-xl bg-gradient-to-t backdrop-blur-sm bg-opacity-0 from-[#1F9C9A1A] to-[#F8F8F81A]'>
            
            <div>
              <motion.div 
              ref={section7Ref} 
              variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: '40%'}
              }}
              initial='hidden'
              animate={section7controls}
              transition={{duration: 1}}
              className='w-full text-white font-semibold text-4xl text-center'>
                <p>Ready to Hire an Alchemyst to act</p>
                <p>as a Catalyst for your Team ?</p>
              </motion.div>
            </div>

            <div className='w-full text-white font-normal text-xl text-center'>
                <p>Alchemysts can become integral</p>
                <p>members of your business and start-up teams</p>
            </div>
            
            <div className='w-full py-3 flex justify-center items-center'>
              <button className='bg-bg-yellow py-2 px-9 text-white rounded-lg'>Hire Maya</button>
            </div>
            
          </div>
        </div>
        
      </div>

      <div id='teamsSection' className='meet__our__team__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary flex-col relative backdrop-blur-sm bg-opacity-0'>
        <div className='absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10'></div>
        <div className='overflow-hidden'>
          <motion.div 
              ref={section6Ref} 
              variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: '40%'}
              }}
              initial='hidden'
              animate={section6controls}
              transition={{duration: 1}}
          className='text-white font-semibold text-5xl w-full flex justify-center items-center mb-10 gap-2'>
            Meet our <span className='inline-block bg-gradient-to-br from-teal-500 to-white bg-clip-text text-transparent'> Team</span>
          </motion.div>
        </div>
        <div className='meet__our__team__inner w-[70%] grid grid-cols-2 grid-rows-2 py-10 gap-y-8'>
          
          {
            teamsData.map((team,ind) => {
              return(
                <div key={team.id} className='flex justify-center items-center '>
                  <div className=' rounded-2xl overflow-hidden self-center relative h-[100%] w-[95%]'>
                    <div className='bg-gradient-to-t from-[#1F9C9A1A] to-[#F8F8F81A] backdrop-blur-sm bg-opacity-100 py-10 px-5 relative overflow-hidden flex justify-center items-center flex-col h-[100%]'>
                      <div className='w-full flex justify-center items-center'>
                        <Image src={team.profileimg} alt='team__image' width={200} className='rounded-full' />
                      </div>
                      <div className='text-white font-semibold text-xl text-wrap text-center'>
                        <p>{team.name}</p>
                        <p className='text-text-yellow'>{team.position}</p>
                      </div>

                      <ul>
                        {
                          team.achievements.map((item,ind) => {
                            return(
                              <li key={item.id} className='text-white font-normal text-lg pb-3'>
                                <p>{item.value}</p>
                              </li>
                            )
                          })
                        }
                        
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='w-full flex justify-center items-center '>
        <Brands />
      </div>

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
    </>
  )
}

export default Home