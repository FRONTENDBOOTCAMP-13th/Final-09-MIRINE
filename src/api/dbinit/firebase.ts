import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZUt4-rv3FnFmRUubt_BgsEabNXly6DBY",
  authDomain: "mirine-6f89a.firebaseapp.com",
  projectId: "mirine-6f89a",
  storageBucket: "mirine-6f89a.firebasestorage.app",
  messagingSenderId: "556221761690",
  appId: "1:556221761690:web:ed2d8fcd5728d808e83723",
  measurementId: "G-G6WX5CFEZG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
