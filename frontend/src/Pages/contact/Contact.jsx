import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../../Components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?corporate,office')" }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-5xl font-semibold">Contact Us</h1>
        </div>
      </header>

      {/* Contact Information and Form Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Cards */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    S.C.O shop Near Tej Kaur Hospital, Gidderbaha Circular Road, Muktsar, Punjab 152101
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+918700024042" className="text-blue-500 hover:underline">+91 8700024042</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contactsolocorp@gmail.com" className="text-blue-500 hover:underline">contactsolocorp@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
