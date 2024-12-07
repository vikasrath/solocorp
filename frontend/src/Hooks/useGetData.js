import { useState, useEffect } from "react";
import axios from "axios";

const useGetData = (pageName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`api/data/${pageName}`);
        setData(response.data);
        if(response.status === 400){
          return
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (pageName) {
      fetchData();
    }
  }, [pageName]);

  return { data, loading, error };
};

export default useGetData;
