'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { navLinks } from '@/app/constants/constants';

type Props = {
  openNav: () => void
}

const NavBar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 30);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-[10000] transition-all duration-300 border-b-2 border-[#292929] ${
        navBg ? 'bg-[#e4ddd9] shadow-lg' : 'bg-transparent'
      }`}
      style={{ height: '12vh' }}
    >
      <div className="flex justify-between items-center h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">

        {/* Logo */}
        

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <span className="text-[#292929] font-semibold text-lg hover:text-[#cb9398] transition-colors duration-300">
                {navLink.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Contact & Burger */}
        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <span className="bg-[#cb9398] hover:bg-[#e4ddd9] hover:text-[#292929] text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
              Contact Me
            </span>
          </Link>
          {/* Burger Menu for mobile */}
          <HiBars3
            onClick={openNav}
            className="w-8 h-8 text-[#292929] cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar;
