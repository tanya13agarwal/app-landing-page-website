import React from 'react'

import Navbar from './pages/Navbar'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'

const App = () => {
  return (
    <div className='backgroundImg h-[100vh]'>
      <Navbar/>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App