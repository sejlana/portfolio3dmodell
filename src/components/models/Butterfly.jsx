'use client'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ButterflyModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/models/butterfly-transformed.glb',
  )
  const { actions } = useAnimations(animations, group)

  useFrame((state) => {
    group.current.position.y = -0.3 + Math.sin(state.clock.elapsedTime) * 0.15
  })

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0.2, 0, 0]}
      scale={[20, 20, 20]}
      rotation={[-0.35, 1, 0.5]}
    >
      <group>
        <group name='skeletal3' scale={0.01}>
          <primitive object={nodes.root_jnt4} />
        </group>
        <skinnedMesh
          name='butterfly2'
          geometry={nodes.butterfly2.geometry}
          material={nodes.butterfly2.material}
          skeleton={nodes.butterfly2.skeleton}
          scale={0.01}
          material-color='pink'
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/butterfly-transformed.glb')
