import React from 'react';
import { MdWarning } from 'react-icons/md';

function Penalties({ content }) {
    return (
        <div>
            {content.heading && (
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    {content.heading}
                </h2>
            )}
            {content.overview && (
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {content.overview}
                </p>
            )}
            {content.items && content.items.length > 0 && (
                <ul className="space-y-6">
                    {content.items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start space-x-4 p-4 border-l-4 border-yellow-500 pl-6 bg-gray-50 dark:bg-gray-800 rounded-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm hover:shadow-lg"
                        >
                            <div className="flex-shrink-0">
                                <MdWarning className="text-yellow-500 w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {content.note && (
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
                    {content.note}
                </p>
            )}
        </div>
    );
}

export default Penalties;
