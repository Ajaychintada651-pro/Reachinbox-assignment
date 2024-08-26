import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJmgNCAxLdNxh3KusPKsCZK7jrmcNKc9M",
  authDomain: "reachin-box-assignment-5c974.firebaseapp.com",
  projectId: "reachin-box-assignment-5c974",
  storageBucket: "reachin-box-assignment-5c974.appspot.com",
  messagingSenderId: "397002169061",
  appId: "1:397002169061:web:d6672aacecec13b6e8520c",
  measurementId: "G-WER1YTH5EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Use named exports to export `auth` and `provider`
export { auth, provider };
