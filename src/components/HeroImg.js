import './HeroImgStyles.css';
import React from 'react'
import Hero from '../assets/hero2.avif'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
          <img className='into-img' src={Hero} alt='Hero' />
        </div>
        <div className='content'>
          <p>HI, I'M SWATI</p>
          <h1>A FRONT-END DEVELOPER</h1>
          <div>
            <Link to= "/project" className='btn'>Projects</Link>
            <Link to= "/contact" className='btn btn-light'>Contact</Link>
          </div>
        </div>
      
    </div>
  )
}

export default HeroImg
