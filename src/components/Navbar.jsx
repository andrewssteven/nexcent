import React from 'react'
import Button from './Button'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <nav className='md:mx-20 mx-3 justify-between  flex items-center'>
        <img src={Logo} alt="" />
        <ul className='hidden md:flex space-x-10 font-semibold  '>
            <li className='cursor-pointer hover:underline decoration-2 decoration-green-600 transition duration-3000 ease-in-out'>Home</li>
            <li className='cursor-pointer hover:underline decoration-2 decoration-green-600 transition duration-3000 ease-in-out'>Services</li>
            <li className='cursor-pointer hover:underline decoration-2 decoration-green-600 transition duration-3000 ease-in-out'>Feature</li>
            <li className='cursor-pointer hover:underline decoration-2 decoration-green-600 transition duration-3000 ease-in-out'>Product</li>
            <li className='cursor-pointer hover:underline decoration-2 decoration-green-600 transition duration-3000 ease-in-out'>Testimonial</li>
            <li className='cursor-pointer hover:underline decoration-2 decoration-green-600 transition duration-3000 ease-in-out'>FAQ</li>
        </ul>
        <div className='hidden md:flex'>
            <Button text={"Login"} className={'text-shadow-green-600 text-green-600'}/>
            <Button text={"Sign up"} className={'bg-green-600 text-white'}/> 
        </div>
        {/* small screen menu bar */}
        <div className='flex flex-col gap-1 md:hidden'>
            <p className='bg-neutral-600 w-7 h-1 rounded-2xl p '></p>
            <p className='bg-neutral-600 w-7 h-1 rounded-2xl'></p>
            <p className='bg-neutral-600 w-7 h-1 rounded-2xl'></p>
        </div>
    </nav>
  )
}

export default Navbar