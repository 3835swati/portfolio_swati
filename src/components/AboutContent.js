import { Link } from 'react-router-dom'
import './AboutContent.css'
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1 className='who'>Who am I</h1>

            <h4>Hello, I'm Swati, a passionate Front-End Developer. </h4>
            <p>My toolkit includes HTML, CSS, JavaScript, and also a front-end framework Reactjs .</p>
               <Link to='/contact'>
                <button className='btn'>Contact</button>
               </Link>
        </div>
      
    </div>
  )
}

export default AboutContent
