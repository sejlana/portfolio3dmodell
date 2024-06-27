import Image from 'next/image';
import bgImage from '../../public/background/pink-mushroom-background.jpeg'
import RenderModel from '@/components/RenderModel';

import FairyModel from '@/components/models/Fairy';
import ButterflyModel from '@/components/models/Butterfly';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bgImage} alt='background-image' fill className='w-full h-full object-cover object-center opacity-25' />
    <div className='w-full h-screen'>
    <Navigation/>
      <RenderModel>
        {/* <FairyModel/> */} 
        <ButterflyModel/>
      </RenderModel>

    </div>
    </main>
  );
}
