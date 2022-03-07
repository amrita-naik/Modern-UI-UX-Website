import './home.css'
import { BlurPass } from 'postprocessing'
import Box from '../components/Box'
import React, { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas } from 'react-three-fiber'

const Home = () => {

  function Effects() {
    return (
      <>
        <EffectComposer>
          <Bloom
            intensity={2}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.1}
            blurPass={new BlurPass()}
          />
        </EffectComposer>
      </>
    );
  }

  return (
    <div className='home' id='home'>
        <div className="home-info">
            <h1 className='home-title'>WORLD’S BIGGEST <br /> CRYPTOCURRENCY <br /> PLATFORM</h1>
            <p className='home-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem facere assumenda recusandae nam soluta nemo eveniet quia deleniti inventore.</p>
            <button className='home-btn'>
              <a href='#about'>Explore More</a>
            </button>
        </div>

        <Canvas className='canvas' style={{ height: 600, width: 600 }}
          camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
          <Effects />
        </Canvas>

    </div>
  )
}

export default Home