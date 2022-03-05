import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const Footer = () => {

   
  return (
    <div className='footer-section'>
        <div className='newsletter'>
            <h1>Subscribe to our Newsletter</h1>
            <div className="newsletter-input">
                <input type="text" placeholder='Your Email' required/>
                <button>Send</button>
            </div>
        </div>
        <footer>
            <div className="footer-one">
                <a href="#" className='logo'>Cryptoz</a>
                <p>The most trusted cryptocurrency center</p>
                <div className='social-links'>
                    <FaFacebook className='social-link'/>
                    <FaInstagram className='social-link'/>
                    <FaLinkedin className='social-link'/>
                    <FaTwitter className='social-link'/>
                </div>
            </div>
            <div className="quick-links">
                <h3>Quick Links</h3>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Price</a>
                <a href="">Blogs</a>
            </div>
            <div className="company-links">
                <h3>Company</h3>
                <a href="">Terms and Conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">FAQs</a>
                <a href="">Our Team</a>
                <a href="">Help</a>
            </div>
            <div className="contact-info">
                <h3>Get In Touch</h3>
                <span>
                    <GoLocation className='contact-info-icon' />
                    <div className="contact-detail">
                        <h4>Find Us</h4>
                        <p>Mumbai, India</p>
                    </div>
                </span>
                <span>
                    <BiEnvelope className='contact-info-icon'/>
                    <div className="contact-detail">
                        <h4>Email Us</h4>
                        <p>cryptoz@gmail.com</p>
                    </div>
                </span>
                <span>
                    <BiPhoneCall className='contact-info-icon' />
                    <div className="contact-detail">
                        <h4>Call Us</h4>
                        <p>+91 123456</p>
                    </div>
                </span>
            </div>
        </footer>
        
    </div>
  )
}

export default Footer