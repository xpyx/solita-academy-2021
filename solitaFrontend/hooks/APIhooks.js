import {useState, useEffect, useContext} from 'react';
import AppContext from "../contexts/AppContext";


const apiUrl = 'http://192.168.10.33:3001/person';

const useLoadMedia = () => {

  const [setting1value, setSetting1value] = useContext(AppContext);
  const [personArray, setPersonArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setSetting1value(json);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  // return personArray;
};

export {
  useLoadMedia,
};
