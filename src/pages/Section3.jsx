import React from 'react'
import section3Left from '../data/section3Left.png';
import section3Right from '../data/section3Right.png';

const Section3 = () => {
  return (
    <div className='w-11/12 mx-auto p-8'>

      {/* Heading */}
      <div className='flex flex-col items-center justify-center gap-4'>
        <p>TESTIMONIAL</p>
        <p className='font-extrabold text-black w-[30%] text-4xl text-center'>What Our Users Say About Us?</p>
      </div>

      {/* description */}
      <div className='flex justify-between items-center gap-16'>

        {/* Left Portion */}
        <div className='w-full'>
          <img src={section3Left} alt=''/>
        </div>

        {/* Right Portion */}
        <div className='flex flex-col w-full'>
          {/* heading */}
          <p className='text-lg font-bold pb-5 w-[50%]'>The Best Financial Accounting App Ever!</p>
          {/* content */}
          <p className='text-gray pb-5 w-[80%]'>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus perferendis ad 
            natus voluptatum, error praesentium quasi veniam velit vero fugiat quos tempora sint esse, 
            natus voluptatum, error praesentium quasi veniam velit vero fugiat quos tempora sint esse, 
            natus voluptatum, error praesentium quasi veniam velit vero fugiat quos tempora sint esse, 
            sequi fuga molestiae possimus aliquam similique?"
          </p>
          {/* image */}
          <img src={section3Right} alt='' className='w-[40%] pb-3'/>
          {/* image name */}
          <p className='text-sm font-bold'>Nick Jonas</p>
        </div>

      </div>

    </div>
  )
}

export default Section3