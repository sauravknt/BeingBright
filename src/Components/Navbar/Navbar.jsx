import React, { useState } from 'react'
import './Navbar.css'
import NGO_ICON from '../Assets/NGO_ICON.jpg'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={NGO_ICON} alt="" />
        <p>BEING BRIGHT</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("about us")}}><Link style={{textDecoration:'none'}} to='/'>About Us</Link>{menu==="about us"?<hr/>:<></>}</li> 
        <li onClick={()=>{setMenu("field visit")}}><Link style={{textDecoration:'none'}} to='/FieldVisit'>Field Visit</Link>{menu==="field visit"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("our team")}}><Link style={{textDecoration:'none'}} to='/OurTeam'>Our Team</Link>{menu==="our team"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("our mission")}}><Link style={{textDecoration:'none'}} to='/OurMission'>Our Mission</Link>{menu==="our mission"?<hr/>:<></>}</li>
      </ul>
    </div>
  )
}

export default Navbar
