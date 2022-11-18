import React from 'react'
import { Link } from 'react-router-dom'

import webdev from '../images/community/webdev.webp'
import appdev from '../images/community/appdev.webp'
import cp from '../images/community/cp.webp'
import dsa from '../images/community/dsa.webp'
import uix from '../images/community/uix.webp'
import lnx from '../images/community/lnx.webp'

const onHover =
  'absolute flex items-center text-xl justify-center w-full h-full bg-[#1E1E1E]/60 top-0 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-1000'

const object = [
  {
    name: 'Web Development',
    src: webdev,
    nav: '/nwdc',
  },
  {
    name: 'Application Development',
    src: appdev,
    nav: '/nadc',
  },
  {
    name: 'Competitive Programming',
    src: cp,
    nav: '/ncpc',
  },
  {
    name: 'Data Science & Analytics',
    src: dsa,
    nav: '/nddc',
  },
  {
    name: 'User Interface & Experience',
    src: uix,
    nav: '/nuxc',
  },
  {
    name: 'Linux & Networking',
    src: lnx,
    nav: '/nlnc',
  },
]

export default function Community() {
  return (
    <div className="py-10 md:py-32 bg-pattern-community" id="community">
      <div className="max-w-fit mx-auto">
        <h2 className="text-center text-[#B82534] text-4xl sm:text-5xl xl:text-6xl font-semibold">
          Community
        </h2>
        <div className="mx-auto mt-3 bg-[#B82534] rounded-lg h-2 w-[50%]"></div>
      </div>
      <div className="mx-auto mt-10 max-w-[1280px] grid sm:grid-cols-2 gap-y-10 sm:gap-y-8 lg:gap-y-10 gap-x-10 md:gap-x-0 sm:p-5 ">
        {object.map((obj, idx) => {
          const { name, src, nav } = obj
          return (
            <Link to={nav} onClick={() => window.scrollTo(0, 0)} key={idx}>
              <div
                className={`mx-auto ${
                  idx % 2 === 0 ? 'pr-5 pl-10' : 'pl-5 pr-10'
                } sm:px-0 max-w-[400px] md:max-w-[90%] `}
              >
                <div className="w-fit relative shadow-community">
                  <img src={src} alt={name} loading="lazy" />
                  <div className={onHover}>
                    <p className="text-white font-semibold">More Info</p>
                  </div>
                </div>
                <p
                  className={`mt-3 md:mt-5 font-semibold ${
                    idx % 2 === 0 ? 'text-right sm:text-left' : 'text-left'
                  } sm:text-lg md:text-xl lg:text-2xl`}
                >
                  {name}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
