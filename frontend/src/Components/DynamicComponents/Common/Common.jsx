import React from 'react';

function Common({ content }) {
    return (
        <div className="common-container">
            {/* Heading */}
            {content && content.heading && (
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    {content.heading}
                </h2>
            )}

            {/* Paragraphs */}
            {content && content.paragraphs && content.paragraphs.length > 0 && (
                <div className="space-y-4 mb-6">
                    {content.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-base text-gray-600 dark:text-gray-400">
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}

            {/* Description Points (New structure) */}
            {content && content.points && content.points.length > 0 && (
                <div className="space-y-4">
                    {content.points.map((point, index) => (
                        <div key={index}>
                            {/* Title for the Point */}
                            {point.title && (
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    {point.title}
                                </h3>
                            )}

                            {/* Description for the Point */}
                            {point.description && point.description.length > 0 && (
                                <ul className="list-disc pl-6 space-y-2">
                                    {point.description.map((desc, idx) => (
                                        <li key={idx} className="text-lg text-gray-600 dark:text-gray-400">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Existing Description handling (for standard structure) */}
            {content && content.description && content.description.length > 0 && (
                <ul className="list-disc pl-6 space-y-2">
                    {content.description.map((point, index) => (
                        <li key={index} className="text-lg text-gray-600 dark:text-gray-400">
                            {point}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Common;
