import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaChevronUp,FaPhoneAlt,FaEnvelope,FaMapMarkerAlt   } from "react-icons/fa";
import Sidebar from "../Navbar/Sidebar/Sidebar";
import Logo from "../Logo/Logo";

const FooterSection = ({ title, items }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 hover:text-gray-300 transition-colors duration-300 cursor-pointer">{title}</h3>
    {Array.isArray(items) ? (
      <ul className="space-y-3 text-sm">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="hover:text-gray-300 transition-colors duration-300 flex items-center">
              <FaAngleRight className="mr-2 transition-transform duration-300 transform hover:rotate-45" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm mb-4 text-gray-400 hover:text-gray-300 transition-colors duration-300">{items}</p>
    )}
  </div>
);

const Footer = () => {
  const services = [
    { label: "Proprietorship", link: "/proprietorship" },
    { label: "FSSAI License", link: "/FSSAILicense" },
    { label: "Trademark Registration", link: "/trademarkRegistration" },
    { label: "GST Registration", link: "/GSTRegistration" },
    { label: "Income Tax E-Filing", link: "/incomeTaxEFiling" },
  ];

  const quickLinks = [
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "Terms of Service", link: "/terms-of-service" },
  ];

  const [togle, setTogle] = useState(false);

  const handelClick = () => {
    setTogle(prev => !prev);
  };

  return (<>
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-between md:flex-row mb-8">
          <div className="flex items-center space-x-4">
           <Logo/>
            <div>
              <p className="text-lg font-semibold hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                Solocorp
              </p>
              <p className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                Simplifying Business Processes
              </p>
            </div>
          </div>
          <button onClick={handelClick}>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer flex items-center mt-6 md:mt-0">
              Explore our services
              <FaAngleRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
            </p>
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <FooterSection
            title="About Solocorp"
            items="At Solocorp, we simplify business processes with expert solutions in company incorporation, tax filing, trademark registration, and more."
          />
          <FooterSection title="Services" items={services} />
          <FooterSection title="Quick Links" items={quickLinks} />
          <FooterSection
            title="Contact Us"
            items={
              <>
                <p className="text-sm mb-2 flex text-gray-400 hover:text-gray-300 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2  text-2xl lg:text-4xl" /> S.C.O shop Near Tej Kaur Hospital, HDFC Bank Gidderbaha Circular Road Muktsar 152101 Punjab

                </p>
                <p className="text-sm flex  mb-2 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                <FaPhoneAlt className="mr-2" />+918700024042
                </p>
                
                <p className="text-sm  flex text-center items-center text-gray-400 hover:text-gray-300 transition-colors duration-300">
                <FaEnvelope className="mr-2 text-gray-400" /> contactsolocorp@gmail.com
                </p>
              </>
            }
          />
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center relative">
          <p className="text-sm text-gray-400">&copy; 2024 Solocorp. All Rights Reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-4 bottom-10 sm:bottom-5 bg-gray-600 hover:bg-gray-500 text-white rounded-full p-2 transition-colors duration-300"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
    <Sidebar togled={togle} setTogled={setTogle} />
  </>
  );
};

export default Footer;