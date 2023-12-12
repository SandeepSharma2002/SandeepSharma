import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header  from './components/header'
import  ActiveSectionContextProvider  from '@/context/acticeSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sandeep | personal Portfolio',
  description: 'I am Frontend Developer and Java Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en" className="!scroll-smooth ">
      <body className={`${inter.className} bg-oxford_blue text-gray-950 relative h-full pt-28 sm:pt-36`}>
        <div className='bg-white opacity-30 absolute top-[-8rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <ActiveSectionContextProvider>
        <Header/>
        {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
