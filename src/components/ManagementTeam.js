import React from 'react'
import PersonalTeam from './PersonalTeam'

import sagara from '../images/prof-pics/sagara.png'
import nisa from '../images/prof-pics/nisa.png'
import byan from '../images/prof-pics/byan.png'
import arifah from '../images/prof-pics/arifah.png'
import fajar from '../images/prof-pics/fajar.png'
import daniyal from '../images/prof-pics/daniyal.png'
import gerrit from '../images/prof-pics/gerrit.png'
import talitha from '../images/prof-pics/talitha.png'
import dhiyaa from '../images/prof-pics/dhiyaa.png'
import anisa from '../images/prof-pics/anisa.png'

import square from '../images/ornaments/square.png'
import separator from '../images/ornaments/separator.png'
import rectangular from '../images/ornaments/rectangular.png'
import triangle2 from '../images/ornaments/triangle2.png'

export default function ManagementTeam() {
  return (
    <div className="mt-2">
      <div className="flex justify-center items-center gap-x-10 md:gap-x-8">
        <img src={square} alt="square ornament" className="w-20" />
        <img
          src={separator}
          alt="separator ornament"
          className="w-[320px] h-[10px] md:w-[568px] lg:w-[902px] md:h-[15px] lg:h-[20px]"
        />
        <img src={square} alt="square ornament" className="w-20" />
      </div>
      <div className="mt-5 mx-auto max-w-[2160px] sm:px-10">
        <h2 className="mb-20 px-2 text-center text-4xl sm:text-5xl xl:text-6xl text-white font-semibold">
          Management Team
        </h2>
        <div className="flex flex-wrap gap-y-16 gap-x-4">
          {object.map((obj) => {
            return <PersonalTeam {...obj} />
          })}
        </div>
      </div>
    </div>
  )
}

const additionalFlex = 'flex-wrap justify-center'
const ornamentStyle2 = 'absolute -top-10 left-[calc(50%-133px)] -z-[10] w-[266px] h-[76px]'
const ornamentStyle = 'absolute -top-10 left-[calc(50%-105px)] -z-[10]'

const object = [
  {
    department: 'Public Relation',
    profile: [
      { name: 'Sagara', role: 'Head', source: sagara },
      { name: "Nisa'", role: 'Member', source: nisa },
      { name: 'Byan', role: 'Member', source: byan },
    ],
    ornament: rectangular,
    ornamentStyle: ornamentStyle,
    additionalFlex: additionalFlex,
  },
  {
    department: 'Creative Media',
    profile: [
      { name: 'Arifah', role: 'Head', source: arifah },
      { name: 'Fajar', role: 'Member', source: fajar },
      { name: 'Daniyal', role: 'Member', source: daniyal },
    ],
    ornament: rectangular,
    ornamentStyle: ornamentStyle,
    additionalFlex: additionalFlex,
  },
  {
    department: 'Administration',
    profile: [
      { name: 'Gerrit', role: 'Head', source: gerrit },
      { name: 'Dhiyaa', role: 'Member', source: dhiyaa },
      { name: 'Anisa', role: 'Member', source: anisa },
      { name: 'Talitha', role: 'Member', source: talitha },
    ],
    ornament: triangle2,
    ornamentStyle: ornamentStyle2,
    additionalFlex: additionalFlex,
  },
]
