import React from 'react'
import './blog.css'
import crypto1 from '../images/crypto1.jpg'
import crypto2 from '../images/crypto2.jpg'
import crypto3 from '../images/crypto3.jpg'

const Blog = () => {
  return (
    <div className='blog'>
        <div className="blog-info">
          <h1>Our Latest News and Blogs</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis quibusdam quaerat? Inventore laborum perspiciatis voluptatem atque alias quidem illum!</p>
        </div>

        <div className="blog-cards">
          <div className="card">
            <img className='blog-card-img' src={crypto1} alt="" />
            <p>11 January, 2022 - By Admin</p>
            <h3>Launch your own Cryptocurrency</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque illum illo libero obcaecati architecto iste ipsum iure nesciunt voluptas!</p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img className='blog-card-img' src={crypto2} alt="" />
            <p>1 February, 2022 - By Admin</p>
            <h3>International Reporting of Crypto</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque illum illo libero obcaecati architecto iste ipsum iure nesciunt voluptas!</p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img className='blog-card-img' src={crypto3} alt="" />
            <p>3 March, 2022 - By Admin</p>
            <h3>The Rise of Cryptocurrency Mining</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque illum illo libero obcaecati architecto iste ipsum iure nesciunt voluptas!</p>
            <button>Read More</button>
          </div>
          

        </div>
    
    </div>
  )
}

export default Blog