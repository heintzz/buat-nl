import React from 'react'

import nwdcLogo from '../images/community/nwdc.webp'

import Showcase from './Showcase'
import Detail from './Detail'

const nwdc = {
  title: 'Web Development',
  desc: 'Community that studies website development either frontend or backend. you will be introduced to the basics of HTML, CSS, JS, and frameworks.',
  img: nwdcLogo,
  color: '#55B3E6',
}

export default function NWDC() {
  return (
    <>
      <Detail {...nwdc} />
      <Showcase color={nwdc.color} />
    </>
  )
}
