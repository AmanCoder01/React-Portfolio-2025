import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { assets } from '../assets';
import { FaHackerrank } from 'react-icons/fa6';
import { motion } from "motion/react"


const Home = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}

                className='flex items-center gap-5 sm:gap-32 justify-between flex-wrap mb-10'>
                <div className='max-w-[480px] order-2 sm:order-1 mt-10  sm:mt-20 text-gray-100 '>
                    <p className='text-sm mb-1 word-spacing-widest  tracking-widest'>Software Developer</p>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className='text-6xl tracking-widest'>Hello I'm  <br />Aman <span className='text-primary'>Maurya</span></motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className='mt-6 text-sm word-spacing-widest  tracking-widest' >I specialize in designing, coding, and maintaining software applications that address user needs. My expertise spans various programming languages and development tools, enabling me to craft efficient and scalable solutions.</motion.p>

                    <div className='mt-10 flex items-center gap-2  sm:gap-4'>
                        <a download href={assets.amanpdf} className='cursor-pointer flex items-center sm:gap-2 whitespace-nowrap uppercase border-2 border-primary rounded-full  max:w-52 py-2 px-3'>
                            Download cv
                            <AiOutlineDownload size={20} />
                        </a>
                        <a href='https://github.com/AmanCoder01' target='_blank' className='ml-3 sm:ml-6 border rounded-full w-10 h-10 flex items-center justify-center border-primary'>
                            <GrGithub color='#1fe81c' size={24} />
                        </a>
                        <a href='https://www.linkedin.com/in/amancoder01' target='_blank' className='border rounded-full w-10 h-10 flex items-center justify-center border-primary'>
                            <GrLinkedin color='#1fe81c' size={18} />
                        </a>
                        <a href='https://www.instagram.com/mr_aman_091' target='_blank' className=' border rounded-full w-10 h-10 flex items-center justify-center border-primary'>
                            <AiFillInstagram color='#1fe81c' size={24} />
                        </a>
                        <a href='https://www.hackerrank.com/profile/amanofficialcod1' target='_blank' className=' border rounded-full w-10 h-10 flex items-center justify-center border-primary'>
                            <FaHackerrank color='#1fe81c' size={24} />
                        </a>
                    </div>
                </div>

                <div className='w-[380px] max-w-[480px] mt-5 order-1 sm:order-2 sm:mt-20 text-gray-100 '>
                    <div className='border-4  p-6  border-t-transparent border-b-transparent border-primary  rounded-full overflow-hidden animate-pulse'>
                        <img src={assets.photo} className='translate-y-6' width={280} alt="" />
                    </div>
                </div>

            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-between mt-20 flex-wrap gap-6">
                <div className='flex items-center gap-2 sm:gap-3 w-28 text-gray-100'>
                    <h1 className="text-3xl sm:text-5xl font-medium">01</h1>
                    <p className='text-sm sm:tracking-widest'>Years of experience</p>
                </div>
                <div className='flex items-center gap-3 w-28 text-gray-100'>
                    <h1 className="text-3xl sm:text-5xl font-medium">04</h1>
                    <p className='text-sm sm:tracking-widest'>Projects completed</p>
                </div>
                <div className='flex items-center gap-3 w-28 text-gray-100'>
                    <h1 className="text-3xl sm:text-5xl font-medium">06</h1>
                    <p className='text-sm sm:tracking-widest'>Technologies mastered</p>
                </div>
                <div className='flex items-center gap-3 w-28 text-gray-100'>
                    <h1 className="text-3xl sm:text-5xl font-medium">250</h1>
                    <p className='text-sm sm:tracking-widest'>Code commits</p>
                </div>
            </motion.div>

        </>

    )
}

export default Home
