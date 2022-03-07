import React from 'react'
import AboutImg from '../images/about.png'
import './about.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <img src={AboutImg} className='about-img' alt="" />
        <div className="about-container">
            <h1>ABOUT US</h1>
            <h2>Based in Pune, India</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi eum enim aliquam aut vel pariatur autem explicabo non eos magnam?</p>
            <ul>
                <li>Fast Mining</li>
                <li>TRC20 Support</li>
                <li>Easy Mining</li>
                <li>High Market</li>
                <li>Best Market Cap</li>
                <li>Variety of Currencies</li>
            </ul>
        </div>
    </div>
  )
}

export default About