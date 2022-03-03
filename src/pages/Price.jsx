import React from 'react'
import './price.css'

const Price = () => {
  return (
    <div className='price'>
        <div className="price-info">
            <h1>Our Price Token</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim officiis libero rem rerum corporis?</p>
        </div>

        <div className="price-cards">
            <div className="price-card">
                <h3>Moving Forward</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="price-card">
                <h3>Global Access</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
            <div className="price-card">
                <h3>Flexibility</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate.</p>
            </div>
        </div>
    </div>
  )
}

export default Price