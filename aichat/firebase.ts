import { getApp,getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXTMXgLjRMnkQ3PKo5Vaq5qYMLnyIH9vY",
  authDomain: "chatgpt-messenger-44132.firebaseapp.com",
  projectId: "chatgpt-messenger-44132",
  storageBucket: "chatgpt-messenger-44132.appspot.com",
  messagingSenderId: "292910840089",
  appId: "1:292910840089:web:11455f1f2f49e955ba2d88"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};