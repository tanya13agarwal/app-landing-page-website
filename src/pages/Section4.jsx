import React from 'react'
import Section4Alternate from '../components/Section4Alternate'

const Section4 = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col  p-8 gap-8 '>
      
      <div className='flex flex-col gap-2'>
        
        <div className='text-red'>
          FAQ
        </div>
        
        <div className='font-bold text-4xl w-[30%]'>
          Frequently Asked Questions
        </div>
      
      </div>
      
      <div className=''>
        <Section4Alternate
          position = {false}
          heading = "The Best Financial Accounting App Ever!"
          text = "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
        />
        <Section4Alternate 
          position = {true}
          heading = "The Best Financial Accounting App Ever!"
          text = "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
        />
        <Section4Alternate 
          position = {false}
          heading = "The Best Financial Accounting App Ever!"
          text = "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
        />
      </div>
    </div>

  )
}

export default Section4