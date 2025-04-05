import Logo from '@/components/logo'
import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

export default function Page() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>
        <div className='flex items-center justify-center p-5'>
          <ClerkLoading>
            <Loader2 className='h-8 w-8 animate-spin' />
          </ClerkLoading>
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
        </div>
        <div className='hidden lg:flex items-center justify-center bg-blue-500'>
          <Logo height='38px' width='38px' color='white' />
          <h1 className='text-center font-semibold text-white text-2xl ml-2'>Finance Tracker</h1>
        </div>
      </div>
    </>)
}