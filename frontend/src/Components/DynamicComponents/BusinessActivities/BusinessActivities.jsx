import React from 'react';

const BusinessActivities = ({ content }) => {
  return (
    <div className="space-y-6">
      {/* Heading */}
      {content.heading && (
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {content.heading}
        </h2>
      )}

      {/* Description */}
      {content.description && (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {content.description}
        </p>
      )}
    </div>
  );
};

export default BusinessActivities;
