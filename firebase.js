// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1DAOfB6BLB2i1Ul2tislbe80ue96dT1E",
  authDomain: "gamified-dashboard-e926e.firebaseapp.com",
  projectId: "gamified-dashboard-e926e",
  storageBucket: "gamified-dashboard-e926e.firebasestorage.app",
  messagingSenderId: "146035228613",
  appId: "1:146035228613:web:281ef40e0db09c0cbd15ac",
  measurementId: "G-90060L720F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);