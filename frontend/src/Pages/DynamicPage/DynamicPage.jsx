import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DynamicRender from "../DynamicRender/DynamicRender";
import useGetData from "../../Hooks/useGetData";

function DynamicPage() {
  const { urlName } = useParams();
  const [pageSections, setPageSections] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);

  const { data, loading } = useGetData(urlName);
  

  useEffect(() => {
    if (data) {
      
      setPageSections(data.sections);
      setPageTitle(data.title);
    }
  }, [data, urlName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pageSections) {
    return <div>Page not found</div>;
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Page Content */}
      <div className="container mx-auto px-3 py-5 md:py-10">
        <DynamicRender sections={pageSections} pageTitle={pageTitle} />
      </div>
    </div>
  );
}

export default DynamicPage;
