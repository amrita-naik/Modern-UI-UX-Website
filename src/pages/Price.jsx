import React from 'react'
import './price.css'

const Price = () => {
  return (
    <div className='price' id='price'>
        <div className="price-info">
            <h1>Our Price Token</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim officiis libero rem rerum corporis?</p>
        </div>

        <div className="price-cards">
            <div className="price-card">
                <h2>Basic</h2>
                <div className="price-circle">
                    <h1>$1</h1>
                    <h3>Per Month</h3>
                </div>
                <h2>1 ETH = 500 Tokens</h2>
                <h2>15,000,000 Tokens</h2>
                <button>Buy Now</button>
            </div>
            <div className="price-card">
                <h2>Standard</h2>
                <div className="price-circle">
                    <h1>$2</h1>
                    <h3>Per Month</h3>
                </div>
                <h2>1 ETH = 500 Tokens</h2>
                <h2>15,000,000 Tokens</h2>
                <button>Buy Now</button>
            </div>
            <div className="price-card">
                <h2>Premium</h2>
                <div className="price-circle">
                    <h1>$4</h1>
                    <h3>Per Month</h3>
                </div>
                <h2>1 ETH = 500 Tokens</h2>
                <h2>15,000,000 Tokens</h2>
                <button>Buy Now</button>
            </div>
            
        </div>
    </div>
  )
}

export default Price