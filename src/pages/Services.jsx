import React from 'react'
import './services.css'
import clock from '../images/clock.png'
import global from '../images/global-network.png'
import settings from '../images/settings.png'
import blockchain from '../images/blockchain.png'
import negotiation from '../images/negotiation.png'
import ai from '../images/artificial-intelligence.png'
import profit from '../images/profit.png'
import ecosystem from '../images/ecosystem.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-info">
            <h1>Why choose Us?</h1>
            <h2>Our Core Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim officiis libero rem rerum corporis?</p>
        </div>

        <div className="services-cards">
            <div className="services-card">
                <img className='services-icon' src={clock} alt="" />
                <h3>Moving Forward</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="services-card">
                <img className='services-icon' src={global} alt="" />
                <h3>Global Access</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="services-card">
                <img className='services-icon' src={settings} alt="" />
                <h3>Flexibility</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="services-card">
                <img className='services-icon' src={blockchain} alt="" />
                <h3>Blockchain Technology</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="services-card">
                <img className='services-icon' src={negotiation} alt="" />
                <h3>Instant Settlement</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="services-card">
                <img className='services-icon' src={ai} alt="" />
                <h3>AI Matching</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="services-card">
                <img className='services-icon' src={profit} alt="" />
                <h3>Scalable Profits</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="services-card">
                <img className='services-icon' src={ecosystem} alt="" />
                <h3>Friendly Ecosystem</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
        </div>

    </div>
  )
}

export default Services