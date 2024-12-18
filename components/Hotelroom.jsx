import React from 'react'

const hotelroom = [

    { name: "React Native", logo: "/Technology/reactNative.svg", link: "/Technology/reactnative" },
    { name: "AI Development", logo: "/Technology/Ai.svg", link: "#" },
    { name: "Chatbot", logo: "/Technology/Chatbot.svg", link: "/Technology/Chatbot" },
    { name: "IOT", logo: "/Technology/IOT.svg", link: "#" },
    { name: "Augmented Reality", logo: "/Technology/AR.svg", link: "#" },
   
  
  
  ];
const Hotelroom = () => {
  return (
    <div className='pb-10'>

   
    <div className='max-w-7xl flex flex-col justify-start m-auto my-20 '>
        <div className='mx-4'>
          <h1 className='text-2xl md:text-3xl xl:text-4xl playfair_displays font-bold '>
          Relax in Luxury: Your Perfect Stay Awaits
          </h1>
          <p className='my-4 text-base md:text-lg lg:text-base xl:text-xl open_sans_display'>
          "Discover ultimate comfort and elegance in our hotel rooms. Let your stay be a seamless
           blend of luxury, relaxation, and modern amenities, tailored to meet your needs."


          </p>
        
        </div>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl m-auto'>
{hotelroom.map((room, index)=>(


      <a  key={index} href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Price</dt>

        <dd className="text-sm text-gray-500">$240,000</dd>
      </div>

      <div>
        <dt className="sr-only">Address</dt>

        <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
      </div>
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Parking</p>

          <p className="font-medium">2 spaces</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bathroom</p>

          <p className="font-medium">2 rooms</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bedroom</p>

          <p className="font-medium">4 rooms</p>
        </div>
      </div>
    </div>
  </div>
</a>
))}
    </div>
    </div>
  )
}

export default Hotelroom
