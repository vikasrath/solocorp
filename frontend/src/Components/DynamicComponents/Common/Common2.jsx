import React from 'react';

function Common2({ content }) {
  return (
    <div className="common-container p-2 mx-auto space-y-8">
      {/* Heading */}
      {content && content.heading && (
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 pl-4 border-l-4 border-blue-500 dark:border-blue-300">
          {content.heading}
        </h2>
      )}

      {/* Paragraphs */}
      {content && content.paragraphs && content.paragraphs.length > 0 && (
        <div className="space-y-6 mb-6">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Points */}
      {content && content.points && content.points.length > 0 && (
        <div className="space-y-6">
          {content.points.map((point, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:bg-blue-50"
            >
              {/* Title for the Point */}
              {point.title && (
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  {point.title}
                </h3>
              )}

              {/* Description for the Point */}
              {point.description && point.description.length > 0 && (
                <ul className="list-disc pl-6 space-y-2">
                  {point.description.map((desc, idx) => (
                    <li key={idx} className="text-lg text-gray-600 dark:text-gray-400">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Standard Description Handling */}
      {content && content.description && content.description.length > 0 && (
        <div className="bg-blue-100 p-6 rounded-xl shadow-md">
          <ul className="list-disc pl-6 space-y-4">
            {content.description.map((point, index) => (
              <li key={index} className="text-lg text-gray-800 dark:text-gray-400">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Common2;
