import React from 'react'
import Title from "../Layout/Title";
import RightBanner from '../Banner/RightBanner';

const About = () => {
  return (
    <section
      id="about"
      className="w-full  mx-auto pt-10 pb-20 gap-10 xl:gap-0 lgl:flex-row  items-center border-b-[1px] font-titleFont border-b-black"
    >

      <div className='w-full'>
        <Title title={"Know me more"} des={"About"} />
      </div>

      <div className='flex justify-center items-center max-w-4xl mx-auto'>
        <div>
          <p className=' text-center'>
            Passionate about crafting intuitive and efficient web applications, I am a MERN Stack Developer with a strong command of React, Tailwind CSS, and REST API integration. My journey includes contributing to dynamic projects during an internship and successfully delivering a real-world website for Alfa Service Center, resulting in increased customer engagement. I am a dedicated team player with a keen eye for detail and a drive to continuously learn and improve.
          </p>
        </div>
        {/* <div>
          <RightBanner/>
        </div> */}
      </div>
    </section>
  )
}

export default About