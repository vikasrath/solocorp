import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DynamicRender from "../DynamicRender/DynamicRender";
import useGetData from "../../Hooks/useGetData";

function DynamicPage() {
  const { urlName } = useParams();
  const navigate = useNavigate();
  const [pageSections, setPageSections] = useState(null); 
  const [pageTitle, setPageTitle] = useState(null); 

  const { data, loading, error } = useGetData(urlName);

  useEffect(() => {
    if (data) {
      console.log(data?.data?.sections); 
      setPageSections(data?.data?.sections);
      setPageTitle(data?.data?.title);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading page data</div>;
  }

  if (!pageSections) {
    return <div>Page not found</div>;
  }

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
