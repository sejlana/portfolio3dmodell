
import {HomeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const HomeButton = ({x,y,label,link, icon, newTab}) => {
  return (
    <div className='absolute cursor-pointer z-50'
    style={{transform: `translate(${x}, ${y})`}}>
        <Link href={'/'} 
        target={'_self'} 
         className='text-foreground rounded-full flex items-center justify-center
         custom-bg fixed top-4 left-4 w-fit self-start z-50'
         aria-label={'home'}
         name={'home'}>
         <span className='relative w-14 h-14 p-4 '>
          <HomeIcon className='w-full h-auto strokeWidth={1.5}'/>
         </span>
        </Link>
    </div>
  )
}

export default HomeButton