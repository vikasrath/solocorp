import React from 'react';

const Law = ({ content }) => {
    const { heading, description, items } = content;

    return (
        <div className="space-y-8 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
            {/* Heading */}
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 border-l-4 pl-6 border-blue-500">
                {heading}
            </h1>

            {/* Description */}
            <div className="space-y-4 text-gray-800 dark:text-gray-300 p-2">
                {description.map((desc, index) => (
                    <p key={index} className="leading-relaxed text-base">
                        {desc}
                    </p>
                ))}
            </div>

            {/* Items */}
            {items && items.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-700"
                        >
                            {/* Icon & Title */}
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="h-10 w-10 flex items-center justify-center bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-300 rounded-full">
                                    <i className="fas fa-gavel text-xl"></i> {/* Use a relevant icon */}
                                </div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {item.title}
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-300 mt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Law;
