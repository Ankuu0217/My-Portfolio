import React from 'react'
import { education } from '../constants'

const Education = () => {
    return (
        <section id='education' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3'>

            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-white'>EDUCATION</h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>My education has been a journey of learning and development. Here are the details of my academic background</p>
            </div>

            <div className='relative'>
``
                <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full'> </div>
                {education.map((edu, index) => (
                    <div key={edu.id} className={`relative flex flex-col sm:flex-row items-center mb-28 ${index % 2 == 0 ? "sm:justify-start" : "sm:justify-end"}`}
                    >
                        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center z-10'>
                            <img src={edu.img} alt={edu.school} className='w-full h-full object-cover rounded-full' />
                        </div>

                        <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236.0.3)] ${index % 2 === 0 ? "sm:mr-24" : "sm:ml-8"} hover:scale-105 transition transition-transfrom duration-300 `}>
                            <div className='flex items-center space-x-6'>
                                <div className='w-14 h-14 min-w-[56px] bg-white rounded-md flex items-center justify-center overflow-hidden shrink-0 '>
                                    <img src={edu.img} alt={edu.school} className='w-10 h-10 object-contain' />
                                </div>
                                <div className='flex flex-col justify-between' >
                                    <div>
                                        <h3 className='text-xl sm:text-2xl font-semibold text-white'>{edu.degree}</h3>
                                        <h4 className='text-md sm:text-sm text-gray-300'>{edu.school}</h4>
                                    </div>

                                    <p className='text-sm text-gray-500 mt-2'>{edu.date}</p>
                                    <p className='mt-4 text-gray-400 font-bold'>Grade: {edu.grade}</p>
                                    <p className='mt-4 text-gray-400'>{edu.desc}</p>



                                </div>

                            </div>

                        </div>

                    </div>
                ))}



            </div>

        </section>


    )
}

export default Education