import React from 'react';
import logo from "../assets/edaNurLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className='fixed top-0 left-0 w-full shadow-sm flex items-center justify-between px-8 py-6 z-10 bg-opacity-80 backdrop-filter backdrop-blur-sm'>
            <a href='' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <div className='flex items-center'>
                    <img className='w-16 h-5' src={logo} alt="logo" />
                </div>
            </a>

            <div className='hidden items-center space-x-6 sm:hidden md:hidden lg:flex xl:flex'>
                <button onClick={() => scrollToSection('about')} className='text-xl hover:text-[#7c4dff]'>About Me</button>
                <button onClick={() => scrollToSection('technologies')} className='text-xl hover:text-[#7c4dff]'>Technologies</button>
                <button onClick={() => scrollToSection('experience')} className='text-xl hover:text-[#7c4dff]'>Experience</button>
                <button onClick={() => scrollToSection('projects')} className='text-xl hover:text-[#7c4dff]'>Projects</button>
                <button onClick={() => scrollToSection('contact')} className='text-xl hover:text-[#7c4dff]'>Contact Me</button>
            </div>

            <div className='flex items-center justify-center gap-4 text-3xl'>
                <a href="https://www.linkedin.com/in/eda-nur-mutlu/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-blue-600 m-0 p-0 hover:border hover:border-blue-600 hover:rounded-sm' /></a>
                <a href="https://github.com/edamuutlu" target="_blank" rel="noopener noreferrer"><FaGithub className='text-gray-800 m-0 p-0 hover:border-2 hover:border-gray-700 hover:rounded-xl' /></a>
            </div>
        </nav>
    );
}

export default Navbar;