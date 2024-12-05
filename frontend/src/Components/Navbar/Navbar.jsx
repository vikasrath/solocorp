import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [togle, setTogle] = useState(false);

    const handelClick = () => {
        setTogle(prev => !prev);
    };

    return (
        <>
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
                            <i className='fa-solid fa-bars w-10 h-8 mt-1 text-white' style={{ fontSize: '2rem' }}></i>
                        </button>
                    </div>
                </div>
            </header>
            <Sidebar togled={togle} setTogled={setTogle} />
        </>
    );
}

export default Navbar;
