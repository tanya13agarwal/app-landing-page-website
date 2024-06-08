import React from 'react'
import Section2Content from '../components/Section2Content'

import section2Phone from '../data/section2Phone.png';
import bgEclipse from '../data/bgEclipse.png';

import section2Star from '../data/section2Star.png';
import section2Cube1 from '../data/section2Cube1.png';
import section2Cube2 from '../data/section2Cube2.png';

import section2Phone2 from '../data/section2Phone2.png';
import section2Phone2upper from '../data/section2Phone2upper.png';
import section2Notif from '../data/section2Notif.png';

import section2Phone3upper from '../data/section2Phone3upper.png';
import section2FillStar from '../data/section2FillStar.png';

const Section2 = () => {
  return (
    <div>
      
      <Section2Content
        position={"lg:flex-row"}
        bgImg={bgEclipse}
        upperImg={section2Phone}
        superHeading="FEATURES"
        heading="Uifry Premium"
        content={
          <div>
            
            {/* Point 1 */}
            <div>
              <div className='flex gap-2 '>
                <img src={section2Star}/>
                <p className='font-semibold'>Budgeting Intervals</p>
              </div>
              <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur quo ea illum dicta commodi incidunt excepturi cupiditate impedit ducimus?</p>
            </div>

            {/* Point 2 */}
            <div>
              <div className='flex gap-2'>
                <img src={section2Cube1}/>
                <p className='font-semibold'>Budgeting Intervals</p>
              </div>
              <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur quo ea illum dicta commodi incidunt excepturi cupiditate impedit ducimus?</p>
            </div>

            {/* Point 3 */}
            <div>
              <div className='flex gap-2'>
                <img src={section2Cube2}/>
                <p className='font-semibold'>Budgeting Intervals</p>
              </div>
              <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur quo ea illum dicta commodi incidunt excepturi cupiditate impedit ducimus?</p>
            </div>

          </div>
        }
      />

      <Section2Content
        position={"lg:flex-row-reverse"}
        bgImg={bgEclipse}
        upperImg={section2Phone2}
        secondUpperImg={section2Phone2upper}
        superHeading="ADVANTAGES"
        heading="Why Choose Uifry"
        subHeading={
          <div className='flex gap-2 items-center justify-between'>
            <img src={section2Notif}/>
            <p>Clever Notifications</p>
          </div>
        }
        content={
          <p className='text-gray'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur facilis ex reprehenderit iste labore tempore possimus delectus. Quis ab ipsum, quo exercitationem ipsam mollitia nobis vero voluptas necessitatibus natus?
          </p>
        }
      />

      <Section2Content
        position={"lg:flex-row"}
        bgImg={bgEclipse}
        upperImg={section2Phone}
        secondUpperImg={section2Phone3upper}
        subHeading={
          <div className='flex gap-2 items-center justify-between'>
            <img src={section2FillStar}/>
            <p>Fully Customizable</p>
          </div>
        }
        content={
          <p className='text-gray'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur facilis ex reprehenderit iste labore tempore possimus delectus. Quis ab ipsum, quo exercitationem ipsam mollitia nobis vero voluptas necessitatibus natus?
          </p>
        }
      />

    </div>
  )
}

export default Section2