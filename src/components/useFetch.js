import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
        console.log(result.data);
      } catch(e) {
        console.log(e);
        setError(e);
      } finally {
        setLoading(false);
      }

    };
 
    fetchData();
  }, []);

  return {data, loading, error};
}