"use client";

import React, { useState } from "react";
import Image from "next/image";

import Mobi1 from "@/public/Intro/1.jpg";
import Mobi11 from "@/public/Intro/17.jpg";
import Mobi111 from "@/public/Intro/13.jpg";
import { useRouter } from 'next/navigation';

import Mobi2 from "@/public/Intro/5.jpg";
import Mobi22 from "@/public/Intro/9.jpg";
import Modal from '@/components/Model'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
const Intros = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
   
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 

 

  return (
    <>
    <div className=" text-white bg-black  h-full w-full  ">
      <div className="intros w-full xl:h-[680px] 2xl:h-[760px] h-full  ">

        <div className="items-center justify-center ">
          <div className="pt-40 md:pt-60 lg:pt-48 xl:pt-20 ">
            <div className=" mt-10 mb-2 mx-5 xl:mt-32 lg:mb-8   md:mx-auto flex flex-col items-center text-center">
              <h1 className="text-2xl xl:mx-0 lg:text-5xl md:text-4xl 2xl:text-6xl font-bold mb-4 playfair_display">
              Discover Comfort and Adventure <br />
              Your Perfect Stay Awaits, and Your Journey Begins Here!
              </h1>
              <p className="lg:w-[750px] xl:w-[1250px] 2xl:w-[1400px] text-sm open_sans_display  px-8 sm:px-24 md:px-32 lg:px-1 xl:px-64 xl:text-xl 2xl:text-2xl lg:text-xl md:text-lg mb-8 ">
                Hotel Barsana / Tour and Travel Services - Your dream destinations, our expertly curated tours 
              </p>
              <button  onClick={handleButtonClick} className="border-2 z-20  border-solid rounded-full text-white  py-2 px-4  hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
                Let's Talk!
              </button>
            </div>
            <div className=" relative   h-24 md:h-48 -top-10 2xl:px-20 max-w-lg md:max-w-3xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1430px] m-auto justify-center items-center content-center sm:h-32 lg:h-56  2xl:max-w-screen-3xl xl:h-52 2xl:h-56 ">
              <div className="absolute bottom-0    xl:mx-10  2xl:mx-0    max-w-screen-lg lg:max-w-4xl 2xl:max-w-7xl   2xl:left-40  2xl:right-40  md:mx-4    lg:mx-20 xl:left-36  xl:right-36 lg:top-1 xl:-top-4  2xl:top-6 top-1 left-7 right-7 mt-12  grid grid-cols-5  lg:grid-cols-5 gap-1 md:gap-2  xl:gap-3 2xl:gap-5 ">
                <div className="relative ">
                  <Image
                    src={Mobi1}
                    alt="App Image 1"
                    className="rounded-xl md:rounded-2xl h-28 top-4 object-cover grow  absolute sm:h-40 introx sm:top-0 sm:w-44 lg:h-60 md:h-52 md:w-52 lg:top-5 lg:w-44 xl:h-60 xl:w-72 xl:top-3 2xl:w-[400px] 2xl:h-[320px] 2xl:-top-16  transform hover:scale-105 transition duration-300"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="relative shrink">
                  <Image
                    src={Mobi11}
                    alt="App Image 2"
                    className="rounded-xl md:rounded-2xl object-cover grow absolute h-24 top-8 sm:h-36 sm:top-4 sm:w-44 md:h-44 md:top-8 md:w-52 lg:h-48 lg:top-16 lg:w-44 xl:h-52 xl:w-44 xl:top-11 2xl:w-72 2xl:h-[240px] 2xl:top-4  transform hover:scale-105 transition duration-300"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="relative mx-0.5 xl:mx-1 2xl:mx-0 ">
                  <Image
                    src={Mobi111}
                    alt="App Image 2"
                    className="rounded-xl md:rounded-2xl object-cover absolute grow-0 h-20 top-12 sm:top-12 sm:h-28 sm:w-44 md:h-36 md:top-16 md:w-52 lg:h-40 lg:top-24 lg:w-[165px]  xl:h-44 xl:w-40 xl:top-20 2xl:w-60 2xl:h-[220px] 2xl:top-10  transform hover:scale-105 transition duration-300"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="relative  ">
                  <Image
                    src={Mobi2}
                    alt="App Image 3"
                    className="rounded-xl md:rounded-2xl object-cover grow  absolute h-24 top-8 sm:h-36 sm:top-4 sm:w-44 md:top-8 md:h-44 md:w-52 lg:h-48 lg:w-44 lg:top-16 xl:h-52 xl:w-52 xl:top-11 2xl:w-96 2xl:h-[250px] 2xl:top-2    transform hover:scale-105 transition duration-300"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={Mobi22}
                    alt="App Image 4"
                    className="rounded-xl md:rounded-2xl object-cover grow absolute h-32 sm:h-52 sm:-top-10 sm:w-44 md:w-52 md:-top-7 md:h-60  lg:h-72 lg:-top-7 lg:w-44 xl:h-72  xl:w-72 xl:-top-8 2xl:w-72 2xl:h-[360px] 2xl:-top-24    transform hover:scale-105 transition duration-300"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
     
    </div>
     <Modal isOpen={isModalOpen} onClose={closeModal}>
     <ContactForm onClose={closeModal}/>
   </Modal>
   </>
  );
};

export default Intros;
