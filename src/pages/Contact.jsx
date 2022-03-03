import React from 'react'
import './contact.css'
import contactImg from '../images/contact.png'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact</h1>
        <div className="contact-container">
          <img className='contact-img' src={contactImg} alt="" />
          <form className='contact-form-box'>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Email ID'></input>
                <textarea placeholder='Write your message..'></textarea>
                <button type='submit'>Send</button>
          </form>
        </div>
    </div>
  )
}

export default Contact