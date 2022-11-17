import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="bg-[#B82534] h-[200px] w-full flex flex-col items-center justify-center text-white text-2xl font-semibold">
      <p>Night Login 2022</p>
      <div className="mt-10 -mb-10 flex flex-row items-center gap-x-1">
        <FaInstagram />
        <p>nightlogin</p>
      </div>
    </div>
  )
}
