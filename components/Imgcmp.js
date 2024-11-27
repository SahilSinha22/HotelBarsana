"use client"
import React from "react";
import Image from "next/image";



const feedback = [

  { name: "React Native", logo: "/Technology/reactNative.svg", link: "/Technology/reactnative" },
  { name: "AI Development", logo: "/Technology/Ai.svg", link: "#" },
  { name: "Chatbot", logo: "/Technology/Chatbot.svg", link: "/Technology/Chatbot" },
  { name: "IOT", logo: "/Technology/IOT.svg", link: "#" },
  { name: "Augmented Reality", logo: "/Technology/AR.svg", link: "#" },
  { name: "Ionic", logo: "/Technology/Ionic.svg", link: "#" },
  { name: "VR Development", logo: "/Technology/VR.svg", link: "#" },
  { name: "PHP/Nodes JS", logo: "/Technology/Php.svg", link: "#" },



];

const logos = [
  "/Intro/1.jpg",
  "/Intro/5.jpg",
  "/Intro/9.jpg",
  "/Intro/13.jpg",
  "/Intro/17.jpg",
  "/Intro/1.jpg",
  "/Intro/13.jpg",
  "/Intro/17.jpg",

];
const Imgcmp = () => {


  return (
    <div>
      <div className='max-w-7xl flex flex-col justify-start m-auto my-20 '>
        <div className='mx-4'>
          <h1 className='text-2xl md:text-3xl xl:text-4xl playfair_displays font-bold '>
            Showcase Your Journey with Us.
          </h1>
          <p className='my-4 text-base md:text-lg lg:text-base xl:text-xl open_sans_display'>
            "Share your favorite moments from your stay or travels with us! Whether it's a breathtaking view,
            a delicious meal, or a joyful moment from your journey, we’d love to see and feature your memories. Upload your photos and be part of our story!"
          </p>
          <div>
            <button className="border open_sans_display text-sm lg:text-lg xl:text-xl  border-solid rounded-full text-white px-3 py-2 lg:py-3 lg:px-5 bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] transition duration-300">
              Vacation
            </button>
          </div>
        </div>
      </div>



      <div className=" ">
        <div className="carouselxx lg:h-auto">
          <div className="trackx  ">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="logox rounded-2xl ">
                <Image src={logo} alt={`Logo ${index % logos.length + 1}`} className='h-full w-full ' width={1000} height={1000} />
              </div>
            ))}
          </div>

        </div>
      </div>

    
    </div>
  );
};

export default Imgcmp;