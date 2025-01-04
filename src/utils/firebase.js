// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXbunKnYKeca8PSdCAA6TRgZZNKZuFzAE",
  authDomain: "netflix-gpt-4f836.firebaseapp.com",
  projectId: "netflix-gpt-4f836",
  storageBucket: "netflix-gpt-4f836.firebasestorage.app",
  messagingSenderId: "278517980822",
  appId: "1:278517980822:web:d497fb018230f64c0f6cb7",
  measurementId: "G-378T2Q8BKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
