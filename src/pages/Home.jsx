import './home.css'
import { BlurPass } from 'postprocessing'
import Box from '../components/Box'
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { render } from "react-dom";
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
    <div className='home'>
        <div className="home-info">
            <h1 className='home-title'>WORLD’S BIGGEST <br /> CRYPTOCURRENCY <br /> PLATFORM</h1>
            <p className='home-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem facere assumenda recusandae nam soluta nemo eveniet quia deleniti inventore.</p>
            <button className='home-btn'>Let's Start</button>
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