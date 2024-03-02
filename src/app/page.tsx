import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import bgimg from '../../public/assets/frame7.png'
import section2img from '../../public/assets/frame2.png'
import section3img from '../../public/assets/frame3.png'
import section4img from '../../public/assets/frame4.png'
import maya from '../../public/assets/maya.png'
import moh from '../../public/assets/moh.png'

import { teamsData } from '../../public/data/teamsData'
import { artisans } from '../../public/data/artisans'

const Home = () => {
  return (
    <div className='font-league bg-bg-primary'>
      <div className='landing__section__1 w-full min-h-max py-5 px-5 flex justify-center items-center flex-col bg-bg-primary relative backdrop-blur-sm bg-opacity-30' >
        <div className='absolute top-[10rem] left-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10'></div>
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
          <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[20rem] h-[20rem]  bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10'></div>
              <Image src={bgimg} alt='landing__image__one' width={500} height={500} className='z-30' />
          </div>

        </div>

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
                <div key={artisan.id} className='rounded-xl w-[30rem] h-[38rem] bg-gradient-to-t from-[#313b45] to-[#43424c] p-5 flex justify-around items-baseline flex-col gap-6 relative backdrop-blur-sm bg-opacity-30'>

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
                    <button className='py-2 px-6 rounded-md bg-bg-yellow text-white'>{artisan.button_text}</button>
                  </div>
                  
                </div>
                )
              })
            }
            
          </div>
          
        </div>


      <div className='chat__with__ease__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary backdrop-blur-sm bg-opacity-30'>
        <div className='absolute top-0 right-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[15rem] -z-10'></div>

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

          <div className='section__3__image__container flex-1'>
            <Image src={section3img} alt='landing__image__two' width={500} height={500} />
          </div>
          
        </div>
        
      </div>

      <div className='additional__info__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary'>

        <div className='section__4__inner__container w-[80%] flex justify-center items-center gap-2 my-20'>
          <div className='section__4__image__container flex-1'>
            <Image src={section4img} alt='landing__image__two' width={500} height={500} />
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

        {/* <div className='p-[2.5px] rounded-2xl bg-gradient-to-br from-[#82d5d1] to-white w-[80%]'> */}
          <div className='landing__section__5__card w-[100%] bg-bg-primary flex justify-center items-center flex-col py-16 gap-10 rounded-xl backdrop-blur-sm bg-opacity-40'>
            
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
        {/* </div> */}
        
      </div>

      <div className='meet__our__team__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary flex-col relative backdrop-blur-sm bg-opacity-0'>
        <div className='absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10'></div>
        <div className='text-white font-semibold text-5xl'>
          Meet our <span className='bg-gradient-to-br from-teal-500 to-white bg-clip-text text-transparent'>Team</span>
        </div>
        <div className='meet__our__team__inner w-[80%] flex justify-center items-center flex-wrap py-10 px-10 gap-6' >
          
          {
            teamsData.map((team,ind) => {
              return(
                <div key={team.id} className=' p-[2px] '>
                  <div className='py-8 px-5 rounded-lg w-[25rem] bg-opacity-30 backdrop-blur-sm bg-gradient-to-tr from-[#283648] to-[#46444d]'>
                    <div className='text-white font-semibold text-xl'>
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
    </div>
  )
}

export default Home