import { Link } from 'react-router-dom';
import React from 'react';

function HoverBox({ links }) {
  const columns = [];
  for (let i = 0; i < links.length; i += 7) {
    columns.push(links.slice(i, i + 7));
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4  transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex  ">
        {columns.map((column, colIndex) => (
          <ul key={colIndex} className="list-none w-[200px] space-y-4">
            {column.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-blue-600  hover:text-gray-800 text-sm transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default HoverBox;
