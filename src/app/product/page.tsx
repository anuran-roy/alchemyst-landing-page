/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./style.module.css";

import section4img from "../../../public/assets/products/Frame 14.png";
import section2img from "../../../public/assets/products/Frame 22.png";
import section1img from "../../../public/assets/products/Group 49.png";

import logo from "../../../public/assets/AI.png";
import cardimg1 from "../../../public/assets/products/Frame 16.png";
import cardimg2 from "../../../public/assets/products/Frame 17.png";
import cardimg3 from "../../../public/assets/products/Frame 18.png";
import cardimg4 from "../../../public/assets/products/Frame 19.png";

import frameimg from "../../../public/assets/products/Frame 21.png";

import {
  TbBrandDiscordFilled,
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitterFilled,
} from "react-icons/tb";
import imageicon from "../../../public/assets/india.png";

//gsap

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const deployementCard = [
  {
    id: 1,
    image: cardimg1,
    description:
      "Maya Engages Prospects on Multiple Channels to Book Meetings.",
  },
  {
    id: 2,
    image: cardimg2,
    description: "Maya empowers your entire Go-To-Market, Growth, Marketing.",
  },
  {
    id: 3,
    image: cardimg3,
    description: "Stop prospecting, Start connecting.",
  },
  {
    id: 4,
    image: cardimg4,
    description: "Maya Personalizes Outreach to Drive Conversions.",
  },
];

