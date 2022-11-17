import React from 'react'

import nadcLogo from '../images/community/nadc.webp'
import Detail from './Detail'
import Showcase from './Showcase'

const nadc = {
  title: 'App Development',
  desc: 'Community that studies Application development especially Android Development. You will be introduced to Kotlin, Android Component, Android Architecture, etc.',
  img: nadcLogo,
  color: '#2B3E4D',
}

export default function NADC() {
  return (
    <>
      <Detail {...nadc} />
      <Showcase color={nadc.color} />
    </>
  )
}
