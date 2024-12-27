import React from 'react';
import Services from './Services/Services';
import ContactForm from '../ContactForm/ContactForm';
import GetinTouch from '../GetinTouch/GetinTouch';

function Home() {
    return (
        <>
            {/* Services Section */}
            <div className="bg-gray-100 py-16">
                <Services />
            </div>

            {/* Feedback and Contact Section */}
           <GetinTouch/>
        </>
    );
}

export default Home;
