import React from 'react';

function Importance({ content }) {
    return (
        <div className="space-y-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            {content?.heading && (
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
                    {content.heading}
                </h2>
            )}

            {content?.description && (
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center mb-4">
                    {content.description}
                </p>
            )}

            {/* Timeline Items */}
            {content?.items?.length > 0 && (
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-500 dark:bg-blue-400"></div>

                    <div className="space-y-12 sm:space-y-0 relative">
                        {content.items.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col sm:flex-row items-center`}
                            >
                                {/* Connector and Number */}
                                <div className="relative flex-shrink-0">
                                    <div className="absolute sm:relative left-1/2 transform -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-auto -top-1.5 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold z-10 shadow-md">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div
                                    className={`text-center w-full mt-4 sm:mt-0`}
                                >
                                    {/* Title */}
                                    <div className='bg-white bg-opacity-80 rounded-2xl'>
                                        {item.title && (
                                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mt-5 ">
                                                {item.title}
                                            </h3>
                                        )}

                                        {/* Description */}
                                        {item.description && (
                                            <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Importance;
