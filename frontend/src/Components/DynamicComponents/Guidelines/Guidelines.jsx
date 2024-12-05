import React from 'react';

function Guidelines({ content }) {
    return (
        <div className="space-y-6">
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {content.heading}
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-800 dark:text-gray-300 p-3">
                {content.description.map((desc, index) => (
                    <p key={index} className="leading-relaxed text-base">
                        {desc}
                    </p>
                ))}
            </div>

            {/* Guidelines Items */}
            <div className="space-y-4">
                {content.items.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-500 p-2 pl-4 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                            {item.title}
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-400">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guidelines;
