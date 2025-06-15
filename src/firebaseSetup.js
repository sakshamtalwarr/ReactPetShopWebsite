// src/firebaseSetup.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBktdMYiU0RWUkvX00QZJuFGr2dq5axoIk",
  authDomain: "abshappypaws.firebaseapp.com",
  projectId: "abshappypaws",
  storageBucket: "abshappypaws.firebasestorage.app",
  messagingSenderId: "76779593625",
  appId: "1:76779593625:web:cff4d21f5363473015fd08",
  measurementId: "G-RJ9YFVWR6J"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Required by App.js
const initializeAuth = async () => {
  try {
    await signInAnonymously(auth);
    console.log("Signed in anonymously");
  } catch (error) {
    console.error("Anonymous sign-in failed:", error);
  }
};
// already present


const appId = firebaseConfig.appId;

// ✅ Export exactly what App.js expects
export { auth, db, initializeAuth, onAuthStateChanged, appId };
