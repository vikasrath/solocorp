import React from 'react';

function ReasonsForRegistration({ content }) {
    return (
        <div className="space-y-8 bg-gray-50 dark:bg-gray-900">
            {/* Heading */}
            {content?.heading && (
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 border-l-4 pl-4 border-blue-500">
                    {content.heading}
                </h2>
            )}
            {content.description && (
                <div className="space-y-4">
                    {content.description.map((desc, index) => (
                        <p key={index} className="text-lg text-gray-800 dark:text-gray-300">
                            {desc}
                        </p>
                    ))}
                </div>
            )}

            {/* Reasons List */}
            {content?.reasons?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full font-bold text-xl">
                                {index + 1}
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ReasonsForRegistration;
