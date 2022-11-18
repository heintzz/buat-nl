import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import template from '../images/template-showcase.png'

export default function Showcase({ color }) {
  return (
    <div
      className={`mx-auto py-10 md:py-20 showcase`}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="w-fit mx-auto mb-10">
        <h2 className="text-center px-5 text-white text-4xl sm:text-5xl xl:text-6xl font-semibold">
          Showcase Project
        </h2>
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
        {[1, 2, 3, 4].map((n) => {
          return (
            <SwiperSlide className="py-5 flex flex-col items-center" key={n}>
              <div className="flex flex-col items-center  bg-white rounded-2xl gap-y-5 w-full mb-10 p-5 max-w-[250px] sm:max-w-[300px] h-[400px] hover:cursor-pointer hover:scale-[1.05] transition-all ease-in duration-300">
                <img
                  src={template}
                  alt="template"
                  className="rounded-lg"
                  loading="lazy"
                />
                <p className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
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
