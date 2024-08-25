// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAna-cMbxc0fHHYYRTM5VL3qOtogGps9qo",
  authDomain: "seo-agency-19.firebaseapp.com",
  projectId: "seo-agency-19",
  storageBucket: "seo-agency-19.appspot.com",
  messagingSenderId: "665659357190",
  appId: "1:665659357190:web:d16d05b6c26d62915bab87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;