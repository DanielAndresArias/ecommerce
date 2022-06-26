import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDuJrAN6AQGGTtgdyAVVmzcefbcrUNh6_8",
  authDomain: "mantasxldeco.firebaseapp.com",
  projectId: "mantasxldeco",
  storageBucket: "mantasxldeco.appspot.com",
  messagingSenderId: "848597621135",
  appId: "1:848597621135:web:acf12f545a8e3d876a53fa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);