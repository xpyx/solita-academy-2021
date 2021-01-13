'use strict'

import {useState, useEffect} from 'react';
import {HOST_WITH_PORT} from '../environment';
import axios from 'axios';

const apiUrl = HOST_WITH_PORT + "/person";



const loadNextImage = async () => {

  try {
    axios.defaults.headers.common['x-api-key'] = process.env.api_key // Replace this with your API Key

    let response = await axios.get('https://api.thecatapi.com/v1/images/search', {params: {limit: 1, size: "full"}}) // Ask for 1 Image, at full resolution

    let image = response.data[0] // the response is an Array, so just use the first item as the Image

    console.log("-- Image from TheCatAPI.com")
    console.log("id:", image.id)
    console.log("url:", image.url)

    return image.url

  } catch (err) {
    console.log(err)
  }

};

const loadNextImage = async () => {
  try {
    const response = await fetch(apiUrl + 'tags/avatar_641');
    const avatarImages = await response.json();
    if (response.ok) {
      return avatarImages;
    } else {
      throw new Error(avatarImages.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};



export {
  loadNextImage,
};
