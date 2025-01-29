// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE,
  authDomain: "mrazasoal.firebaseapp.com",
  databaseURL:
    "https://mrazasoal-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mrazasoal",
  storageBucket: "mrazasoal.firebasestorage.app",
  messagingSenderId: "530853246139",
  appId: "1:530853246139:web:d9bf22e42df23c5f5b659e",
  measurementId: "G-TT54DD374Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
