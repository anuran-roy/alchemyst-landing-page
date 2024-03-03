import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import bgimg from '../../public/assets/frame7.png'
import section2img from '../../public/assets/frame2.png'
import section3img from '../../public/assets/frame3.png'
import section4img from '../../public/assets/frame4.png'
import imgborder from '../../public/assets/frame5.png'
import logo from '../../public/assets/AI.png'
import wave from '../../public/assets/waveremove.png'

import { teamsData } from '../../public/data/teamsData'
import { artisans } from '../../public/data/artisans'
import Brands from './(components)/Brands'
import { log } from 'console'

//icons
import { TbBrandInstagram, TbBrandTwitterFilled, TbBrandFacebookFilled, TbBrandLinkedin, TbBrandDiscordFilled } from "react-icons/tb";


const Home = () => {
  return (
    <>
    
    <div className='font-league bg-bg-primary'>

      <div className='w-full flex justify-center items-center py-6 text-white text-semibold text-xl border-b-[1px] border-b-gray-500'>
        <div className='navbar__inner__section  w-[90%] flex justify-between px-20 items-center gap-5'>
          <div>
            <Image src={logo} alt='logo' width={40} height={40} />
          </div>

          <ul className='flex justify-center items-center gap-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#414770] to-[#41477000] py-2 px-28 rounded-2xl'>
            <li className='text-text-yellow cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Team</li>
          </ul>

            <div className=''>
              <button className='py-2 px-6 rounded-md bg-bg-yellow text-white'>Say Hello</button>
            </div>
        </div>
      </div>
      
      <div className='landing__section__1 w-full min-h-max py-5 px-5 flex justify-center items-center flex-col bg-bg-primary relative backdrop-blur-sm bg-opacity-30' >
        <div className='absolute top-[10rem] left-0 w-[18rem] h-[18rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10 glow-animation'></div>
        {/* <div className='absolute top-[14rem] right-[20rem] w-[10rem] h-[10rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10'></div> */}
        <div className='section-1 flex-1 w-[80%] flex justify-center items-center py-10 my-16'>

          <div className='landing__text__one flex-1 pl-10 backdrop-blur-sm bg-bg-primary/30'>

            <div className='px-4 text-7xl font-bold text-white'>
              <p>The <span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>Future</span></p>
              <p>of the</p>
              <p>Workforce</p>
            </div>

            <div className='w-full px-4 text-white font-semibold mt-3'>
              ALchemysts can become integral members of your <br />buisness and startup teams
            </div>

            <div className='w-full px-5 py-2 mt-16'>
              <button className='py-2 px-6 rounded-md bg-bg-yellow text-white'>Say Hello</button>
            </div>
          </div>

          <div className='landing__image__container flex-1 relative flex justify-center items-center'>
          <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[28rem] h-[28rem]  bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[5rem] -z-10 glow-animation'></div>
              <Image src={bgimg} alt='landing__image__one' width={500} height={500} className='z-30' />
          </div>

        </div>

            <Image src={wave} alt='landing__image__one' className='absolute filter grayscale w-full h-[75rem] -z-10 top-[7rem]'/>


        <div className='section-2 flex-1 w-full flex justify-start pt-10 items-center flex-col mt-28'>
          <div className='landing__text__section__2 text-white text-5xl font-semibold my-3 flex justify-center items-center text-center tracking-wide mb-10'>
            <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>First Indian </span> Human-Like AI <br/> Employees</p>
          </div>

          <div className='landing__text__section__subconten  text-white text-xl font-normal my-3t text-center'>
            <p>Alchemysts can become integral members of your <br/>  buisness and start-up teams</p>
          </div>
        </div>
      </div>

      <div className='artisans__section w-full min-h-max py-10 px-5 flex justify-center items-center flex-col bg-bg-primary relative backdrop-blur-sm bg-opacity-30 mt-16'>
        <div className='absolute top-[10rem] -left-[10rem] w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[20rem] -z-10'></div>
        
        <div className='artisans__inner__section w-[80%] flex justify-center items-center gap-8'>

          {
            artisans.map((artisan, index) => {
              return (
                <div key={artisan.id} className='w-[30rem] h-[38rem] p-[3px] rounded-xl bg-gradient-to-b from-[#82D6D2] to-[#82D6D200]'>
                  <div className='rounded-xl w-full h-full p-5 bg-gradient-to-t from-[#313b45] to-[#43424c] flex justify-around items-baseline flex-col gap-6 relative backdrop-blur-sm bg-opacity-30 px-8'>

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

                    <div className='w-full px-5 py-2 mt-4 flex justify-center items-center'>
                      <button className='py-2 px-6 rounded-md bg-bg-yellow text-white text-lg font-semibold'>{artisan.button_text}</button>
                    </div>
                    
                  </div>
                </div>
              )
            })
          }
          
        </div>
        
      </div>

      <div className='chat__with__ease__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary backdrop-blur-sm bg-opacity-30'>
        <div className='absolute top-0 right-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[15rem] -z-10 hover:glow-animation'></div>

        <div className='section__2__inner__container w-[80%] flex justify-center items-center gap-2 my-16'>
          <div className='section__2__image__container flex-1 flex justify-end items-center'>
            <Image src={section2img} alt='landing__image__two' width={500} height={500} />
          </div>
          <div className='section__2__text__container flex-1 self-start pt-12 ml-8'>
            <div className=' text-white text-5xl font-semibold'>
              <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>Chat</span> with ease</p>
              <p>with our</p>
              <p>Alchemyst</p>
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
            <div className=' text-white text-5xl font-semibold'>
              <p>Empowers Go-to-</p>
              <p>Market, Growth,</p>
              <p>Marketing and</p>
              <p>sales</p>
            </div>

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
            <div className=' text-white text-5xl font-semibold'>
              <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>Additional </span>Info (if</p>
              <p>required)</p>
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

        <div className='p-[2.5px] rounded-2xl w-[70%]'>
          <div className=' landing__section__5__card w-[100%] bg-bg-primary flex justify-center items-center flex-col py-16 gap-10 rounded-xl bg-gradient-to-t backdrop-blur-sm bg-opacity-0 from-[#1F9C9A1A] to-[#F8F8F81A]'>
            
            <div className='w-full text-white font-semibold text-4xl text-center'>
              <p>Ready to Hire an Alchemyst to act</p>
              <p>as a Catalyst for your Team ?</p>
            </div>

            <div className='w-full text-white font-normal text-xl text-center'>
                <p>Alchemysts can become integral</p>
                <p>members of your buisness adn start-up teams</p>
            </div>
            
            <div className='w-full py-3 flex justify-center items-center'>
              <button className='bg-bg-yellow py-2 px-9 text-white rounded-lg'>Hire Maya</button>
            </div>
            
          </div>
        </div>
        
      </div>

      <div className='meet__our__team__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary flex-col relative backdrop-blur-sm bg-opacity-0'>
        <div className='absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10'></div>
        <div className='text-white font-semibold text-5xl'>
          Meet our <span className='bg-gradient-to-br from-teal-500 to-white bg-clip-text text-transparent'>Team</span>
        </div>
        <div className='meet__our__team__inner w-[60%] grid grid-cols-2 grid-rows-2 py-10 px-10 gap-y-10' >
          
          {
            teamsData.map((team,ind) => {
              return(
                <div key={team.id} className='p-[2px] flex justify-center items-center'>
                  <div className='py-6 px-3 rounded-lg w-[25rem] bg-opacity-30 backdrop-blur-sm bg-gradient-to-t from-[#1F9C9A1A] to-[#F8F8F81A] self-end relative overflow-hidden'>
                    <div className='absolute -bottom-[2rem] -right-[1rem]'>
                      <Image src={team.profileimg} alt='team__image' width={200} height={200} className='rounded-full' />
                    </div>
                    <div className='text-white font-semibold text-xl text-wrap'>
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
              )
            })
          }
        </div>
      </div>

      <div className='w-full flex justify-center items-center'>
      <div className='w-[80%]' >
        <Brands />
      </div>
      </div>

      <div className='footer__section__grid__container py-10 px-28 flex justify-start gap-10 w-full items-center flex-col'>
        <div className='w-full flex justify-start'>
          <Image src={logo} alt='logo' width={40} height={40} />
        </div>
        <div className='text-white text-lg w-full flex justify-start items-baseline flex-row gap-2'>
          <div className=''>
            <p className='my-5'>
              We are creatin highly advanced sigital workers,<br /> called artisans , using cutting edge AI technolodgy
            </p>
            <p>
              someemail@gmail.com
            </p>
            <ul className='flex justify-start items-center gap-4 text-white text-2xl mt-4'>
              <li><TbBrandTwitterFilled /></li>
              <li><TbBrandFacebookFilled /></li>
              <li><TbBrandDiscordFilled /></li>
              <li><TbBrandInstagram /></li>
              <li><TbBrandLinkedin /></li>
            </ul>
          </div>

          {/* <div className=' w-[50%]'>
            <p className='text-center text-white font-semibold text-2xl'>Stay Connected To Us</p>

            <div className='flex justify-center items-center flex-col gap-4 w-full  px-6'>
            <input type="text" placeholder='Enter Your Name' className='w-full bg-inherit border-2 border-gray-800 border-solid rounded-lg py-2 px-5 text-xl'/>
            <input type="text" placeholder='Enter our Email' className='w-full bg-inherit border-2 border-gray-800 border-solid rounded-lg py-2 px-5 text-xl'/>
            <button>Connect</button>
            </div>
          </div> */}
        </div>

        <div className='w-full flex justify-between items-center gap-8 text-white font-medium text-md'>
          <div className='flex justify-center items-center gap-6'>
          <p>Terms of use</p>
          <p>Privacy Policy</p>
          </div>
          <p>© 2023 Artisans. All rights reserved</p>
          <p>Made with love in India</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home