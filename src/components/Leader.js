import React from 'react'
import PersonalTeam from './PersonalTeam'

import ale from '../images/prof-pics/ale.png'
import sam from '../images/prof-pics/sam.png'

import ornament from '../images/ornament-leader.png'

export default function Leader() {
  return (
    <>
      <div className="flex justify-center relative z-10">
        {object.map((obj, idx) => (
          <PersonalTeam {...obj} key={idx} />
        ))}
        <img
          src={ornament}
          alt="leader ornament"
          className="absolute top-[30%] -left-20 sm:-left-5 -z-10"
        />
        <img
          src={ornament}
          alt="leader ornament"
          className="absolute hidden lg:block top-[30%] -right-5 scale-[-1] -z-10"
        />
      </div>
    </>
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
