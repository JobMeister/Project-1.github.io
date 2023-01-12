import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import {} from "./main";
import {} from "./createad";

const firebaseConfig = {
  apiKey: "AIzaSyDoC94Xlt0BHfsH_zLp8562xsKMW49mv8s",
  authDomain: "job-meister.firebaseapp.com",
  projectId: "job-meister",
  storageBucket: "job-meister.appspot.com",
  messagingSenderId: "51579629977",
  appId: "1:51579629977:web:eae8590655f4e102e2e308",
  measurementId: "G-W33GWTB6JB",
};
// init firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);
const auth = getAuth();

const logoutButton = document.querySelector('.logoutBtn')
  logoutButton.addEventListener('click', () => {
   signOut(auth)
      .then(() => {
       console.log('user signed out')
      //  location.href="index.html"
     })
     .catch(err => {
        console.log(err.message)
     })
  })

  onAuthStateChanged(auth,(user)=>{
   console.log("User status changed",user);
 })