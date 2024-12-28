import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenuFold } from "react-icons/ai";


const Navbar = () => {
    return (
        <div className=' py-3'>
            <div className='flex items-center justify-between'>
                <Link to="/" className='text-3xl text-gray-100'>Aman <span className='text-primary text-4xl'>.</span></Link>

                <div className='sm:hidden relative group'>
                    <AiOutlineMenuFold className='cursor-pointer ' size={26} />

                    <div className='absolute hidden bg-white group-hover:block  top-6 right-0 z-10 text-black rounded '>
                        <ul className='p-3'>
                            <Link to="/">
                                <li className='  text-lg'>Home</li>
                            </Link>
                            <Link to="/services">
                                <li className='  text-lg'>Services</li>
                            </Link>
                            <Link to="/resume">
                                <li className='  text-lg'>Resume</li>
                            </Link>
                            <Link to="/work">
                                <li className='  text-lg'>Work</li>
                            </Link>
                        </ul>
                    </div>

                </div>



                <div className='hidden sm:flex items-center gap-6   '>
                    <ul className='flex items-center gap-2 sm:gap-8  '>
                        <Link to="/">
                            <li className='text-gray-100 hover:text-gray-300 hover:border-b-2 border-b-green-500  text-lg'>Home</li>
                        </Link>
                        <Link to="/services">
                            <li className='text-gray-100 hover:text-gray-300  hover:border-b-2 border-b-green-500  text-lg'>Services</li>
                        </Link>
                        <Link to="/resume">
                            <li className='text-gray-100 hover:text-gray-300  hover:border-b-2 border-b-green-500  text-lg'>Resume</li>
                        </Link>
                        <Link to="/work">
                            <li className='text-gray-100 hover:text-gray-300  hover:border-b-2 border-b-green-500  text-lg'>Work</li>
                        </Link>
                        <Link to="/">
                            <li className='text-gray-100 hover:text-gray-300 text-lg  hover:border-b-2 border-b-green-500 '>Contact</li>
                        </Link>
                    </ul>

                    <button className='bg-primary px-2 sm:px-6 py-2 rounded-full text-black font-medium'>
                        Hire Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
