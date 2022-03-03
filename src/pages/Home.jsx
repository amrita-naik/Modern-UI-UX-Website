import React from 'react'
import './home.css'
import Box from '../components/Box'

import { Canvas } from 'react-three-fiber'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-info">
            <h1 className='home-title'>WORLD’S BIGGEST <br /> CRYPTOCURRENCY <br /> PLATFORM</h1>
            <p className='home-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem facere assumenda recusandae nam soluta nemo eveniet quia deleniti inventore.</p>
            <button className='home-btn'>Let's Start</button>
        </div>

        <Canvas className='canvas'> 
            <ambientLight intensity={0.5} />
            <Box />
        </Canvas>

    </div>
  )
}

export default Home