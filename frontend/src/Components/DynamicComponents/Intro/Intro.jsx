import React from 'react';

const Intro = ({ content }) => {
    const { heading, description, keyCharacteristics } = content;

    return (
        <div>
            {/* Heading */}
            {heading && (
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b-4 border-blue-500 pb-2">
                    {heading}
                </h1>
            )}

            {/* Description */}
            {description && description.length > 0 && (
                <div className="space-y-4 text-gray-800 dark:text-gray-300">
                    {description.map((desc, index) => (
                        <p key={index} className="leading-relaxed text-base">
                            {desc}
                        </p>
                    ))}
                </div>
            )}

            {/* Key Characteristics */}
            {keyCharacteristics && keyCharacteristics.length > 0 && (
                <div className="mt-8 space-y-4">
                    <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Key Characteristics</h2>
                    <ul className="list-disc pl-5 space-y-3">
                        {keyCharacteristics.map((item, index) => (
                            <li key={index} className="text-gray-700 dark:text-gray-300">
                                <strong>{item.title}:</strong> {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Intro;
