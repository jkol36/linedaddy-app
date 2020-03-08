import * as firebase from 'firebase';
import * as Amplitude from 'expo-analytics-amplitude';



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCwjLM5My7SDBxp7_lHe58Zf04tXjFzQCU",
    authDomain: "line-daddy.firebaseapp.com",
    databaseURL: "https://line-daddy.firebaseio.com",
    projectId: "line-daddy",
    storageBucket: "line-daddy.appspot.com",
    messagingSenderId: "759218622721",
    appId: "1:759218622721:web:be65cb385da523cfa90b00",
    measurementId: "G-4NGR6ZVRG2"
  };
  const apiKey = '8fdbd06c63b6e97718ae6b07a6016bb5'

  Amplitude.initialize(apiKey)
  firebase.initializeApp(firebaseConfig);

