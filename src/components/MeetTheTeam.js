import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import hero from '../images/meet-the-team.png'

export default function MeetTheTeam() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div
      className="min-h-[500px] md:min-h-screen max-h-screen w-screen flex justify-center text-center md:text-left md:justify-start items-center bg-cover"
      style={overlayStyle}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <div
        className="text-white px-[10%] "
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <h2 className="font-bold text-5xl md:text-8xl mb-5">Meet The Team</h2>
        <p className="sm:text-3xl md:text-4xl">
          Night Login's Organizational Structure
        </p>
      </div>
    </div>
  )
}

const overlayStyle = {
  backgroundImage: `linear-gradient(90deg, rgba(184, 37, 52,1) 0%, rgba(184, 37, 52, 0.33) 26.98%, rgba(255, 255, 255, 0) 63.45%), url(${hero})`,
  backgroundRepeat: 'no-repeat',
}
