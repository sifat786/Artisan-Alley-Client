import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDZuT2YLfYdaSWPu7n1M7vG9Pm8ZWfIZ8",
  authDomain: "artisan-alley-cc33d.firebaseapp.com",
  projectId: "artisan-alley-cc33d",
  storageBucket: "artisan-alley-cc33d.appspot.com",
  messagingSenderId: "573050883374",
  appId: "1:573050883374:web:3f1f19c4be4473429d3ebf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;