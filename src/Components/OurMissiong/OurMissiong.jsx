import React from 'react'
import OurM from '../Assets/OurMission.jpg'
import { Link, NavLink } from 'react-router-dom'
const OurMissiong = () => {
  return (
    <div>
       <li> <Link style={{textDecoration:'none'}} ><img src={OurM} alt="" className='navimg'/></Link></li>
    </div>
  )
}

export default OurMissiong
