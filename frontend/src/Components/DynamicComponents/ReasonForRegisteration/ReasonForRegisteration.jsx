import React from 'react';

function ReasonsForRegistration({ content }) {
    return (
        <div className="space-y-6">
            {/* Heading */}
            {content?.heading && (
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    {content.heading}
                </h2>
            )}

            {/* Reasons List */}
            {content?.reasons?.length > 0 && (
                <div className="space-y-4">
                    {content.reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ReasonsForRegistration;
