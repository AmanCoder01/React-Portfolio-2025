import React, { useState } from 'react'
import { assets } from '../assets'
import { GrGithub } from 'react-icons/gr';
import { FaArrowLeft, FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";

const myWork = [
    {
        "id": 1,
        "title": "Imagify Project",
        "description": "A project to convert text to image",
        "image": assets.imagify,
        "tech": ["MERN", "Framer Motion", "Docker", "AI"],
        "github": "https://github.com/AmanCoder01/SAAS-Imagify",
        "live": "https://imagify-ai-sigma.vercel.app/"
    },
    {
        "id": 2,
        "title": "ToDo App",
        "description": "A simple to-do list app",
        "image": assets.todo,
        "tech": ["MERN", "React Hook Form"],
        "github": "https://github.com/AmanCoder01/todo-app",
        "live": "https://todo-app-frontend-two.vercel.app/"
    },
]

const Work = () => {
    const [show, setShow] = useState(1);


    const decreaseHandler = () => {
        if (show > 1) {
            setShow(show - 1)
        }
    }

    const increaseHandler = () => {
        if (show < myWork.length) {
            setShow(show + 1)
        }
    }

    console.log(show);


    return (
        <div className='py-10 md:py-28'>
            {
                myWork.map((item, index) => (
                    show === item.id &&
                    <div key={index} className='flex flex-col md:flex-row items-center gap-10  justify-between'>
                        <div className='w-full sm:max-w-[480px] order-2 md:order-2'>
                            <h1 className='text-6xl font-semibold'>0{item.id}</h1>
                            <h1 className='mt-4 text-5xl'>{item.title}</h1>
                            <p className='text-lg my-2 mb-3 text-gray-500'>{item.description}</p>
                            <div className='flex gap-4 items-center flex-wrap'>
                                {
                                    item.tech.map((tech, index) => (
                                        <div key={index} className='bg-gray-800 rounded-full px-3 py-2 text-primary'>{tech}</div>
                                    ))
                                }
                            </div>
                            <div className='mt-10 border-t-2 border-gray-500 flex items-center gap-6'>
                                <a href={item.github} target='_blank' className='mt-6 border rounded-full w-10 h-10 flex items-center justify-center border-primary cursor-pointer'>
                                    <GrGithub color='#1fe81c' size={24} />
                                </a>
                                <a href={item.live} target='_blank' className='mt-6 border rounded-full w-10 h-10 flex items-center justify-center border-primary cursor-pointer'>
                                    <FaArrowTrendUp hub color='#1fe81c' size={24} />
                                </a>

                            </div>
                        </div>

                        <div>
                            <img src={item.image} className='object-contain rounded-md w-[480px] ' alt="" />
                        </div>

                    </div>
                ))
            }

            <div className='flex float-end items-center gap-4'>
                <div onClick={decreaseHandler} className='mt-6 border rounded-full w-10 h-10 flex items-center justify-center border-primary cursor-pointer'>
                    <FaArrowLeft hub color='#1fe81c' size={24} />
                </div>
                <div onClick={increaseHandler} className='mt-6 border rounded-full w-10 h-10 flex items-center justify-center border-primary cursor-pointer'>
                    <FaArrowRight hub color='#1fe81c' size={24} />
                </div>
            </div>

        </div>
    )
}

export default Work
