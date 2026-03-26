import React from 'react'
import { experiences } from '../constants'

const Experience = () => {
    return (
        <section id='experience' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom'>

            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-white'>EXPERIENCE</h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>A collection of my work experience and the roles I have taken in various oraganisations</p>
            </div>

            <div className='relative'>

                <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full'> </div>
                {experiences.map((experience, index) => (
                    <div key={experience.id} className={`relative flex flex-col sm:flex-row items-center mb-28 ${index % 2 == 0 ? "sm:justify-end" : "sm:justify-start"}`}
                    >
                        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center z-10'>
                            <img src={experience.img} alt={experience.company} className='w-full h-full object-cover rounded-full' />
                        </div>

                        <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236.0.3)] ${index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"} hover:scale-105 transition transition-transfrom duration-300 `}>
                            <div className='flex items-center space-x-6'>
                                <div className='w-16 h-16 bg-white rounded-md flex items-center justify-center overflow-hidden shrink-0 '>
                                    <img src={experience.img} alt={experience.company} className='w-12 h-12 object-contain' />
                                </div>
                                <div className='flex flex-col justify-between' >
                                    <div>
                                        <h3 className='text-xl sm:text-2xl font-semibold text-white'>{experience.role}</h3>
                                        <h4 className='text-md sm:text-sm text-gray-300'>{experience.company}</h4>
                                    </div>

                                    <p className='text-sm text-gray-500 mt-2'>{experience.date}</p>
                                    <p className='mt-4 text-gray-400'>{experience.desc}</p>
                                    <div className='mt-4'>
                                        <h5 className='font-medium text-white'>Skills :</h5>

                                        <ul className='flex flex-wrap mt-2'>
                                            {experience.skills.map((skills,index)=>(
                                                <li key={index} className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:texr-sm rounded-lg mr-2 mb-2 border border-gray-400'>
                                                    {skills}
                                                </li>
                                            ))}
                                        </ul>

                    
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>
                ))}



            </div>

        </section>

    )
}

export default Experience