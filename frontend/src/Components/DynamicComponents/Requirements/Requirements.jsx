import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Requirements({ content }) {
  return (
    <div className="space-y-6 mb-8">
      <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center">
          {content.heading}
        </h2>

        {/* Overview */}
        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify sm:text-center md:text-lg">
          {content.overview}
        </p>

        {/* Items List with Icons */}
        <ul className="space-y-4 mt-6">
          {content.items.map((item, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <FaCheckCircle
                className="text-green-600 dark:text-green-400 shrink-0"
                size={28}
              />
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1 md:mt-2">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Requirements;
