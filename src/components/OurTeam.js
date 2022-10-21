import React from 'react'
import Leader from './Leader'
import ManagementTeam from './ManagementTeam'
import CommunityTeam from './CommunityTeam'

export default function OurTeam() {
  return (
    <div className='bg-pattern py-20'>
      <Leader />
      <ManagementTeam />
      <CommunityTeam />
    </div>
  )
}
