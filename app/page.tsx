import React from 'react'

import AnimatedName from './components/AnimatedName'

const HomePage = () => {
  return (
    
      <div className="relative h-screen flex justify-center pt-[100px]">
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/background.jpeg')" }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 mt-[100px] flex flex-col" >
        <AnimatedName />
      </div>
    </div>
    
  )
}

export default HomePage
