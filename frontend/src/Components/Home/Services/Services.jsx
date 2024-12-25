import React from 'react';
import ServiceCard from './ServiceCard';
import tax from "../../../assets/Services/tax.png"
import gst from "../../../assets/Services/gst.png"
import finance from "../../../assets/Services/finnace.png"
import incorporation from "../../../assets/Services/incorporation.png"
import payroll from "../../../assets/Services/payroll.png"
import trademark from "../../../assets/Services/trademark.png"

function Services() {

  const serviceDetail = [
    {
      title: "Incorporation",
      description: "At Solocorp, we streamline company incorporation with expert guidance and simplified documentation, helping businesses launch quickly and focus on growth.",
      logo: incorporation
    },
    {
      title: "Trademark",
      description: "At Solocorp, we provide comprehensive trademark services to safeguard your brand, from registration to legal enforcement, ensuring ease and security.",
      logo: trademark
    },
    {
      title: "Accounting",
      description: "At Solocorp, we simplify accounting by offering expert solutions in tax filing, GST compliance, and financial management, ensuring accuracy and efficiency.",
      logo: finance
    },
    {
      title: "Income Tax",
      description: "At Solocorp, we offer expert solutions for income tax issues, ensuring compliance and maximizing deductions to optimize financial outcomes.",
      logo: tax
    },
    {
      title: "GST Services",
      description: "At Solocorp, we simplify GST compliance with tailored solutions for accurate filings, timely submissions, and strategic advice to navigate regulations effortlessly.",
      logo: gst
    },
    {
      title: "Payroll",
      description: "At Solocorp, we streamline payroll processes, ensuring accurate calculations, timely disbursements, and compliance with regulations, so you can focus on growing your business.",
      logo: payroll
    }
  ];

  return (
    <div className='w-full bg-gray-100 py-16'>
      {/* Section heading */}
      <h1 className='text-center text-2xl font-bold text-gray-800 mb-12'>
        Our Professional Services for Every Requirement
      </h1>

      {/* Service Cards Container */}
      <div className='flex flex-wrap justify-center gap-8 px-4'>
        {serviceDetail.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            logo={service.logo}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Services;
