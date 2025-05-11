// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApWErPBl8zsxONKDgP2qvr96jFX5H8laE",
  authDomain: "modern-portfolio-2908.firebaseapp.com",
  projectId: "modern-portfolio-2908",
  storageBucket: "modern-portfolio-2908.firebasestorage.app", // ⚠️ Typo noted below
  messagingSenderId: "449414401665",
  appId: "1:449414401665:web:f14969334cb700acf98780",
  measurementId: "G-FT6YT5RN7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional if you don’t use it in code
const db = getFirestore(app); // Required for contact form

export { db, analytics };
