import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyALFh4jCup2zTepwneLNZY0km-g4kpjnko",
  authDomain: "clone-8d847.firebaseapp.com",
  projectId: "clone-8d847",
  storageBucket: "clone-8d847.appspot.com",
  messagingSenderId: "1004548790922",
  appId: "1:1004548790922:web:b8577bd3527b59bef02b73"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;