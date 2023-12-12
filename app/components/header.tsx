'use client'
import { useActiveSectionContext } from '@/context/acticeSection'
import { links } from '@/lib/data'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

    const { activeSection , setActiveSection} = useActiveSectionContext();
    
  return (
    <header className='z-[999] relative w-full'>
        <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white  shadow-lg shadow-[#fff]/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{y:-100, x:"-50%" , opacity:0}}
        animate={{y:0, x:"-50%" ,opacity:1}}>
        </motion.div>

        <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
            <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3'>
                {
                    links.map((link)=>
                    <motion.li key={link.hash} className='h-3/4 flex items-center justify-center relative' initial={{y:-100, opacity:0}}
                    animate={{y:0 ,opacity:1}}>
                        <Link href={link.hash} onClick={()=> setActiveSection(link.name)} className={clsx('w-full flex items-center justify-center px-3 py-3 hover:text-gray-950 transition',{"text-white": activeSection === link.name})}>{link.name}
                        {link.name === activeSection  && 
                        (<motion.span layoutId='activeSection' transition={{type:"spring" , stiffness:380, damping:30}} className='text-transparent bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] rounded-full absolute inset-0 -z-10 '></motion.span>)
                        }
                        </Link>
                    </motion.li>
                    )
                }
            </ul>
        </nav>
    </header>
  )
}

export default Header
