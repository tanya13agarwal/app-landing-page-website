import React from 'react';

import bgEclipse from '../data/bgEclipse.png';
import section2Phone from '../data/section2Phone.png';

import section2Star from '../data/section2Star.png';

import section2Notif from '../data/section2Notif.png';
import section2Phone2 from '../data/section2Phone2.png';
import section2Phone2upper from '../data/section2Phone2upper.png';

import section2FillStar from '../data/section2FillStar.png';
import section2Phone3upper from '../data/section2Phone3upper.png';

const Section2 = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col items-center justify-between p-8'>
      
      {/* FIRST CARD  */}
      
      <div className='flex items-center justify-between'>
        
        <div className='relative w-[40%] flex '>
          <img src = {bgEclipse} alt='' className='w-[100%]'/>
          <img src = {section2Phone} alt='' className='absolute w-[70%] top-0 left-32'/>
        </div>  
        
        <div className='w-[40%] flex flex-col justify-center'>
          
          <div className='text-red '>
            FEATURES
          </div>
          
          <div className='text-4xl font-extrabold mb-6'>
            Uifry Premium
          </div>
          
          <div className='flex flex-col gap-4'>
            
            <div className='flex items-center gap-2'>
            
              <img src={section2Star} alt="" />
              
              <p className='font-semibold'>
                Budgeting Intervals
              </p>
            
            </div>
            
            <div className='text-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Est tenetur quo ea illum dicta commodi incidunt excepturi 
              cupiditate impedit ducimus?
            </div>
          
          </div>
          
          <div className='flex flex-col gap-4'>
            
            <div className='flex items-center gap-2'>
            
              <img src={section2Star} alt="" />
              
              <p className='font-semibold'>
                Budgeting Intervals
              </p>
            
            </div>
            
            <div className='text-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Est tenetur quo ea illum dicta commodi incidunt excepturi 
              cupiditate impedit ducimus?
            </div>
          
          </div>
          
          <div className='flex flex-col gap-4'>
            
            <div className='flex items-center gap-2'>
            
              <img src={section2Star} alt="" />
              
              <p className='font-semibold'>
                Budgeting Intervals
              </p>
            
            </div>
            
            <div className='text-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Est tenetur quo ea illum dicta commodi incidunt excepturi 
              cupiditate impedit ducimus?
            </div>
          
          </div>
          
        </div>
      
      </div>

      {/* Second CARD  */}

      <div className='flex items-center justify-between'>
        
        <div className='w-[40%] flex flex-col justify-center'>
          
          <div className='text-red '>
            ADVANTAGES
          </div>
          
          <div className='text-4xl font-extrabold mb-6'>
            Why Choose Uifry?
          </div>
          
          <div className='flex flex-col gap-4'>
            
            <div className='flex items-center gap-2'>
            
              <img src={section2Notif} alt="" />
              
              <p className='font-bold text-2xl'>
                Clever Notifications
              </p>
            
            </div>
            
            <div className='text-gray'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur facilis 
              ex reprehenderit iste labore tempore possimus delectus. Quis ab ipsum, quo exercitationem 
              ipsam mollitia nobis vero voluptas necessitatibus natus?
            </div>
          
          </div>
          
        </div>

        <div className='relative w-[40%] flex '>
          <img src = {bgEclipse} alt='' className='w-full'/>
          <img src = {section2Phone2} alt='' className='absolute w-[70%] top-0 left-32'/>
          <img src = {section2Phone2upper} alt='' className='absolute w-[50%] top-[38%] right-10'/>
        </div>  
      
      </div>
      
      {/* FIRST CARD  */}
      
      <div className='flex items-center justify-between'>
        
        <div className='relative w-[40%] flex '>
          <img src = {bgEclipse} alt='' className='w-full'/>
          <img src = {section2Phone} alt='' className='absolute w-[70%] top-0 left-32'/>
          <img src = {section2Phone3upper} alt='' className='absolute w-[40%] top-[25%] right-[24%]'/>
        </div>  
        
        <div className='w-[40%] flex flex-col justify-center'>
          
          <div className='flex flex-col gap-4'>
            
            <div className='flex items-center gap-2'>
            
              <img src={section2FillStar} alt="" />
              
              <p className='font-bold text-2xl'>
                Fully Customizable
              </p>
            
            </div>
            
            <div className='text-gray'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur facilis 
              ex reprehenderit iste labore tempore possimus delectus. Quis ab ipsum, quo exercitationem 
              ipsam mollitia nobis vero voluptas necessitatibus natus?
            </div>
          
          </div>
          
        </div>
      
      </div>

    </div>
  )
}

export default Section2
