import React, { useRef } from "react";
import {useFrame } from "@react-three/fiber";

const Box = () => {

  const boxRef = useRef();
  const matRef = useRef();

  useFrame(({clock}) => {
    boxRef.current.rotation.z += 0.01;
    matRef.current.emissiveIntensity = Math.abs(
      Math.sin(clock.elapsedTime * 0.5)
    );
  });

  return (
    <mesh ref={boxRef} rotation={[30, 0, 10]} scale={2.5}>
        <boxBufferGeometry attach='geometry' args={[2,2,2]} />
        <meshLambertMaterial attach='material' color='#3cd4e9' />    
        <meshPhysicalMaterial
          ref={matRef}
          color={"#3cd4e9"}
          
          emissive={"#3cd4e9"}
          emissiveIntensity={1}
        />
    </mesh>
  )
}

export default Box