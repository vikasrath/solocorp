import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const NotFoundPage = () => {
    return (<>
        <Navbar />
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="text-center">
                <h1 className="text-8xl font-extrabold text-gray-200 mb-4">
                    404
                </h1>
                
                <h2 className="text-3xl text-gray-300 mb-4">
                    Page Not Found
                </h2>
                
                <p className="text-gray-400 mb-6">
                    Oops! It seems the page you’re looking for doesn’t exist.
                </p>
                
                <a
                    href="/"
                    className="inline-block px-6 py-3 text-lg font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-300 rounded-md shadow-md transition-transform transform hover:scale-105"
                >
                    Go Back Home
                </a>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default NotFoundPage;
