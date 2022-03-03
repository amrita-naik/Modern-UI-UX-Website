import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <a href="#" className='logo'>Cryptoz</a>
            <ul className='nav-links'>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>About</li>
                <li className='nav-link'>Services</li>
                <li className='nav-link'>Price</li>
                <li className='nav-link'>Blog</li>
                <li className='nav-link'>Contact</li>
                <button className='nav-btn'>Log In</button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar