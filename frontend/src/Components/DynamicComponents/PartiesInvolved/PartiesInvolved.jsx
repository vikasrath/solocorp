import React from 'react';

function PartiesInvolved({ content }) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      {content?.heading && (
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-6">
          {content.heading}
        </h2>
      )}

      {/* Parties List */}
      {content?.parties?.length > 0 && (
        <div className="space-y-6">
          {content.parties.map((party, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 ease-in-out"
            >
              <div className="flex items-center space-x-4">
                {/* Party Title */}
                {party.party && (
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {party.party}
                  </h3>
                )}
              </div>

              {/* Party Description */}
              {party.description && (
                <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                  {party.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PartiesInvolved;
