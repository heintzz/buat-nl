import React from 'react'

import nlncLogo from '../images/community/nlnc.webp'
import Detail from './Detail'
import Showcase from './Showcase'

const nlnc = {
  title: 'App Development',
  desc: "A community that's suitable for you who are interested in networking and cyber world. Here we will practice together about CTF and be introduced to networks.",
  img: nlncLogo,
  color: '#676858',
}

export default function NLNC() {
  return (
    <>
      <Detail {...nlnc} />
      <Showcase color={nlnc.color} />
    </>
  )
}
