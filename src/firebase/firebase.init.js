// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey=import.meta.env.VITE_apiKey
const authDomain=import.meta.env.VITE_authDomain
const projectId=import.meta.env.VITE_projectId
const storageBucket=import.meta.env.VITE_storageBucket
const apimessagingSenderIdKey=import.meta.env.VITE_messagingSenderId
const appId=import.meta.env.VITE_appId


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:{apiKey},
  authDomain: {authDomain},
  projectId: {projectId},
  storageBucket: {storageBucket},
  messagingSenderId:{apimessagingSenderIdKey} ,
  appId: {appId}
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app