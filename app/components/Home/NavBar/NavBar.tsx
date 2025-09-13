'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { navLinks } from '@/app/constants/constants';

//Define Props Type
type Props= {
    openNav: () => void
}

const NavBar = ({openNav} : Props) => {
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 30) {
                setNavBg(true)
            } if (window.scrollY < 30) {
                setNavBg(false)
            }
        }

        window.addEventListener('scroll', handler)

        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [])

  return (
   <div className={`fixed ${navBg ? 'bg-[#EEEEEE]' : 'fixed'} h-[12vh] z-[10000] w-full border-b-2 border-black shadow-[0_3px_0_black] transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">

        {/* Logo / Branding */}
        <Image 
            src="/images/logo.png"
            alt= "logo"
            width={70}
            height={70}
            className='ml-[-1.5rem] sm:ml-0'
        />

        {/* Desktop Navigation (lg and above) */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className='nav__link'>{navLink.label}</p>
            </Link>
          ))}
        </div>

        {/* Contact Button & Burger Menu */}
        <div className="flex items-center space-x-4">
          <Link href="#contact">
              <p className='nav__link'>Contact Me</p>
            </Link>
          {/* Burger Menu (only on small/medium) */}
          <HiBars3  onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden' />
        </div>
      </div>
    </div>
  )
  
}

export default NavBar
