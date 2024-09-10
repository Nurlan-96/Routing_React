import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer'
import bgImage from '../../assets/images/post-bg.jpg';
import './contact.css'
const Contact = () => {
  return (
    <div className='cont'>
      <Header title='Contact Me' subtitle='Have questions? I have answers.' bgimage={bgImage}></Header>
      <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
      <form action="submit">
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Phone Number'/>
        <input type="text" placeholder='Message'/>
        <button>Send</button>
      </form>
      <Footer></Footer>
    </div>
  )
}

export default Contact
