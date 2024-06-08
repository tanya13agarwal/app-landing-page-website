import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import herosectionleft from '../data/herosectionleft.svg';
import { FaArrowRightLong } from "react-icons/fa6";

const Section1 = () => {
  return (
    <div className='w-11/12 mx-auto flex justify-between items-center'>

      {/* hero section left portion */}
      <div>

        <p className='font-black text-5xl text-black'>Make the Best Financial Decisions</p>
        <p className='text-gray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda? Esse facere asperiores distinctio, ea ex libero itaque optio vel.</p>
        
        <div className='flex gap-8'>
        <div className='bg-black pt-3 pb-3 pl-5 pr-5 text-white rounded-sm'>
          <button className='flex gap-2 items-center justify-center'>
            <p>Get Started</p>
            <FaArrowRightLong/>
          </button>
        </div>

          <button className='flex gap-2 items-center justify-center'>
            <IoPlayCircleOutline className='text-2xl'/>
            <p className='font-medium'>Watch Video</p>
          </button> 
        </div>

        <div>
          <img src={herosectionleft} className='w-[569px] h-[358px]'/>
        </div>

      </div>

      {/* hero section right portion */}
      <div>

      </div>

    </div>
  )
}

export default Section1