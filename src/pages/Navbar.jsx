import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import TM from '../data/TM.png'
import navLogo from '../data/navLogo.png'

const Navbar = () => {

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div className='w-11/12 mx-auto flex items-center justify-between p-8'>
      
      {/* app logo */}
      <div className='relative'>
        <img src={navLogo} alt=""/>
        <img src={TM} className='absolute top-2 -right-1 w-[6px]' alt=""/>
      </div>

      {/* navbar links */}
      <div className={`flex gap-8 mr-[40%] -translate-y-[5px] ${location.pathname !== "/" ? "text-black" : ""}`}>

        <Link className={`transition-all duration-200 ${matchRoute("/") ? "text-red font-black" : "font-semibold"} hover:text-red hover:font-black`} to='/'>Home</Link>
        <Link className={`transition-all duration-200 ${matchRoute("/about") ? "text-red font-black" : "font-semibold"} hover:text-red hover:font-black`} to="/about">About Us</Link>
        <Link className={`transition-all duration-200 ${matchRoute("/pricing") ? "text-red font-black" : "font-semibold"} hover:text-red hover:font-black`} to='/pricing'>Pricing</Link>
        <Link className={`transition-all duration-200 ${matchRoute("/features") ? "text-red font-black" : "font-semibold"} hover:text-red hover:font-black`} to='/features'>Features</Link>

      </div>

      {/* download button */}
      <div className='mr-[4%] bg-black pt-3 pb-3 pl-9 pr-9 text-white rounded-sm hover:scale-95 transition-all duration-200 hover:bg-red'><button>Download</button></div>

      {/* <div>
        <img src={bgStar} alt="" className="-translate-x-[1300px] w-[70%] translate-y-[50px]"/>
      </div> */}

    </div>
  )
}

export default Navbar