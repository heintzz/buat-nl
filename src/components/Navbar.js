import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logoNL from '../images/Logo_NL.svg'

let navColor, textColor

export default function Navbar() {
  const location = useLocation()
  const [hash, setHash] = useState('')

  switch (location.pathname) {
    case '/nddc':
      navColor = 'bg-[#FF7950]'
      textColor = 'text-white'
      break
    case '/nadc':
      navColor = 'bg-[#2B3E4D]'
      textColor = 'text-white'
      break
    case '/nuxc':
      navColor = 'bg-[#F16437]'
      textColor = 'text-white'
      break
    case '/nwdc':
      navColor = 'bg-[#55B3E6]'
      textColor = 'text-white'
      break
    case '/nlnc':
      navColor = 'bg-[#676858]'
      textColor = 'text-white'
      break
    case '/ncpc':
      navColor = 'bg-[#3BC566]'
      textColor = 'text-white'
      break
    default:
      navColor = 'bg-white'
      textColor = 'text-black'
      break
  }

  useEffect(() => {
    setHash(location.hash)
     if (document.querySelector('.active-nav') !== null) {
       document.querySelector('.active-nav').classList.remove('active-nav')
     }
  }, [location.hash])

 

  switch (hash) {
    case '#benefits':
      document.querySelector('.benefit').classList.add('active-nav')
      break
    case '#what-we-do':
      document.querySelector('.wwd').classList.add('active-nav')
      break
    case '#community':
      document.querySelector('.comm').classList.add('active-nav')
      break
    default:
      break
  }

  return (
    <header
      className={`flex justify-end items-center ${navColor} fixed top-0 right-0 left-0 z-20 font-semibold px-5 py-3`}
    >
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="h-10 flex items-center gap-x-5 mr-auto"
      >
        <img src={logoNL} className="h-full" alt="night login logo" />
        <p className={`${textColor} text-xl`}>Night Login</p>
      </Link>
      {location.pathname === '/' && (
        <nav className="hidden sm:flex gap-x-10">
          <a href="#community" className="comm">
            <p>Community</p>
          </a>
          <a href="#what-we-do" className="wwd">
            <p>What We Do</p>
          </a>
          <a href="#benefits" className="benefit">
            <p>Benefits</p>
          </a>
        </nav>
      )}
    </header>
  )
}
