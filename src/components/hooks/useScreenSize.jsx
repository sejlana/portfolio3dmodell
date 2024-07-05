'use client'

import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;



// 'use client'

// const { useState, useEffect } = require('react')

// const useScreenSize = () => {
//   const [screenSize, setScreenSize] = useState(window.innerWidth)

//   useEffect(() => {
//     function handleResize() {
//       setScreenSize(window.innerWidth)
//     }

//     handleResize()
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   return screenSize
// }

// export default useScreenSize
