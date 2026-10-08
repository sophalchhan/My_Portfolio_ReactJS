import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isOpen,setIsOpen]=useState(false);

    const closeMenu = () => { setIsOpen(false); };

  return (
    <nav className='sticky top-0 z-50 bg-gray-800 text-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        {/* Logo */}
        <Link to="/" className='text-2xl font-bold'>
            Sophal<span className='text-blue-500'>.</span>
        </Link>
        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
            <Link to="/" className='hover:text-blue-500'>
                Home
            </Link>
            <Link to="/about" className='hover:text-blue-500'>
                About
            </Link>
            <Link to="/skills" className='hover:text-blue-500'>
                Skills
            </Link>
            <Link to="/projects" className='hover:text-blue-500'>
                Projects
            </Link>
            <Link to="/contact" className='hover:text-blue-500'>
                Contact
            </Link>
        </div>
        {/* Mobile Button */}
        <button onClick={()=>setIsOpen(!isOpen)} className='md:hidden text-2xl'>{isOpen ? <FiX /> : <FiMenu />}</button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden border-t border-gray-800 px-6 py-4'>
            <div className='flex flex-col gap-4'>
                <Link to="/" onClick={closeMenu} className='hover:text-blue-500'>
                    Home
                </Link>
                <Link to="/about" onClick={closeMenu} className='hover:text-blue-500'>
                    About
                </Link>
                <Link to="/skills" onClick={closeMenu} className='hover:text-blue-500'>
                    Skills
                </Link>
                <Link to="#projects" onClick={closeMenu} className='hover:text-blue-500'>
                    Projects
                </Link>
                <Link to="#contact" onClick={closeMenu} className='hover:text-blue-500'>
                    Contact
                </Link>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
