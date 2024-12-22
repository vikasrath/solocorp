import React from "react";
import Overview from "../../Components/DynamicComponents/Overview/Overview";
import Advantage from "../../Components/DynamicComponents/Advantage/Advantages";
import Disadvantages from "../../Components/DynamicComponents/Disadvantages/Disadvantages";
import StepsToRegistration from "../../Components/DynamicComponents/StepsToRegister/StepsToRegister";
import Registration from "../../Components/DynamicComponents/Registration/Registration";
import Eligibility from "../../Components/DynamicComponents/Eligibility/Eligibility";
import Intro from "../../Components/DynamicComponents/Intro/Intro";
import Law from "../../Components/DynamicComponents/Law/Law";
import Requirements from "../../Components/DynamicComponents/Requirements/Requirements";
import Importance from "../../Components/DynamicComponents/Importance/Importance";
import PostIncorporationFormalities from "../../Components/DynamicComponents/Post-Incorporation Formalities/Post-Incorporation Formalities";
import Characteristics from "../../Components/DynamicComponents/Characteristics/Characteristics";
import NameStructure from "../../Components/DynamicComponents/NameStructure/NameStructure";
import Types from "../../Components/DynamicComponents/Types/Types";
import BusinessActivities from "../../Components/DynamicComponents/BusinessActivities/BusinessActivities";
import Compliances from "../../Components/DynamicComponents/Compliance/Compliance";
import PartiesInvolved from "../../Components/DynamicComponents/PartiesInvolved/PartiesInvolved";
import ReasonsForRegistration from "../../Components/DynamicComponents/ReasonForRegisteration/ReasonForRegisteration";
import Activities from "../../Components/DynamicComponents/Activities/Activities";
import Common from "../../Components/DynamicComponents/Common/Common";
import Common2 from "../../Components/DynamicComponents/Common/Common2";
import Penalties from "../../Components/DynamicComponents/Penalties/Penalties";
import WhyChooseUs from "../../Components/DynamicComponents/WhyChoseUs/WhyChoseUs";
import Guidelines from "../../Components/DynamicComponents/Guidelines/Guidelines";
import DynamicTable from "../../Components/DynamicComponents/Table/DynamicTable";
import DynamicTable2 from "../../Components/DynamicComponents/Table/DynamicTable2";

const DynamicRender = ({ sections, pageTitle }) => {
    return (
        <div className="max-w-7xl mx-auto p-6 lg:p-10 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-100 transition-all">
            {/* Page Title */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold font-serif text-blue-600 dark:text-blue-400 mb-4">
                    {pageTitle}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                    Explore all the details you need about {pageTitle}, tailored for your business needs.
                </p>
                <div className="h-1 w-24 bg-blue-500 mx-auto rounded mt-4"></div>
            </div>

            {/* Dynamic Sections */}
            <div className="space-y-10">
                {sections.map((section, index) => {
                    switch (section.type) {
                        case "overview":
                            return <Overview key={index} content={section.content} />;
                        case "intro":
                            return <Intro key={index} content={section.content} />;
                        case "dynamicTable":
                            return <DynamicTable key={index} content={section.content} />;
                        case "dynamicTable2":
                            return <DynamicTable2 key={index} content={section.content} />;
                        case "requirements":
                            return <Requirements key={index} content={section.content} />;
                        case "law":
                            return <Law key={index} content={section.content} />;
                        case "advantages":
                            return <Advantage key={index} content={section.content} />;
                        case "benefits":
                            return <Advantage key={index} content={section.content} />;
                        case "disadvantages":
                            return <Disadvantages key={index} content={section.content} />;
                        case "registration":
                            return <Registration key={index} content={section.content} />;
                        case "stepsToRegister":
                            return <StepsToRegistration key={index} content={section.content} />;
                        case "eligibility":
                            return <Eligibility key={index} content={section.content} />;
                        case "importance":
                            return <Importance key={index} content={section.content} />;
                        case "postIncorporationFormalities":
                            return <PostIncorporationFormalities key={index} content={section.content} />;
                        case "characteristics":
                            return <Characteristics key={index} content={section.content} />;
                        case "nameStructure":
                            return <NameStructure key={index} content={section.content} />;
                        case "types":
                            return <Types key={index} content={section.content} />;
                        case "businessActivities":
                            return <BusinessActivities key={index} content={section.content} />;
                        case "penalties":
                            return <Penalties key={index} content={section.content} />;
                        case "compliance":
                            return <Compliances key={index} content={section.content} />;
                        case "partiesInvolved":
                            return <PartiesInvolved key={index} content={section.content} />;
                        case "reasonsForRegistration":
                            return <ReasonsForRegistration key={index} content={section.content} />;
                        case "activities":
                            return <Activities key={index} content={section.content} />;
                        case "whyChoseUs":
                            return <WhyChooseUs key={index} content={section.content} />;
                        case "common":
                            return <Common key={index} content={section.content} />;
                        case "guidelines":
                            return <Guidelines key={index} content={section.content} />;
                            case "common2":
                            return <Common2 key={index} content={section.content} />;
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};

export default DynamicRender;
