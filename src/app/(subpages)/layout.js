import HomeButton from '@/components/projects/HomeButton'
export default function SubPagesLayout({ children }) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32'>
      <HomeButton>Home</HomeButton>
      {children}
    </main>
  )
}
