import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MeetTheTeam() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div
      className="bg-gradient-mtt min-h-[500px] md:min-h-screen max-h-screen w-screen flex justify-center text-center md:text-left md:justify-start items-center bg-cover"
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
