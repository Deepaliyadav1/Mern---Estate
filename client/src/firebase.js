// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "real-mern-estate-26862.firebaseapp.com",
//   projectId: "real-mern-estate-26862",
//   storageBucket: "real-mern-estate-26862.firebasestorage.app",
//   messagingSenderId: "148745153329",
//   appId: "1:148745153329:web:796c6a2cbd1288bc871e10"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vibes-19ea6.firebaseapp.com",
  // databaseURL: "https://vibes-19ea6-default-rtdb.firebaseio.com",
  projectId: "vibes-19ea6",
  storageBucket: "vibes-19ea6.firebasestorage.app",
  messagingSenderId: "155010211731",
  appId: "1:155010211731:web:b7723823b3bb4d20ef9266",
  // measurementId: "G-ZM4ZL48RPF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);