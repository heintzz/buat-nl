import React from 'react'

import ncpcLogo from '../images/community/ncpc.webp'
import Detail from './Detail'
import Showcase from './Showcase'

const ncpc = {
  title: 'Competitive Programming',
  desc: 'Community for Competitive Programming enthusiasts and will drastically improve the logic and understanding of coding.',
  img: ncpcLogo,
  color: '#3BC566',
}

export default function NCPC() {
  return (
    <>
      <Detail {...ncpc} />
      <Showcase color={ncpc.color} />
    </>
  )
}
