import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ResponsiveComponent from '../ResponsiveComponent'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const getIcon = (icon) => {
  switch (icon) {
    case 'home':
      return <Home className='w-full h-auto' strokeWidth={1.5} />
    case 'about':
      return <User className='w-full h-auto' strokeWidth={1.5} />
    case 'projects':
      return <Palette className='w-full h-auto' strokeWidth={1.5} />
    case 'contact':
      return <Phone className='w-full h-auto' strokeWidth={1.5} />
    case 'github':
      return <Github className='w-full h-auto' strokeWidth={1.5} />
    case 'linkedin':
      return <Linkedin className='w-full h-auto' strokeWidth={1.5} />
    case 'twitter':
      return <Twitter className='w-full h-auto' strokeWidth={1.5} />
    case 'resume':
      return <NotebookText className='w-full h-auto' strokeWidth={1.5} />

    default:
      return <Home className='w-full h-auto' strokeWidth={1.5} />
  }
}

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
}

const NavLink = motion(Link)

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = 'right',
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className='absolute cursor-pointer z-50'
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? '_blank' : '_self'}
              className='text-foreground  rounded-full flex items-center justify-center
              custom-bg'
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className='relative  w-14 h-14 p-4 animate-spin-diverse 
              group-hover:pause hover:text-accent'>
                {getIcon(icon)}
                <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
                {label}
              </span>
            </NavLink>
          </div>
        ) : (
          <div className='w-fit cursor-pointer z-50'>
            <NavLink
              variants={item}
              href={link}
              target={newTab ? '_blank' : '_self'}
              className='text-foreground  rounded-full flex items-center justify-center
              custom-bg'
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className='relative  w-10 h-10  xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent'>
                {getIcon(icon)}
                <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
              </span>
              <span className='px-1 w-20 h-10 flex items-center justify-center'>
                {label}
              </span>
            </NavLink>
          </div>
        )
      }}
    </ResponsiveComponent>
  )
}

export default NavButton
