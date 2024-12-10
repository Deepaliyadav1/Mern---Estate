// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f1c40.firebaseapp.com",
  projectId: "mern-estate-f1c40",
  storageBucket: "mern-estate-f1c40.firebasestorage.app",
  messagingSenderId: "667413767249",
  appId: "1:667413767249:web:1e0eac5058b5b1311f4470"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);