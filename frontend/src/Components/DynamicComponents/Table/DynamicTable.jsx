import React from 'react';

function DynamicTable({ content }) {
    return (
        <div className="dynamic-table-container">
            {/* Heading */}
            {content && content.heading && (
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 border-l-4 pl-6 border-blue-600">
                    {content.heading}
                </h2>
            )}

            {/* Description */}
            {content && content.description && content.description.length > 0 && (
                <div className="space-y-4 mb-6">
                    {content.description.map((desc, index) => (
                        <p key={index} className="text-base text-gray-600 dark:text-gray-400">
                            {desc}
                        </p>
                    ))}
                </div>
            )}

            {/* Dynamic Table */}
            {content && content.columns && content.rows && (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700">
                                {content.columns.map((column, index) => (
                                    <th
                                        key={index}
                                        className="px-4 py-2 text-left text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
                                    >
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {content.rows.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={`${
                                        rowIndex % 2 === 0
                                            ? 'bg-gray-100 dark:bg-gray-800'
                                            : 'bg-white dark:bg-gray-900'
                                    }`}
                                >
                                    {row.map((cell, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className="px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700"
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default DynamicTable;
