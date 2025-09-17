import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import Slider from '../../../work/Slider'

const MyWork = () => {
  return (
    <div className='pt-16 pb-16' id='my-work'>
        <SectionHeading>My Work</SectionHeading>
        <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
            {/* Slider */}
            <Slider />


        </div>
      
    </div>
  )
}

export default MyWork
