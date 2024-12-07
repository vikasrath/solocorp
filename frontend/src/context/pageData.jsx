import React, { createContext, useState, useContext } from "react";

// Create a Context for the page data
const PageDataContext = createContext();

// Provider Component to wrap your app or component tree
export const PageDataProvider = ({ children }) => {
  const [pageData, setPageData] = useState(null);

  const updatePageData = (data) => {
    setPageData(data);
  };

  return (
    <PageDataContext.Provider value={{ pageData, updatePageData }}>
      {children}
    </PageDataContext.Provider>
  );
};

// Custom hook to use the PageDataContext
export const usePageData = () => {
  return useContext(PageDataContext);
};
