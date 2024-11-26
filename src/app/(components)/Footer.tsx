'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathName = usePathname()
  const isHomePage = pathName === '/'
  return (
    <footer className={`bg-[#264c72] ${isHomePage? 'w-full md:w-10/12 flex flex-col items-center justify-center gap-3' : ' md:p-4 h-48 w-full flex flex-col items-center justify-center gap-3'}`}> 
      <div className='flex flex-col gap-3 items-center justify-center mt-4'>
      <Link href="https://github.com/wasifsoomro" target="_blank" rel="noopener noreferrer" className='flex flex-row-reverse gap-2 hover:underline text-sm md:text-[18px] lg:text-xl'>Github
      <Image src="/icons8-github-48.png" alt="GitHub" height={124} width={124} className="w-6 h-6" />
    </Link>
    <Link href="https://www.linkedin.com/in/muhammad-wasif-337b5a213" target="_blank" rel="noopener noreferrer" className='flex flex-row-reverse gap-2 hover:underline text-sm md:text-[18px] lg:text-xl'>LinkedIn
      <Image src="/icons8-linkedin-48.png" alt="LinkedIn" height={124} width={124} className="w-6 h-6" />
    </Link>
    <Link href="https://x.com/M_WasifSoomro" target="_blank" rel="noopener noreferrer" className='flex flex-row-reverse gap-2 hover:underline text-sm md:text-[18px] lg:text-xl '>Twitter
      <Image src="/icons8-twitter-48.png" alt="Twitter" height={124} width={124} className="w-6 h-6" />
    </Link>
      </div>
      <div>
        <p className='text-[10px] sm:text-[13px] md:text-[15px] lg:text-[20px]'>&copy; {new Date().getFullYear()} Muhammad Wasif, All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
