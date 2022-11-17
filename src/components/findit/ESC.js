import React from 'react'
import squareBullet from '../../images/ornaments/grid.png'

export default function ESC() {
  return (
    <div className="flex justify-center md:justify-between md:items-center">
      <img
        src={squareBullet}
        alt="square bullet ornament"
        className="hidden md:block ml-[10%] w-[95px] h-[95px]"
      />
      <div className="md:self-end skew max-w-[230px] md:max-w-[280px] lg:max-w-[300px]">
        <p className="unskew text-center">E-Sport Competition</p>
      </div>
    </div>
  )
}
