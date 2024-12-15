import React, { useState, useEffect } from 'react';
import BG from "../../assets/heroBG.jpeg";
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import images from '../../indexImages/indexImages';
import { usePageData } from '../../context/pageData';

function Herosection() {
    const [heroImg, setHeroImg] = useState(null);
    const [heroContent, setHeroContent] = useState(null);
    const {pageData } = usePageData()
    

    const { urlName } = useParams();

    const topSearches = [
        "Private Limited Company Registration",
        "Trademark Registration",
        "GST Registration",
        "LLP Registration",
        "Startup India Registration",
        "MSME Registration",
        "ISO 9001:2015",
        "Close Company",
        "DIN KYC",
        "Annual Filings of Companies",
        "Resignation of Director",
        "Trademark Objection",
    ]

    useEffect(() => {
        console.log(urlName);
        
        if (urlName) {
            if (pageData) {
                setHeroImg(images[urlName]);
                setHeroContent(pageData.heroContent)
            }
        }
    }, [urlName, pageData]);

    return (
        <div className="w-full">
            <Navbar />


           {urlName ? (
            <div
                className="relative bg-cover bg-center w-full"
                style={{
                    backgroundImage: `url(${heroImg ? heroImg : BG})`,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 z-0"></div>

                <div className="home-banner-height flex items-center justify-center text-white flex-col p-8 text-custom relative z-10 fade-in pt-28 md:pt-16 lg:pt-24">
                    {/* Dynamic Title */}
                    <h2 className="font-extrabold mb-4 text-lg sm:text-4xl lg:text-5xl text-center leading-snug sm:leading-tight">
                        {heroContent?.title || "Effortless Tax Filing & Financial Services"}
                    </h2>

                    {/* Dynamic Description */}
                    {heroContent?.description?.length > 0 ?
                        heroContent.description.map((item, index) => (
                            <h2
                                key={index}
                                className="font-semibold md:text-lg lg:text-xl text-center max-w-md md:max-w-2xl mx-auto mb-6"
                            >
                                {item || "Simplify your tax filing, GST, and compliance with our expert solutions"}
                            </h2>
                        )) : 
                        <h2
                                className="font-semibold text-sm sm:text-lg lg:text-xl text-center max-w-md md:max-w-2xl mx-auto mb-6"
                            >
                                { "Simplify your tax filing, GST, and compliance with our expert solutions"}
                            </h2>}

                    {/* Button */}
                    <button className="mt-4 px-5 py-2 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-bold text-sm sm:text-xs md:text-base text-white transition duration-300">
                        Learn Below
                    </button>
                </div>
            </div>)
            :
            ( 
                <div className="w-full flex flex-col items-center p-8 bg-gradient-to-b from-blue-50 to-gray-100">
                {/* Main Section */}
                <div className="text-center mt-10 mb-8">
                  <h1 className="text-3xl font-bold  drop-shadow-md">
                    Willing to Trade
                  </h1>
                  <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto leading-relaxed">
                    Reach out to us for <span className="font-semibold text-blue-600">Registration</span>, 
                    <span className="font-semibold text-blue-600"> Accounts</span>, 
                    <span className="font-semibold text-blue-600"> Legal</span>, 
                    <span className="font-semibold text-blue-600"> Tax & Compliance</span>
                  </p>
                </div>
          
                {/* Search Bar */}
                <div className="relative w-full max-w-md mb-10">
                  <input
                    type="text"
                    placeholder="Search for Startup Services..."
                    className="w-full p-4 pl-6 rounded-full border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-4 top-3 text-blue-500 hover:text-blue-700 text-2xl transition-transform duration-300 transform hover:scale-110">
                    🔍
                  </button>
                </div>
          
                {/* Top Searches */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Popular Searches:
                  </h3>
                  <div className="flex flex-wrap  w-full lg:w-[80%] justify-center items-center gap-4 mx-auto">
                    {topSearches.map((item, index) => (
                      <span
                        key={index}
                        className="bg-white text-gray-700 px-2 lg:px-4 py-2 rounded-full shadow-md text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
          
                {/* Features Section */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 ">
                      <i className="fa-solid fa-user-tie text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Virtual CFO</h3>
                    <p className="text-gray-600 text-center">
                      Your Books of Accounts & Taxation are in Safe Hands.
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 ">
                      <i className="fa-solid fa-print text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Compliance</h3>
                    <p className="text-gray-600 text-center">
                      Compliance Calendar to Save from Non-Compliance.
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 ">
                      <i className="fa-solid fa-scale-balanced text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Legal</h3>
                    <p className="text-gray-600 text-center">
                      Documents, Contracts, Advice, and Govt. Liaisoning.
                    </p>
                  </div>
                </div>
              </div>
          )
          }
           


            
        </div>
    );
}

export default Herosection;





