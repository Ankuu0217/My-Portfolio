import React, { useState } from 'react'
import { projects } from '../constants'

const Work = () => {

    const [selectedProject, setSelectedProject] = useState(null)

    const handleOpenModel = (projects) => {
        setSelectedProject(projects)
    }

    const handleCloseModel = (projects) => {
        setSelectedProject(null);
    }

    return (
        <section id='work' className='py-24 pb-24 md:px-[12vw] lg:px-[20vw] font-sans relative' >
            <div className='text-center mb-16'>
                <h2 className='text-4xl text-white font-bold'>
                    PROJECTS
                </h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
            </div>

            <div className='grid gap-12 grip-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {projects.map((projects, index) => (
                    <div
                        onClick={() => handleOpenModel(projects)}
                        key={projects.id} className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover: -translate-y-2 transition-transform duration-300'>
                        <div>
                            <img src={projects.image} alt={projects.title} className='w-full h-48 object-cover rounded-xl' />
                        </div>
                        <div className='p-6'>
                            <h3 className='text-2xl font-bold text-white mb-2'>
                                {projects.title}
                            </h3>
                            <p className='text-gray-600 mb-4 pt-5 line-clamp-3'>
                                {projects.description}
                            </p>
                            <div className='mb-4'>
                                {projects.tags.map((tag, index) => (
                                    <span key={index} className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded--full px-2 py-1 mr-2 mb-2'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {selectedProject && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
                    <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
                        <div className='flex justify-end p-4'>
                            <button onClick={handleCloseModel} className='text-white text-3xl font-bold hover:text-purple-500'>
                                &times;
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <div className='w-full flex justify-center bg-gray-900 p-4 rounded-xl'>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className='w-full max-h-[350px] object-contain rounded-xl shadow-2xl'
                                />
                            </div>
                            <div className='lg:p-8 p-6'>
                                <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>{selectedProject.title}</h3>
                                <p className='text-gray-400 mb-6 lg:text-base text-xs'>
                                    {selectedProject.description}
                                </p>
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {selectedProject.tags.map((tag, index) => (
                                        <span key={index} className='bg-[#251f38] text-xs font-semibold text-purple-500 rounded--full px-2 py-1'>
                                            {tag}
                                        </span>
                                    ))}

                                </div>
                                <div className='flex gap-4'>
                                    <a href={selectedProject.github} target='_blank' className='w-1/2 bg-gray-800 hover:bg-purple-500 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                                        View Code</a>
                                    <a href={selectedProject.webapp} target='_blank' className='w-1/2 bg-purple-600 hover:bg-purple-500 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                                        View Live</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            )}
        </section>
    )
}

export default Work
