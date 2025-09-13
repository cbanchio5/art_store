import { navLinks } from '@/app/constants/constants'
import React from 'react'
import Link from 'next/link'
import { CgClose } from "react-icons/cg";



type Props = {
    showNav: boolean
    closeNav: () => void
}

const MobileNavBar = ({showNav, closeNav} : Props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 bg-[#44444E] w-full h-screen z-60 opacity-70`}>

      </div>
      {/*Nav Links */}
      <div className={`text-black ${navOpen} transform bg-[#F7F4EA] opacity-70 transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] space-y-6 z-[10000]`}>
  
        {navLinks.map((navLink) => {
          return (
            <Link key={navLink.id} href={navLink.url}>
              <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-black sm:text-[30px]'>{navLink.label}</p>
            </Link>
          )
        })}
          {/* Close Button */}
          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:h-8 sm:w-8 h-6 w-6 text-black'></CgClose>

      </div>

     

    </div>
    
  )
}

export default MobileNavBar
