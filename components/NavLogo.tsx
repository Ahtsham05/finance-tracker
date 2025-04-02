import React from 'react'
import Logo from './logo'

const NavLogo = () => {
    return (
        <div className='hidden lg:flex items-center'>
            <Logo color='white' />
            <h1 className='font-semibold ml-2 text-xl text-white'>Finance Tracker</h1>
        </div>
    )
}

export default NavLogo