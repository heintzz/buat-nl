import React from 'react'
import squareBullet from '../../images/ornaments/grid.png'

export default function NW() {
  return (
    <div className="flex justify-center md:justify-between">
      <div className="skew w-fit md:self-start max-w-[180px] md:max-w-fit">
        <p className="unskew">National Webinar</p>
      </div>
      <img
        src={squareBullet}
        alt="square bullet ornament"
        className="hidden md:block mr-[10%]"
      />
    </div>
  )
}
