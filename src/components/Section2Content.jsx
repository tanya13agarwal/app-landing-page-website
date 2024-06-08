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
    <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>

        {/* Image portion */}
        <div>
            <img src={bgImg}/>
            <img src={upperImg}/>
            <img src={secondUpperImg}/>
        </div>

        {/* Content portion */}
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <p className='text-red'>{superHeading}</p>
                <p className='font-bold text-black text-2xl'>{heading}</p>
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