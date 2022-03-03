import React from 'react'

const Box = () => {
    
  return (
    <mesh rotation={[30, 0, 10]}>
        <boxBufferGeometry attach='geometry' args={[2,2,2]} />
        <meshLambertMaterial attach='material' color='#3cd4e9' />    
    </mesh>
  )
}

export default Box