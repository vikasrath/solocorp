import React from 'react';
import Logo from '../../Logo/Logo';
import { NavLink } from 'react-router-dom';

function Selected({ select, datas, setTogled, setSelect }) {
  const handleBack = () => {
    setSelect("");
  }

  const handleToggle = () => {
    setTogled("");
    handleBack();
  }

  return (
    <div
      className={`transition-transform duration-1000 ease-in-out ${select ? "translate-x-0" : "-translate-x-[200%]"} absolute z-20 h-screen w-screen top-0 md:top-auto right-0 md:w-[55%] lg:w-[67%] bg-white bg-opacity-30 backdrop-blur-md transition-all duration-700 ease-in-out`}
      style={{ borderRadius: '10px' }}
    >
      <div className='md:hidden flex justify-between m-5'>
        <div className='flex items-center'>
          <button onClick={handleBack} className='mr-5 p-2 transition'>
            <i className="fa-solid fa-arrow-left w-5 h-5 text-black" style={{ fontSize: '1.5rem' }}></i>
          </button>
          <Logo />
        </div>
        <button onClick={handleToggle} className='p-2 transition'>
          <i className='fa-solid fa-x w-5 h-5 text-black' style={{ fontSize: '1.5rem' }}></i>
        </button>
      </div>

      <div className='p-4 md:p-7 flex flex-col gap-4 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-8rem)] mb-10 custom-scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white'>
        {datas?.map((data) => (
          <NavLink to={data.link} onClick={handleToggle} className='' key={data.title}>

            <div className={`bg-white bg-opacity-70 py-4 px-6 md:py-5 md:px-7 flex items-center rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#bbd1fe] hover:to-[#4567cd] hover:text-white`}>
              <div className='mr-3 md:mr-5'>
                <i className="fa-solid fa-caret-right text-black"></i>
              </div>
              <h1 className='text-black text-base md:text-lg'>{data.title}</h1>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Selected;
