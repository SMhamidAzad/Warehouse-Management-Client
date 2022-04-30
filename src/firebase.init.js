// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyfK8g-h1tREBt0xDnSWL1JszjR57gkB4",
  authDomain: "tiles-warehouse-management.firebaseapp.com",
  projectId: "tiles-warehouse-management",
  storageBucket: "tiles-warehouse-management.appspot.com",
  messagingSenderId: "914406766365",
  appId: "1:914406766365:web:54fea43361fae608ce53f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;