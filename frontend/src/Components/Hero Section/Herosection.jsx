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

    useEffect(() => {
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
                    <h2 className="font-extrabold mb-4 text-xl sm:text-4xl lg:text-5xl text-center leading-snug sm:leading-tight">
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
            </div>
        </div>
    );
}

export default Herosection;
