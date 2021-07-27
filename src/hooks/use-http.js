import { useState, useCallback } from 'react';
import axios from 'axios';

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (url) => {
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
      applyData(data);
    },
    [applyData]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
