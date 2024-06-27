/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 butterfly.glb --transform 
Files: butterfly.glb [15.71MB] > D:\Full-Stack-Projects\Portfolio\portfolio_website_next\animated-flying-fluttering-butterfly-loop\source\butterfly-transformed.glb [1.39MB] (91%)
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ButterflyModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/butterfly-transformed.glb')
  const { actions } = useAnimations(animations, group)
  const modelRef = useRef()
  
  useFrame((state, delta, xrFrame) => {
        modelRef.current.position.y =
          -0.3 + Math.sin(state.clock.elapsedTime) * 0.15;
      });
  return (
    <group ref={group} {...props} dispose={null}
    ref={modelRef}
    position={[0, 0, 0]}
      scale={[15, 15, 15]}
      rotation={[0.25, 1, 0]}>
      <group>
        <group name="skeletal3" scale={0.01}>
          <primitive object={nodes.root_jnt4} />
        </group>
        <skinnedMesh name="butterfly2" geometry={nodes.butterfly2.geometry} material={nodes.butterfly2.material} skeleton={nodes.butterfly2.skeleton} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/butterfly-transformed.glb')
