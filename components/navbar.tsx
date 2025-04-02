'use client'
import React from 'react'
import NavLogo from './NavLogo'
import Navigation from './Navigation'
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import { User } from '@clerk/nextjs/server'

const Navbar = () => {
  const { user } =useUser()
  return (
    <nav className='bg-gradient-to-b from-blue-700 to-blue-500 py-5 px-5 w-screen pb-36'>
        <div className='w-full container mx-auto flex justify-between items-center'>
            <div className='flex items-center gap-15'>
              <NavLogo/>
              <Navigation />
            </div>
            <div>
              <ClerkLoading>
                <Loader2 className='size-8 animate-spin text-gray-400'/>
              </ClerkLoading>
              <ClerkLoaded>
                <UserButton/>
              </ClerkLoaded>
            </div>
        </div>
        <div className='container mx-auto'>
          <h1 className='text-white text-2xl font-semibold mt-8'>Wellcome Back{user ? ', ': ' '} {user?.firstName && user.firstName} 👋</h1>
          <p className='text-base text-blue-900 mt-2'>There is your's Financial Statement.</p>
        </div>
    </nav>
  )
}

export default Navbar