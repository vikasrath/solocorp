import React, { useState } from 'react';

function Common({ content }) {

    return (
        <div className="common-container space-y-12">
            {/* Heading */}
            {content && content.heading && (
                <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-100 mb-6 border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                    {content.heading}
                </h2>
            )}

            {/* Paragraphs */}
            {content && content.paragraphs && content.paragraphs.length > 0 && (
                <div className="space-y-8 mb-8">
                    {content.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}

            {/* Points Section */}
            {content && content.points && content.points.length > 0 && (
                <div className="space-y-8">
                    {content.points.map((point, index) => (
                        <div key={index} className="rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6 transition-all duration-300">
                            {/* Title for the Point */}
                            {point.title && (
                                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
                                    {point.title}
                                </h3>
                            )}

                            {/* Description for the Point */}
                            {point.description && point.description.length > 0 && (
                                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                                    {point.description.map((desc, idx) => (
                                        <li key={idx} className="text-lg font-light">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Sub-points (if any) */}
                            {point.subPoints && point.subPoints.length > 0 && (
                                <div className="mt-6 pl-6 border-l-2 border-blue-300 dark:border-blue-500 space-y-4">
                                    {point.subPoints.map((subPoint, subIndex) => (
                                        <div key={subIndex}>
                                            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                                {subPoint.title}
                                            </h4>
                                            {subPoint.description && subPoint.description.length > 0 && (
                                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                                    {subPoint.description.map((subDesc, subDescIdx) => (
                                                        <li key={subDescIdx} className="text-base text-gray-600 dark:text-gray-400">
                                                            {subDesc}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Additional Sub Points (if any) */}
                                            {subPoint.subPoints && subPoint.subPoints.length > 0 && (
                                                <div className="mt-4 pl-6 space-y-2">
                                                    {subPoint.subPoints.map((subPointDetail, subPointIdx) => (
                                                        <p key={subPointIdx} className="text-sm text-gray-600 dark:text-gray-400">
                                                            {subPointDetail}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Common;
