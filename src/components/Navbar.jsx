import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' py-3'>
            <div className='flex items-center justify-between '>
                <Link to="/" className='text-3xl text-gray-100'>Aman <span className='text-primary text-4xl'>.</span></Link>


                <div className='hidden sm:flex items-center gap-6   '>
                    <ul className='flex items-center gap-2 sm:gap-8  '>
                        <Link to="/">
                            <li className='text-gray-100 hover:text-gray-300 hover:border-b-2 border-b-green-500  text-lg'>Home</li>
                        </Link>
                        <Link to="/services">
                            <li className='text-gray-100 hover:text-gray-300  hover:border-b-2 border-b-green-500  text-lg'>Services</li>
                        </Link>
                        <Link to="/">
                            <li className='text-gray-100 hover:text-gray-300  hover:border-b-2 border-b-green-500  text-lg'>Resume</li>
                        </Link>
                        <Link to="/">
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
