import React from 'react';

function WhyChooseUs({ content }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      {content.heading && (
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          {content.heading}
        </h2>
      )}
      {content.description && content.description.length > 0 && (
        <div className="mb-6">
          {content.description.map((desc, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-400 mb-3">
              {desc}
            </p>
          ))}
        </div>
      )}
      {content.steps && content.steps.length > 0 && (
        <div>
          <ul className="space-y-4">
            {content.steps.map((step, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 p-4 border-l-4 border-blue-500 pl-6 bg-gray-50 dark:bg-gray-800 rounded-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <span className=" w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WhyChooseUs;
