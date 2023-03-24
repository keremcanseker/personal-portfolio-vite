import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebookF,FaInstagram,FaLinkedinIn} from "react-icons/fa"
export default function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left ' src="assets/karl-fredrickson-DsAjH9B24G8-unsplash.jpg" alt="ha" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-white '>I'm Brain Adam</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>I'm a 
                <TypeAnimation
      sequence={[
        ' Developer', // Types 'One'
        1000, // Waits 1s
        ' Student', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        ' Web Dev', // Types 'Three' without deleting 'Two'
        
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft:'5px' }}
    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter size={20} className="cursor-pointer text-white"/>
                    <FaFacebookF size={20} className="cursor-pointer text-white"/>
                    <FaInstagram size={20} className="cursor-pointer text-white"/>
                    <FaLinkedinIn size={20} className="cursor-pointer text-white"/>
                </div>
            </div>
        </div>

    </div>
  )
}
