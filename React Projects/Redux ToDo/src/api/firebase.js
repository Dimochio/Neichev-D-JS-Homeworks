// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3_ohZWtZovEqySvVerQnFaY13a981MMM",
  authDomain: "todolist-4d470.firebaseapp.com",
  databaseURL: "https://todolist-4d470-default-rtdb.firebaseio.com",
  projectId: "todolist-4d470",
  storageBucket: "todolist-4d470.appspot.com",
  messagingSenderId: "779687883171",
  appId: "1:779687883171:web:4d2f59f9ca8311195e2a16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
