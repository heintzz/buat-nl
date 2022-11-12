import React from 'react'

export default function FindIT() {
  const buttonStyle =
    'w-fit px-5 py-2 lg:px-10 lg:py-5 rounded-full bg-white text-[#B82534] font-semibold text-center text-lg lg:text-3xl mx-auto'

  return (
    <div className="bg-[#B82534]">
      <div className="bg-pattern-header h-20"></div>
      <div className="px-5 sm:px-10 lg:px-20 py-20 gap-y-20 md:py-40 md:gap-y-40 text-white mx-auto max-w-[1280px] flex flex-col font-semibold text-4xl md:text-5xl lg:text-6xl">
        <p>National Webinar</p>
        <p className="self-end ">Hackathon</p>
        <div className="self-start md:text-center max-w-[180px] md:max-w-[220px] lg:max-w-[270px]">
          <p>Data Analytics</p>
        </div>
        <div className="self-end text-end md:text-center max-w-[260px] md:max-w-[340px] lg:max-w-[425px]">
          <p>Competitive Programming</p>
        </div>
        <p className=" md:text-center self-start">Capture The Flag</p>
        <div className="self-end text-end md:text-center max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
          <p>E-Sport Competition</p>
        </div>
        <button className={buttonStyle}>Official Website</button>
      </div>
      <div className="bg-pattern-header w-screen h-20"></div>
    </div>
  )
}
