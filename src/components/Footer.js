import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="bg-[#B82534] h-[200px] w-full flex flex-col items-center justify-center text-white text-2xl font-semibold">
      <p>Night Login 2022</p>
      <a
        href="https://www.instagram.com/nightlogin/"
        target="_blank"
        rel='noreferrer'
        className="mt-10 -mb-10 flex flex-row items-center gap-x-1 hover:cursor-pointer"
      >
        <FaInstagram />
        <p>nightlogin</p>
      </a>
    </div>
  )
}
