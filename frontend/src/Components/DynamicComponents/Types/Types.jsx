import React from 'react';

const Types = ({ content }) => {
    const { heading, overview, items } = content;

    return (
        <div className="space-y-6">
            {/* Heading */}
            {heading && (
                <h1 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-6 dark:text-gray-100">
                    {heading}
                </h1>
            )}

            {/* Overview */}
            {overview && (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {overview}
                </p>
            )}

            {/* Items List */}
            {items && items.length > 0 && (
                <div className="space-y-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Types;
