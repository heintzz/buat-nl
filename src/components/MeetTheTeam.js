import React from 'react'
import hero from '../images/meet-the-team.png'

export default function MeetTheTeam() {
  return (
    <div
      className="min-h-[510px] max-h-screen w-screen flex justify-center text-center md:text-left items-center bg-cover"
      style={overlayStyle}
    >
      <div className="text-white px-[10%]">
        <h2 className="font-bold text-5xl md:text-8xl mb-5">
          Meet The Team
        </h2>
        {/* <p className="font-semibold text-3xl md:text-4xl">
          Night Login's Organizational Structure
        </p> */}
      </div>
    </div>
  )
}

const overlayStyle = {
  backgroundImage: `linear-gradient(90deg, rgba(184, 37, 52,1) 0%, rgba(184, 37, 52, 0.33) 26.98%, rgba(255, 255, 255, 0) 63.45%), url(${hero})`,
  backgroundRepeat: 'no-repeat',
}
