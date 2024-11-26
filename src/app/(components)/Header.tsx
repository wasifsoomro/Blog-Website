"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState)
    }
  return (
   <header className='text-[#264c72] bg-[#ecf0f1] font-poppins justify-around gap-44 items-center flex flex-row fixed top-0 w-full z-30 py-3 px-auto '>
        <div>
          <h1 className='text-[18px] font-bold md:text-2xl'>ByteVision</h1>
        </div>

        <div
        className="flex flex-col justify-between cursor-pointer w-[25px] h-[20px] mr-4 md:hidden"
        onClick={toggleMenu}
      >
        <span className="h-[3px] w-full bg-[#264c72] transition-all"></span>
        <span className="h-[3px] w-full bg-[#264c72] transition-all"></span>
        <span className="h-[3px] w-full bg-[#264c72] transition-all"></span>
      </div>

        <div className={`fixed top-0  right-0 h-screen text-center w-6/12 bg-[#dfe3e4] z-30 p-10 transform transition-transform duration-300 ${menuOpen? 'hidden translate-x-0': 'block md:hidden transalte-x-full'}`}>
            <div className=' block md:hidden cursor-pointer mr-96' onClick={toggleMenu}>
            &#10005;
            </div>
            <nav>
                <ul className='flex flex-col gap-12'>
                    <li className='hover:text-[#3498db]' onClick={toggleMenu}><Link href="/">Home</Link></li>
                    <li className='hover:text-[#3498db]' onClick={toggleMenu}><Link href="/about">About</Link></li>
                    <li className='hover:text-[#3498db]' onClick={toggleMenu}><Link href="/blog">Blogs</Link></li>
                    <li className='hover:text-[#3498db]' onClick={toggleMenu}><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>

        
        <div className='hidden md:block'>
            <nav>
                <ul className='flex gap-12'>
                    <li className='hover:text-[#3498db]'><Link href="/">Home</Link></li>
                    <li className='hover:text-[#3498db]'><Link href="/about">About</Link></li>
                    <li className='hover:text-[#3498db]'><Link href="/blog">Blogs</Link></li>
                    <li className='hover:text-[#3498db]'><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
   </header>
  )
}

export default Header
