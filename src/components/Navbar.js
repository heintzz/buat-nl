import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import logoNL from '../images/Logo_NL.svg'
import titleNL from '../images/Title_NL.svg'

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="flex justify-end items-center fixed top-0 right-0 left-0 bg-white z-20 font-semibold px-5 py-3">
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="h-10 flex items-center gap-x-5 mr-auto"
      >
        <img src={logoNL} className="h-full" alt="night login logo" />
        <img
          src={titleNL}
          className="h-[60%] w-[60%] sm:h-[80%] sm:w-[80%]"
          alt="night login custom font"
        />
      </Link>
      {location.pathname === '/' && (
        <nav className="hidden sm:flex gap-x-10">
          <a href="#community">
            <p>Community</p>
          </a>
          <a href="#what-we-do">
            <p>What We Do</p>
          </a>
          <a href="#benefits">
            <p>Benefits</p>
          </a>
        </nav>
      )}
    </header>
  )
}
