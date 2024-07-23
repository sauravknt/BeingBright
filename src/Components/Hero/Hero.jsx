import React from 'react'
import './Hero.css'
import field_visit1 from '../Assets/field_visit1.jpg'
import field_visit2 from '../Assets/field_visit2.jpg'
import gifts from '../Assets/gifts.jpg'
import team from '../Assets/Team.jpg'
import { Link, NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>FROM THE BEGINNING</h2>
        <ul>
        <li> <Link style={{textDecoration:'none'}} ><img src={field_visit1} alt="" className='navimg'/></Link></li>
        <li> <Link style={{textDecoration:'none'}} ><img src={field_visit2} alt="" className='navimg'/></Link></li>
        <li> <Link style={{textDecoration:'none'}} ><img src={gifts} alt="" className='navimg' /></Link></li>
       
        
      </ul>
       
      </div>
      <div className='hero-right'>
       

      </div>
    </div>
  )
}

export default Hero
