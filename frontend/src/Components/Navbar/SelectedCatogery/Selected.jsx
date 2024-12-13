import React from 'react';
import Logo from '../../Logo/Logo';
import { NavLink } from 'react-router-dom';

function Selected({ select, datas, setTogled, setSelect }) {
  

  const handleToggle = () => {
    setTogled("");
    handleBack();
  }

  return (
    <div
      className={`transition-transform duration-1000 ease-in-out ${select ? "translate-x-0" : "-translate-x-[200%]"} absolute z-20 h-screen w-full top-auto right-0 bg-white bg-opacity-30 backdrop-blur-md transition-all duration-700 ease-in-out`}
      style={{ borderRadius: '10px' }}
    >
      <div className='p-5 flex flex-col gap-4 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-8rem)] md:max-h-[calc(100vh-9rem)] mb-10 custom-scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white'>
        {datas?.map((data) => (
          <NavLink to={data.link} onClick={handleToggle} key={data.title}>

            <div className={`bg-white bg-opacity-70 py-4 px-6 flex items-center rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#bbd1fe] hover:to-[#4567cd] hover:text-white`}>
              <div className='mr-3'>
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
