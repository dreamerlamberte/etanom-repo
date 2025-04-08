// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw1OkqJy_3SmCADLb0eFAF2qXEfJbO0z8",
  authDomain: "etanom-2328e.firebaseapp.com",
  projectId: "etanom-2328e",
  storageBucket: "etanom-2328e.firebasestorage.app",
  messagingSenderId: "829976503330",
  appId: "1:829976503330:web:00b429d506a16df674167b",
  measurementId: "G-XY45WQYZFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;