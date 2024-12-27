import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../../Components/ContactForm/ContactForm';
import image from "../../assets/corporate office.avif";

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat dark:bg-slate-800"
      id="contact"
      style={{
        backgroundImage: `url(${image})`, // Replace with your image URL
      }}
    >
      {/* Overlay with a smooth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>

      {/* Content */}
      <div className="relative mx-auto px-3 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="text-center mb-12">
          <div className="mb-6 max-w-3xl mx-auto">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-400 mt-10">
              Contact Us
            </p>
            <h2 className="font-heading mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg sm:text-xl text-gray-300">
              We’re here to assist with any questions or support you need.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center bg-white bg-opacity-90 md:p-8 rounded-lg shadow-xl">
          <div className="md:w-1/2 text-black mb-8 md:mb-0 p-5 md:p-0">
            {/* Left Side - Contact Information */}
            <p className="mt-3 mb-8 text-lg sm:text-xl">
              Whether you have a question or need support, we’re always here to assist you.
              Reach out through any of the methods below:
            </p>
            <ul className="space-y-10">
              {/* Address */}
              <li className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Our Address</h3>
                  <p className="text-gray-600">S.C.O shop Near Tej Kaur Hospital, HDFC Bank</p>
                  <p className="text-gray-600">Gidderbaha Circular Road, Muktsar 152101, Punjab</p>
                </div>
              </li>
              {/* Contact */}
              <li className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
                  <p className="text-gray-600">Mobile: +91 8700024042</p>
                  <p className="text-gray-600">Email: contactsolocorp@gmail.com</p>
                </div>
              </li>
              {/* Working Hours */}
              <li className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 08:00 AM - 05:00 PM</p>
                  <p className="text-gray-600">Saturday & Sunday: 08:00 AM - 12:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 bg-white p-5 md:p-10 shadow-xl rounded-lg">
            {/* Right Side - Contact Form */}
            <h2 className="mb-6 text-xl md:text-2xl sm:text-3xl font-semibold text-gray-800">
              Ready to Get Started?
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
