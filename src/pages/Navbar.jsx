import React from 'react'
import navLogo from '../data/navLogo.png'
import TM from '../data/TM.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-11/12 mx-auto flex items-center justify-between my-7'>
      
      {/* app logo */}
      <div className=''>
        <img src={navLogo}/>
        <img src={TM}/>
      </div>

      {/* navbar links */}
      <div className='flex gap-5'>
        <p className='text-red font-bold'>Home</p>
        <p className='font-bold'>About Us</p>
        <p className='font-bold'>Pricing</p>
        <p className='font-bold'>Features</p>
      </div>

      {/* download button */}
      <div className='bg-black pt-3 pb-3 pl-9 pr-9 text-white rounded-sm'><button>Download</button></div>

    </div>
  )
}

export default Navbar