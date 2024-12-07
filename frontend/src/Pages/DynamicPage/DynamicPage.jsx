import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DynamicRender from "../DynamicRender/DynamicRender";
import useGetData from "../../Hooks/useGetData";
import Pages from '../../PagesData/Pages.json';

function DynamicPage() {
  const { urlName } = useParams();
  const [pageSections, setPageSections] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);


  const { data, loading, error } = useGetData(urlName);

  useEffect(() => {
    if (data) {
     
      setPageSections(data?.data?.sections);
      setPageTitle(data?.data?.title);
    } else {
      const pageData = Pages[urlName];
      if (pageData) {
        console.log(pageData);
        
        setPageSections(pageData.sections);
        setPageTitle(pageData.title);
      } 
    }
  }, [urlName]); 


  if (loading) {
    return <div>Loading...</div>;
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
