import React from 'react'

import insight from '../images/insight.svg'
import collaborate from '../images/collaborate.svg'
import discuss from '../images/discuss.svg'
import connection from '../images/connection.svg'

import footer from '../images/footer-bf.png'

const benefits = [
  {
    name: 'New Insight',
    img: insight,
  },
  {
    name: 'Expand Connection',
    img: connection,
  },
  {
    name: 'Knowledge Exchange',
    img: collaborate,
  },
  {
    name: 'Tech-Updated Discussion',
    img: discuss,
  },
]

export default function Benefits() {
  return (
    <>
      <div className="py-10 sm:py-16 md:py-24 lg:py-36" id="benefits">
        <div className="w-fit mx-auto">
          <h2 className="text-center text-[#B82534] text-4xl sm:text-5xl xl:text-6xl font-semibold">
            Benefits
          </h2>
          <div className="mx-auto mt-3 bg-[#B82534] rounded-lg h-2 w-[50%]"></div>
        </div>
        <div className="pt-10 md:pt-20 px-5 mx-auto flex flex-col gap-y-10 sm:grid sm:grid-cols-2 xl:flex xl:flex-row xl:max-w-[1280px] xl:gap-x-10">
          {benefits.map((benefit) => {
            return (
              <div
                className="w-[90%] p-5 bg-white rounded-lg mx-auto flex flex-col items-center gap-y-5"
                key={benefit.name}
              >
                <img
                  src={benefit.img}
                  alt={benefit.name}
                  className="w-[200px] h-[150px]"
                />
                <p className="font-bold text-center text-xl text-[#B82534]">
                  {benefit.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <img src={footer} alt="separator" className="w-[100vw] hidden sm:block" />
      <div className="footer-bf h-24 sm:hidden"></div>
    </>
  )
}
