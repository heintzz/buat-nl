import React from 'react'
import PersonalTeam from './PersonalTeam'

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

import square from '../images/ornaments/square.png'
import separator from '../images/ornaments/separator.png'
import rectangular from '../images/ornaments/rectangular.png'
import triangle2 from '../images/ornaments/triangle2.png'

export default function CommunityTeam() {
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center gap-x-10 md:gap-x-8">
        <img src={square} alt="square ornament" className="w-20" />
        <img
          src={separator}
          alt="separator ornament"
          className="w-[320px] h-[10px] md:w-[568px] lg:w-[902px] md:h-[15px] lg:h-[20px]"
        />
        <img src={square} alt="square ornament" className="w-20" />
      </div>
      <div className="mx-auto max-w-[2160px] sm:px-10">
        <h2 className="mt-5 mb-20 px-2 text-center text-4xl sm:text-5xl xl:text-6xl text-white font-semibold">
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
    </div>
  )
}

const ornamentStyle2 =
  'absolute -top-10 left-[calc(50%-133px)] -z-[10] w-[266px] h-[76px]'
const ornamentStyle = 'absolute -top-10 left-[calc(50%-105px)] -z-[10]'

const firstObj = [
  {
    department: 'Web Development',

    profile: [
      { name: 'Aldo', source: aldo, role: 'President' },
      { name: 'Jovian', source: jovian, role: 'Vice President' },
    ],
    ornament: rectangular,
    ornamentStyle: ornamentStyle,
  },
  {
    department: 'Competitive Programming',
    profile: [
      { name: 'Harry', source: harry, role: 'President' },
      { name: 'Wiweka', source: wiweka, role: 'Vice President' },
    ],
    style: 'md:mt-[255px] xl:mt-[175px]',
    ornament: triangle2,
    ornamentStyle: ornamentStyle2,
  },
  {
    department: 'Application Development',
    profile: [
      { name: 'Firdaus', source: firdaus, role: 'President' },
      { name: 'Hasan', source: hasan, role: 'Vice President' },
    ],
    ornament: rectangular,
    ornamentStyle: ornamentStyle,
  },
]

const secondObj = [
  {
    department: 'Data Science & Analytics',
    profile: [
      { name: 'Rizky', source: rizky, role: 'President' },
      { name: 'Juang', source: juang, role: 'Vice President' },
    ],
    ornament: rectangular,
    ornamentStyle: ornamentStyle,
  },
  {
    department: 'User Experience',
    profile: [
      { name: 'Tiara', source: tiara, role: 'President' },
      { name: 'Annisa', source: annisa, role: 'Vice President' },
    ],
    style: 'md:mt-[255px] xl:mt-[175px]',
    ornament: triangle2,
    ornamentStyle: ornamentStyle2,
  },
  {
    department: 'Linux & Networking',
    profile: [
      { name: 'Farel', source: farel, role: 'President' },
      { name: 'Novaldy', source: novaldy, role: 'Vice President' },
    ],
    ornament: rectangular,
    ornamentStyle: ornamentStyle,
  },
]
