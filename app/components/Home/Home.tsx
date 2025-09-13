import React from 'react'
import About from './About/About'
import MyWork from './MyWork/MyWork'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div className='relative z-10'>
        <About />
        <MyWork />
        <Contact />
      
    </div>
  )
}

export default Home
