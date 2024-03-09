import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import section1img from  '../../../public/assets/products/Group 49.png'
import section2img from '../../../public/assets/products/Frame 22.png'

import cardimg1 from '../../../public/assets/products/Frame 16.png';
import cardimg2 from '../../../public/assets/products/Frame 17.png';
import cardimg3 from '../../../public/assets/products/Frame 18.png';
import cardimg4 from '../../../public/assets/products/Frame 19.png';
import logo from '../../../public/assets/AI.png'

const deployementCard = [
  {
    id:1,
    image : cardimg1,
    description : 'Lorem ipsum dolor sit. amet consectetur adipisicing elit.'
  },
  {
    id:2,
    image : cardimg2,
    description : 'Lorem ipsum dolor sit. amet consectetur adipisicing elit.'
  },
  {
    id:3,
    image : cardimg3,
    description : 'Lorem ipsum dolor sit. amet consectetur adipisicing elit.'
  },
  {
    id:4,
    image : cardimg4,
    description : 'Lorem ipsum dolor sit. amet consectetur adipisicing elit.'
  }
]

const Product = () => {
  return (
    <div className='font-league bg-bg-primary max-h-min'>

      <div className='w-full flex justify-center items-center py-6 text-white text-semibold text-xl border-b-[1px] border-b-gray-500'>
        <div className='navbar__inner__section w-full flex justify-between px-10 items-center gap-4'>
          <div>
            <Image src={logo} alt='logo' width={230} className='' />
          </div>

          <ul className='text-lg flex justify-center items-center gap-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#414770] to-[#41477000] py-2 px-28 rounded-2xl'>
            <li className='text-text-yellow cursor-pointer'>Home</li>
            <Link href='/product' className='cursor-pointer'>Products</Link>
            <li className='cursor-pointer'>
              Team
            </li>
          </ul>

            <div className='text-lg'>
              <button className='py-2 px-6 rounded-md bg-bg-yellow text-white'>Say Hello</button>
            </div>
        </div>
      </div>
      
      <div className='products__section__1 w-full min-h-max py-5 px-5 flex justify-center items-center flex-col bg-bg-primary relative backdrop-blur-sm bg-opacity-30'>

        <div>
        <div className=' w-ful flex justify-center items-center'>
          <Image src={section1img} alt='section1' className='object-cover w-[80%] py-5'/>
        </div>
        <div className='w-full py-3 flex justify-center items-center'>
          <button className='bg-bg-yellow py-2 px-9 text-white rounded-lg'>Hire Maya</button>
        </div>
        </div>
        
        <div
         className='section-2 flex-1 w-full flex justify-start pt-10 items-center flex-col'>
          <div
           className='products__text__section__2 text-white text-5xl font-semibold my-3 flex justify-center items-center text-center tracking-wide mb-10 overflow-hidden '>
            <div 
            // variants={{
            //   visible: {opacity: 1, y: 0},
            //   hidden: {opacity: 0, y: '40%'}
            // }}
            // initial='hidden'
            // animate={controls}
            // transition={{duration: 0.8}}
            // ref={elementRef}

            className='py-2'>
              <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>First Indian </span> Human-Like AI <br/> Employees</p>
            </div>
          </div>

          <div className='landing__text__section__subconten  text-white text-xl font-normal my-3t text-center'>
            <p>Alchemysts can become integral members of your <br/>  buisness and start-up teams</p>
          </div>
        </div>
      </div>

      <div className='products__section__2 py-20 px-20 relative backdrop-blur-sm bg-opacity-30 overflow-hidden'>
        <div className='absolute top-0 left-[50%] w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[25rem] -z-10'></div>
          <div>
            <Image src={section2img} alt='section2' className='object-cover w-full'/>
          </div>
      </div>

       <div className='section3 w-full min-h-max py-5 flex justify-center items-center px-5 bg-bg-primary backdrop-blur-sm bg-opacity-30'>
        <div className={'absolute top-0 right-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[15rem] -z-10 hover:blur-[30rem]'}></div>

        <div className='section__2__inner__container w-[85%] flex justify-center items-center gap-10 my-16 py-4'>
          <div className='section__2__image__container flex-1 flex justify-end items-center'>
            <Image src={section2img} alt='landing__image__two' width={500} height={500} />
          </div>
          <div className='section__2__text__container flex-1 self-start pt-12 ml-8'>
            <div className='overflow-hidden'>
              <div 
              // ref={section2Ref} 
              // variants={{
              //   visible: {opacity: 1, y: 0},
              //   hidden: {opacity: 0, y: '40%'}
              // }}
              // initial='hidden'
              // animate={section3controls}
              // transition={{duration: 0.8}}
              className=' text-white text-5xl font-semibold'>
                <p><span className='bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text'>Discovers</span> Best fit</p>
                <p>for Customers</p>
              </div>
            </div>

            <div className='text-white mt-5 text-xl'>
              <p>Alchemysts can become integral</p>
              <p>members of your buisness adn start-up</p>
              <p>teams</p>
            </div>
          </div>
        </div>

      </div>
      
      <div className='section4 py-2 px-5'>
        <div>
          <div className=' text-center py-10 text-white font-semibold text-4xl w-full flex justify-center items-center mb-10 gap-2'>
            <p>An Efficient <span className='text-text-yellow'>Sales Deployer</span></p>
          </div>

          <div>
            <div className=' flex justify-center items-center gap-4 py-2'>
              {
                deployementCard.map((card, key) => {
                  return (
                    <div key={key} className='w-[20rem] h-[20rem] bg-bg-primary rounded-xl border-2 border-cyan-500 py-2 px-2 flex justify-start items-center flex-col gap-4'>
                      <div className='h-[50%]  overflow-hidden flex justify-center items-center'>
                        <Image src={card.image} alt='card' className='object-contain' width={200} height={200}/>
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
              </div>
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
    </div>
  )
}

export default Product