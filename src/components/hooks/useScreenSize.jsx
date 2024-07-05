'use client'

const { useState, useEffect } = require('react')

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
