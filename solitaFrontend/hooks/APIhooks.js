import {useState, useEffect} from 'react';
import {HOST_WITH_PORT} from '../environment';

const apiUrl = HOST_WITH_PORT + "/person";

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl + 'media');
      const json = await response.json();
      console.log('loadMedia', json);
      setMediaArray(json);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return mediaArray;
};


export {
  useLoadMedia,
};
