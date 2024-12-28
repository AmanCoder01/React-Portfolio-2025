import React, { useState } from 'react'
import { FaDocker, FaGithub, FaJava } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiCss3, SiHtml5, SiJavascript, SiPython, SiReact } from "react-icons/si";

const Resume = () => {
    const [resume, setResume] = useState('Experience');

    let experiences, education, skills;
    const resumeData = [
        experiences = [
            {
                title: "Web Developer",
                company: "ABC Corporation",
                duration: "2024 - Present",
            },
            {
                title: "Internship",
                company: "InternElite ltd.",
                duration: "Jan 2024 - Apr 2024",
            },
            {
                title: "Software Engineer",
                company: "ABC Corporation",
                duration: "Jan 2020 - Present",
            },
            {
                title: "Software Engineer",
                company: "ABC Corporation",
                duration: "Jan 2020 - Present",
            },

        ],
        education = [
            {
                "degree": "Masters In Computer Applications",
                "university": "AKTU , Lucknow",
                "duration": "Oct 2024 - Present",
            },
            {
                "degree": "Bachelor of Computer Applications",
                "university": "MGKVP ,Varanasi",
                "duration": "Oct 2021 - Oct 2024",
            },
            {
                "degree": "Class 12th",
                "university": "RPM Academy ,Gorakhpur",
                "duration": "Sep 2020 - May 2021",
            },
            {
                "degree": "Class 10th",
                "university": "RPM Academy ,Gorakhpur",
                "duration": "Sep 2018 - May 2019",
            },
        ],
        skills = [
            {
                icon: <SiJavascript size={30} />
            },
            {
                icon: <SiHtml5 size={30} />
            },
            {
                icon: <SiCss3 size={30} />
            },
            {
                icon: <SiReact size={30} />
            },
            {
                icon: <SiPython size={30} />
            },
            {
                icon: <FaJava size={30} />
            },
            {
                icon: <FaGithub size={30} />
            },
            {
                icon: <RiTailwindCssFill size={30} />
            },
            {
                icon: <FaDocker size={30} />
            },


        ]
    ]





    return (
        <div className='h-full  flex flex-col md:flex-row items-center   text-gray-100 gap-8'>
            <div className='w-full md:max-w-[480px] h-full py-6  md:py-32 '>
                <h1 className='text-3xl tracking-widest word-spacing-widest'>Why hire me?</h1>
                <p className='text-sm mt-2 text-gray-500'>I am a highly motivated and detail-oriented <br /> individual with a passion
                    for learning and growth. </p>

                <div className='mt-10 gap-6 flex flex-col justify-center w-full md:max-w-[400px]'>
                    <button
                        onClick={() => setResume('Experience')}
                        className={`${resume === 'Experience' ? 'bg-primary text-black' : 'bg-gray-800'}  rounded-lg px-3 sm:px-28 py-2 tracking-widest font-medium`}>Experience</button>

                    <button
                        onClick={() => setResume('Education')}
                        className={`${resume === 'Education' ? 'bg-primary text-black' : 'bg-gray-800'}  rounded-lg px-3 sm:px-28 py-2 tracking-widest font-medium`}>Education</button>

                    <button
                        onClick={() => setResume('Skills')}
                        className={`${resume === 'Skills' ? 'bg-primary text-black' : 'bg-gray-800'}  rounded-lg px-3 sm:px-28 py-2 tracking-widest font-medium`}>Skills</button>

                    <button
                        onClick={() => setResume('Aboutme')}
                        className={`${resume === 'Aboutme' ? 'bg-primary text-black' : 'bg-gray-800'}  rounded-lg px-3 sm:px-28 py-2 tracking-widest font-medium`}>About me</button>
                </div>

            </div>

            <div className='w-full  md:max-w-[480px] py-6 pb-8  mx-auto'>
                <h1 className='text-3xl tracking-widest word-spacing-widest'>
                    {resume === "Aboutme" ? "About Me" :
                        "My " + resume
                    }
                </h1>



                <div className='flex  flex-wrap items-center gap-4 tracking-widest  mt-3'>

                    {

                        resume === "Experience" && <p className=' text-sm word-spacing-widest tracking-widest text-gray-500 mb-10' >I am fresher currently exploring new technologies and completed one internship.</p>}

                    {
                        resume === "Experience" && resumeData[0].map((item, index) => (
                            <div className='bg-gray-800 p-6 rounded-lg w-full md:w-[230px] h-[160px]' key={index}>
                                <h2 className='text-primary'>{item.duration}</h2>
                                <h1 className=''>{item.title}</h1>
                                <p className='text-gray-500 text-sm mt-4'>{item.company}</p>
                            </div>
                        ))
                    }



                    {

                        resume === "Education" && <p className=' text-sm word-spacing-widest tracking-widest text-gray-500 mb-10' >Currently i am doing my masters from Greater Noida Institute Of Technology .</p>}
                    {
                        resume === "Education" && resumeData[1].map((item, index) => (
                            <div className='bg-gray-800 p-6 rounded-lg w-full md:w-[230px] h-[160px]' key={index}>
                                <h2 className='text-primary'>{item.duration}</h2>
                                <h1 className=''>{item.degree}</h1>
                                <p className='text-gray-500 text-sm mt-4'>{item.university}</p>
                            </div>
                        ))
                    }





                    {

                        resume === "Skills" && <p className=' text-sm word-spacing-widest tracking-widest text-gray-500 mb-10' >I specialize in designing, coding, and maintaining software applications that address user needs. My expertise spans various programming languages and development tools, enabling me to craft efficient and scalable solutions.</p>}
                    {resume === "Skills" && resumeData[2].map((item, index) => (
                        <div className='bg-gray-800 p-6 rounded-lg ' key={index}>
                            {
                                item.icon
                            }
                        </div>
                    ))
                    }


                    {
                        resume === "Aboutme" && (
                            <div className='text-gray-100'>
                                <p className=' text-sm word-spacing-widest tracking-widest text-gray-500' >I specialize in designing, coding, and maintaining software applications that address user needs. My expertise spans various programming languages and development tools, enabling me to craft efficient and scalable solutions.</p>
                                <div className='mt-10 flex flex-col justify-center gap-6 '>
                                    <div className='flex flex-col sm:flex-row sm:items-center   text-nowrap'>
                                        <h1 className='w-full sm:w-1/2'><span className='text-gray-500 text-sm'>Name:</span> Aman Maurya</h1>
                                        <h1 className='w-full sm:w-1/2'><span className='text-gray-500 text-sm'>Phone:</span> +91 9026849004</h1>
                                    </div>
                                    <div className='flex flex-col sm:flex-row sm:items-center  '>
                                        <h1 className='w-full sm:w-1/2'><span className='text-gray-500 text-sm'>Experience:</span> 1+ Years</h1>
                                        <h1 className='w-full sm:w-1/2'><span className='text-gray-500 text-sm'>Skype:</span> .com</h1>
                                    </div>
                                    <div className='flex flex-col sm:flex-row sm:items-center '>
                                        <h1 className='w-full sm:w-1/2'><span className='text-gray-500 text-sm'>Nationality:</span> Indian</h1>
                                        <h1 className='w-full sm:w-1/2'><span className='text-gray-500  text-sm'>Email:</span> amanofficialcoder01@gmail.com</h1>
                                    </div>
                                    <div className='flex flex-col sm:flex-row sm:items-center  '>
                                        <h1 className='w-full sm:w-1/2'><span className='text-gray-500 text-sm'>Freelance:</span> Not Yet</h1>
                                        <h1 className='w-full sm:w-1/2'><span className='text-gray-500 text-sm'>Language:</span> English, Hindi</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    }




                </div>
            </div >
        </div >
    )
}

export default Resume
