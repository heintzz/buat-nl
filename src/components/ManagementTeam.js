import React from 'react'
import PersonalTeam from './PersonalTeam'

// import square from '../images/square.svg'
// import squareFull from '../images/square-full.svg'
// import bullet from '../images/grid.svg'

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

export default function ManagementTeam() {
  return (
    <div className="my-30 mx-auto max-w-[2160px] sm:px-10">
      <h2 className="my-10 sm:my-20 px-2 text-center text-4xl sm:text-5xl xl:text-6xl text-white font-semibold">
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
      { name: 'Sagara', role: 'Head', source: sagara },
      { name: "Nisa'", role: 'Member', source: nisa },
      { name: 'Byan', role: 'Member', source: byan },
    ],
    // ornament: square,
    // ornamentStyle: 'absolute -bottom-12 left-20 -z-[1] max-w-[137px]',
    additionalFlex: additionalFlex,
  },
  {
    department: 'Creative Media',
    profile: [
      { name: 'Arifah', role: 'Head', source: arifah },
      { name: 'Fajar', role: 'Member', source: fajar },
      { name: 'Daniyal', role: 'Member', source: daniyal },
    ],
    // ornament: bullet,
    // ornamentStyle:
      // 'absolute -bottom-12 right-20 -z-[1] max-w-[157px] md:max-w-[237px]',
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
    // ornament: squareFull,
    // ornamentStyle:
      // 'absolute hidden md:block -bottom-20 -left-20 -z-[1] max-w-[57px]',
    additionalFlex: additionalFlex,
  },
]
