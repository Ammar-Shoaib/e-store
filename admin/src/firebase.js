// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk9T-d6fNHcGhrzElxyz6F3iZChosVIRs",
    authDomain: "shop-1438e.firebaseapp.com",
    projectId: "shop-1438e",
    storageBucket: "shop-1438e.appspot.com",
    messagingSenderId: "695034252228",
    appId: "1:695034252228:web:5403a74947028470087291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app