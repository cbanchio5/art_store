'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WorkCard from './WorkCard';
import { myWork } from '@/Data/Data';


const Slider = () => {

    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000}  responsive={responsive}>
        {myWork.map((art) => {
            return (
                <div key={art.id}>
                    <WorkCard art={art}></WorkCard>

                </div>
            )
        })}
    </Carousel>
  )
}

export default Slider
