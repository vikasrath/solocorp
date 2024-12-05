import React, { useState } from 'react';

function Activities({ content }) {
    const [expanded, setExpanded] = useState(null);

    const toggleExpanded = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            {content && content.heading && (
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
                    {content.heading}
                </h2>
            )}

            {/* Description */}
            {content && content.description && (
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
                    {content.description}
                </p>
            )}

            {/* Accordion with Step Indicators */}
            {content && content.items && content.items.length > 0 && (
                <div className="space-y-6">
                    {content.items.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Step Indicator */}
                            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                                <div className={`w-4 h-4 rounded-full ${expanded === index ? 'bg-green-500' : 'bg-gray-300'}`} />
                            </div>

                            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl" onClick={() => toggleExpanded(index)}>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                                        {item.title}
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-300">
                                        {expanded === index ? '−' : '+'}
                                    </span>
                                </div>
                                {expanded === index && (
                                    <div className="mt-4 text-gray-600 dark:text-gray-300">
                                        <p>{item.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Activities;
