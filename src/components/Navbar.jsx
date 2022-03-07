import React, {useState} from 'react'
import './navbar.css'

const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className='navbar'>
        <nav className={colorChange ? 'nav-bg' : ''}>
            <a href="#" className='logo'>Cryptoz</a>
            <ul className='nav-links'>
                <a className='nav-link' href='#home'>Home</a>
                <a className='nav-link' href='#about'>About</a>
                <a className='nav-link' href='#services'>Services</a>
                <a className='nav-link' href='#price'>Price</a>
                <a className='nav-link' href='#blog'>Blog</a>
                <a className='nav-link' href='#contact'>Contact</a>
                <button className='nav-btn'>Log In</button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar