import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "xyzp-153f7.firebaseapp.com",
  projectId: "xyzp-153f7",
  storageBucket: "xyzp-153f7.firebasestorage.app",
  messagingSenderId: "623432545347",
  appId: "1:623432545347:web:6dc0582cc840e7b92510f6",
  measurementId: "G-DPQ3M0NT1Z"
};

export const app = initializeApp(firebaseConfig);