import {useState, useEffect, useContext} from 'react';
import AppContext from "../contexts/AppContext";

//const apiUrl = 'http://192.168.10.33:3001/person';
const apiUrl = 'http://localhost:3001/person';

const useLoadPersons = () => {

  const [personArray, setPersonArray] = useContext(AppContext);

  const loadPersons = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setPersonArray(json);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    loadPersons();
  }, []);
};

export {
  useLoadPersons,
};
