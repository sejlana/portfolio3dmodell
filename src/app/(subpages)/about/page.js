import Image from 'next/image'
import bgImage from '../../../../public/background/pink-mushroom-background.jpeg'

import ButterflyModel from '@/components/models/Butterfly'
import RenderModel from '@/components/RenderModel'
import Link from 'next/link'
import AboutDetails from '@/components/about'

export default function Home() {
  return (
    <>
      <Image
        src={bgImage}
        alt='background-image'
        className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25'
      />

      <Link href='/'>
        <div className='flex items-center justify-center fixed top-20 left-10  h-screen'>
          <RenderModel>
            <ButterflyModel />
          </RenderModel>
        </div>
      </Link>
      <div className='p-10 relative top-5 w-full flex flex-col items-center justify-center mt-8'>
        <div className='absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2'>
          <h1 className='font-bold text-6xl xs:text-7xl sm:text-8xl text-accent'>
            About Me
          </h1>
        </div>
      </div>
      <AboutDetails />
    </>
  )
}
