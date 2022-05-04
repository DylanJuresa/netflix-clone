import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBPLcLGFMmS7Sa-QyCvWPy5exgkwDgPHHY",
  authDomain: "netflix-clone-405c0.firebaseapp.com",
  projectId: "netflix-clone-405c0",
  storageBucket: "netflix-clone-405c0.appspot.com",
  messagingSenderId: "209459400068",
  appId: "1:209459400068:web:1665d24851bd0724fa21d1",
  measurementId: "G-VPX0FBGVQ1"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth()

export { auth };
