import {useState, useEffect} from 'react';

const apiUrl = 'http://192.168.10.33:3001/person';

const useLoadMedia = () => {

  const [personArray, setPersonArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      console.log('loadMedia', json);
      setPersonArray(json);
      console.log('Just set the person array:', json)
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  return personArray;
};


export {
  useLoadMedia,
};
