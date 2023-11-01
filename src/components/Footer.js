import'./FooterStyles.css'
import React from 'react'
import {FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
        <div className='location'>
        
        <div className='phone'>
                <h4>
            <FaHome size={20} style={{color: '#fff',marginRight: "2rem"}}/>
             Jalandhar, Punjab
             </h4>
            </div>
            <div className='phone'>
                <h4>
            <FaPhone size={20} style={{color: '#fff',marginRight: "2rem"}}/>
             06283338479
             </h4>
            </div>
            <div className='email'>
                <h4>
            <FaMailBulk size={20} style={{color: '#fff',marginRight: "2rem"}}/>
            nagarswati26@gmail.com
             </h4>
            </div>
        </div>
        </div>
        <div className='right'>
            <h4>About Me</h4>
            <p>I am a Front-end developer with a passion for crafting visually stunning and user-friendly websites. A creative problem solver dedicated to delivering exceptional digital experiences. Let's turn your ideas into interactive web realities.</p>
            <div className='social'>
                <FaLinkedin 
                    size={30}
                    style={{color: "#fff" , marginRight:
                "1rem"}}
                />
                <FaTwitter
                    size={30}
                    style={{color: "#fff" , marginRight:
                "1rem"}}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
