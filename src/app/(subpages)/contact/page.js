import Image from 'next/image'
import bgImage from '../../../../public/background/pink-mushroom-background.jpeg'
import Form from '@/components/contacts/Form'

export default function Contact() {
  return (
    <>
      <Image
        src={bgImage}
        alt='background-image'
        className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25'
      />
      <article className='relative w-full flex flex-col items-center justify-center space-y-8'>
        <div className='relative items-center justify-center space-y-6 w-3/4'>
          <h1 className='text-accent font-semibold text-center text-4xl capitalize'>
            Sejlana
          </h1>
          <p className='text-center font-light'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Form />
      </article>
    </>
  )
}
