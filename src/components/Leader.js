import React from 'react'
import PersonalTeam from './PersonalTeam'

// import bullet from '../images/grid.svg'
// import squareFull from '../images/square-full.svg'
// import triangle from '../images/triangle.svg'

import ale from '../images/prof-pics/ale.png'
import sam from '../images/prof-pics/sam.png'

export default function Leader() {
  return (
    <div className="flex justify-center">
      {object.map((obj, idx) => (
        <PersonalTeam {...obj} key={idx} />
      ))}
      {/* <img
        src={bullet}
        alt="bullet-ornament"
        className={'absolute top-10 left-0 -z-[1] w-40'}
      />
      <img
        src={triangle}
        alt="triangle-ornament"
        className={'absolute top-60 right-32 -z-[1] w-36 md:w-40 -rotate-90'}
      />

      <img
        src={squareFull}
        alt="squarefull-ornament"
        className={
          'absolute hidden md:block -bottom-16 left-80 -z-[1] w-[50px]'
        }
      /> */}
    </div>
  )
}

const object = [
  {
    department: 'President & Vice President',
    profile: [
      { name: 'Samantha M.P', role: 'President', source: sam },
      { name: 'Christian Ale', role: 'Vice President', source: ale },
    ],
  },
]
