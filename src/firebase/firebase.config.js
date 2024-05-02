
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-sMTGQp3pje8Xod7SV10UBQqHJoieStQ",
  authDomain: "car-doctor-bc785.firebaseapp.com",
  projectId: "car-doctor-bc785",
  storageBucket: "car-doctor-bc785.appspot.com",
  messagingSenderId: "871344274729",
  appId: "1:871344274729:web:aae6eb7596f4e7ff804b38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth