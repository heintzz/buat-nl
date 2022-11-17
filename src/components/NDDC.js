import React from 'react'

import nddcLogo from '../images/community/nddc.webp'
import Detail from './Detail'
import Showcase from './Showcase'

const nddc = {
  title: 'Data Analytics',
  desc: 'Community for data analytics enthusiasts and always updated of the latest developments about data. Here we will also get material about machine learning.',
  img: nddcLogo,
  color: '#FF7950',
}

export default function NDDC() {
  return (
    <>
      <Detail {...nddc} />
      <Showcase color={nddc.color} />
    </>
  )
}
