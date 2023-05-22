import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp01QSJoaAbAeM8r5RsdDHvIcnXyG5tzo",
  authDomain: "mochila-emergencia.firebaseapp.com",
  projectId: "mochila-emergencia",
  storageBucket: "mochila-emergencia.appspot.com",
  messagingSenderId: "113672562022",
  appId: "1:113672562022:web:f8b4c391bcf3aa375554a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);