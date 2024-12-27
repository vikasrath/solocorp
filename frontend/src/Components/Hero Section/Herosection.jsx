import React, { useState, useEffect, useRef } from 'react';
import BG from "../../assets/heroBG.jpeg";
import Navbar from '../Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import images from '../../indexImages/indexImages';
import { usePageData } from '../../context/pageData';
import { headingAnimation } from '../../GsapAnimation/GsapAnimation';
import suggetionList from '../Navbar/SidebarLinks/SuggetionList';


function Herosection() {
  const [heroImg, setHeroImg] = useState(null);
  const [heroContent, setHeroContent] = useState(null);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [showSuggetion, setshowSuggetion] = useState(null)
  const [serchingName, setserchingName] = useState(null)

  const { pageData } = usePageData()
  const headingRef = useRef()
  const { urlName } = useParams();


  const headings = ["Willing to Trade", "Are You Looking For Startup Consultation?", "Want to Register Your Private Limited Company ?", "Worried About Your Company Non-Compliance?"]


  useEffect(() => {
    if (!serchingName || serchingName.trim() === "") {
      setshowSuggetion(null);
    } else {
      const filteredSuggestions = suggetionList.filter((value) =>
        value.title.toLowerCase().includes(serchingName.toLowerCase())
      );
      setshowSuggetion(filteredSuggestions);
    }
  }, [serchingName]);


  useEffect(() => {
    headingAnimation(headingRef, headings[currentHeadingIndex]);
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentHeadingIndex]);
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
        <>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
  {/* Welcome Section */}
  <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
    Welcome to
    <span className="border-b border-dotted border-slate-300">{heroContent?.subtitle || "XYZ"}</span>
  </p>

  {/* Dynamic Title */}
  <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
  <span className="inline-block">
    {/* Extract the first word */}
    {heroContent?.title?.split(" ")[0] || "Effortless"}{" "}
    <span className="relative whitespace-nowrap text-blue-600">
      <svg
        aria-hidden="true"
        viewBox="0 0 418 42"
        className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
        preserveAspectRatio="none"
      >
        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946..." />
      </svg>
      <span className="relative">
        {/* Highlight the second word or fallback */}
        {heroContent?.highlight || heroContent?.title?.split(" ")[1] || "Personal"}
      </span>
    </span>
  </span>
  <span className="inline-block">
    {/* Extract remaining words excluding the first word */}
    {heroContent?.title
      ?.split(" ")
      .slice(2)
      .join(" ") || "Tax Filing Services"}
  </span>
</h1>


  {/* Dynamic Description */}
  <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
    {heroContent?.description?.length > 0 ? (
      heroContent.description.map((item, index) => (
        <span key={index} className="block">
          {item}
        </span>
      ))
    ) : (
      <span>
        Simplify your tax filing, GST, and compliance with our expert solutions.
      </span>
    )}
  </p>

  {/* Buttons */}
  <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
    <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3 w-3 flex-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.824 7.287c.008 0..." />
      </svg>
      <span className="ml-3">Learn More</span>
    </button>

    <a
      href="#"
      className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
    >
      Contact Us
    </a>
  </div>
</div>

        </>

      )
        :
        (
          <>
            <div className="w-full flex flex-col items-center p-8 bg-gradient-to-b from-blue-50 to-gray-100">
              {/* Main Section */}
              <div className="text-center mt-10 mb-8">
                <h1
                  key={currentHeadingIndex}
                  ref={headingRef}
                  className=" text-xl md:text-3xl font-bold drop-shadow-md mt-12 lg:mt-0 transition-opacity duration-500"
                >
                  {headings[currentHeadingIndex]}
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
                  value={serchingName}
                  type="text"
                  placeholder="Search for Startup Services..."
                  className="w-full p-4 pl-6 rounded-full border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setserchingName(e.target.value)}
                />
                <button className="absolute right-4 top-3 text-blue-500 hover:text-blue-700 text-2xl transition-transform duration-300 transform hover:scale-110">
                  🔍
                </button>
                {showSuggetion?.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2 max-h-60 overflow-auto">
                    {showSuggetion.map((item, index) => (
                      <li className='px-4 py-2 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200"'>
                        <Link
                          to={item.link}
                          key={index}
                          value={item}
                          className=""
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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



          </>
        )
      }




    </div>
  );
}

export default Herosection;





