import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-hero-image bg-cover  flex flex-col text-center items-center justify-center bg-scroll min-h-[50vh] sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh] mx-auto'>
     <div className='bg-black bg-opacity-[0.03]'>
     <div className='space-y-2 md:space-y-8 lg:space-y-16 mt-8 md:tracking-wide lg:tracking-wider md:mr-16'>
      <h1 className='font-roboto text-[1.2rem] sm:text-[1.5rem] md:text-4xl lg:text-5xl font-bold'>
       Exploring the Future of <br />Technology
        </h1>
        <p className='font-roboto text-[11px] sm:text-[14px] md:text-[17px] lg:text-[18px] font-medium'>Stay up-to-date with the latest tech trends,<br /> programming tutorials, and industry <br /> insights.</p>
      </div>
      <div className='mt-4 md:mt-8 lg:mt-16'>
      <button className='bg-[#3498DB] font-semibold  hover:bg-[#2980b9] font-roboto text-[8px] sm:text-[11px] md:text-[16px] lg:text-[20px] px-4 py-2 md:px-5 md:py-4 rounded-full md:mr-16'>
          <Link href='/blog'>Read our Latest Articles</Link>
        </button>
      </div>
     </div>
    </div>
  )
}

export default HeroSection
 