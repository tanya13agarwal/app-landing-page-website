import React from 'react'

const Section2Content = ({
    bgImg,
    upperImg,
    secondUpperImg,
    superHeading,
    heading,
    subHeading,
    content,
    position
}) => {
  return (
    <div className={`flex ${position} justify-between gap-10 flex-col`}>

        {/* Image portion */}
        <div className='relative w-[50%] pb-[100px]'>
            <img src={bgImg} className='absolute z-5 w-[50%]'/>
            <img src={upperImg} className='absolute z-10 w-[50%]'/>
            <img src={secondUpperImg} className='absolute z-20 w-[50%]'/>
        </div>

        {/* Content portion */}
        <div className='flex flex-col w-[50%] pb-[100px]'>
            <div className='flex flex-col'>
                <p className='text-red'>{superHeading}</p>
                <p className='font-extrabold text-black text-4xl'>{heading}</p>
                {subHeading}
            </div>

            <div>
                {content}
            </div>
        </div>

    </div>
  )
}

export default Section2Content