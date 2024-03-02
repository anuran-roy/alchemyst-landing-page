import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import bgimg from '../../public/assets/aboutimage.png'
import section2img from '../../public/assets/frame2.png'
import section3img from '../../public/assets/frame3.png'
import section4img from '../../public/assets/frame4.png'

import { teamsData } from '../../public/data/teamsData'

const Home = () => {
  return (
    <>
      <div className='landing__section__1 w-full min-h-max py-5 px-5 flex justify-center items-center flex-col bg-bg-primary' >
        <div className='section-1 flex-1 w-[80%] flex justify-center items-center'>

          <div className='landing__text__one flex-1 pl-10'>

            <div className='px-4 text-7xl font-bold text-white'>
              <p>The <span>Future</span></p>
              <p>of the</p>
              <p>Workforce</p>
            </div>

            <div className='w-full px-4 text-white font-semibold mt-3'>
              ALchemysts can become integral members of your <br />buisness and startup teams
            </div>

            <div className='w-full px-5 py-2 mt-16'>
              <button className='py-2 px-6 rounded-md bg-red-500'>Say Hello</button>
            </div>
          </div>

          <div className='landing__image__container flex-1'>
            <Image src={bgimg} alt='landing__image__one' width={500} height={500} />
          </div>

        </div>

        <div className='section-2 flex-1 w-full flex justify-start pt-10 items-center flex-col'>
          <div className='landing__text__section__2 text-white text-3xl font-semibold my-3 flex justify-center items-center text-center'>
            <p>First Indian Human-Like AI <br/> Employees</p>
          </div>

          <div className='landing__text__section__subconten  text-white text-2xl font-normal my-3t text-center'>
            <p>Alchemysts can become integral members of your <br/>  buisness and start-up teams</p>
          </div>
        </div>
      </div>

      <div className='chat__with__ease__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary'>

        <div className='section__2__inner__container w-[80%] flex justify-center items-center gap-2 my-20'>
          <div className='section__2__image__container flex-1'>
            <Image src={section2img} alt='landing__image__two' width={500} height={500} />
          </div>
          <div className='section__2__text__container flex-1 self-start pt-12'>
            <div className=' text-white text-5xl font-semibold'>
              <p><span>Chat</span> with ease</p>
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

      <div className='empowers__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary'>
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
          <div className='section__4__text__container flex-1 self-start pt-12'>
            <div className=' text-white text-5xl font-semibold'>
              <p><span>Additional </span>Info (if</p>
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

      <div className='ready__to__hire__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary'>

        <div className='landing__section__5__card w-[80%] flex justify-center items-center flex-col my-10 py-5 gap-10 rounded-xl border-2 border-red-500 border-solid'>
          
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

      <div className='meet__our__team__section w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary flex-col'>
        <div className='text-white font-semibold text-5xl'>
          Meet our <span>Team</span>
        </div>
        <div className='meet__our__team__inner w-[80%] flex justify-center items-center flex-wrap py-10 px-10 gap-6' >
          
          {
            teamsData.map((team,ind) => {
              return(
                <div key={team.id} className='border-2 border-red-600 border-solid py-8 px-5 rounded-lg w-[25rem]'>
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
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home