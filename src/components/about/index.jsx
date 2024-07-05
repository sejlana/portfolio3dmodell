import clsx from 'clsx'
import React from 'react'

const AboutLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'custom-bg p-8 rounded-xl flex items-center justify-center space-y-8 my-2',
        className,
      )}
    >
      {children}
    </div>
  )
}

const AboutDetails = () => {
  return (
    <section className='pt-32 w-full mx-10'>
      <div className='grid grid-cols-12 xs:gap-6 md:gap-8 gap-4 w-full'>
        <AboutLayout
          className={
            'col-span-full lg:col-span-8 row-span-2 flex-col items-center'
          }
        >
          <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
            Info
          </h2>
          <p className='font-light'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </AboutLayout>

        <AboutLayout className={'col-span-full lg:col-span-4 text-accent '}>
          <div className='font-semibold w-full text-left text-5xl'>
            30+ <sub className='font-semibold text-base'>happy clients</sub>
          </div>
        </AboutLayout>

        <AboutLayout className={'col-span-full lg:col-span-4  text-accent '}>
          <div className='font-semibold w-full text-left text-5xl '>
            4+{' '}
            <sub className='font-semibold text-base '>years of experience</sub>
          </div>
        </AboutLayout>

        <AboutLayout className='col-span-full lg:col-span-4  !p-0'>
          <img
            className='w-full h-full'
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=sejlana&theme=transparent&hide_border=true&title_color=fe6e5b&text_color=fe6e5b&text_bold=false'
            alt='sejlana'
            loading='lazy'
          />
        </AboutLayout>

        <AboutLayout className='col-span-full '>
          <img
            className='w-full h-full text-sm'
            src='https://skillicons.dev/icons?i=js,html,css,react,vite,'
            alt='sejlana'
            loading='lazy'
          />
        </AboutLayout>
      </div>
    </section>
  )
}

export default AboutDetails
