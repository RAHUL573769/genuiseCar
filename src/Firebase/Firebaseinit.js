// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
console.log(firebaseConfig);
// const firebaseConfig = {
//   apiKey: "AIzaSyC6ebCYS0n7iTbIN99Xe5wJXDiUOkWvHXk",
//   authDomain: "moduleno5814april.firebaseapp.com",
//   projectId: "moduleno5814april",
//   storageBucket: "moduleno5814april.appspot.com",
//   messagingSenderId: "544915288798",
//   appId: "1:544915288798:web:b13e76cde3b448605f484f",
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
