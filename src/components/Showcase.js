import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import robot from '../images/robot.png'

export default function Showcase() {
  return (
    <div className="mx-auto py-10 md:py-32 showcase bg-[#B82534]">
      <div className="w-fit mx-auto mb-10">
        <h2 className="text-center text-white text-4xl sm:text-5xl xl:text-6xl font-semibold">
          Showcase Project
        </h2>
        <div className="mx-auto mt-3 bg-white rounded-lg h-2 w-[50%]"></div>
      </div>
      <Swiper
        modules={[Pagination, Keyboard]}
        className="max-w-[1280px]"
        pagination={{
          dynamicBullets: true,
        }}
        keyboard={{ enabled: true }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={breakpoints}
      >
        {['FindIT', 'After Hours Talk', 'Internal Workshop'].map((name) => {
          return (
            <SwiperSlide className="py-5 flex flex-col items-center">
              <div className="flex flex-col items-center  bg-white rounded-2xl gap-y-5 w-full mb-10 p-5 max-w-[250px] sm:max-w-[300px]">
                <img src={robot} alt="maskot find it" loading="lazy" />
                <p className="text-xl">{name}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

const breakpoints = {
  976: {
    slidesPerView: 3,
  },
  545: {
    slidesPerView: 2,
  },
}
