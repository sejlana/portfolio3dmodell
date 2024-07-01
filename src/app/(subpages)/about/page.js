import Image from 'next/image';
import bgImage from '../../../../public/background/about-background.png';

import ButterflyModel from '@/components/models/Butterfly';
import Navigation from '@/components/navigation';
import ProjectList from '@/components/projects';
import { projectsData } from '../../data';
import RenderModel from '@/components/RenderModel';
import Link from 'next/link';
import AboutDetails from '@/components/about';

export default function Home() {
  return (
    <>
      <Image
        src={bgImage}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <Link href="/">
        <div className="flex items-center justify-center fixed top-20 left-10  h-screen">
          <RenderModel>
            <ButterflyModel />
          </RenderModel>
        </div>
      </Link>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[25%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-9xl text-accent">About Me</h1>
        </div>
        <AboutDetails />
      </div>
    </>
  );
}
