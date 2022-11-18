import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/autoplay'
import { Link } from 'react-router-dom'

const buttonStyle =
  'w-fit px-5 py-2 mt-auto rounded-full bg-[#B82534] text-white font-semibold text-center text-md lg:text-lg'

const whatWeDo = [
  {
    name: '#FIND IT',
    desc: 'FIND IT (Future Innovation and Discovery Information and Technology), is an annual event organized by DTETI FT UGM. There are several events including webinars and competitions. This event aims to develop skills and provide a forum for IT enthusiast, also introducing IT to the wider community.',
  },
  {
    name: '#INTERNAL WORKSHOP',
    desc: 'Sharing sessions and training activities held by each community to improve skills and grow together. This activity is only held for internal Night Login member.',
  },
  {
    name: '#AFTER HOURS TALK',
    desc: 'This activity is usually carried out by inviting speakers from the industrial world. Unlike the Internal Workshop, AHT bridges those of you who are outside the Night Login to be able to study together.',
  },
]
export default function WhatWeDo() {
  return (
    <div id="what-we-do">
      <div className="pt-10 pb-16 md:pt-36 md:pb-48 bg-[#B82534]">
        <div className="w-fit mx-auto">
          <h2 className="text-center text-white text-4xl sm:text-5xl xl:text-6xl font-semibold">
            What We Do?
          </h2>
          <div className="mx-auto mt-3 bg-white rounded-lg h-2 w-[50%]"></div>
        </div>
        <div className="pt-10 pl-2 pr-8 lg:px-0">
          <Swiper
            modules={[Navigation, Keyboard, Autoplay]}
            keyboard={{ enabled: true }}
            // autoplay={true}
            navigation
            className="sm:h-[400px]  max-w-[530px] md:max-w-[730px] shadow-slider  border-4 border-black bg-white"
          >
            {whatWeDo.map((event) => {
              const { name, desc } = event
              return (
                <SwiperSlide
                  className="flex flex-col gap-y-5 px-5 py-5"
                  key={name}
                >
                  <p className="text-3xl font-semibold tracking-wide">{name}</p>
                  <p className="text-sm sm:text-lg lg:text-xl">{desc}</p>
                  {name === '#FIND IT' && (
                    <Link
                      to="/findit"
                      className={buttonStyle}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Know More
                    </Link>
                  )}
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
