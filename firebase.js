import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA_7NBHBqCy9sPk-smZR8cKqYBfHPBrATc",
  authDomain: "netflix-clone-ab64a.firebaseapp.com",
  projectId: "netflix-clone-ab64a",
  storageBucket: "netflix-clone-ab64a.firebasestorage.app",
  messagingSenderId: "160832257419",
  appId: "1:160832257419:web:de120d22e8ac1831ed438e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (email, name, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      email,
      name,
      authProvider: "local",
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1]);
  }
};

const login = async (email, password) => {
  try {
    let s = await signInWithEmailAndPassword(auth, email, password);
    console.log(s);
    console.log("loged in herhhe");
    // toast.success("Login successfull");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1]);
  }
};

const logout = () => {
  signOut(auth);
  // toast.success("Logout successfull");
};

export { auth, db, login, signup, logout };
