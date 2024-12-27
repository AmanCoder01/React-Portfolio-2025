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
                "degree": "Bachelor of Science in Computer Science",
                "university": "University of ABC",
                "duration": "Sep 2013 - May 2017",
            },
            {
                "degree": "High School Diploma",
                "university": "High School XYZ",
                "duration": "Sep 2009 - May 2013",
            },
            {
                "degree": "High School Diploma",
                "university": "High School XYZ",
                "duration": "Sep 2009 - May 2013",
            },
            {
                "degree": "High School Diploma",
                "university": "High School XYZ",
                "duration": "Sep 2009 - May 2013",
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
        <div className='mt-6 sm:mt-20 flex-col md:flex-row items-center  text-gray-100  sm:space-x-52'>
            <div className='max-w-[480px]'>
                <h1 className='text-3xl tracking-widest word-spacing-widest'>Why hire me?</h1>
                <p className='text-sm mt-2'>I am a highly motivated and detail-oriented <br /> individual with a passion
                    for learning and growth. </p>

                <div className='mt-10 gap-6 flex flex-col justify-center'>
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

            <div className='max-w-[480px] my-10 md:my-0 '>
                <h1 className='text-3xl tracking-widest word-spacing-widest'>
                    {resume === "Aboutme" ? "About Me" :
                        "My " + resume
                    }
                </h1>
                <p className='text-sm mt-2'>I am a highly motivated and detail-oriented <br /> individual with a passion
                    for learning and growth. </p>


                <div className='flex flex-wrap items-center gap-4 tracking-widest  mt-10'>


                    {
                        resume === "Experience" && resumeData[0].map((item, index) => (
                            <div className='bg-gray-800 p-6 rounded-lg w-full md:w-[230px] h-[150px]' key={index}>
                                <h2 className='text-primary'>{item.duration}</h2>
                                <h1 className=''>{item.title}</h1>
                                <p className='text-gray-500 text-sm mt-4'>{item.company}</p>
                            </div>
                        ))
                    }



                    {
                        resume === "Education" && resumeData[1].map((item, index) => (
                            <div className='bg-gray-800 p-6 rounded-lg w-full md:w-[230px] h-[150px]' key={index}>
                                <h2 className='text-primary'>{item.duration}</h2>
                                <h1 className=''>{item.degree}</h1>
                                <p className='text-gray-500 text-sm mt-4'>{item.university}</p>
                            </div>
                        ))
                    }





                    {
                        resume === "Skills" && resumeData[2].map((item, index) => (
                            <div className='bg-gray-800 p-6 rounded-lg ' key={index}>
                                {
                                    item.icon
                                }
                            </div>
                        ))
                    }




                </div>
            </div>
        </div>
    )
}

export default Resume
