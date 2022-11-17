import React from 'react'

import header from '../images/header-findit.png'

import ESC from './findit/ESC'
import NW from './findit/NW'
import HACK from './findit/HACK'
import DAS from './findit/DAS'
import CP from './findit/CP'
import CTF from './findit/CTF'

export default function FindIT() {
  const buttonStyle =
    'w-fit px-5 py-2 sm:px-10 sm:py-5 rounded-full bg-white text-[#B82534] font-semibold text-center text-xl sm:text-3xl mx-auto hover:text-white hover:bg-red-800'

  return (
    <div className="bg-[#b82534]">
      <img src={header} alt="separate" className="100vw hidden sm:block" />
      <div className="header-findit h-24 sm:hidden"></div>
      <div className="px-10 md:px-20 pt-20 pb-10 gap-y-20 md:pt-40 md:gap-y-28 text-white mx-auto max-w-[1280px] flex flex-col font-semibold text-2xl md:text-3xl lg:text-4xl">
        <NW />
        <HACK />
        <DAS />
        <CP />
        <CTF />
        <ESC />
        <a
          className={buttonStyle}
          href="https://find-it.id/"
          target="_blank"
          rel="noreferrer"
        >
          Official Website
        </a>
      </div>
      <img
        src={header}
        alt="separate"
        className="w-[100vw] hidden rotate sm:block"
      />
      <div className="header-findit rotate h-24 sm:hidden"></div>
    </div>
  )
}
