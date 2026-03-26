import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [isScrolled, setIScrolled] = useState(false)

    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setIScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])


    const handleMenuItemClick = (id) => {
  setActiveSection(id)
  setIsOpen(false)

  const section = document.getElementById(id)

  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "work", label: "Projects" },
        { id: "education", label: "Education" },
    ]

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <div className='text-white py-5 flex justify-between items-center'>
                <div className='text-lg font-semibold cursor-pointer'>
                    <span className='text-[#8245ec]'>&lt;</span>
                    <span className='text-white'>ANKIT</span>
                    <span className='text-[#8245ec]'>/</span>
                    <span className='text-white'>SINGH</span>
                    <span className='text-[#8245ec]'>&gt;</span>
                </div>

                <ul className='hidden md:flex space-x-8 text-gray-300'>
                    {menuItems.map((items) => (
                        <li key={items.id} className={`cursor-pointer hover:text-[#8235ec] ${activeSection === items.id ? "text-[#8245ec]" : "text-gray-300"
                            }`}>
                            <button onClick={() => handleMenuItemClick(items.id)}>{items.label}</button>
                        </li>
                    ))}

                </ul>

                <div className='hidden md:flex space-x-4'>
                    <a className='text-gray-300 hover:text-[#8245ec]' href='' target='_blank'>
                        <FaGithub size={24} />
                    </a>
                    <a className='text-gray-300 hover:text-[#8245ec]' href='' target='_blank'>
                        <FaLinkedin size={24} />
                    </a>
                </div>

                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                                onClick={() => setIsOpen(false)} />

                        ) : (
                            <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
                                onClick={() => setIsOpen(true)} />
                        )
                    }
                </div>


            </div>


            {
                isOpen && (
                    <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg'>
                        <ul className='md:hidden flex flex-col items-center space-x-4 text-gray-300'>
                            {menuItems.map((items) => (
                                <li className={`cursor-pointer hover:text-white ${activeSection === items.id ? "text-[#8245ec]" : ""
                                    }`}>
                                    <button onClick={() => handleMenuItemClick(items.id)}>{items.label}</button>
                                </li>
                            ))}
                        </ul>

                        <div className='flex space-x-4'>

                            <a  rel="noopener noreferrer" className='text-gray-300 hover:text-white' href='https://github.com/Ankuu0217' target='_blank'>
                                <FaGithub size={24} />
                            </a>
                            <a className='text-gray-300 hover:text-white' href="https://www.linkedin.com/in/ankit-singh-0216072a6" target='_blank'>
                                <FaLinkedin size={24} />
                            </a>
                        </div>

                    </div>
                )
            }
        </nav>
    )
}

export default Navbar