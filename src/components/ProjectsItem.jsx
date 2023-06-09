import React from 'react'

export default function ProjectsItem({img,title}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-sky-200 cursor-pointer'>
        <img src={img} alt="/" className='rounded-xl h-full group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
        </div>
    </div>
    
     
  )
}
