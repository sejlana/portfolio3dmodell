
import { GithubIcon, HomeIcon, LinkedinIcon, NotebookTextIcon, PaletteIcon, PhoneCall, TwitterIcon, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const getIcon = (icon)  => {
    switch (icon){
        case 'home':
            return <HomeIcon className='w-full h-auto' strokeWidth={1.5}/>
        case 'about':
            return <User className='w-full h-auto' strokeWidth={1.5}/>
        case 'projects':
                return <PaletteIcon className='w-full h-auto' strokeWidth={1.5}/>
        case 'contact':
                return <PhoneCall className='w-full h-auto' strokeWidth={1.5}/>
        case 'github':
                return <GithubIcon className='w-full h-auto' strokeWidth={1.5}/>
        case 'linkedin':
                return <LinkedinIcon className='w-full h-auto' strokeWidth={1.5}/>
        case 'resume':
                return <NotebookTextIcon className='w-full h-auto' strokeWidth={1.5}/>
        case 'twitter':
                return <TwitterIcon className='w-full h-auto' strokeWidth={1.5}/>
            default:
                <HomeIcon className='w-full h-auto' strokeWidth={1.5}/>

    }
}
const NavButton = ({x,y,label,link, icon, newTab}) => {
  return (
    <div className='absolute cursor-pointer z-50'
    style={{transform: `translate(${x}, ${y})`}}>
        <Link href={link} target={newTab ? '_blank' : '_self'} 
         className='text-foreground rounded-full flex items-center justify-center
         bg-background/20 border border-accent/30 border-solid backdrop-blur[6px]
         shadow-glass-big hover:shadow-glass-small'
         aria-label={label}>
         <span className='relative w-14 h-14 p-4 animate-spin-diverse group-hover:pause'>
           {getIcon(icon)}
           <span >
            {label}
           </span>
         </span>
        </Link>
    </div>
  )
}

export default NavButton