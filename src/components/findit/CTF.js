import React from 'react'
import arrow from '../../images/ornaments/arrow.png'

export default function CTF() {
  return (
    <div className="flex justify-center md:justify-between">
      <div className="md:self-start skew">
        <p className=" self-start unskew text-center">Capture The Flag</p>
      </div>
      <img
        src={arrow}
        alt="left arrow ornament"
        className="rotate hidden md:block mr-[10%]"
      />
    </div>
  )
}