const Product = () => {
  const productimg1Ref = useRef<HTMLImageElement>(null);
  const imageanimationRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imagecontRef = useRef<HTMLImageElement>(null);
  const elements = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    elements.current.forEach(element => {
      gsap.from(element, {
        y: "40%",
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.from(productimg1Ref.current, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(imagecontRef.current, {
      scrollTrigger: {
        trigger: imageanimationRef.current,
        start: "top 90%",
        end: "+=100%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
      rotateX: 0,
      duration: 1,
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageanimationRef.current,
        start: "top 90%",
        end: "+=100%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
      rotateX: 0,
      duration: 1,
    });
  });

  return (
    <div className="font-league bg-bg-primary max-h-min overflow-x-hidden">
      <div className="products__section__1 w-full min-h-max py-5 px-5 flex justify-center items-center flex-col bg-bg-primary relative backdrop-blur-sm bg-opacity-30">
        <div className="absolute top-[5%] left-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[10rem] -z-10"></div>

        <div>
          <div className="w-full flex justify-center items-center">
            <div className=" w-[100%] lg:w-[80%] flex justify-center items-center overflow-y-hidden">
              <Image
                ref={productimg1Ref}
                src={section1img}
                alt="section1"
                className="object-cover w-[90%] py-5"
              />
            </div>
          </div>
          <div className="w-full py-3 flex justify-center items-center">
            <Link
              href="/contact"
              className="py-1 lg:py-2 px-4 lg:px-6 rounded-md bg-bg-yellow text-black"
            >
              Hire Maya
            </Link>
          </div>
        </div>

        <div className="section-2 flex-1 w-full flex justify-start pt-10 items-center flex-col">
          <div className="products__text__section__2 text-white text-5xl font-semibold my-3 flex justify-center items-center text-center tracking-wide mb-10 overflow-hidden ">
            <div
              ref={el => (elements.current[0] = el as never)}
              className="py-2"
            >
              <p className="text-5xl lg:text-6xl">
                <span className="bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text">
                  First Indian{" "}
                </span>{" "}
                Human-Like AI <br /> Employees
              </p>
            </div>
          </div>

          <div className="landing__text__section__subconten  text-white font-normal my-3t text-center text-2xl">
            <p>
              Alchemysts can become integral members of your <br /> business and
              start-up teams.
            </p>
          </div>
        </div>
      </div>

      <div className="products__section__2 py-20 text-center lg:px-20 relative backdrop-blur-sm bg-opacity-30 overflow-hidden">
        <div className="absolute top-0 left-[50%] w-[20rem] h-[20rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[25rem] -z-10"></div>
        <div className="overflow-hidden">
          <div
            className="w-full text-5xl lg:text-6xl text-white flex justify-center items-center py-5 font-semibold"
            ref={el => (elements.current[1] = el as never)}
          >
            <p>
              All{" "}
              <span className="bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text">
                Sales
              </span>{" "}
              Complexities
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <div className=" w-[100%] lg:-w[80%] scale-125 lg:scale-100">
            <Image
              src={section2img}
              alt="section2"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>

      <div className="section3 w-full min-h-max py-5 flex justify-center items-center px-2 bg-bg-primary backdrop-blur-sm bg-opacity-30">
        <div
          className={
            "absolute top-0 right-0 w-[15rem] h-[15rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[15rem] -z-10 hover:blur-[30rem]"
          }
        ></div>

        <div className="section__2__inner__container w-[85%] flex-col md:flex-row flex justify-center items-center gap-10 ">
          <div className="section__2__image__container flex-1 flex justify-center md:justify-end items-center">
            <Image
              src={section4img}
              alt="landing__image__two"
              className="w-full h-full scale-[1.8]"
            />
          </div>
          <div className="section__2__text__container flex-1 self-start pt-12">
            <div>
              <div className="overflow-hidden">
                <div
                  ref={el => (elements.current[2] = el as never)}
                  className=" text-white font-semibold text-5xl lg:text-6xl"
                >
                  <p>
                    <span className="bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text">
                      Discovers
                    </span>{" "}
                    Best fit
                  </p>
                  <p>for Customers</p>
                </div>
              </div>
            </div>

            <div className="text-white mt-5 text-2xl">
              <p>Alchemysts can become integral</p>
              <p>members of your business and start-up</p>
              <p>teams.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section4 py-2 px-5">
        <div>
          <div className="overflow-hidden">
            <div
              ref={el => (elements.current[3] = el as never)}
              className=" text-center py-10 text-white font-semibold w-full flex justify-center items-center mb-10 gap-2"
            >
              <p className="text-5xl lg:text-6xl">
                An Efficient{" "}
                <span className="text-text-yellow">Sales Deployer</span>
              </p>
            </div>
          </div>

          <div>
            <div className=" flex flex-col lg:flex-row justify-center items-center gap-4 py-2">
              {deployementCard.map((card, key) => {
                return (
                  <div
                    key={key}
                    className="w-[22rem] lg:w-[20rem] h-[30rem] bg-gradient-to-t from-[#1F9C9A1A] to-[#F8F8F81A] backdrop-blur-sm bg-opacity-100 rounded-xl border-2 border-cyan-500 py-2 px-2 flex justify-start items-center flex-col gap-4"
                  >
                    <div className="h-[60%] overflow-hidden flex justify-center items-center object-contain p-8">
                      <Image src={card.image} alt="card" className="" />
                    </div>

                    <div className="text-xl text-white">
                      <p>{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center ">
        <div
          ref={imageanimationRef}
          className="w-[85%] flex justify-center items-center gap-10 my-16 p-6"
        >
          <div className={styles.image__wrapper}>
            <div className={styles.image__container} ref={imagecontRef}>
              <Image
                ref={imageRef}
                src={frameimg}
                alt="someimage"
                width={1000}
                height={1300}
                className={styles.image__style}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ready__to__hire__section w-full min-h-max py-20 flex justify-center items-center lg:px-5 bg-bg-primary backdrop-blur-sm bg-opacity-30">
        <div className="absolute -bottom-[5rem] w-[25rem] h-[25rem] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur-[20rem] -z-10"></div>

        <div className="p-[2.5px] rounded-2xl w-[100%] lg:w-[80%]">
          <div className=" landing__section__5__card w-[100%] bg-bg-primary flex justify-center items-center flex-col py-16 gap-10 rounded-xl bg-gradient-to-t backdrop-blur-sm bg-opacity-0 from-[#1F9C9A1A] to-[#F8F8F81A]">
            <div>
              <div
                ref={el => (elements.current[4] = el as never)}
                className="w-full text-white font-semibold text-4xl text-center"
              >
                <p>Ready to Hire an Alchemyst to act</p>
                <p>as a Catalyst for your Team ?</p>
              </div>
              c
            </div>

            <div className="w-full text-white font-normal text-xl text-center">
              <p>Alchemysts can become integral</p>
              <p>members of your business and start-up teams</p>
            </div>

            <div className="w-full py-3 flex justify-center items-center">
              <Link
                href="/contact"
                className="py-2 px-6 rounded-md bg-bg-yellow text-black"
              >
                Hire Maya
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bg-primary">
        <div className="footer__section__grid__container overflow-hidden flex justify-start gap-2 lg:gap-6 w-full items-center flex-col border-gray-600 border-t-2 bg-gradient-to-t from-[#1F9C9A4D] to-[#F8F8F84D] backdrop-blur-lg bg-opacity-30 rounded-t-2xl">
          <div className="bg-white/10 backdrop-blur-lg w-full py-10 px-5 lg:px-20">
            <div className="w-full flex justify-start">
              <Image src={logo} alt="logo" width={200} />
            </div>
            <div className="text-white text-lg md:text-xl w-full flex justify-start items-baseline flex-row gap-2">
              <div className="">
                <p className="my-5">
                  Building Next Gen AI Digital Employees.
                  <br /> Spearheading the next Industrial Revolution in India.
                </p>
                <p>getalchemystai@gmail.com</p>
                <ul className="flex justify-start items-center gap-4 text-white text-2xl mt-4 my-8">
                  <li className="border-[1px] flex justify-center items-center border-white rounded-full w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]">
                    <TbBrandTwitterFilled />
                  </li>
                  <li className="border-[1px] flex justify-center items-center border-white rounded-full w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]">
                    <TbBrandFacebookFilled />
                  </li>
                  <li className="border-[1px] flex justify-center items-center border-white rounded-full w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]">
                    <TbBrandDiscordFilled />
                  </li>
                  <li className="border-[1px] flex justify-center items-center border-white rounded-full w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]">
                    <TbBrandInstagram />
                  </li>
                  <li className="border-[1px] flex justify-center items-center border-white rounded-full w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]">
                    <TbBrandLinkedin />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-2 justify-between items-center lg:gap-6 text-white font-medium text-md mt-10">
              <div className="flex justify-center items-center gap-2 md:gap-6">
                <p>Terms of use</p>
                <p>Privacy Policy</p>
              </div>
              <p className="text-xl bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text">
                © 2023 Alchemyst AI. All rights reserved
              </p>
              <p className="bg-gradient-to-br from-teal-500 to-white text-transparent bg-clip-text text-xl relative">
                Made with <span className="text-red-600">❤️</span> from{" "}
                <span className="inline-block absolute -right-9">
                  <Image src={imageicon} alt="someimage" width={30} />
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
