// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0vQKvT3o3Kxe4GmiIoR3-Ny_N-6ejS2c",
  authDomain: "bike-pooling-app.firebaseapp.com",
  projectId: "bike-pooling-app",
  storageBucket: "bike-pooling-app.appspot.com",
  messagingSenderId: "799962549048",
  appId: "1:799962549048:web:f1e405e3bb85f438634fcd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
