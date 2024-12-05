import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DynamicRender from "../DynamicRender/DynamicRender";
import PagesData from "../../PagesData/Pages.json";

function DynamicPage() {
  const { urlName } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(PagesData);

  useEffect(() => {
    if (data && !data[urlName]) {
      navigate("/notFound"); // Redirect to your custom "notFound" page
    }
  }, [data, urlName, navigate]);

  const urlPageData = data ? data[urlName] : null;

  useEffect(() => {
    if (urlPageData) {
      document.title = `${urlPageData.title} | Solocorp`; // Dynamically set the page title
    }
  }, [urlPageData]);

  if (!urlPageData) {
    return null; // No need to render anything if the user is redirected
  }

  const pageTitle = urlPageData.title;
  const pageSections = urlPageData.sections;

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Page Content */}
      <div className="container mx-auto px-6 py-10 md:py-20">
        <DynamicRender sections={pageSections} pageTitle={pageTitle} />
      </div>
    </div>
  );
}

export default DynamicPage;
