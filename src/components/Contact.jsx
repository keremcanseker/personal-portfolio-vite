import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='max-w-[1040px] w-auto m-auto h-screen flex flex-center flex-col p-4 mt-40'>
      <h1 className='text-4xl font-bold text-center text-gray-600 mb-5'>Contact</h1>
      {/* <input type="text" placeholder='mail' className='bg-gray-500 w-3/4 text-center mx-auto  ' /> */}
      <div className='flex flex-center flex-col mx-auto'>
      <form action="" method='POST' encType='multipart/form-data' >
       
       <div>
         <label className='uppercase text-sm py-2' htmlFor="email">Your Mail:</label>
         <input className='border-2 rounded-lg  w-fit flex border-gray-300' type="email" name='mail'/>
       </div>
       <div>
         <label className='uppercase text-sm py-2' htmlFor="message">Your Message:</label>
        <textarea name="message" id="" className="border-2 rounded-lg  flex border-gray-300" cols="30" rows="10"></textarea>
       </div>
       
       

     </form>
      </div>
     
      
    </div>
  )
}
