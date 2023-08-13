// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgSg5CuXX_KwwzY63_uCm3zRmESX5nTIs",
  authDomain: "chatapp-fc110.firebaseapp.com",
  projectId: "chatapp-fc110",
  storageBucket: "chatapp-fc110.appspot.com",
  messagingSenderId: "718106388134",
  appId: "1:718106388134:web:6203c3e5adc7001e9cf667",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app)
