import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtaca8d8rOrLcUO4lVEH4jzP2iY32dUcw",
  authDomain: "simple-blog-8365f.firebaseapp.com",
  projectId: "simple-blog-8365f",
  storageBucket: "simple-blog-8365f.appspot.com",
  messagingSenderId: "554544841722",
  appId: "1:554544841722:web:6b0c6671d425866c6e1a43",
  measurementId: "G-MZ62ZKG9XL"
};

firebase.initializeApp(firebaseConfig)

export default firebase;