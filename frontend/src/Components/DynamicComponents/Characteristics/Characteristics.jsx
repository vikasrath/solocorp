import React from "react";

function Characteristics({ content }) {
  return (
    <div className="space-y-8 p-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl font-medium text-gray-600 dark:text-gray-300 mb-4">
          {content.heading}
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Features List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >

            {/* Feature Content */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characteristics;
