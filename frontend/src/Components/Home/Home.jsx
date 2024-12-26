import React from 'react';
import Services from './Services/Services';
import ContactForm from '../ContactForm/ContactForm';

function Home() {
    return (
        <>
            {/* Services Section */}
            <div className="bg-gray-100 py-16">
                <Services />
            </div>

            {/* Feedback and Contact Section */}
            <ContactForm/>
        </>
    );
}

export default Home;
