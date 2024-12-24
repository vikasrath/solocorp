import React from "react";

function StepsToRegister({ content }) {
    if (!content) return null; // Early return if content is not provided

    const { heading, overview, steps, step } = content;

    // Common Step JSX component for reuse
    const renderStep = (step, index) => (
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
            {step.forms?.length > 0 && (
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                    <span className="font-semibold">Forms to be used:</span> {step.forms.join(", ")}
                </p>
            )}

            {/* Substeps */}
            {step.subSteps?.length > 0 && (
                <div className="space-y-4 mt-4 pl-6 border-l-2 border-blue-300 dark:border-blue-500">
                    {step.subSteps.map((subStep, subIndex) => (
                        <div key={subIndex}>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
                                {subStep.title}
                            </h4>
                            {subStep.description && (
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    {subStep.description.map((desc, subDescIdx) => (
                                        <li
                                            key={subDescIdx}
                                            className="text-sm sm:text-base text-gray-600 dark:text-gray-400"
                                        >
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Heading */}
            {heading && (
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 border-l-4 border-blue-600 pl-4">
                    {heading}
                </h2>
            )}

            {/* Overview */}
            {overview && (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {overview}
                </p>
            )}

            {/* Steps List */}
            <div className="space-y-6">
                {steps?.length > 0
                    ? steps.map((step, index) => renderStep(step, index))
                    : step && renderStep(step, 0)} {/* For old structure */}
            </div>
        </div>
    );
}

export default StepsToRegister;
