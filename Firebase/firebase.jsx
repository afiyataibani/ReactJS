// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBE9KZTX4ekVvC4EZH-Zo2ULQXe5yIIfs",
  authDomain: "test-1b415.firebaseapp.com",
  projectId: "test-1b415",
  storageBucket: "test-1b415.firebasestorage.app",
  messagingSenderId: "139925714955",
  appId: "1:139925714955:web:ebd39d200b9b271468af0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFire = getFirestore(app);
export const auth = getAuth(app);
