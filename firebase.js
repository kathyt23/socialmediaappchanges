// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmhw3G-Bt3g6J0R_01HG5Te_Cf90XqC6k",
  authDomain: "todulu-database.firebaseapp.com",
  projectId: "todulu-database",
  storageBucket: "todulu-database.appspot.com",
  messagingSenderId: "1012942701628",
  appId: "1:1012942701628:web:bcec084c0417e0dd63ef39",
  measurementId: "G-THZHHEGMTC"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0)
{
  app = initializeApp(firebaseConfig);
}
else
{
  app =  firebase.auth()
}
const auth = firebase.auth(app);
export { auth };