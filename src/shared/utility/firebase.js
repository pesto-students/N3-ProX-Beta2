import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// only for development purpure.

var firebaseConfig = {
  apiKey: "AIzaSyCVyO2JkjrmH5TcCneJK3TnhJBcavu0LaY",
  authDomain: "pro-x-2395c.firebaseapp.com",
  projectId: "pro-x-2395c",
  storageBucket: "pro-x-2395c.appspot.com",
  messagingSenderId: "991750913774",
  appId: "1:991750913774:web:48713e7aa25dfb94ea7dff",
  measurementId: "G-YMSHB4414Y",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
