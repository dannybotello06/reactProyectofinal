// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJcTpJvCV_af34dXaskuRKr56aLI0ym2c",
    authDomain: "coderhouse-77485.firebaseapp.com",
    projectId: "coderhouse-77485",
    storageBucket: "coderhouse-77485.firebasestorage.app",
    messagingSenderId: "831282293263",
    appId: "1:831282293263:web:353849909c6725152e917a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)