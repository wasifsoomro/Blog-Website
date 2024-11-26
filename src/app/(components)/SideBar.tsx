

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className="hidden md:block bg-[#ecf0f1] text-[#264c72] h-screen md:w-[20%] fixed top-0 right-0 text-center z-10 p-6">
      <div className=" rounded-lg p-2 md:mt-4 lg:mt-8">
        <h3 className=" text-xl font-semibold text-[#264c72] mb-6 lg:mb-10 mt-2">About the Author</h3>
        <div className="flex flex-col items-center">
          <Image
            src="/profile.png"
            alt="Author"
            width={80}
            height={80}
            className="w-28 h-28 rounded-full border-4 border-[#3498db]"
          />
          <p className="text-[10px] lg:text-sm text-[#264c72] mt-4 lg:mt-10">
            Hello! I&apos;m <strong className="font-semibold ">Muhammad Wasif</strong>, a passionate web developer
            focused on building innovative solutions using JavaScript, React, and Next.js. Follow my journey in tech!
          </p>
        </div>
      </div>

      <div className="">
  <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
  <div className="flex justify-center gap-4">
    <Link href="https://github.com/wasifsoomro" target="_blank" rel="noopener noreferrer">
      <Image src="/icons8-github-48.png" alt="GitHub" height={124} width={124} className="w-6 h-6 hover:scale-125" />
    </Link>
    <Link href="https://www.linkedin.com/in/muhammad-wasif-337b5a213" target="_blank" rel="noopener noreferrer">
      <Image src="/icons8-linkedin-48.png" alt="LinkedIn" height={124} width={124} className="w-6 h-6 hover:scale-125" />
    </Link>
    <Link href="https://x.com/M_WasifSoomro" target="_blank" rel="noopener noreferrer">
      <Image src="/icons8-twitter-48.png" alt="Twitter" height={124} width={124} className="w-6 h-6 hover:scale-125" />
    </Link>
  </div>
</div>

    </div>
  )
}

export default SideBar
