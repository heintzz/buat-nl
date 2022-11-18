import React from 'react'
import Leader from './Leader'
import ManagementTeam from './ManagementTeam'
import CommunityTeam from './CommunityTeam'

import footerMTT from '../images/footer-mtt.png'

export default function OurTeam() {
  return (
    <div className="bg-[#B82534] pt-24 pb-10">
      <Leader />
      <ManagementTeam />
      <CommunityTeam />
      <img src={footerMTT} alt="footer" className="mt-10 hidden sm:block" />
      <div className="footer-mtt sm:hidden mt-10 h-[60px]"></div>
    </div>
  )
}
