import React from 'react'

const Section4Alternate = ({position = false , heading , text }) => {
  return (
    <div className='flex items-center justify-between gap-16'>

        <div className = {` ${position ? "" : "bg-red text-white"} ${position ? "hover:bg-lightGray" : ""} 
            rounded-xl p-4 w-[50%] transition-all duration-200`}>
            <div className='text-2xl font-semibold w-[70%]'>
                {heading}
            </div>
            <div>
                {text}
            </div>
        </div>
        
        <div className = {` ${position ? "bg-red text-white" : ""} ${position ? "" : "hover:bg-lightGray"} 
            rounded-xl p-4 w-[50%] transition-all duration-200`}>
            <div className='text-2xl font-semibold w-[70%]'>
                {heading}
            </div>
            <div>
                {text}
            </div>
        </div>
        
    </div>
  )
}

export default Section4Alternate