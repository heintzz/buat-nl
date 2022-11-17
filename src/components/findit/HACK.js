import React from 'react'
import arrow from '../../images/ornaments/arrow.png'

export default function HACK() {
  return (
    <div className="flex justify-center md:justify-between">
      <img
        src={arrow}
        alt="right arrow ornament"
        className="hidden md:block ml-[10%]"
      />
      <div className="md:self-end skew">
        <p className="unskew">Hackathon</p>
      </div>
    </div>
  )
}
