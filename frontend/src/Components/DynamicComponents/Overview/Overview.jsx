import React from 'react';

function Overview({ content }) {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                {/* Heading */}
            {content.heading && (
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b-2  pb-2">
                    {content.heading}
                </h1>
            )}
                {/* Introduction */}
                <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
                    {content.introduction}
                </p>

                {/* Details */}
                {content.details.map((detail, index) => (
                    <p key={index} className="text-gray-800 dark:text-gray-300 leading-relaxed">
                        {detail}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Overview;
