import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

const buttonStyle =
  'w-fit px-5 py-2 mt-auto rounded-full bg-[#B82534] text-white font-semibold text-center text-md lg:text-lg'

export default function WhatWeDo() {
  return (
    <div className="pt-10 pb-16 md:py-32">
      <div className="w-fit mx-auto">
        <h2 className="text-center text-[#B82534] text-4xl sm:text-5xl xl:text-6xl font-semibold">
          What We Do?
        </h2>
        <div className="mx-auto mt-3 bg-[#B82534] rounded-lg h-2 w-[50%]"></div>
      </div>
      <div className="pt-10 pl-2 pr-7 md:px-0">
        <Swiper
          modules={[Navigation, Keyboard]}
          keyboard={{ enabled: true }}
          navigation
          className="h-100 max-w-[730px] shadow-slider  border-4 border-black "
        >
          {[1, 2, 3].map((n) => {
            return (
              <SwiperSlide className="flex flex-col gap-y-5 px-5 py-5">
                <p className="text-3xl">#FIND IT</p>
                <p className="text-sm sm:text-lg">
                  FIND IT (Future Innovation and Discovery Information and
                  Technology), merupakan sebuah event tahunan yang
                  diselenggarakan oleh DTETI FT UGM dimana pada event ini
                  terdapat beberapa acara diantaranya webinar dan lomba. Event
                  ini bertujuan untuk mengembangkan dan memberi wadah bagi
                  masyarakat yang tertarik ke dunia TI serta menarik minat
                  sekaligus memperkenalkan TI ke masyarakat luas.
                </p>
                {n === 1 && <button className={buttonStyle}>Know More</button>}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
