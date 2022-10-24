import React from 'react'

import logoNL from '../images/Logo_NL.svg'
import titleNL from '../images/Title_NL.svg'

export default function Home() {
  return (
    <>
      <div className='flex h-[100vh] items-center justify-center'>
        <div className='w-[50%] h-full flex justify-center'>
          <img src={logoNL} className='w-[60%]' />
        </div>

        <div className='w-[50%] pr-[180px]'>
          <img  src={titleNL} className='w-[70%]' />
          <h1 className='mb-[24px] mt-[-10px] text-[40px]'>DTETI FT UGM</h1>
          <p>A Community in Electrical and Information Engineering
            Department Gadjah Mada University that accomodates 
            student's to develop their skills, creativity, and
            innovation in the <span className='text-[#C42439]'> IT field </span></p>
        </div>
      </div>
    </>
  )
}
