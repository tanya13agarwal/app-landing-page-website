import React from 'react';
import navLogo from "../data/navLogo.png";
import footerMail from "../data/footerMail.png";
import footerTelephone from "../data/footerTelephone.png";
import { Link } from 'react-router-dom';


const Links = [ 
  "Home",
  "About Us",
  "Bookings",
  "Blog",
];
    
const Legal = [ 
  "Terms Of Use",
  "Privacy Policy",
  "Cookie Policy",
];
    
const Product = [ 
  "Take Tour",
  "Live Chat",
  "Reviews",
];
    
const Newsletter = [ 
  "Stay Up To Date",
];


const Footer = () => {
  return (
    <div className='w-11/12 mx-auto p-8 pt-[80px]'>

      <div className='flex gap-2 justify-between'>
        {/* Section 1 */}
        <div>
          
          <img
            src= {navLogo}
            alt=''
            className='pb-3'
          />
          
          <div className='flex items-center pb-3 hover:text-red hover:font-semibold transition-all duration-200'>
            <img src = {footerMail} alt=''/>
            <p>help@frybix.com</p>
          </div>
          
          <div className='flex items-center pb-3 hover:text-red hover:font-semibold transition-all duration-200'>
            <img src = {footerTelephone} alt=''/>
            <p>+1 234 456 678 89</p>
          </div>
        
        </div>

        {/* Section 2 */}
        <div>
          <p className='text-3xl font-semibold pb-3'>
            Links
          </p>
          <div className='flex flex-col gap-3'>
            {
              Links.map((element , index) => (
                <div key={index} className='hover:text-red hover:font-semibold transition-all duration-200'>
                  <Link to = "/">
                    {element}
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Section 3 */}
        <div>
          <p className='text-3xl font-semibold pb-3'>
          Legal
          </p>
          <div className='flex flex-col gap-3'>
            {
              Legal.map((element , index) => (
                <div key={index} className='hover:text-red hover:font-semibold transition-all duration-200'>
                  <Link to = "/">
                    {element}
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Section 4 */}
        <div>
          <p className='text-3xl font-semibold pb-3'>
          Product
          </p>
          <div className='flex flex-col gap-3'>
            {
              Product.map((element , index) => (
                <div key={index} className='hover:text-red hover:font-semibold transition-all duration-200'>
                  <Link to = "/">
                    {element}
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Section 5 */}
        <div className=''>
          <p className='text-3xl font-semibold pb-3'>
          Newsletter
          </p>
          <div className='flex flex-col pb-3'>
            {
              Newsletter.map((element , index) => (
                <div key={index} className='hover:text-red hover:font-semibold transition-all duration-200'>
                  <Link to = "/">
                    {element}
                  </Link>
                </div>
              ))
            }
          </div>
          <div className=''>
            <input className='bg-lightGray px-3 py-3 mr-2 hover:scale-95 transition-all duration-200' placeholder='Enter your Email'/>
            <button className='bg-black py-3 px-9 text-white rounded-sm hover:scale-95 transition-all duration-200 hover:bg-red hover:font-semibold'>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className='pt-[50px]'>
      <hr className='text-lightGray'></hr>
      <p className='flex items-center justify-center py-7 font-semibold text-sm'>Copyright 2022 Uifry.Com All Rights Reserved</p>
      </div>

    </div>

  )
}

export default Footer