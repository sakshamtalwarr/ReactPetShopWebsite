// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBktdMYiU0RWUkvX00QZJuFGr2dq5axoIk",
  authDomain: "abshappypaws.firebaseapp.com",
  projectId: "abshappypaws",
  storageBucket: "abshappypaws.firebasestorage.app",
  messagingSenderId: "76779593625",
 appId: "1:76779593625:web:cff4d21f5363473015fd08",
  measurementId: "G-RJ9YFVWR6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);