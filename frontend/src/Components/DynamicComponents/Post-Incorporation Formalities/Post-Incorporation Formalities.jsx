import React from "react";

function PostIncorporationFormalities({ content }) {
    return (
        <div className="space-y-6">
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-l-4 border-blue-600 pl-6">
                {content.heading}
            </h2>

            {/* Overview */}
            {content.overview && (
                Array.isArray(content.overview) ? (
                    <div className="text-gray-800 dark:text-gray-300 leading-relaxed px-2">
                        {content.overview.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed px-2">
                        {content.overview}
                    </p>
                )
            )}


            {/* Steps */}
            {content.steps && (
                <div className="space-y-4 mt-4">
                    {content.steps.map((step, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                {step.title}
                            </h3>
                            {step.description && (
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    {step.description.map((desc, subIndex) => (
                                        <li key={subIndex}>{desc}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PostIncorporationFormalities;
