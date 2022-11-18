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
    name: '#FIND IT 🏆',
    desc: ' FIND IT (Future Innovation and Discovery Information and Technology), merupakan sebuah event tahunan yang diselenggarakan oleh DTETI FT UGM dimana pada event ini terdapat beberapa acara diantaranya webinar dan lomba. Event ini bertujuan untuk mengembangkan dan memberi wadah bagi masyarakat yang tertarik ke dunia TI serta menarik minat sekaligus memperkenalkan TI ke masyarakat luas.',
  },
  {
    name: '#INTERNAL WORKSHOP 👨🏻‍💻',
    desc: 'Kegiatan pelatihan dan sharing session yang diadakan oleh masing-masing komunitas untuk meningkatkan skill dan berkembang bersama. Seperti namanya, kegiatan ini hanya diadakan untuk kalangan internal Night Login saja jadi sayang banget kalau kalian ga join hehe.',
  },
  {
    name: '#AFTER HOURS TALK🎙️',
    desc: 'Kegiatan ini biasanya dilakukan dengan mengundang pembicara dari dunia industri. Tentunya, kami berharap dengan berada di Night Login kalian tidak hanya diasah kemampuannya saja, tetapi juga sebagai persiapan untuk berkarir di dunia industri. Berbeda dengan Internal Workshop, AHT menjembatani kalian yang berada di luar Night Login untuk dapat belajar bersama.',
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
        <div className="pt-10 pl-2 pr-7 lg:px-0">
          <Swiper
            modules={[Navigation, Keyboard, Autoplay]}
            keyboard={{ enabled: true }}
            // autoplay={true}
            navigation
            className="h-100 max-w-[730px] shadow-slider  border-4 border-black bg-white"
          >
            {whatWeDo.map((event) => {
              const { name, desc } = event
              return (
                <SwiperSlide
                  className="flex flex-col gap-y-5 px-5 py-5"
                  key={name}
                >
                  <p className="text-3xl font-semibold tracking-wide">{name}</p>
                  <p className="text-sm sm:text-lg">{desc}</p>
                  {name === '#FIND IT 🏆' && (
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
