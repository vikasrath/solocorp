import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Logo from '../Logo/Logo';
import HoverBox from './HoverBox/Hoverbox';
import { Link, NavLink } from 'react-router-dom';
import navLinks from './SidebarLinks/NavLinks';
import { FaBars } from 'react-icons/fa';

function Navbar() {
    const [togle, setTogle] = useState(false);

    const handelClick = () => {
        setTogle(prev => !prev);
    };

    return (
        <>
            <div className=' lg:hidden'>
                <header className=' absolute flex justify-center items-center w-screen z-20 text-m xl:text-xl top-0 h-[80px]'>
                    <div
                        className=' mx-6   rounded-full px-4 py-0 flex items-center justify-between w-full md:w-[80%] bg-[#ffffff10]'
                        style={{ border: `1px solid rgba(255, 255, 255, 0.2)` }}
                    >
                        <div className='flex space-x-4 items-center'>
                            <Logo />
                        </div>
                        <div className='flex items-center justify-center sm:mr-3 md:mr-5'>
                            <button onClick={handelClick}>
                                <FaBars className='w-10 h-8 mt-1 text-gray-400' style={{ fontSize: '2rem' }} />
                            </button>
                        </div>
                    </div>
                </header>
                <Sidebar togled={togle} setTogled={setTogle} />
            </div>

            <div className="hidden lg:block">
                <header className="bg-gray-100 text-gray-900 border-b-4  body-font">
                    <div className="container mx-auto flex   justify-between p-2 items-center">
                        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <Logo />
                        </a>

                        <nav className="flex justify-center items-center space-x-1 mx-14 lg:mx-0 xl:mx-14">
                            {navLinks.map((item) => (
                                <div className="relative group" key={item}>
                                    <Link className="mr-2.5 xl:mr-5 hover:text-blue-600  font-semibold  cursor-pointer">
                                        {item.title}
                                    </Link>
                                    <div className={`z-20  absolute  bottom-0 top-10  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${item.title === "Registrations" ? "w-[800px] -right-96" : "w-[600px] -right-64"}`}>
                                        {item.subLinks.length < 1 ? null : <HoverBox links={item.subLinks} />}
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Navbar;

