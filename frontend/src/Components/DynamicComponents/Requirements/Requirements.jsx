import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function Requirements({ content }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 mb-8">
      <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center">
          {content.heading}
        </h2>

        {/* Overview */}
        {content.overview && (
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify sm:text-center md:text-lg">
            {content.overview}
          </p>
        )}

        {/* Items List with Accordion */}
        {content.items && (
          <div className="space-y-4 mt-6">
            {content.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                onClick={() => toggleAccordion(index)}
              >
                <div
                  className="flex items-center cursor-pointer"
                  
                >
                  <FaCheckCircle
                    className="text-green-600 dark:text-green-400 mr-4"
                    size={28}
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {item.title}
                  </h3>
                </div>

                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="mt-2">
                    {Array.isArray(item.description) ? (
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        {item.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Requirements;
