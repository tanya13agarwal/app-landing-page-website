import React from 'react'
import section3Left from '../data/section3Left.png';
import section3Right from '../data/section3Right.png';

const Section3 = () => {
  return (
    <div className='w-11/12 mx-auto'>

      {/* Heading */}
      <div className='flex flex-col items-center justify-center'>
        <p>TESTIMONIAL</p>
        <p className='font-extrabold text-black text-4xl'>What Our Users Say About Us?</p>
      </div>

      {/* description */}
      <div className='flex justify-between items-center'>

        {/* Left Portion */}
        <div className='w-[50%]'>
          <img src={section3Left}/>
        </div>

        {/* Right Portion */}
        <div className='w-[40%] flex-col'>
          {/* heading */}
          <p className='text-lg font-bold pb-5 w-[50%]'>The Best Financial Accounting App Ever!</p>
          {/* content */}
          <p className='text-gray pb-5 w-[80%]'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus perferendis ad natus voluptatum, error praesentium quasi veniam velit vero fugiat quos tempora sint esse, sequi fuga molestiae possimus aliquam similique?"</p>
          {/* image */}
          <img src={section3Right} className='pb-3'/>
          {/* image name */}
          <p className='text-sm font-bold'>Nick Jonas</p>
        </div>

      </div>

    </div>
  )
}

export default Section3