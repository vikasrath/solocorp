import React from 'react';

function Common2({ content }) {
  return (
    <div className="common-container p-4 pl-0 mx-auto space-y-8">
      {/* Heading */}
      {content?.heading && (
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 pl-4 border-l-4 border-blue-500 dark:border-blue-300">
          {content.heading}
        </h2>
      )}

      {/* Paragraphs */}
      {content?.paragraphs?.length > 0 && (
        <div className="space-y-6 mb-6">
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Points */}
      {content?.points?.length > 0 && (
        <div className="space-y-6">
          {content.points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {/* Title */}
              {point.title && (
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  {point.title}
                </h3>
              )}

              {/* Description */}
              {point.description?.length > 0 && (
                <ul className="list-disc pl-6 space-y-2">
                  {point.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-lg text-gray-600 dark:text-gray-400"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              )}

              {/* Subpoints (if any) */}
              {point.subPoints?.length > 0 && (
                <div className="mt-4 pl-6 border-l-2 border-blue-300 dark:border-blue-500 space-y-4">
                  {point.subPoints.map((subPoint, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        {subPoint.title}
                      </h4>
                      {subPoint.description?.length > 0 && (
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          {subPoint.description.map((subDesc, subDescIdx) => (
                            <li
                              key={subDescIdx}
                              className="text-base text-gray-600 dark:text-gray-400"
                            >
                              {subDesc}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* General Description */}
      {content?.description?.length > 0 && (
        <div className="bg-blue-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <ul className="list-disc pl-6 space-y-4">
            {content.description.map((point, index) => (
              <li
                key={index}
                className="text-lg text-gray-800 dark:text-gray-300"
              >
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
