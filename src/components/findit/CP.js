import React from 'react'
import circle from '../../images/ornaments/circle.png'

export default function CP() {
  return (
    <div className="flex justify-center md:justify-between md:items-center">
      <img
        src={circle}
        alt="circle ornament"
        className="hidden md:block w-[96px] h-[96px] ml-[15%]"
      />
      <div className="md:self-end skew text-end max-w-[230px] md:max-w-[300px] lg:max-w-[320px]">
        <p className="unskew text-center">Competitive Programming</p>
      </div>
    </div>
  )
}
