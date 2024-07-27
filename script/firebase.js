 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCRloqnwy22XzqXWFHwaJlZJ-MpVIOvCTI",
   authDomain: "login-signup-form-765bf.firebaseapp.com",
   projectId: "login-signup-form-765bf",
   storageBucket: "login-signup-form-765bf.appspot.com",
   messagingSenderId: "824994244142",
   appId: "1:824994244142:web:5df39f9ea0b7a7184661bf"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword  };