import React from 'react'
import Image from 'next/future/image'
import me from 'public/images/me.png'
import { ArrowDown } from 'src/components/Icons'

const Hero = ({ handleScrollDown }) => {
  return (
    <div className="relative flex h-[calc(100vh-72px)] items-center justify-center py-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 overflow-visible">
          <div className="animate-pulse-slower absolute h-[460px] w-[460px] -translate-x-1/4 rounded-full bg-teal-100/75 mix-blend-multiply blur-3xl filter dark:bg-teal-800/25"></div>
        </div>
        <div className="absolute left-3/4 overflow-visible">
          <div className="animate-pulse-slower absolute top-20 left-3/4 h-[612px] w-[612px] -translate-x-2/3 rounded-full bg-indigo-200/60 mix-blend-multiply blur-3xl filter dark:bg-indigo-900/40"></div>
        </div>
      </div>
      <div className="relative z-10 -mt-14 flex flex-col items-center justify-between gap-5">
        <Image
          src={me}
          alt="russ-tran"
          width={120}
          height={120}
          className="rounded-full border-4 border-white"
        />
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-5xl font-extrabold">
            Hi, I&apos;m{' '}
            <span className="text-teal-500 dark:text-teal-400">Russ</span>
          </h1>
          <p className="text-xl font-semibold md:text-2xl">
            I love crafting beautiful web applications with an elegant user
            experience
          </p>
          <button
            type="button"
            onClick={handleScrollDown}
            className="mt-5 flex items-center justify-between gap-3 rounded-full border border-primary bg-primary px-6 py-4 font-semibold text-white duration-200 hover:border-highlight hover:bg-highlight hover:text-primary active:border-teal-500 active:bg-teal-500"
          >
            <span className="animate-bounce-slower">
              <ArrowDown />
            </span>
            <span>Learn more about me</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
