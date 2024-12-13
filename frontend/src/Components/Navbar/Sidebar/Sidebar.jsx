import React, { useState } from 'react';
import Logo from '../../Logo/Logo.jsx';
import Selected from '../SelectedCatogery/Selected.jsx';
import navLinks from '../SidebarLinks/NavLinks.js';

function Sidebar({ togled, setTogled }) {
    const [select, setSelect] = useState("");
    const [data, setData] = useState([]);

    const handleToggle = () => {
        setTogled(prev => !prev);
        setSelect("");
        setData([]);
    };

    const handleSelect = (navLink) => {
        setData(navLink.subLinks || []);
        setSelect(navLink.title);
    };

    const handleBack = () => {
        setSelect("");
    }

    return (
        <div
            className={`fixed top-0 left-0 h-full w-full max-w-[25rem] bg-white z-20 shadow-lg transition-transform duration-1000 ease-in-out ${togled ? "translate-x-0" : "-translate-x-full"}`}
            style={{ willChange: 'transform' }}
        >
            <div className='flex justify-between items-center px-4 pr-8 py-4 border-b'>
                <div className='flex items-center'>
                    {select &&
                        <button
                        onClick={handleBack}
                        className="mr-5 p-2 pr-0 transition-all duration-500 ease-in-out transform scale-75"
                        style={{
                          animation: select
                            ? "fade-in 2s forwards ease-in-out"
                            : "fade-out 2s forwards ease-in-out",
                        }}
                      >
                            <i className="fa-solid fa-arrow-left w-5 h-5 text-black" style={{ fontSize: '1.5rem' }}></i>
                        </button>
                    }
                    <Logo />
                </div>
                <button onClick={handleToggle} className="text-black">
                    <i className='fa-solid fa-x w-5 h-5 text-black' style={{ fontSize: '1.5rem' }}></i>
                </button>
            </div>
            <div className='flex h-full'>
                <div className='flex flex-col bg-white text-black p-5 w-full'>
                    <div className='max-h-[calc(100%-10rem)] overflow-y-auto custom-scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
                        {navLinks.map((navLink, index) => (
                            <div
                                className={`p-3 flex items-center font-semibold cursor-pointer mb-3 rounded-lg transition-all duration-300 ease-in-out
                                    ${select === navLink.title
                                        ? "border-l-4 border-blue-600 bg-blue-50 shadow-lg"
                                        : "border-l-2 border-transparent bg-gray-50"}
                                hover:bg-blue-100 hover:text-blue-600 md:text-lg hover:border-blue-600 hover:shadow-md`}
                                onClick={() => handleSelect(navLink)}
                                key={index}
                            >
                                {navLink.title}
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center w-full h-20 p-4'>
                        <button className="inline-flex items-center text-lg font-serif py-3 px-6 rounded-full focus:outline-none transition-all duration-300 ease-in-out 
                            bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Contact Us
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-1 transition-transform duration-300 ease-in-out hover:translate-x-1"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <Selected select={select} datas={data} setTogled={setTogled} setSelect={setSelect} />
            </div>
        </div>
    );
}

export default Sidebar;
