import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import herosectionleft from '../data/herosectionleft.svg';
import { FaArrowRightLong } from "react-icons/fa6";

import section2Phone from '../data/section2Phone.png';
import section2Phone2 from '../data/section2Phone2.png';
import bgEclipse from '../data/bgEclipse.png';

const Section1 = () => {
  return (
    <div className='pt-[40px] w-11/12 mx-auto flex justify-between p-8'>

      {/* hero section left portion */}
      <div className='gap-5 flex flex-col justify-between'>

        <p className='font-black text-5xl text-black w-[70%] '>Make the Best Financial Decisions</p>
        <p className='text-gray  w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda? Esse facere asperiores distinctio, ea ex libero itaque optio vel.</p>
        
        <div className='flex gap-8'>
        <div className='bg-black pt-3 pb-3 pl-5 pr-5 text-white rounded-sm hover:scale-95 hover:bg-red transition-all duration-200'>
          <button className='flex gap-2 items-center justify-center'>
            <p>Get Started</p>
            <FaArrowRightLong/>
          </button>
        </div>

          <button className='flex gap-2 items-center justify-center hover:scale-95 transition-all duration-200 hover:border-[1px] px-3 py-2'>
            <IoPlayCircleOutline className='text-2xl'/>
            <p className='font-medium'>Watch Video</p>
          </button> 
        </div>

        <img src={herosectionleft} alt='' className='w-[75%] mr-auto'/>

      </div>

      {/* hero section right portion */}
      <div className='relative -translate-y-[60px]'>
        <img src={bgEclipse} alt="" className='aboslute -z-5'/>
        <img src={section2Phone} alt="" className='top-0 right-[40%] w-[70%] -rotate-[15deg] absolute z-30'/>
        <img src={section2Phone2} alt="" className='top-[10%] right-[20%] w-[70%] -rotate-[15deg] absolute z-20'/>
        <img src={section2Phone} alt="" className='top-[20%] right-[0%] w-[70%] -rotate-[15deg] absolute z-10'/>
      </div>

    </div>
  )
}

export default Section1