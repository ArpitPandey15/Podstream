// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBldohg_hd_P-18V3wIJ7FH_lBRek9OOhQ",
  authDomain: "podstream-2c925.firebaseapp.com",
  projectId: "podstream-2c925",
  storageBucket: "podstream-2c925.firebasestorage.app",
  messagingSenderId: "939613612862",
  appId: "1:939613612862:web:e69b77cc10ba9f40709a6f",
  measurementId: "G-DDWRDY28LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;