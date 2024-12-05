import React from 'react';

function ServiceCard({ title, description, logo }) {
  return (
    <div className='bg-white p-6 shadow-md rounded-xl w-full md:w-[320px] lg:w-[350px] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
      {/* Larger logo styling */}
      <div className="flex items-center justify-center mb-6">
        <img
          src={logo}
          alt="logo"
          className="h-28 w-28 object-contain"
        />
      </div>

      {/* Title with improved font size and color */}
      <h3 className='text-xl md:text-2xl font-semibold text-gray-800 mb-3 text-center'>
        {title}
      </h3>

      {/* Description with better line height for readability */}
      <p className='text-gray-600 leading-relaxed text-center'>
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
