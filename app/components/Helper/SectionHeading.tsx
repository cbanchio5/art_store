import React, { ReactNode } from 'react'

//Define Type

type Props = {
    children: ReactNode
}

const SectionHeading = ({children}: Props) => {
  return (
    <h1 className='w-fit text-center px-4 py-3 mx-auto text-black text-2xl 
    sm:text-3xl md:text-4xl uppercase font-bold text-[#292929]'>{children}</h1>
  )
}

export default SectionHeading
