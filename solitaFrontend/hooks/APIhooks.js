import {useState, useEffect} from 'react';

const apiUrl = 'http://192.168.10.33:3001/person';

const useLoadMedia = () => {
  const [personArray, setPersonArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      // console.log('loadMedia', media);
      // if (all) {
      //   console.log('all media', media);
      setPersonArray(json);
      console.log('Person array:', json)

      // } else {
      //   media = media.filter((item) => {
      //     return item.user_id == userId;
      //   });
      //   setMediaArray(media);
      // }
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
