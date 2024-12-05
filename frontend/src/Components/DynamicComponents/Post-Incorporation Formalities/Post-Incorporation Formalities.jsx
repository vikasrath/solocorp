import React from "react";

function PostIncorporationFormalities({ content }) {
    return (
        <div className="space-y-6">
            {/* Heading */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {content.heading}
            </h2>

            {/* Overview */}
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed px-2">
                {content.overview}
            </p>
        </div>
    );
}

export default PostIncorporationFormalities;
