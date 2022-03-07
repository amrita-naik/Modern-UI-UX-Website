import React from 'react'
import './blog.css'
import crypto1 from '../images/crypto1.jpg'
import crypto2 from '../images/crypto2.jpg'
import crypto3 from '../images/crypto3.jpg'

const Blog = () => {
  return (
    <div className='blog' id='blog'>
        <div className="blog-info">
          <h1 >Our Latest News and Blogs</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis quibusdam quaerat? Inventore laborum perspiciati</p>
        </div>

        <div className="blog-cards">
          <div className="blog-card">
            <img className='blog-card-img' src={crypto1} alt="" />
            <h4>11 January, 2022 - By Admin</h4>
            <h3>Launch your own Cryptocurrency</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque illum illo libero obcaecati architecto iste ipsum iure nesciunt voluptas!</p>
            <button>Read More</button>
          </div>
          <div className="blog-card">
            <img className='blog-card-img' src={crypto2} alt="" />
            <h4>1 February, 2022 - By Admin</h4>
            <h3>International Reporting of Crypto</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque illum illo libero obcaecati architecto iste ipsum iure nesciunt voluptas!</p>
            <button>Read More</button>
          </div>
          <div className="blog-card">
            <img className='blog-card-img' src={crypto3} alt="" />
            <h4 >3 March, 2022 - By Admin</h4>
            <h3>The Rise of Cryptocurrency Mining</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque illum illo libero obcaecati architecto iste ipsum iure nesciunt voluptas!</p>
            <button>Read More</button>
          </div>
        </div>
        <button>View More</button>
    </div>
  )
}

export default Blog