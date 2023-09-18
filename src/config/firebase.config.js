// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtSwIKEzP7IDu5xP_stAoXu9U0MnG7UPk",
  authDomain: "authenticated-poc.firebaseapp.com",
  projectId: "authenticated-poc",
  storageBucket: "authenticated-poc.appspot.com",
  messagingSenderId: "674895803564",
  appId: "1:674895803564:web:ad612155bf5a524ac69b09",
  measurementId: "G-SZ3NE4C3X2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
setPersistence(auth, browserSessionPersistence);

export { app, analytics, auth, googleProvider, firebaseConfig };
