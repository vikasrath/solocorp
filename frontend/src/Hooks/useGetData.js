import { useState, useEffect } from "react";
import axios from "axios";
import Pages from "../PagesData/Pages.json"

const useFetchPage = (page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/data/${page}`);        
        
        if (response.status == 200 && !response.data.message) {
          setData(response.data);
        }
      } catch (err) {
        console.log(err);
        
      } finally {
        setLoading(false);
      }
    };

    if (page) {
      fetchPageData();
    }
  }, [page]);

  return { data, loading };
};

export default useFetchPage;
