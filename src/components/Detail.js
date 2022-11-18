import React from 'react'

export default function Detail({ title, desc, img, color }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center md:gap-x-20 gap-y-10 pt-32 pb-16 md:pt-44 md:pb-28 lg:pt-52 lg:pb-36 px-5 sm:px-10 ">
      <img src={img} alt={img} className="min-w-[250px] max-w-[300px] md:max-w-[500px]" />
      <div className="content max-w-[430px] md:max-w-[700px] ">
        <div
          className={`text-center md:text-left`}
          style={{ color: `${color}` }}
        >
          <p className="text-xl sm:text-2xl font-semibold">Night Login</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-[5px]">
            {title}
          </h2>
          <p className="text-lg sm:text-xl font-semibold">Community</p>
        </div>
        <div className="body mt-7">
          <p className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">{desc}</p>
        </div>
      </div>
    </div>
  )
}
