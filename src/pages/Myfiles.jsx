import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { assets } from '../assets'

const Myfiles = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <a href="./Interrupts_in_COA_Aman.pptx" download="Interrupts_in_COA_Aman.pptx" className='cursor-pointer flex items-center sm:gap-2 whitespace-nowrap uppercase border-2 border-primary rounded-full  max:w-52 py-2 px-3'>
                Download COA PPT
                <AiOutlineDownload size={20} />
            </a>
        </div>
    )
}

export default Myfiles
