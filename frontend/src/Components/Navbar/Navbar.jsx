import React from 'react';

const navLinks = [
  {
    title: "Startup",
    subLinks: [
      { title: "Proprietorship", link: "/proprietorship" },
      { title: "Partnership", link: "/partnership" },
      { title: "One Person Company", link: "/onePersonCompany" },
      { title: "Limited Liability Partnership", link: "/limitedLiabilityPartnership" },
      { title: "Private Limited Comapny", link: "/privateLimitedComapny" },
      { title: "Section 8 Company", link: "/section8Company" },
      { title: "Trust Registeration", link: "/trustRegisteration" },
      { title: "Public Limited Company", link: "/publicLimitedCompany" },
      { title: "Producer Company", link: "/producerCompany" },
      { title: "MCA Name Approval", link: "/MCANameApproval" },
      { title: "Indian Subsidiary", link: "/indianSubsidiary" },
    ]
  },
  {
    title: "Registrations",
    subLinks: [
      { title: "Startup India", link: "/StartupIndia" },
      { title: "Trade License", link: "/tradeLicense" },
      { title: "FSSAI Registration", link: "/FSSAIRegistration" },
      { title: "FSSAI License", link: "/FSSAILicense" },
      { title: "Halal License & Certificate", link: "/halalLicenseAndCertificate" },
      { title: "ICEGATE Registeration", link: "/ICEGATERegisteration" },
      { title: "Import Export Code", link: "/importExportCode" },
      { title: "Legal Identity Identifier Card", link: "/legalIdentityIdentifierCard" },
      { title: "ISO Registeration", link: "/ISORegisteration" },
      { title: "PF Registration", link: "/PFRegistration" },
      { title: "ESI Registration", link: "/ESIRegistration" },
      { title: "Professional Tax Registration", link: "/professionalTaxRegistration" },
      { title: "RCMC Registration", link: "/RCMCRegistration" },
    ]
  },
  {
    title: "Trademark",
    subLinks: [
      { title: "Trademark Registration", link: "/trademarkRegistration" },
      { title: "Trademark Search", link: "/trademarkSearch" },
      { title: "Trademark Objection", link: "/trademarkObjection" },
      { title: "Trademark Certificate", link: "/trademarkCertificate" },
    ]
  },
  {
    title: "Income Tax",
    subLinks: [
      { title: "Income Tax E-Filing", link: "/incomeTaxEFiling" },
      { title: "businessTaxFiling", link: "/businessTaxFiling" },
      { title: "ITR-1 Return Filing", link: "/ITR1ReturnFiling" },
      { title: "ITR-2 Return Filing", link: "/ITR2ReturnFiling" },
    ]
  }
];

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex space-x-4">
        {navLinks.map((item) => (
          <div className="relative group" key={item.title}>
            <button className="px-4 py-2">{item.title}</button>
            <div className="absolute left-0 hidden bg-gray-700 text-white group-hover:block w-48 mt-2 p-2 rounded-lg z-50">
              {item.subLinks.map((subLink) => (
                <a
                  href={subLink.link}
                  key={subLink.title}
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  {subLink.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
