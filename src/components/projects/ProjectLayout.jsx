import Link from 'next/link'
import React from 'react'

const ProjectLayout = ({ name, description, demoLink }) => {
  return (
    <Link
      href={demoLink}
      target={'_blank'}
      className='flex items-center justify-between w-full rounded-lg overflow-hidden p-6 custom-bg'
    >
      <div className='flex w-full space-x-4'>
        <h2 className='text-foreground flex-grow'>{name}</h2>
        <p className='text-muted sm:inline-block'>{description}</p>
      </div>
    </Link>
  )
}

export default ProjectLayout
