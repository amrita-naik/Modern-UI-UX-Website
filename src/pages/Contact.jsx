import React from 'react'
import './contact.css'
import contactImg from '../images/contact.png'
import Particles from "react-tsparticles";

const Contact = () => {

  const particlesConfig = {
    fullScreen: { enable: false},
    fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
}


  return (
    <div className='contact'>
        <h1>Contact Us</h1>
        <p>Questions, bug reports, feedback, feature requests - we're here for it all!</p>
        <h3>Fill out the form!</h3>
        <div className="contact-container">
          <img className='contact-img' src={contactImg} alt="" />
          <form className='contact-form-box'>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Email ID'></input>
                <textarea placeholder='Write your message..'></textarea>
                <button type='submit'>Send</button>
          </form>
        </div>
        <Particles params={particlesConfig} className='particles' />
    </div>
  )
}

export default Contact


  