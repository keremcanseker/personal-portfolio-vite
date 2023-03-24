import React from 'react'
import WorkItem from "./WorkItem"
const data = [
    {
        year:2022,
        title:"Content creator",
        duration:"6 months",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum ea perferendis repellendus natus eveniet!'
    },
    {
        year:2021,
        title:"Content creator",
        duration:"6 months",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum ea perferendis repellendus natus eveniet!'
    },
    {
        year:2020,
        title:"Content creator",
        duration:"6 months",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum ea perferendis repellendus natus eveniet!'
    },
    {
        year:2019,
        title:"Content creator",
        duration:"6 months",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum ea perferendis repellendus natus eveniet!'
    },

]

export default function Work() {
  return (
    <div id="work"className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item,idx)=>(
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}


    </div>
  )
}
