import React from 'react'
import PersonalTeam from './PersonalTeam'

import square from '../images/square.svg'
import squareFull from '../images/square-full.svg'
import bullet from '../images/grid.svg'

import ale from '../images/ale.jpg'
import sam from '../images/sam.jpg'

export default function ManagementTeam() {
  return (
    <div className="my-30 mx-auto max-w-[2160px] sm:px-10">
      <h2 className="my-20 px-2 text-center text-4xl sm:text-5xl xl:text-6xl text-white font-semibold">
        Management Team
      </h2>
      <div className="flex flex-wrap gap-y-16 gap-x-4">
        {object.map((obj, idx) => {
          return <PersonalTeam {...obj} />
        })}
      </div>
    </div>
  )
}

const additionalFlex = 'flex-wrap justify-center'
const object = [
  {
    department: 'Public Relation',
    profile: [
      { name: "Nisa'", source: ale },
      { name: 'Sagara', source: sam },
      { name: 'Byan', source: ale },
    ],
    ornament: square,
    ornamentStyle: 'absolute -bottom-12 left-20 -z-[1] max-w-[137px]',
    additionalFlex: additionalFlex,
  },
  {
    department: 'Creative Media',
    profile: [
      { name: 'Arifah', source: ale },
      { name: 'Fajar', source: sam },
      { name: 'Daniyal', source: ale },
    ],
    ornament: bullet,
    ornamentStyle:
      'absolute -bottom-12 right-20 -z-[1] max-w-[157px] md:max-w-[237px]',
    additionalFlex: additionalFlex,
  },
  {
    department: 'Administration',
    profile: [
      { name: 'Aku', source: ale },
      { name: 'Kamu', source: sam },
      { name: 'Dia', source: ale },
      { name: 'Doi', source: sam },
    ],
    ornament: squareFull,
    ornamentStyle:
      'absolute hidden md:block -bottom-20 -left-20 -z-[1] max-w-[57px]',
    additionalFlex: additionalFlex,
  },
]
