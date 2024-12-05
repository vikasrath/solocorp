import React from 'react';

function NameStructure({ content }) {
  return (
    <div className="space-y-8">
      {/* Heading */}
      {content.heading && (
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {content.heading}
        </h2>
      )}

      {/* Description */}
      {content.description && (
        <div className="space-y-4">
          {content.description.map((desc, index) => (
            <p key={index} className="text-lg text-gray-700 dark:text-gray-300">
              {desc}
            </p>
          ))}
        </div>
      )}

      {/* Items in Cards */}
      {content.items && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NameStructure;
