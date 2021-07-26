import { useState } from 'react';
import axios from 'axios';

const useHttp = (url, applayData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);

    let data;
    try {
      const result = await axios.get(url);
      data = result.data;
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }

    setIsLoading(false);
    applayData(data);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
