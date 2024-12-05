import React from 'react';

const Law = ({ content }) => {
    const { heading, description, items } = content;

    return (
        <div className="space-y-6">
            {/* Heading */}
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
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
                <div className="space-y-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm"
                        >
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {item.title}
                            </h2>
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
