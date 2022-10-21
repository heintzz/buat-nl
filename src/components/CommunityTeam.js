import React from 'react'
import PersonalTeam from './PersonalTeam'

// import bullet from '../images/grid.svg'
// import triangle from '../images/triangle.svg'
// import circle from '../images/circle.svg'
// import rectangle from '../images/rectangle.svg'

import aldo from '../images/prof-pics/aldo.png'
import jovian from '../images/prof-pics/jovian.png'
import harry from '../images/prof-pics/harry.png'
import wiweka from '../images/prof-pics/wiweka.png'
import firdaus from '../images/prof-pics/firdaus.png'
import hasan from '../images/prof-pics/hasan.png'
import rizky from '../images/prof-pics/rizky.png'
import juang from '../images/prof-pics/juang.png'
import tiara from '../images/prof-pics/tiara.png'
import annisa from '../images/prof-pics/annisa.png'
import farel from '../images/prof-pics/farel.png'
import novaldy from '../images/prof-pics/novaldy.png'

export default function CommunityTeam() {
  return (
    <div className="mt-30 mx-auto max-w-[2160px] sm:px-10">
      <h2 className="sm:my-20 my-10 px-2 text-center text-4xl sm:text-5xl xl:text-6xl text-white font-semibold">
        Community Team
      </h2>
      <div className="grid gap-y-16 md:grid-cols-3">
        {firstObj.map((obj) => {
          return <PersonalTeam {...obj} />
        })}
      </div>
      <div className="mt-16 md:mt-8 xl:-mt-8 grid gap-y-16 md:grid-cols-3">
        {secondObj.map((obj) => {
          return <PersonalTeam {...obj} />
        })}
      </div>
    </div>
  )
}

const firstObj = [
  {
    department: 'Web Development',

    profile: [
      { name: 'Aldo', source: aldo, role: 'President' },
      { name: 'Jovian', source: jovian, role: 'Vice President' },
    ],
    // ornament: bullet,
  },
  {
    department: 'Competitive Programming',
    profile: [
      { name: 'Harry', source: harry, role: 'President' },
      { name: 'Wiweka', source: wiweka, role: 'Vice President' },
    ],
    style: 'md:mt-[255px] xl:mt-[175px]',
    // ornament: circle,
    // ornamentStyle:
    //   'absolute hidden md:-top-20 md:block -z-[1] -right-16 w-[60%]',
  },
  {
    department: 'Application Development',
    profile: [
      { name: 'Firdaus', source: firdaus, role: 'President' },
      { name: 'Hasan', source: hasan, role: 'Vice President' },
    ],
    // ornament: circle,
    // ornamentStyle: 'absolute -top-10 -z-[1] -left-16 w-[60%] md:hidden',
  },
]

const secondObj = [
  {
    department: 'Data Science & Analytics',
    profile: [
      { name: 'Rizky', source: rizky, role: 'President' },
      { name: 'Juang', source: juang, role: 'Vice President' },
    ],
    // ornament: triangle,
    // ornamentStyle: 'absolute top-0 left-20 w-[50%] -z-[1]',
  },
  {
    department: 'User Experience',
    profile: [
      { name: 'Tiara', source: tiara, role: 'President' },
      { name: 'Annisa', source: annisa, role: 'Vice President' },
    ],
    style: 'md:mt-[255px] xl:mt-[175px]',
    // ornament: bullet,
  },
  {
    department: 'Linux & Networking',
    profile: [
      { name: 'Farel', source: farel, role: 'President' },
      { name: 'Novaldy', source: novaldy, role: 'Vice President' },
    ],
    // ornament: rectangle,
    // ornamentStyle: 'absolute -top-10 md:-top-40 left-20 -z-[1] w-[60%]',
  },
]
