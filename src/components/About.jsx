import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImg from "../assets/IMG_1310.jpeg";

import resume from "../assets/Ankit_Singh_Resume.pdf";





const About = () => {
    return (
        <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans md"mt-24 lg:mt-32'>

            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div className='md:1/2 text-center md:text-left mt-8 md:mt-0'>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>Hii, I am</h1>
                    <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>ANKIT SINGH</h2>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                        <span className='text-white'>
                            I am a
                        </span>
                        <Typewriter
                            words={[
                                ' React Developer',
                                ' Frontend Developer',
                                ' UI/UX Developer',
                                ' Junior Developer',
                                ' Coder'
                            ]}
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={2000}
                            cursorRenderer={(cursor) => (
                                <span className='text-[#8245ec]'>{cursor}</span>
                            )}
                        />
                    </h3>

                    <p className='text-base text-white sm:text-lg  md:text-gray-400 mb-10 mt-8 leading-relaxed'>
                        I am a Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy building responsive, user-friendly web applications and turning ideas into interactive digital experiences. I focus on clean code, performance, and modern UI design while continuously learning new technologies to improve my skills.
                    </p>

                    <a href={resume}  download="Ankit_Singh_Resume.pdf"  target='_blank' className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105' style={{
                        background: 'linear-gradient(90deg,#8245ec, #a855f7',
                        boxShadow: '0 0 2px #8245ec, 0 0 40px #8245ec'
                    }}>
                        Download CV
                    </a>
                </div>
                <div className='md:1/2 flex justify-center md:justify-end md:ml-15'>
                    <Tilt className='w-48 h-48 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}>
                        <img src={profileImg} alt="Ankit Singh" srcset="" className='w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
                    </Tilt>
                </div>
            </div>
        </section>
    )
}

export default About