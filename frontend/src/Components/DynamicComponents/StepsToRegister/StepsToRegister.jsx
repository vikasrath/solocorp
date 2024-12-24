import React from "react";

function StepsToRegister({ content }) {
    return (
        <div className=" space-y-6">
            {/* Heading */}
            {content && content.heading && (
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-l-4 border-blue-600 pl-4">
                    {content.heading}
                </h2>
            )}

            {/* Overview */}
            {content && content.overview && (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {content.overview}
                </p>
            )}

            {/* Steps List */}
            {content && content.steps && content.steps.length > 0 && (
                <div className="space-y-6">
                    {content.steps.map((step, index) => (
                        <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            {/* Icon */}
                            <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
                                <span className="font-bold">{index + 1}</span>
                            </div>
                    
                            {/* Step Title */}
                            {step.title && (
                                <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-100">
                                    {step.title}
                                </h3>
                            )}
                        </div>
                        {/* Step Description */}
                        {step.description && (
                            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
                                {step.description}
                            </p>
                        )}
                    
                        {/* Forms */}
                        {step.forms && step.forms.length > 0 && (
                            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                                <span className="font-semibold">Forms to be used:</span> {step.forms.join(", ")}
                            </p>
                        )}
                    </div>
                    
                    ))}
                </div>
            )}
        </div>
    );
}

export default StepsToRegister;
