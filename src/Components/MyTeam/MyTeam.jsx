import React from 'react'
import team from '../Assets/Team.jpg'
import field_visit2 from '../Assets/field_visit2.jpg'
import { Link, NavLink } from 'react-router-dom'

const MyTeam = () => {
  return (
    <div className='MyTeam'>
      <div className="MyTeam-left">
        <h2>Here is us:- </h2>
        <ul>
        <li> <Link style={{textDecoration:'none'}} ><img src={team} alt="" className='navimg'/></Link></li>
        
      </ul>
       
      </div>
      <div className='MyTeam-right'>
       

      </div>
    </div>
  )
}

export default MyTeam
