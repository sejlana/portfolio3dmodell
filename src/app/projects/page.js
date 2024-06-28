import Image from 'next/image';
import bgImage from '../../../public/background/projects-background.png'


import ButterflyModel from '@/components/models/Butterfly';
import Navigation from '@/components/navigation';
import ProjectList from '@/components/projects';
import { projectsData } from '../data';
import RenderModel from '@/components/RenderModel';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bgImage} alt='background-image' fill className='w-full h-full object-cover object-center opacity-25' />
    
      <ProjectList projects={projectsData} />

      <RenderModel>
        <ButterflyModel/>
      </RenderModel>

    </main>
  );
}
