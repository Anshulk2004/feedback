'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitch from './Theme'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Feedback Form', path: '/feedback' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-700 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className='flex-shrink-0 mr-4'>
                <Image src = "/logo.svg" alt = "logo" width={40} height={40}/>
            </div>   
            <div className='flex items-baseline space-x-4'>           
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? 'bg-gray-900 text-white'
                    : 'text-black dark:text-gray-300 hover:bg-gray-400 hover:text-white'
                } px-3 py-3 rounded-md text-sm font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          </div>
          <div className="flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar