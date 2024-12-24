import React from 'react';

const Compliances = ({ content }) => {
  return (
    <div className="space-y-6">
      {/* Heading */}
      {content.heading && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-blue-600 pl-6">
          {content.heading}
        </h2>
      )}

      {/* Description */}
      {content.description && (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 p-4">
          {content.description}
        </p>
      )}

      {/* Compliance Items */}
      {content.complianceItems && content.complianceItems.length > 0 && (
        <ul className="space-y-4 p-4">
          {content.complianceItems.map((item, index) => (
            <li
              key={index}
              className="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Compliances;
