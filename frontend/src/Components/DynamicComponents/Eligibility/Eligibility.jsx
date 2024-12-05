import React, { useState } from 'react';

function Eligibility({ content }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="p-6">
            {/* Heading */}
            {content && content.heading && (
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    {content.heading}
                </h2>
            )}

            {/* Overview */}
            {content && content.overview && (
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {content.overview}
                </p>
            )}

            {/* Accordion List for Criteria */}
            {content && content.criteria && content.criteria.length > 0 && (
                <div className="space-y-4">
                    {content.criteria.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 dark:border-gray-700 rounded-lg"
                        >
                            {/* Title with Toggle */}
                            <div
                                onClick={() => toggleExpand(index)}
                                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                            >
                                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                                    {item.title}
                                </h3>
                                <span className="text-gray-500 dark:text-gray-300">
                                    {expandedIndex === index ? '-' : '+'}
                                </span>
                            </div>

                            {/* Description - Visible Only When Expanded */}
                            {expandedIndex === index && (
                                <div className="p-4 text-gray-600 dark:text-gray-400">
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

        
            
        </div>
    );
}

export default Eligibility;
