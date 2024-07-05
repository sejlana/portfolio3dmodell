import Image from 'next/image'
import bgImage from '../../../../public/background/pink-mushroom-background.jpeg'

import ButterflyModel from '@/components/models/Butterfly'
import Navigation from '@/components/navigation'
import ProjectList from '@/components/projects'
import { projectsData } from '../../data'
import RenderModel from '@/components/RenderModel'

export default function Home() {
  return (
    <>
      <Image
        src={bgImage}
        alt='background-image'
        className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25'
      />

      <div className='-z-10 flex items-center justify-center fixed top-20 left-10  h-screen'>
        <RenderModel>
          <ButterflyModel />
        </RenderModel>
      </div>
      <div className='my-10'>
        <ProjectList projects={projectsData} />
      </div>
    </>
  )
}
