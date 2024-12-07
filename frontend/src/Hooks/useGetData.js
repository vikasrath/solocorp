import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { usePageData } from "../context/pageData";

const useFetchPage = (page) => {
  const { updatePageData } = usePageData()
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/data/${page}`);
        
        if (response.status === 200 && !response.data.message) {
          setData(response.data);
          updatePageData(response.data)
        } else {
          navigate("/notFound");
        }
      } catch (err) {
        console.log(err);
        navigate("/notFound");
      } finally {
        setLoading(false);
      }
    };

    if (page) {
      fetchPageData();
    }
  }, [page, navigate]);

  return { data, loading };
};

export default useFetchPage;
