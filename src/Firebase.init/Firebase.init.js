import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHUOK3vNGI01X6BkwerZsPER0pBLI5p5M",
  authDomain: "social-verb-web.firebaseapp.com",
  projectId: "social-verb-web",
  storageBucket: "social-verb-web.firebasestorage.app",
  messagingSenderId: "178890011783",
  appId: "1:178890011783:web:c91e173387a51501693422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth 