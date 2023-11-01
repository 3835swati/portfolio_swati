 import React from 'react'
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form'

 const Contact = () => {
   return (
     <div>
      <Navbar />
      <HeroImg2 className='hero' heading="CONTACT" text="Lets have a chat"/>
      <Form />
      <Footer />
     </div>
   )
 }
 
 export default Contact;
 