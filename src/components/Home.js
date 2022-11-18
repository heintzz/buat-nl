import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const buttonStyle =
  'w-fit px-5 py-2 md:mx-auto rounded-full bg-white hover:bg-[#B82534] hover:text-white text-[#B82534] transition ease-in-out duration-500 font-semibold text-center text-md lg:text-lg'

export default function MeetTheTeam() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <div
      className="bg-gradient-mtt px-5 mt-10 min-h-[500px] md:min-h-[650px] lg:h-screen w-screen flex text-left justify-start items-center bg-cover"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <div
        className="text-white text-start md:text-center mx-auto max-w-[500px] lg:max-w-[700px] px-5 flex flex-col"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        <h2 className="font-bold text-white text-4xl sm:text-5xl lg:text-7xl">
          Night Login
        </h2>
        <p className="sm:text-xl lg:text-2xl  my-10">
          A Community in Electrical and Information Engineering Department
          Gadjah Mada University that accomodates students to develop their
          skills, creativity, and innovation in the{' '}
          <span className="text-white font-bold "> IT field </span>
        </p>
        <Link to="/our-team" onClick={() => window.scrollTo(0, 0)}>
          <button type="button" className={buttonStyle}>
            Meet Our Team
          </button>
        </Link>
      </div>
    </div>
  )
}
