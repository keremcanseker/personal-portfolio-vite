import React from 'react'
import ProjectsItem from './ProjectsItem'
import qr from "../assets/qr.jpg"
import manage from "../assets/manage.jpg"
import form from "../assets/form.png"
import cardgame from "../assets/cardgame.png"


export default function Projects() {
  return (
   <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Projects</h1>
    <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi minus placeat fugit molestiae, numquam accusantium et voluptatibus sequi a.
    </p>
    <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectsItem img={cardgame} title="Card Game"/>
        <ProjectsItem img={manage} title="Management Page"/>
        <ProjectsItem img={qr} title="Qr Code"/>
        <ProjectsItem img={form} title="Survey Form"/>
    </div>
   </div>
  )
}
