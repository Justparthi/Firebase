// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvYgQ3zvfp17W-GLgUXAgMT5Hbz-CRVfI",
  authDomain: "fir-react-9011b.firebaseapp.com",
  projectId: "fir-react-9011b",
  storageBucket: "fir-react-9011b.firebasestorage.app",
  messagingSenderId: "296748594382",
  appId: "1:296748594382:web:6cd94f3ad192cc27ab4c9f",
  measurementId: "G-V6CG60W4RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)