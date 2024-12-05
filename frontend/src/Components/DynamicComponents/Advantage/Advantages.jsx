import React from 'react';

function Advantages({ content }) {
    return (
        <div className="relative border-l border-gray-300 pl-8">
            <h2 className="font-semibold text-2xl text-gray-800 mb-8">{content.heading}</h2>
            {content.items.map((item, index) => (
                <div key={index} className="mb-10">
                    <div className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {index + 1}
                    </div>
                    <h3 className="text-xl font-medium text-gray-700 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Advantages;
