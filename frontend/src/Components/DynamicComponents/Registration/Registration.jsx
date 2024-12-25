import React from 'react';

function Registration({ content }) {
    return (
        <div className="p-6 m-2 bg-white dark:bg-gray-900 border-t-4 border-indigo-600 rounded-lg shadow-sm space-y-6 mb-6">
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
                {content.heading}
            </h2>

            {/* Description */}
            {content.description && (
                <div className="space-y-4">
                    {content.description.map((desc, index) => (
                        <p key={index} className="text-lg text-gray-800 dark:text-gray-300">
                            {desc}
                        </p>
                    ))}
                </div>
            )}

            {content.items && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {content.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            
            {/* Steps List */}
            {content.steps && (
                <div className="space-y-6 mt-6">
                    {content.steps.map((step, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                {step.title}
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{step.description}</p>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Additional Information */}
            {content.additionalInformation && (
                <div className="space-y-4 mt-6">
                    {content.additionalInformation.map((info, index) => (
                        <p key={index} className="text-lg text-gray-700 dark:text-gray-300">
                            {info}
                        </p>
                    ))}
                </div>
            )}

            {/* Sequence for Filling Out */}
            {content.sequenceForFillingOut && (
                <div className="mt-6">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Sequence for Filling Out:
                    </h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {content.sequenceForFillingOut}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Registration;
