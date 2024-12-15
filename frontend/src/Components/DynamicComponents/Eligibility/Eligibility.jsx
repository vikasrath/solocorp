import React, { useState } from 'react';

function Eligibility({ content }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-12">
            {/* Heading */}
            {content && content.heading && (
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                    {content.heading}
                </h2>
            )}

            {/* Overview */}
            {content && content.overview && (
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                    {content.overview}
                </p>
            )}

            {/* Criteria Section */}
            {content && content.criteria && content.criteria.length > 0 && (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.criteria.map((item, index) => (
                            <div
                                key={index}
                                className="p-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
                            >
                                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Eligibility Criteria Section */}
            {content && content.eligibilityCriteria && content.eligibilityCriteria.length > 0 && (
                <div>
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center md:justify-start border-b border-gray-300 dark:border-gray-700 mb-6">
                        {content.eligibilityCriteria.map((criteria, index) => (
                            <button
                                key={index}
                                className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base focus:outline-none ${
                                    activeTab === index
                                        ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400"
                                        : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {criteria.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-4 sm:p-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-md">
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            {content.eligibilityCriteria[activeTab].title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                            {content.eligibilityCriteria[activeTab].description}
                        </p>
                        {content.eligibilityCriteria[activeTab].subCriteria &&
                            content.eligibilityCriteria[activeTab].subCriteria.length > 0 && (
                                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                    {content.eligibilityCriteria[activeTab].subCriteria.map(
                                        (sub, subIndex) => (
                                            <li key={subIndex}>
                                                <strong>{sub.title}</strong>: {sub.description}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Eligibility;
