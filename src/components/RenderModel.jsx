'use client'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

const RenderModel = ({ children, className }) => {
  return (
    <Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset='sunset' />
    </Canvas>
  )
}

export default RenderModel



// 'use client'
// import { Environment } from '@react-three/drei'
// import { Canvas, useThree } from '@react-three/fiber'
// import clsx from 'clsx'
// import React, { Suspense, useEffect } from 'react'

// const HandleContextLoss = () => {
//   const { gl } = useThree()

//   useEffect(() => {
//     const handleContextLost = (event) => {
//       event.preventDefault()
//       console.log('WebGL context lost')
//     }

//     const handleContextRestored = () => {
//       console.log('WebGL context restored')
//     }

//     gl.domElement.addEventListener('webglcontextlost', handleContextLost, false)
//     gl.domElement.addEventListener('webglcontextrestored', handleContextRestored, false)

//     return () => {
//       gl.domElement.removeEventListener('webglcontextlost', handleContextLost)
//       gl.domElement.removeEventListener('webglcontextrestored', handleContextRestored)
//     }
//   }, [gl])

//   return null
// }

// const RenderModel = ({ children, className }) => {
//   return (
//     <Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
//       <Suspense fallback={null}>
//         {children}
//       </Suspense>
//       <Environment preset='sunset' />
//       <HandleContextLoss />
//     </Canvas>
//   )
// }

// export default RenderModel
