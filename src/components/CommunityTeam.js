import React from 'react'
import PersonalTeam from './PersonalTeam'

import bullet from '../images/grid.svg'
import triangle from '../images/triangle.svg'
import circle from '../images/circle.svg'
import rectangle from '../images/rectangle.svg'

import ale from '../images/ale.jpg'
import sam from '../images/sam.jpg'

export default function CommunityTeam() {
  return (
    <div className="my-30 mx-auto max-w-[2160px] sm:px-10">
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
      { name: 'Aldo', source: sam, role: 'President' },
      { name: 'Jovian', source: ale, role: 'Vice President' },
    ],
    ornament: bullet,
  },
  {
    department: 'Competitive Programming',
    profile: [
      { name: 'Harry', source: sam, role: 'President' },
      { name: 'Wiweka', source: ale, role: 'Vice President' },
    ],
    style: 'md:mt-[255px] xl:mt-[175px]',
    ornament: circle,
    ornamentStyle:
      'absolute hidden md:-top-20 md:block -z-[1] -right-16 w-[60%]',
  },
  {
    department: 'Application Development',
    profile: [
      { name: 'Firdaus', source: sam, role: 'President' },
      { name: 'Hasan', source: ale, role: 'Vice President' },
    ],
    ornament: circle,
    ornamentStyle: 'absolute -top-10 -z-[1] -left-16 w-[60%] md:hidden',
  },
]

const secondObj = [
  {
    department: 'Data Science & Analytics',
    profile: [
      { name: 'Ricky', source: sam, role: 'President' },
      { name: 'Juang', source: ale, role: 'Vice President' },
    ],
    ornament: triangle,
    ornamentStyle: 'absolute top-0 left-20 w-[50%] -z-[1]',
  },
  {
    department: 'User Experience',
    profile: [
      { name: 'Tyara', source: sam, role: 'President' },
      { name: 'Annisa', source: ale, role: 'Vice President' },
    ],
    style: 'md:mt-[255px] xl:mt-[175px]',
    ornament: bullet,
  },
  {
    department: 'Linux & Networking',
    profile: [
      { name: 'Farel', source: sam, role: 'President' },
      { name: 'Novaldy', source: ale, role: 'Vice President' },
    ],
    ornament: rectangle,
    ornamentStyle: 'absolute -top-10 md:-top-40 left-20 -z-[1] w-[60%]',
  },
]
