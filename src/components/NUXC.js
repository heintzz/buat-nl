import React from 'react'

import nuxcLogo from '../images/community/nuxc.webp'
import Detail from './Detail'
import Showcase from './Showcase'

const nuxc = {
  title: 'User Experience',
  desc: 'Community  to learn the basics of User Experience both for industry and academics. We will also do research and practice on each UX role.',
  img: nuxcLogo,
  color: '#F16437',
}

export default function NUXC() {
  return (
    <>
      <Detail {...nuxc} />
      <Showcase color={nuxc.color} />
    </>
  )
}
