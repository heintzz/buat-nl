import React from 'react'

export default function PersonalTeam({
  department,
  profile,
  style,
  ornament,
  ornamentStyle,
  additionalFlex,
}) {
  const titleStyle =
    'min-w-[285px] mx-auto mb-6 w-fit px-5 py-2 rounded-full bg-white text-[#B82534] font-semibold text-center text-md lg:text-lg'
  const containerFlex = `flex ${
    additionalFlex || ''
  } max-w-[100vw] gap-x-4 lg:gap-x-10 gap-y-5`
  const responsiveContainer =
    'w-[145px] md:w-[125px] lg:w-[150px] xl:w-[170px] 2xl:w-[190px]'
  const containerWFull = 'relative w-full pt-[100%]'
  const circleProfile =
    'absolute left-0 top-0 h-full w-full rounded-full border-[12px] border-[#ED707C] text-[#B82534] font-semibold'
  const profileName = 'mt-2 text-center text-white'

  return (
    <div className={`mx-auto max-w-fit relative z-10 ${style || ''}`}>
      <p className={titleStyle}>{department}</p>
      <div className={containerFlex}>
        {profile.map((profile, idx) => {
          return (
            <div className={`${responsiveContainer} adjustScreen`} key={idx}>
              <div className={containerWFull}>
                <div className={circleProfile}>
                  <img
                    src={profile.source}
                    alt={profile.name}
                    className="rounded-full hover:cursor-pointer"
                  />
                  <div
                    className="text-center px-1 absolute top-0 bg-black/70 w-full h-full rounded-full flex justify-center items-center text-white opacity-0 hover:opacity-100 hover:cursor-pointer"
                    style={{ transition: 'all 0.3s' }}
                  >
                    {profile.role}
                  </div>
                </div>
              </div>
              <p className={profileName}>{profile.name}</p>
            </div>
          )
        })}
      </div>
      {ornament && <img src={ornament} alt={ornament} className={ornamentStyle} />}
    </div>
  )
}
