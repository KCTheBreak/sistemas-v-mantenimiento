import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBS4WuJnuVurUvsZgkXxHFZdxrmtP88PGs",
  authDomain: "sistemas-v-be06f.firebaseapp.com",
  projectId: "sistemas-v-be06f",
  storageBucket: "sistemas-v-be06f.firebasestorage.app",
  messagingSenderId: "573563511150",
  appId: "1:573563511150:web:b53677d9bc10e348cf217f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
