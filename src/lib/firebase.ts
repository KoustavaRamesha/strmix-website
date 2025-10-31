// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1Ofsmy96pyAOCwqaF80QxQxTqT8pllzM",
  authDomain: "strmix-b2827.firebaseapp.com",
  projectId: "strmix-b2827",
  storageBucket: "strmix-b2827.firebasestorage.app",
  messagingSenderId: "801661416785",
  appId: "1:801661416785:web:0ab43d320e86874fdd8f70",
  measurementId: "G-MBW7D0WCCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };