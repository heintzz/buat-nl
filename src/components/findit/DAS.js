import React from 'react'
import triangle from '../../images/ornaments/triangle.png'

export default function DAS() {
  return (
    <div className="flex justify-center md:justify-between">
      <div className="skew md:self-start max-w-[180px] md:max-w-[220px] lg:max-w-[270px]">
        <p className="unskew text-center">Data Analytics</p>
      </div>
      <img
        src={triangle}
        alt="triangle ornament"
        className="hidden md:block mr-[12%]"
      />
    </div>
  )
}
